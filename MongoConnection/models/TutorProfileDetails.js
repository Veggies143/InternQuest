const mongoose = require('mongoose');

//Schema
const Schema = mongoose.Schema;
const TutorProfileDetailsSchema = new Schema({
    name: String,
    email: String,
    password: String,
    confirmPassword: String,
    phoneNo: Number
});

//Model
const TutorProfileDetails = mongoose.model('TutorProfileDetails',TutorProfileDetailsSchema);

module.exports = TutorProfileDetails;