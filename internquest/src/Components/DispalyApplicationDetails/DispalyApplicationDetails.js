import React from 'react';
import styles from './DispalyApplicationDetails.module.css';
import axios from 'axios';
import HeaderForApplicant from '../HeaderForApplicant/HeaderForApplicant';
import Footer from '../Footer/Footer';

class DispalyApplicationDetails extends React.Component {
  state = {
    Details: [],
    ApplicantDetails: {},
    DisplayAppDetails: []
  }
  
  componentDidMount = () => {
    axios.get('/api/ApplicationDetailsAfterReview')
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

    setTimeout(() => {this.getApplicationDetails();},700)
    
  };
  
  getApplicationDetails = () => {
    let sortDetails= [];
    let mail = this.state.ApplicantDetails.email;

    this.state.Details.forEach(element => {
      if(mail === element.ApplicationDetailsAfterReview.ApplicantDetails.email) {
        sortDetails.push(element);
      }
    });

    this.setState({DisplayAppDetails: sortDetails});

  };

  render() {
    return(
      <div>
        <HeaderForApplicant/>
        <div className={styles.DispalyApplicationDetails} data-testid="DispalyApplicationDetails">
          <h1>DispalyApplicationDetails Component</h1>
          <div className="users">
          {this.state.DisplayAppDetails.map((detail, index) => (
            <div key={index}>
              <h1>Employer Mail ID: {detail.ApplicationDetailsAfterReview.InternDetails.EmployerDetails.email}</h1>
              <h2>Company Name: {detail.ApplicationDetailsAfterReview.InternDetails.CompanyName}</h2>
              <b>Job role: {detail.ApplicationDetailsAfterReview.InternDetails.JobRole}</b>
              <h3>Why hire: {detail.ApplicationDetailsAfterReview.YHire}</h3>
              <p>Duration available?: {detail.ApplicationDetailsAfterReview.DuraAvailable}</p>
              <b>Review or feedback for you application: {detail.ReviewForApplication}</b>
            </div>
          ))}
          </div>
        </div>
        <Footer/>
      </div>
    )
  }

}

DispalyApplicationDetails.propTypes = {};

DispalyApplicationDetails.defaultProps = {};

export default DispalyApplicationDetails;
