import React from 'react';
import styles from './DispalyApplicationDetails.module.css';
import axios from 'axios';

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
      <div className={styles.DispalyApplicationDetails} data-testid="DispalyApplicationDetails">
        <h1>DispalyApplicationDetails Component</h1>
        <div className="users">
        {this.state.DisplayAppDetails.map((detail, index) => (
          <div key={index}>
            <h1>{detail.ApplicationDetailsAfterReview.ApplicantDetails.email}</h1>
            <h2>{detail.ApplicationDetailsAfterReview.InternDetails.CompanyName}</h2>
            <h3>{detail.ApplicationDetailsAfterReview.YHire}</h3>
            <p>{detail.ApplicationDetailsAfterReview.DuraAvailable}</p>
            <b>{detail.ReviewForApplication}</b>
          </div>
        ))}
        </div>
      </div>
    )
  }

}

DispalyApplicationDetails.propTypes = {};

DispalyApplicationDetails.defaultProps = {};

export default DispalyApplicationDetails;
