const mongoose = require('mongoose');
const { Schema } = mongoose;

const dataSchema = new Schema({
    id: { type: Number },
    title: { type: String },
    likes: {
        type: Number,
    },
    categories: {
        type: String
    },
    content: { type: String },
    desc: { type: String },
    imagelink: { type: String },
    timestamp : {
        type: Date,
        default : Date.now
    }
});

const Data = mongoose.model('data', dataSchema);
module.exports = Data;