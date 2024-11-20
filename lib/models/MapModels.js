import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    judul: {
        type: String,
        required: true
    },
    deskripsi: {
        type: String,
        required: true
    },
    penulis: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    gambar: {
        type: String,
        required: true
    },
    fotopenulis: {
        type: String,
        required: true
    },
    tanggal: {
        type: Date,
        default: Date.now()
    }
});


const MapModels = mongoose.models.map || mongoose.model('map',Schema);

export default MapModels;