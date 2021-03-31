import React from 'react';
import PropTypes from 'prop-types';
import styles from './EmployerProfile.module.css';
import axios from 'axios';

class EmployerProfile extends React.Component {
  state = {
    Details: []
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
  };

  render() {
    return(
      <div className={styles.EmployerProfile} data-testid="EmployerProfile">
        <h1>EmployerProfile Component</h1>
        <div className="users">
        {this.state.Details.map((detail, index) => (
          <div key={index}>
            <h2>{detail.companyName}</h2>
            <h3>{detail.name}</h3>
            <p>{detail.email}</p>
            <p>{detail.password}</p>
            <p>{detail.phoneNo}</p>
          </div>
        ))}
      </div>
      </div>
    )
  }

}

EmployerProfile.propTypes = {};

EmployerProfile.defaultProps = {};

export default EmployerProfile;
