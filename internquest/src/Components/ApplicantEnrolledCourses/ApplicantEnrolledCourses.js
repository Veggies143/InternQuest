import React from 'react';
import styles from './ApplicantEnrolledCourses.module.css';
import axios from 'axios';
import HeaderForApplicant from '../HeaderForApplicant/HeaderForApplicant';
import Footer from '../Footer/Footer';

class ApplicantEnrolledCourses extends React.Component {
  state = {
    Details: [],
    ApplicantDetails: {},
    DisplayRegDetails: []
  }

  componentDidMount = () => {
    axios.get('/api/CourseRegistrationDetails')
    .then((response) => {
      const data=response.data;
      this.setState({Details:data});
      console.log("Data received!!");
    })
    .catch(() => {
      alert("Error retreving data");
    });

    let d=localStorage.getItem('myData');
    d = JSON.parse(d);
    this.setState({ApplicantDetails: d});

    setTimeout(() => {this.getRegistrationDetails();},700)
    
  };

  getRegistrationDetails = () => {
    let sortDetails= [];
    let mail = this.state.ApplicantDetails.email;

    this.state.Details.forEach(element => {
      if(mail === element.ApplicantDetails.email) {
        sortDetails.push(element);
      }
    });

    this.setState({DisplayRegDetails: sortDetails});

  };

  render() {
    return(
      <div>
        <HeaderForApplicant/>
        <div className={styles.ApplicantEnrolledCourses}>
          <h1>Applicant Enrolled Courses Details</h1>
          {this.state.DisplayRegDetails.map((detail, index) => (
            <div key={index}>
              <p><b>Tutor Mail ID:</b> {detail.DetailsInfo.TutorDetails.email}</p>
              <p><b>Course Offered:</b> {detail.DetailsInfo.CourseOffered}</p>
              {/* <p><b>Job Role:</b> {detail.ApplicationDetailsAfterReview.InternDetails.JobRole}</p>
              <p><b>Feedback on your Application:</b><br/> &nbsp;&nbsp;&nbsp;&nbsp;{detail.ReviewForApplication}</p> */}
              <hr/>
            </div>
          ))}
        </div>
        <Footer/>
      </div>
    )
  }
}

ApplicantEnrolledCourses.propTypes = {};

ApplicantEnrolledCourses.defaultProps = {};

export default ApplicantEnrolledCourses;
