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
      ResumeDetails: [],
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

    setTimeout(() => {this.getApplications()},500);

    axios.get('/api/getResumeDetails')
    .then((response) => {
      const da=response.data;
      this.setState({ResumeDetails:da});
      console.log("Data received!!");
    })
    .catch(() => {
      alert("Error retreving data");
    });

  }

  getApplications = () => {
    let tempDetails = [];

    this.state.ApplicationDetails.forEach(element => {
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
    setTimeout(() => {this.deleteApplication(this.state.SingleApplicationDetails);},700)

    console.log("Before delete");

  }

  deleteApplication = (val) => {
    const YHire = val.YHire;
    axios({ 
      url: '/api/deleteApplication',
      method: 'DELETE',
      params: { YHire },
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

  onViewApplicantResume = (value) => {
    let link = ''
    this.state.ResumeDetails.forEach(element => {
      if(element.ApplicantDetails.email === value.email && element.ApplicantDetails.password === value.password) {
        link = element.ResumeLink
      }
    });

    setTimeout(() => {window.open(link, "_blank");},500)

  }

  render() {
    return(
      <div className={styles.EmployerApplicantDetails} data-testid="EmployerApplicantDetails">
        <b>EmployerApplicantDetails Component</b>
        <div className="users">
          {this.state.ApplicationDetailsToDisplay.map((detail, index) => (
            <div key={index}>
              <h1>Applicant Email: {detail.ApplicantDetails.email}</h1>
              <h2>{detail.InternDetails.CompanyName}</h2>
              <h3>{detail.YHire}</h3>
              <p>{detail.DuraAvailable}</p>
              &nbsp;&nbsp;
              <button className="btn btn-info" value={detail.ApplicantDetails} onClick={this.onViewApplicantResume.bind(this, detail.ApplicantDetails)}>View Applicant Resume</button>
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
