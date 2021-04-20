import React from 'react';
import styles from './EmployeeProfile.module.css';
import axios from 'axios';

class EmployeeProfile extends React.Component {
  state = {
    Details: [],
    dataToDisplay: {},
    loginDetails: {},
    ResumeDetails: [],
    ResumeLink: ''
  }
  
  componentDidMount = () => {
    this.getEmployeeProfileDetails();
  };
  
  getEmployeeProfileDetails = () => {
    axios.get('/api/EmployeeProfileDetails')
    .then((response) => {
      const data=response.data;
      this.setState({Details:data});
      console.log("Data received!!");
    })
    .catch(() => {
      alert("Error retreving data");
    });

    axios.get('/api/getResumeDetails')
    .then((response) => {
      const da=response.data;
      this.setState({ResumeDetails:da});
      console.log("Data received!!");
    })
    .catch(() => {
      alert("Error retreving data");
    });

    let data=localStorage.getItem('myData');
    data = JSON.parse(data);
    console.log(data);

    setTimeout(() => {

      this.state.Details.forEach(element => {
        if(element.email === data.email && element.password === data.password) {
          this.setState({dataToDisplay: element});
          return;
        }
      });

      this.state.ResumeDetails.forEach(element => {
        if(element.ApplicantDetails.email === data.email && element.ApplicantDetails.password === data.password) {
          this.setState({ResumeLink: element.ResumeLink});
          return;
        }
      });

    },500);

  };

  render() {
    return(
      <div className={styles.EmployeeProfile} data-testid="EmployeeProfile">
        <h1>EmployeeProfile Component</h1>
        <div>
          <h1>{this.state.dataToDisplay.email}</h1>
          <h3>{this.state.dataToDisplay.name}</h3>
          <i>{this.state.dataToDisplay.password}</i>
          <p>{this.state.dataToDisplay.age}</p>
          <i>{this.state.ResumeLink}</i>
        </div>
      </div>
    )
  }

}

EmployeeProfile.propTypes = {};

EmployeeProfile.defaultProps = {};

export default EmployeeProfile;
