const express = require('express')
const Car = require('./car.model');
const { postACar, getAllCars, getSingleCar, updateACar, deleteACar } = require('./car.controller');
const router = express.Router();



// frontend routes

router.post("/create-car", postACar)

router.get("/", getAllCars)

router.get("/:id", getSingleCar)

router.put("/edit/:id", updateACar)

router.delete("/:id", deleteACar)

module.exports = router;