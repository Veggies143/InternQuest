const mongoose = require('mongoose');

//Schema
const Schema = mongoose.Schema;
const EmployerProfileDetailsSchema = new Schema({
    name: String,
    companyName: String,
    email: String,
    password: String,
    confirmPassword: String,
    phoneNo: Number
});

//Model
const EmployerProfileDetails = mongoose.model('EmployerProfileDetails',EmployerProfileDetailsSchema);

module.exports = EmployerProfileDetails;