import React from 'react';
import styles from './EmployerApplicantDetails.module.css';
import axios from 'axios';

class EmployerApplicantDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      ProfileDetails: {},
      ApplicationDetails: [],
      ApplicationDetailsToDisplay: [],
      SingleApplicationDetails: {},
      displayReviewBox: true,
      reviewForApplication: ''
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

  handleChange = ({target}) => {
    const {name,value} = target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.reviewForApplication);
    this.setState({reviewForApplication: ''});
    this.setState({displayReviewBox: !this.state.displayReviewBox});

    this.storeInMongo();
    setTimeout(() => {this.removeApplicationDetails(this.state.SingleApplicationDetails);},700)

    console.log("Before delete");

    

    axios({ 
      url: '/api/deleteApplication',
      method: 'DELETE'
    })
    .then(() => {
      console.log("Deleted");
    })
    .catch(() => {
      console.log("Error in deleting");
    });

    setTimeout(() => {console.log("After delete");},2000)

  }

  removeApplicationDetails = (value) => {
    for (let index = 0; index < this.state.ApplicationDetailsToDisplay.length; index++) {
      const element = this.state.ApplicationDetailsToDisplay[index];
      if(element.ApplicantDetails.email === value.ApplicantDetails.email && element.InternDetails.CompanyName === value.InternDetails.CompanyName) {
        this.state.ApplicationDetailsToDisplay.splice(index, 1); 
      }
    }

    setTimeout(() => {console.log(this.state.ApplicationDetailsToDisplay);},1500)

  }

  storeInMongo = () => {
    const payLoad = {
      ApplicationDetailsAfterReview: this.state.SingleApplicationDetails,
      ReviewForApplication: this.state.reviewForApplication
    };

    axios({ 
      url: '/api/saveApplicationDetailsAfterReview',
      method: 'POST',
      data: payLoad
    })
    .then(() => {
      console.log("Application Details After Review Data has been sent to the server");
    })
    .catch(() => {
      console.log("Internal server error in EmployerApplicantDetails Component");
    });
  }

  getAppDetails = (value) => {
    this.setState({SingleApplicationDetails: value})
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
              <br/>
              <br/>
              {
                this.state.displayReviewBox && <div>
                <form onSubmit={this.handleSubmit}> 
                  <div className="form-group">
                    <div className="form-input">
                      <textarea 
                        name="reviewForApplication" 
                        className="form-control"  
                        placeholder="Specify the reason of rejection or acceptance" 
                        cols="100" 
                        rows="10" 
                        value={this.state.reviewForApplication} 
                        onChange={this.handleChange} 
                        required >
                      </textarea>
                    </div>
                  </div>
                  <button className="btn btn-info" value={detail} onClick={this.getAppDetails.bind(this, detail)}>Submit Review</button>
                </form> 
                </div>
              }
              <hr/>
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
