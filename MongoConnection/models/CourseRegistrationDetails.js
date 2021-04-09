const mongoose = require('mongoose');

//Schema
const Schema = mongoose.Schema;
const CourseRegistrationDetailsSchema = new Schema({
    DetailsInfo: {},
    ApplicantDetails: {},
    date: {
        type: String,
        default: Date.now()
    }
});

//Model
const CourseRegistrationDetails = mongoose.model('CourseRegistrationDetails',CourseRegistrationDetailsSchema);

module.exports = CourseRegistrationDetails;