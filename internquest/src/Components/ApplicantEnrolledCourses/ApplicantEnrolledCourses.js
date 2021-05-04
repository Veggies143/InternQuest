import React from 'react';
import styles from './ApplicantEnrolledCourses.module.css';
import axios from 'axios';
import {Card} from 'react-bootstrap';
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
        <Card className={styles.cstyle}>
            <Card.Header className={styles.cbody}>
              <h3 style={{textAlign:'center'}}>My Enrolled Courses Details</h3>
              </Card.Header>
          <Card.Body className={styles.stybody}>
          {this.state.DisplayRegDetails.map((detail, index) => (
            <div key={index}>
              <p><b>Tutor Name:</b> {detail.DetailsInfo.Name}</p>
              <p><b>Tutor Mail ID: </b>{detail.DetailsInfo.TutorDetails.email}</p>
              <p><b>Course Offered:</b> {detail.DetailsInfo.CourseOffered}</p>
              <div className="row">
                  <div className="col-3">
                    <i class="fa fa-calendar"> Duration</i>
                    <br/><p >{detail.DetailsInfo.Duration} {detail.DetailsInfo.Period}</p>
                  </div>
                  <div className="col-3">
                    <i class="fa fa-money" aria-hidden="true"> Stipend</i>
                    <br/> <p>{detail.DetailsInfo.Fees} /-</p>
                  </div>
                </div>
              <hr/>
            </div>
          ))}
          </Card.Body>
        </Card>
        </div>
        <Footer/>
      </div>
    )
  }
}

ApplicantEnrolledCourses.propTypes = {};

ApplicantEnrolledCourses.defaultProps = {};

export default ApplicantEnrolledCourses;
