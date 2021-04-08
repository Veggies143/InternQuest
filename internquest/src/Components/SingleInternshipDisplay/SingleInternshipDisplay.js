import React from 'react';
import styles from './SingleInternshipDisplay.module.css';

class SingleInternshipDisplay extends React.Component {

  constructor() {
    super();
    this.state = {
      DetailsInfo: {}
    }
  }

  componentDidMount() {
    let data=localStorage.getItem('internDetails');
    data = JSON.parse(data);
    //console.log(data);
    this.setState({DetailsInfo: data});
  }
  
  onApplyIntern = () => {
    //console.log("Apply for the internship");
    window.location.href="applicationForm";
  }
  
  render() {
    return(
      <div className={styles.SingleInternshipDisplay} data-testid="SingleInternshipDisplay">
        <b>SingleInternshipDisplay Component</b>
        <div>
          <button className='btn btn-info' onClick={this.onApplyIntern}>Apply</button>
          <h1> Company Name: {this.state.DetailsInfo.CompanyName} </h1>
          <p>About Company: {this.state.DetailsInfo.AboutCompany}</p>
          <h2>Job Role: {this.state.DetailsInfo.JobRole}</h2>
          <p>Job Description: {this.state.DetailsInfo.JobDescription}</p>
          <i>Duration: {this.state.DetailsInfo.Duration}</i>
          <br/>
          <i>Period: {this.state.DetailsInfo.Period}</i>
          <br/>
          <b>SkillsRequired: {this.state.DetailsInfo.SkillsRequired}</b>
          <br/>
          <p>Benefits: {this.state.DetailsInfo.Benefits}</p>
          <i>Stipend: {this.state.DetailsInfo.Stipend}</i>
          <br/>
          <b>Date: {this.state.DetailsInfo.date}</b> 
          <br/>
          <br/>
        </div>
      </div>
    )
  }

}

SingleInternshipDisplay.propTypes = {};

SingleInternshipDisplay.defaultProps = {};

export default SingleInternshipDisplay;
