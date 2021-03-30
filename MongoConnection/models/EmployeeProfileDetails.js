const mongoose = require('mongoose');

//Schema
const Schema = mongoose.Schema;
const EmployeeProfileDetailsSchema = new Schema({
    name: String,
    email: String,
    password: String,
    confirmPassword: String,
    age: Number
});

//Model
const EmployeeProfileDetails = mongoose.model('EmployeeProfileDetails',EmployeeProfileDetailsSchema);

module.exports = EmployeeProfileDetails;