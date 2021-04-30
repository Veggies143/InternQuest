import React from 'react';
import styles from './DispalyApplicationDetails.module.css';
import axios from 'axios';
import {Card} from 'react-bootstrap';
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
        <div className={styles.DispalyApplicationDetails}data-testid="DispalyApplicationDetails">
        <Card className={styles.cstyle}>
        <Card.Header className={styles.cbody}>
          <h3 style={{textAlign:'center'}}>DispalyApplicationDetails Component</h3>
          </Card.Header>
          <Card.Body className={styles.stybody}>
          <div className="users">
          {this.state.DisplayAppDetails.map((detail, index) => (
            <div key={index}>
              <p><b>Employer Mail ID:</b> {detail.ApplicationDetailsAfterReview.InternDetails.EmployerDetails.email}</p>
              <p><b>Company Name:</b> {detail.ApplicationDetailsAfterReview.InternDetails.CompanyName}</p>
              <p><b>Job role:</b> {detail.ApplicationDetailsAfterReview.InternDetails.JobRole}</p>
              <p><b>Why hire:</b> {detail.ApplicationDetailsAfterReview.YHire}</p>
              <p><b> Availablility :</b> {detail.ApplicationDetailsAfterReview.DuraAvailable}</p>
              <p><b>Review or feedback for you application:</b><br/> &nbsp;&nbsp;&nbsp;&nbsp;{detail.ReviewForApplication}</p>
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

DispalyApplicationDetails.propTypes = {};

DispalyApplicationDetails.defaultProps = {};

export default DispalyApplicationDetails;
