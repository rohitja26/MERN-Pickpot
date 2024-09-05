const MyError = require("../model/error");
const Location = require("../model/location");

exports.getLocationByLocId = async (req, res, next) => {
  const locid = req.params.locid; // get locid from the url
  let location;
  try {
    location = await Location.findById(locid);
  } catch (err) {
    return next(
      new MyError("Database error: Cannot find locations on this id", 500)
    );
  }

  if (!location) {
    return next(new MyError("Cannot find location of this locid", 404));
  }

  res.status(200).json({ result: "success", message: location });
};

exports.getLocationByUserId = async (req, res, next) => {
  const uid = req.params.uid; // Get uid from the URL  

  // Input validation  
  if (!uid) {
    return next(new MyError("User ID is required", 400));
  }


  let locations;
  try {
    locations = await Location.find({ userid: uid });

    // Check if locations were found  
    if (!locations || locations.length === 0) {
      return res.status(404).json({ message: "No locations found for this user." });
    }

    // Send successful response  
    return res.status(200).json({ message: locations });
  } catch (err) {
    console.error(err); // Log the error for debugging  
    return next(new MyError("Database error: Cannot find locations", 500));
  }
};

exports.createNewLocation = async (req, res, next) => {
  const { title, desc, address, userid } = req.body;
  const newlocation = new Location({
    title,
    desc,
    pic: req.file.path,
    address,
    userid,
  });
  try {
    await newlocation.save();
  } catch (err) {
    return next(
      new MyError("Database error: Cannot add location: " + err, 500)
    );
  }


  res.status(201).json({ result: "success", message: newlocation });
};

exports.deleteLocation = async (req, res, next) => {
  const locid = req.params.locid; // get locid from the url
  let location;

  try {
    location = await Location.findByIdAndDelete(locid);
  } catch (err) {
    return next(new MyError("Database error: Cannot delete location", 500));
  }

  res.status(200).json({ result: "success", message: "location deleted" });
};
