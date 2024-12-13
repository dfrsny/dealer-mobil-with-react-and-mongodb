const News = require("./news.model");

const postANews = async (req, res) => {
    try {
        const newNews = await News({...req.body});
        await newNews.save();
        res.status(200).send({message:"Mobil Berhadil Ditambahkan", news: newNews})
    } catch (error){
        console.log("Error menambahkan mobil", error);
        res.status(500).send({message:"Mobil gagal Ditambahkan"})
    }
}

// get all news
const getAllNews = async (req, res) => {
    try {
        const news = await News.find().sort({createdAt: -1});
        res.status(200).send(news)
    } catch (error) {
        console.log("Error Memuat mobil", error);
        res.status(500).send({message:"Mobil gagal Dimuat"})
    }
}

const getSingleNews = async (req, res) => {
    try {
        const {id} = req.params;
        const news = await News.findById(id);
        if(!news) {
            res.status(404).send({message: "Mobil Tidak Ditemukan"})
        }
        res.status(200).send(news)
    } catch (error) {
        console.log("Error Memuat mobil", error);
        res.status(500).send({message:"Mobil gagal Dimuat"})
    }
}

// update news
const updateANews = async (req, res) => {
    try {
        const {id} = req.params;
        const updateNews = await News.findByIdAndUpdate(id, req.body, {new: true});
        if (!updateNews) {
            res.status(404).send({message: "Mobil Tidak Ditemukan"})
        }
        res.status(200).send({
            message: "Mobil telah Berhasil Diupdate",
            news: updateNews
        })
    } catch (error) {
        console.log("Error Memuat mobil", error);
        res.status(500).send({message:"Mobil gagal Dimuat"})
    }
}

const deleteANews = async (req, res) => {
    try {
        const {id} = req.params;
        const deleteNews = await News.findByIdAndDelete(id);
        if(!deleteNews) {
            res.status(404).send({message: "Mobil Tidak Ditemukan"})
        }
        res.status(200).send({
            message: "Mobil Telah Berhasil Dihapus",
            book: deleteNews
        })
    } catch (error) {
        console.log("Error Menghapus mobil", error);
        res.status(500).send({message:"Mobil gagal Dihapus"})
    } 
}

module.exports = {
    postANews,
    getAllNews,
    getSingleNews,
    updateANews,
    deleteANews
}