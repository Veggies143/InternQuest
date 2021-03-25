const mongoose = require('mongoose');

//Schema
const Schema = mongoose.Schema;
const InternshipDetailsSchema = new Schema({
    CompanyName: String,
    JobRole: String,
    Duration: Number,
    Period: String,
    AboutCompany: String,
    JobDescription: String,
    SkillsRequired: String,
    Benefits: String,
    Stipend: Number,
    date: {
        type: String,
        default: Date.now()
    }
});

//Model
const InternshipDetails = mongoose.model('InternshipDetails',InternshipDetailsSchema);

module.exports = InternshipDetails;