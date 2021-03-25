import React from 'react';
import PropTypes from 'prop-types';
import styles from './DispalyApplicationDetails.module.css';
import axios from 'axios';

class DispalyApplicationDetails extends React.Component {
  state = {
    Details: []
  }
  
  componentDidMount = () => {
    this.getApplicationDetails();
  };
  
  getApplicationDetails = () => {
    axios.get('/api')
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
      <div className={styles.DispalyApplicationDetails} data-testid="DispalyApplicationDetails">
        <h1>DispalyApplicationDetails Component</h1>
        <div className="users">
        {this.state.Details.map((detail, index) => (
          <div key={index}>
            <h3>{detail.YHire}</h3>
            <p>{detail.DuraAvailable}</p>
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
