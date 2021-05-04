import React from 'react';
import styles from './EmployerApplicantDetails.module.css';
import axios from 'axios';
import {Card} from 'react-bootstrap';
import HeaderForEmployer from '../HeaderForEmployer/HeaderForEmployer';
import Footer from '../Footer/Footer';

class EmployerApplicantDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      ProfileDetails: {},
      ApplicationDetails: [],
      ApplicationDetailsToDisplay: [],
      SingleApplicationDetails: {},
      //ResumeDetails: [],
      displayReviewBox: true,
      reviewForApplication: ''
    }
  }

  componentDidMount() {
    let d=localStorage.getItem('myData');
    d = JSON.parse(d);
    this.setState({ProfileDetails: d});

    this.getApplicationDetailsFromMongo();

  }

  getApplicationDetailsFromMongo = () => {
    //console.log("In get app details mongo")
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
  }

  getApplications = () => {
    console.log("In get app details")
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
    //this.setState({displayReviewBox: !this.state.displayReviewBox});

    this.storeInMongo();
    setTimeout(() => {this.deleteApplication(this.state.SingleApplicationDetails);},500)

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

    setTimeout(this.getApplicationDetailsFromMongo,500);
    
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
    window.open(value, "_blank");
  }

  render() {
    return(
      <div>
        <HeaderForEmployer/>
        <div className={styles.EmployerApplicantDetails} data-testid="EmployerApplicantDetails">
          <Card className={styles.cstyle}>
            <Card.Header className={styles.cbody}>
              <h3 style={{textAlign:'center'}}>Received Applications</h3>
            </Card.Header>
            <Card.Body className={styles.stybody}>
           <div className="users">
           {this.state.ApplicationDetailsToDisplay.map((detail, index) => (
              <div key={index}>
             <div className="row" >
               <div className="col">
                  <p><b>Applicant Email:</b> {detail.ApplicantDetails.email}</p>
                    <p><b>Job Role: </b>{detail.InternDetails.JobRole}</p>
                    <p><b>Why Should We Hire You:</b><br/>&emsp;&emsp; {detail.YHire}</p>
                    <p><b>Are You Available: </b>{detail.DuraAvailable}</p>
                    &nbsp;&nbsp;
                    <button className="btn btn-info" value={detail.ApplicantDetails} onClick={this.onViewApplicantResume.bind(this, detail.ResumeLink)}>View Applicant Resume</button>
                    <br/>
               </div>
               <div className="col">
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
                              placeholder="Detail Reason of Acceptance or Rejection..." 
                              cols="100" 
                              rows="5" 
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
                 </div>
             </div>
             <br/><br/>
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

EmployerApplicantDetails.propTypes = {};

EmployerApplicantDetails.defaultProps = {};

export default EmployerApplicantDetails;
