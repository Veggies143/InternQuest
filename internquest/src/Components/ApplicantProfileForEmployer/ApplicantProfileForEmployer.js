import React from 'react';
import styles from './ApplicantProfileForEmployer.module.css';
import axios from 'axios';

class ApplicantProfileForEmployer extends React.Component {
  constructor() {
    super();
    this.state = {
      Details: [],
      ApplicantInfo: {},
      ToDisplayInfo: {}
    }
  }

  componentDidMount() {
    axios.get('/api/EmployeeProfileDetails')
    .then((response) => {
      const data=response.data;
      this.setState({Details:data});
      console.log("Data received!!");
    })
    .catch(() => {
      alert("Error retreving data");
    });

    let d=localStorage.getItem('applicantProfileDetails');
    d = JSON.parse(d);
    this.setState({ApplicantInfo: d});

    setTimeout(() => this.fetchData(),2000);
    
  }

  fetchData = () => {
    this.state.Details.forEach(element => {
      if(element.email === this.state.ApplicantInfo.email) {
        this.setState({ToDisplayInfo: element});
        return;
      }
    });

    //setTimeout(() => console.log(this.state.Details),2000);
  }

  render() {
    return(
      <div className={styles.ApplicantProfileForEmployer} data-testid="ApplicantProfileForEmployer">
        <b>ApplicantProfileForEmployer Component</b>
        <div>
          <h1>{this.state.ToDisplayInfo.email}</h1>
          <h2>{this.state.ToDisplayInfo.age}</h2>
        </div>
      </div>
    )
  }
}

ApplicantProfileForEmployer.propTypes = {};

ApplicantProfileForEmployer.defaultProps = {};

export default ApplicantProfileForEmployer;
