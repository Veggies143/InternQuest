import React from 'react';
import styles from './CourseRegistrationDetails.module.css';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import Avatar from '@material-ui/core/Avatar';
import HeaderForTutor from '../HeaderForTutor/HeaderForTutor';
import Footer from '../Footer/Footer';

class CourseRegistrationDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      Details: [],
      DisplayRegistrationDetails: [],
      TutorProfileDetails: {}
    }
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
    this.setState({TutorProfileDetails: d});

    setTimeout(() => {this.sortRegistrations();},1000)
  }

  sortRegistrations = () => {
    console.log(this.state.Details)
    let sortDetails= [];
    let mail = this.state.TutorProfileDetails.email;

    this.state.Details.forEach(element => {
      if(mail === element.DetailsInfo.TutorDetails.email) {
        sortDetails.push(element);
      }
    });

    this.setState({DisplayRegistrationDetails: sortDetails});
  }

  render() {
    return(
      <div>
        <HeaderForTutor/>
        <div className={styles.CourseRegistrationDetails} data-testid="CourseRegistrationDetails">
          <Card className={styles.cstyle}>
            <Card.Header className={styles.cbody}>
               <h3 style={{textAlign:'center'}}><b>Course Registration Details</b></h3>
            </Card.Header>
            <Card.Body className={styles.stybody}>
              <div className="users">
              {this.state.DisplayRegistrationDetails.map((detail, index) => (
                <div key={index}>
                  <div className="row">
                      <div className="col-3">
                      <Avatar src="https://cdn1.vectorstock.com/i/thumb-large/22/05/male-profile-picture-vector-1862205.jpg" style={{ height: '100px', width: '100px' }}  />
                      </div>
                      <div className="col">
                         <p> <b>Applicant Email :</b> {detail.ApplicantDetails.email}</p>
                         <p><b>Course Registered :</b> {detail.DetailsInfo.CourseOffered}</p>
                       </div>
                  </div>
                  <hr/>
                </div>
              ))}
              </div>
          </Card.Body>
          </Card>
        </div>
        <Footer/>
      </div>
    )
  }
}

CourseRegistrationDetails.propTypes = {};

CourseRegistrationDetails.defaultProps = {};

export default CourseRegistrationDetails;
