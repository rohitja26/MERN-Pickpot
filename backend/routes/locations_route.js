const express = require("express");

const picUpload = require("../picUpload");
const locationController = require("../controllers/location_controller");
const location_router = express.Router();

location_router.get("/:locid", locationController.getLocationByLocId);

location_router.get("/users/:uid", locationController.getLocationByUserId);

location_router.post(
  "/",
  picUpload.single("pic"),
  locationController.createNewLocation
);

location_router.delete("/:locid", locationController.deleteLocation);

module.exports = location_router;
