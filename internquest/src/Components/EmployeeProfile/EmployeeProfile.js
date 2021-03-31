import React from 'react';
import PropTypes from 'prop-types';
import styles from './EmployeeProfile.module.css';
import axios from 'axios';

class EmployeeProfile extends React.Component {
  state = {
    Details: []
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
  };

  render() {
    return(
      <div className={styles.EmployeeProfile} data-testid="EmployeeProfile">
        <h1>EmployeeProfile Component</h1>
        <div className="users">
        {this.state.Details.map((detail, index) => (
          <div key={index}>
            <h3>{detail.name}</h3>
            <p>{detail.email}</p>
            <p>{detail.password}</p>
            <p>{detail.age}</p>
          </div>
        ))}
      </div>
      </div>
    )
  }

}

EmployeeProfile.propTypes = {};

EmployeeProfile.defaultProps = {};

export default EmployeeProfile;
