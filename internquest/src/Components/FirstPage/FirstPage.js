import React from 'react';
import styles from './FirstPage.module.css';

class FirstPage extends React.Component { 

  constructor() {
    super();
    this.state = {
      isApplicant: false,
      isEmployer: false,
      isTutor: false,
      typeOfUser: ''
    }
  }

  componentDidMount() {
    let data=localStorage.getItem('myData');
    data = JSON.parse(data);
    let type = data.userType;
    if(type === 'Tutor') {
      type = 'tutorProfile';
      this.setState({isTutor: true});
    }
    else if(type === 'Employer') {
      type='employerProfile';
      this.setState({isEmployer: true});
    }
    else {
      type = 'employeeProfile';
      this.setState({isApplicant: true});
    }
    this.setState({typeOfUser: type});

  }

  goToProfile = () => {
    window.location.href = this.state.typeOfUser;
  }

  onLogout = () => {
    window.location.href = 'beforeLoginPage'; 
    localStorage.setItem('isLogin',false);
    setTimeout(() => {
      console.log("In logout  "+localStorage.get('isLogin'))
    }, 500
    );
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

  goToUploadResume = () => {
    window.location.href = '/resumeUploadPage'
  }

  render() {
    return (
      <div className={styles.FirstPage} data-testid="FirstPage">

        <div>
          <h1>First Page</h1>
        </div>
        <br/>
        <br/>

        <div>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <button className='btn btn-info' onClick={this.goToProfile}>Profile</button>
        </div>
        <br/>
        <br/>

        { this.state.isApplicant && <div>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <button className='btn btn-info' onClick={this.goToInternships}>Internships</button>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <button className='btn btn-info' onClick={this.goToApplicationDetails}>Your Applications After Review</button>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <button className='btn btn-info' onClick={this.goToCourseDisplay}>Courses</button>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <button className='btn btn-info' onClick={this.goToUploadResume}>Upload Resume</button>
        </div>}
        <br/>
        <br/>

        { this.state.isEmployer && <div>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <button className='btn btn-info' onClick={this.goToEmployerApplicantDetails}>Employer Application Forms</button>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <button className='btn btn-info' onClick={this.goToInternshipForm}>Post an internship</button>
        </div>}
        <br/>
        <br/>

        { this.state.isTutor && <div>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <button className='btn btn-info' onClick={this.goToCourseForm}>Post a course</button>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <button className='btn btn-info' onClick={this.goToCourseRegistrationDetails}>Course Registartion Details</button>
        </div>}
        <br/>
        <br/>

        <div>
          &nbsp; &nbsp; &nbsp; &nbsp;
          <button className='btn btn-info' onClick={this.onLogout}>Logout</button>
        </div>

      </div>
    )
  }
}

FirstPage.propTypes = {};

FirstPage.defaultProps = {};

export default FirstPage;
