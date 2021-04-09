const express = require('express');

const ApplicationDetails = require('../models/ApplicationDetails');
const InternshipDetails = require('../models/InternshipDetails');
const TutorProfileDetails = require('../models/TutorProfileDetails');
const EmployeeProfileDetails = require('../models/EmployeeProfileDetails');
const EmployerProfileDetails = require('../models/EmployerProfileDetails');
const CourseDetails = require('../models/CourseDetails');
const CourseRegistrationDetails = require('../models/CourseRegistrationDetails');

const router = express.Router();

//Routes
router.get('/ApplicationDetails',(req,res) => {
    
    ApplicationDetails.find({ })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ',daerrorta);
        });

})

router.post('/saveApplicationDetails',(req,res) => {
    const data = req.body;
    const newApplicationDetails =  new ApplicationDetails(data);
    newApplicationDetails.save((error) => {
        if(error) {
            res.status(500).json({msg: 'Sorry, Internal server error'});
            return;
        }
        return res.json({
            msg: 'Your data has been received'
        });
    });

});

router.get('/InternshipDetails',(req,res) => {
    
    InternshipDetails.find({ })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ',daerrorta);
        });

})

router.post('/saveInternshipDetails',(req,res) => {
    const data = req.body;
    const newInternshipDetails =  new InternshipDetails(data);
    newInternshipDetails.save((error) => {
        if(error) {
            res.status(500).json({msg: 'Sorry, Internal server error'});
            return;
        }
        return res.json({
            msg: 'Your data has been received'
        });
    });

});

router.get('/CourseDetails',(req,res) => {
    
    CourseDetails.find({ })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ',daerrorta);
        });

})

router.post('/saveCourseDetails',(req,res) => {
    const data = req.body;
    const newCourseDetails =  new CourseDetails(data);
    newCourseDetails.save((error) => {
        if(error) {
            res.status(500).json({msg: 'Sorry, Internal server error'});
            return;
        }
        return res.json({
            msg: 'Your data has been received'
        });
    });

});

router.get('/CourseRegistrationDetails',(req,res) => {
    
    CourseRegistrationDetails.find({ })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ',daerrorta);
        });

})

router.post('/saveCourseRegistrationDetails',(req,res) => {
    const data = req.body;
    const newCourseRegistrationDetails =  new CourseRegistrationDetails(data);
    newCourseRegistrationDetails.save((error) => {
        if(error) {
            res.status(500).json({msg: 'Sorry, Internal server error'});
            return;
        }
        return res.json({
            msg: 'Your data has been received'
        });
    });

});

router.get('/TutorProfileDetails',(req,res) => {
    
    TutorProfileDetails.find({ })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ',daerrorta);
        });

})

router.post('/saveTutorProfileDetails',(req,res) => {
    const data = req.body;
    const newTutorProfileDetails =  new TutorProfileDetails(data);
    newTutorProfileDetails.save((error) => {
        if(error) {
            res.status(500).json({msg: 'Sorry, Internal server error'});
            return;
        }
        return res.json({
            msg: 'Your data has been received'
        });
    });

});

router.get('/EmployeeProfileDetails',(req,res) => {
    
    EmployeeProfileDetails.find({ })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ',daerrorta);
        });

})

router.post('/saveEmployeeProfileDetails',(req,res) => {
    const data = req.body;
    const newEmployeeProfileDetails =  new EmployeeProfileDetails(data);
    newEmployeeProfileDetails.save((error) => {
        if(error) {
            res.status(500).json({msg: 'Sorry, Internal server error'});
            return;
        }
        return res.json({
            msg: 'Your data has been received'
        });
    });

});

router.get('/EmployerProfileDetails',(req,res) => {
    
    EmployerProfileDetails.find({ })
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ',daerrorta);
        });

})

router.post('/saveEmployerProfileDetails',(req,res) => {
    const data = req.body;
    const newEmployerProfileDetails =  new EmployerProfileDetails(data);
    newEmployerProfileDetails.save((error) => {
        if(error) {
            res.status(500).json({msg: 'Sorry, Internal server error'});
            return;
        }
        return res.json({
            msg: 'Your data has been received'
        });
    });

});

router.get('/name',(req,res) => {
    const data = {
        username:'teju',
        age:21
    }
    res.json(data);
})

module.exports = router;