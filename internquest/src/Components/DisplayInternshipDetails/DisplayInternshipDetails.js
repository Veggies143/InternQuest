import React from 'react';
import PropTypes from 'prop-types';
import styles from './DisplayInternshipDetails.module.css';
import axios from 'axios';
import SkillsDropdown from './../SkillsDropdown/SkillsDropdown';

class DisplayInternshipDetails extends React.Component {
  state = {
    Details: []
  }
  
  componentDidMount = () => {
    this.getInternshipDetails();
  };
  
  getInternshipDetails = () => {
    axios.get('/api/InternshipDetails')
    .then((response) => {
      const data=response.data;
      this.setState({Details:data});
      console.log("Data received!!");
    })
    .catch(() => {
      alert("Error retreving data");
    });
  };

  render() {
    return(
      <div className={styles.DispalyInternshipDetails} data-testid="DispalyInternshipDetails">

        <div className="row">

          <div className="col-4" id={styles.sortInternships}>
            Keep your preferences 
            <div><SkillsDropdown/></div>
            <br/>
            <br/>
            <b>Another dropdown</b>
            <div>
              Hii
            </div>
          </div>
            
          <div className="col-8" id={styles.details}>
            {this.state.Details.map((detail, index) => (
              <div key={index}>
                <h1>Comapny Name: {detail.CompanyName}</h1>
                <p>About Company: {detail.AboutCompany}</p>
                <h2>Job Role: {detail.JobRole}</h2>
                <p>Job Description: {detail.JobDescription}</p>
                <i>Duration: {detail.Duration}</i>
                <br/>
                <i>Period: {detail.Period}</i>
                <br/>
                <b>SkillsRequired: {detail.SkillsRequired}</b>
                <br/>
                <p>Benefits: {detail.Benefits}</p>
                <i>Stipend: {detail.Stipend}</i>
                <br/>
                <b>Date: {detail.date}</b> 
                <br/>
                <br/>
                <br/>
              </div>
            ))}
          </div>

        </div>
      </div>
    )
  }

}

DisplayInternshipDetails.propTypes = {};

DisplayInternshipDetails.defaultProps = {};

export default DisplayInternshipDetails;
