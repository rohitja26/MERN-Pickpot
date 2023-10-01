const multer = require("multer");

const picUpload = multer({
  limits: 200000,
  storage: multer.diskStorage({
    destination: (req, res, cb) => {
      cb(null, "uploads/users");
    },
    filename: (req, file, cb) => {
      cb(
        null,
        `${req.body.userid}-${req.body.title}-${Math.trunc(
          Math.random() * 100
        )}).${file.mimetype.split("/")[1]}`
      );
    },
  }),
});

module.exports = picUpload;
