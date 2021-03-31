import React from 'react';
import PropTypes from 'prop-types';
import styles from './TutorProfile.module.css';
import axios from 'axios';

class TutorProfile extends React.Component {
  state = {
    Details: []
  }
  
  componentDidMount = () => {
    this.getTutorProfileDetails();
  };
  
  getTutorProfileDetails = () => {
    axios.get('/api/TutorProfileDetails')
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
      <div className={styles.TutorProfile} data-testid="TutorProfile">
        <h1>TutorProfile Component</h1>
        <div className="users">
        {this.state.Details.map((detail, index) => (
          <div key={index}>
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

TutorProfile.propTypes = {};

TutorProfile.defaultProps = {};

export default TutorProfile;
