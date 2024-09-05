const MyError = require("../model/error");
const User = require("../model/user");

exports.getUsers = async (req, res, next) => {
  let all_users;
  try {
    all_users = await User.find({}, "-password");
  } catch (err) {
    return next(new MyError("Database error: Cannot get users", 500));
  }

  res.status(200).json({ result: "success", message: all_users });
};

exports.register = async (req, res, next) => {
  const { name, email, password } = req.body;
  let findUser;
  try {
    findUser = await User.findOne({ email: email });
  } catch (err) {
    return next(new MyError("Database Error: Something bad happened", 500));
  }

  if (findUser) {
    return next(new MyError("Email already exists", 422));
  }
  const newuser = new User({
    name,
    email,
    pic: "https://picsum.photos/200",
    password,
    locationsid: [],
  });

  try {
    await newuser.save();
  } catch (err) {
    return next(new MyError("Database Error: Cannot register:" + err, 500));
  }
  //ALL_USERS.push(newuser);
  res.status(201).json({ result: "success", message: newuser });
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  let findUser;
  try {
    findUser = await User.findOne({ email: email });
  } catch (err) {
    return next(new MyError("Database Error: Something bad happened", 500));
  }
  // const findUser = ALL_USERS.find((user) => {
  //   return user.email === email;
  // });

  if (!findUser || findUser.password !== password) {
    return next(new MyError("Email or password not found", 401));
  }
  res.status(200).json({ result: "success", message: findUser });
};
