import React from 'react';
import styles from './TutorProfile.module.css';
import axios from 'axios';

class TutorProfile extends React.Component {
  state = {
    Details: [],
    dataToDisplay: {},
    loginDetails: {}
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
      <div className={styles.TutorProfile} data-testid="TutorProfile">
        <h1>TutorProfile Component</h1>
        <div>
          <h1>{this.state.dataToDisplay.name}</h1>
          <h3>{this.state.dataToDisplay.email}</h3>
          <p>{this.state.dataToDisplay.password}</p>
          <i>{this.state.dataToDisplay.phoneNo}</i>
        </div>
      </div>
    )
  }

}

TutorProfile.propTypes = {};

TutorProfile.defaultProps = {};

export default TutorProfile;
