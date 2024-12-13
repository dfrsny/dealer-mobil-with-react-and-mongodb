const Car = require("./car.model");

const postACar = async (req, res) => {
    try {
        const newCar = await Car({...req.body});
        await newCar.save();
        res.status(200).send({message:"Mobil Berhadil Ditambahkan", car: newCar})
    } catch (error){
        console.log("Error menambahkan mobil", error);
        res.status(500).send({message:"Mobil gagal Ditambahkan"})
    }
}

// get all car
const getAllCars = async (req, res) => {
    try {
        const cars = await Car.find().sort({createdAt: -1});
        res.status(200).send(cars)
    } catch (error) {
        console.log("Error Memuat mobil", error);
        res.status(500).send({message:"Mobil gagal Dimuat"})
    }
}

const getSingleCar = async (req, res) => {
    try {
        const {id} = req.params;
        const car = await Car.findById(id);
        if(!car) {
            res.status(404).send({message: "Mobil Tidak Ditemukan"})
        }
        res.status(200).send(car)
    } catch (error) {
        console.log("Error Memuat mobil", error);
        res.status(500).send({message:"Mobil gagal Dimuat"})
    }
}

// update car
const updateACar = async (req, res) => {
    try {
        const {id} = req.params;
        const updateCar = await Car.findByIdAndUpdate(id, req.body, {new: true});
        if (!updateCar) {
            res.status(404).send({message: "Mobil Tidak Ditemukan"})
        }
        res.status(200).send({
            message: "Mobil telah Berhasil Diupdate",
            car: updateCar
        })
    } catch (error) {
        console.log("Error Memuat mobil", error);
        res.status(500).send({message:"Mobil gagal Dimuat"})
    }
}

const deleteACar = async (req, res) => {
    try {
        const {id} = req.params;
        const deleteCar = await Car.findByIdAndDelete(id);
        if(!deleteCar) {
            res.status(404).send({message: "Mobil Tidak Ditemukan"})
        }
        res.status(200).send({
            message: "Mobil Telah Berhasil Dihapus",
            book: deleteCar
        })
    } catch (error) {
        console.log("Error Menghapus mobil", error);
        res.status(500).send({message:"Mobil gagal Dihapus"})
    } 
}

module.exports = {
    postACar,
    getAllCars,
    getSingleCar,
    updateACar,
    deleteACar
}