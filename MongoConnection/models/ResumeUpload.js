const mongoose = require('mongoose');

//Schema
const Schema = mongoose.Schema;
const ResumeUploadSchema = new Schema({
    ResumeLink: String,
    ApplicantDetails: {},
    date: {
        type: String,
        default: Date.now()
    }
});

//Model
const ResumeUpload = mongoose.model('ResumeUpload',ResumeUploadSchema);

module.exports = ResumeUpload;