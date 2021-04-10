import React from 'react';
import styles from './EmployerApplicantDetails.module.css';
import axios from 'axios';

class EmployerApplicantDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      ProfileDetails: {},
      ApplicationDetails: [],
      ApplicationDetailsToDisplay: []
    }
  }

  componentDidMount() {
    let d=localStorage.getItem('myData');
    d = JSON.parse(d);
    this.setState({ProfileDetails: d});

    axios.get('/api/ApplicationDetails')
    .then((response) => {
      const data=response.data;
      this.setState({ApplicationDetails:data});
      console.log("Data received!!");
    })
    .catch(() => {
      alert("Error retreving data");
    });

    setTimeout(() => {this.getApplications()},1000);

  }

  getApplications = () => {
    //console.log(this.state.ProfileDetails)
    let tempDetails = [];

    this.state.ApplicationDetails.forEach(element => {
      //console.log(element.InternDetails.EmployerDetails.email)
      //console.log(this.state.ProfileDetails.email)
      if(element.InternDetails.EmployerDetails.email === this.state.ProfileDetails.email) 
        tempDetails.push(element);
    });

    //setTimeout(() => console.log(this.state.ApplicationDetails),2000);

    this.setState({ApplicationDetailsToDisplay: tempDetails});
  }

  onReviewApplication = () => {
    console.log("Review Application")
  }

  onViewApplicantProfile = (value) => {
    console.log("Applicant Profile")
    localStorage.setItem('applicantProfileDetails', JSON.stringify(value));
    window.location.href="applicantProfileForEmployer";
  }

  render() {
    return(
      <div className={styles.EmployerApplicantDetails} data-testid="EmployerApplicantDetails">
        <b>EmployerApplicantDetails Component</b>
        <div className="users">
          {this.state.ApplicationDetailsToDisplay.map((detail, index) => (
            <div key={index}>
              <h1>{detail.ApplicantDetails.email}</h1>
              <h2>{detail.InternDetails.CompanyName}</h2>
              <h3>{detail.YHire}</h3>
              <p>{detail.DuraAvailable}</p>
              &nbsp;&nbsp;
              <button className="btn btn-info" value={detail.ApplicantDetails} onClick={this.onViewApplicantProfile.bind(this, detail.ApplicantDetails)}>View Applicant Profile</button>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <button className="btn btn-info" onClick={this.onReviewApplication}>Review Application</button>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

EmployerApplicantDetails.propTypes = {};

EmployerApplicantDetails.defaultProps = {};

export default EmployerApplicantDetails;
