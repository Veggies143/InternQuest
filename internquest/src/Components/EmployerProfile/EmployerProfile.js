import React from 'react';
import PropTypes from 'prop-types';
import styles from './EmployerProfile.module.css';
import axios from 'axios';

class EmployerProfile extends React.Component {
  state = {
    Details: [],
    dataToDisplay: {},
    loginDetails: {}
  }
  
  componentDidMount = () => {
    this.getEmployerProfileDetails();
  };
  
  getEmployerProfileDetails = () => {
    axios.get('/api/EmployerProfileDetails')
    .then((response) => {
      const data=response.data;
      this.setState({Details:data});
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
        }
      });
    },1000);
  };

  render() {
    return(
      <div className={styles.EmployerProfile} data-testid="EmployerProfile">
        <h1>EmployerProfile Component</h1>
        <div>
          <h1>{this.state.dataToDisplay.companyName}</h1>
          <h3>{this.state.dataToDisplay.name}</h3>
          <h2>{this.state.dataToDisplay.email}</h2>
          <i>{this.state.dataToDisplay.password}</i>
          <p>{this.state.dataToDisplay.phoneNo}</p>
        </div>
      </div>
    )
  }

}

EmployerProfile.propTypes = {};

EmployerProfile.defaultProps = {};

export default EmployerProfile;
