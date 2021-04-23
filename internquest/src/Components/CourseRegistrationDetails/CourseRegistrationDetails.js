import React from 'react';
import styles from './CourseRegistrationDetails.module.css';
import axios from 'axios';
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
          <h1>CourseRegistrationDetails Component</h1>
          <div className="users">
          {this.state.DisplayRegistrationDetails.map((detail, index) => (
            <div key={index}>
              <h1>{detail.ApplicantDetails.email}</h1>
              <h2>{detail.DetailsInfo.CourseOffered}</h2>
              <h3>{detail.DetailsInfo.Fees}</h3>
              <p>{detail.DetailsInfo.TutorDetails.email}</p>
            </div>
          ))}
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

CourseRegistrationDetails.propTypes = {};

CourseRegistrationDetails.defaultProps = {};

export default CourseRegistrationDetails;
