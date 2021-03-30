const express = require('express');

const ApplicationDetails = require('../models/ApplicationDetails');
const InternshipDetails = require('../models/InternshipDetails');
const TutorProfileDetails = require('../models/TutorProfileDetails');
const EmployeeProfileDetails = require('../models/EmployeeProfileDetails');
const EmployerProfileDetails = require('../models/EmployerProfileDetails');

const router = express.Router();

//Routes
router.get('/ApplicationDetails',(req,res) => {
    
    ApplicationDetails.find({ })
        .then((data) => {
            console.log('Data: ',data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ',daerrorta);
        });

})

router.post('/saveApplicationDetails',(req,res) => {
    console.log(req.body);
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
            console.log('Data: ',data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ',daerrorta);
        });

})

router.post('/saveInternshipDetails',(req,res) => {
    console.log(req.body);
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

router.get('/TutorProfileDetails',(req,res) => {
    
    TutorProfileDetails.find({ })
        .then((data) => {
            console.log('Data: ',data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ',daerrorta);
        });

})

router.post('/saveTutorProfileDetails',(req,res) => {
    console.log(req.body);
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
            console.log('Data: ',data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ',daerrorta);
        });

})

router.post('/saveEmployeeProfileDetails',(req,res) => {
    console.log(req.body);
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
            console.log('Data: ',data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ',daerrorta);
        });

})

router.post('/saveEmployerProfileDetails',(req,res) => {
    console.log(req.body);
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