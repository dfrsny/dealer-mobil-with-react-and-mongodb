const mongoose = require ( 'mongoose');

const carSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    coverImage:{
        type:String,
        required:true,
    }
}, {
    timestamps : true,
});

const News = mongoose.model ('News', carSchema);
module.exports = News;