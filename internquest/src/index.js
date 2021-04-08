import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import './index.css';

import App from './App';
import ApplicationForm from './Components/ApplicationForm/ApplicationForm';
import DispalyApplicationDetails from './Components/DispalyApplicationDetails/DispalyApplicationDetails';
import InternshipDetailsForm from './Components/InternshipDetailsForm/InternshipDetailsForm';
import LoginPage from './Components/LoginPage/LoginPage';
import EmployeeRegistration from './Components/EmployeeRegistration/EmployeeRegistration';
import EmployerRegistration from './Components/EmployerRegistration/EmployerRegistration';
import TutorRegistration from './Components/TutorRegistration/TutorRegistration';
import DisplayInternshipDetails from './Components/DisplayInternshipDetails/DisplayInternshipDetails';
import TutorProfile from './Components/TutorProfile/TutorProfile';
import EmployerProfile from './Components/EmployerProfile/EmployerProfile';
import EmployeeProfile from './Components/EmployeeProfile/EmployeeProfile';
import CourseDetailsForm from './Components/CourseDetailsForm/CourseDetailsForm';
import DisplayCourseDetails from './Components/DisplayCourseDetails/DisplayCourseDetails';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import FirstPage from './Components/FirstPage/FirstPage';
import BeforeLoginPage from './Components/BeforeLoginPage/BeforeLoginPage';
import SingleInternshipDisplay from './Components/SingleInternshipDisplay/SingleInternshipDisplay';

import reportWebVitals from './reportWebVitals';

const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/login" component={LoginPage} />
      <Route path="/applicationForm" component={ApplicationForm}/>
      <Route path="/applicationDetails" component={DispalyApplicationDetails}/>
      <Route path="/internshipDetails" component={DisplayInternshipDetails}/>
      <Route path="/courseDetails" component={DisplayCourseDetails}/>
      <Route path="/internshipForm" component={InternshipDetailsForm}/>
      <Route path="/employeeRegistration" component={EmployeeRegistration}/>
      <Route path="/employerRegistration" component={EmployerRegistration}/>
      <Route path="/tutorRegistration" component={TutorRegistration}/>
      <Route path="/employerProfile" component={EmployerProfile}/>
      <Route path="/employeeProfile" component={EmployeeProfile}/>
      <Route path="/tutorProfile" component={TutorProfile}/>
      <Route path="/courseDetails" component={CourseDetailsForm}/>
      <Route path="/firstPage" component={FirstPage}/>
      <Route path="/beforeLoginPage" component={BeforeLoginPage}/>
      <Route path="/singleInternshipDisplay" component={SingleInternshipDisplay}/>
      <Route component={ErrorPage}/>
    </Switch>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root') 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
