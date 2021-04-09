import React from 'react';
import styles from './FirstPage.module.css';

class FirstPage extends React.Component { 

  goToProfile = () => {
    let data=localStorage.getItem('myData');
    data = JSON.parse(data);
    let type = data.userType;
    if(type === 'Tutor') 
      type = 'tutorProfile';
    else if(type === 'Employer') {
      type='employerProfile';
    }
    else {
      type = 'employeeProfile';
    }
    window.location.href = type;
  }

  onLogout = () => {
    window.location.href = 'beforeLoginPage'; 
  }

  goToInternships = () => {
    window.location.href = '/internshipDetails';
  }

  goToApplicationDetails = () => {
    window.location.href = '/applicationDetails';
  }

  goToEmployerApplicantDetails = () => {
    window.location.href = '/employerApplicantDetails';
  }

  goToInternshipForm = () => {
    window.location.href = '/internshipForm';
  }
  
  goToCourseForm = () => {
    window.location.href = '/courseDetailsForm';
  }

  goToCourseDisplay = () => {
    window.location.href = '/courseDetails';
  }

  goToCourseRegistrationDetails = () => {
    window.location.href = '/courseRegistrationDetails'
  }  

  render() {
    return (
      <div className={styles.FirstPage} data-testid="FirstPage">
      <p >First </p>
      <i>Page</i>
      <div id={styles.hi}>
        <p > Hello world</p>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <button className='btn btn-info' onClick={this.goToProfile}>Profile</button>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <button className='btn btn-info' onClick={this.onLogout}>Logout</button>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <button className='btn btn-info' onClick={this.goToInternships}>Internships</button>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <button className='btn btn-info' onClick={this.goToApplicationDetails}>Your Applications</button>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <button className='btn btn-info' onClick={this.goToEmployerApplicantDetails}>Employer Application Forms</button>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <button className='btn btn-info' onClick={this.goToInternshipForm}>Post an internship</button>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <button className='btn btn-info' onClick={this.goToCourseDisplay}>Courses</button>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <button className='btn btn-info' onClick={this.goToCourseForm}>Post a course</button>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <button className='btn btn-info' onClick={this.goToCourseRegistrationDetails}>Course Registartion Details</button>
      </div>
      </div>
    )
  }
}

FirstPage.propTypes = {};

FirstPage.defaultProps = {};

export default FirstPage;
