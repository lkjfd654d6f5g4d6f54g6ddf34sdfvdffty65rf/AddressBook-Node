const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    name: {
        type: String,
        required: true,
        default: null
    },
    phone: {
        type: String,
        required: true,
        default: null
    },
    createdBy: {
        type: String,
        required: false,
        default: null,
    },
    createdOn: {
        type: String,
        required: true,
        default: null
    },
    updatedOn: {
        type: String,
        required: true,
        default: null
    }
})

module.exports = mongoose.model('contact', contactSchema);