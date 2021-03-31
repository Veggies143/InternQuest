const mongoose = require('mongoose');

//Schema
const Schema = mongoose.Schema;
const CourseDetailsSchema = new Schema({
    Name: String,
    CourseOffered: String,
    Duration: Number,
    Period: String,
    AboutYourself: String,
    CourseDescription: String,
    Benefits: String,
    Fees: Number,
    date: {
        type: String,
        default: Date.now()
    }
});

//Model
const CourseDetails = mongoose.model('CourseDetails',CourseDetailsSchema);

module.exports = CourseDetails;