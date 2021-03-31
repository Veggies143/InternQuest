import React from 'react';
import PropTypes from 'prop-types';
import styles from './DisplayCourseDetails.module.css';
import axios from 'axios';

class DisplayCourseDetails extends React.Component {
  state = {
    Details: []
  }
  
  componentDidMount = () => {
    this.getcourseDetails();
  };
  
  getcourseDetails = () => {
    axios.get('/api/CourseDetails')
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
      <div className={styles.DispalyCourseDetails} data-testid="DispalycourseDetails">
        
        <div className="users">
        {this.state.Details.map((detail, index) => (
          <div key={index}>
            <h1>Name: {detail.Name}</h1>
            <p>Course Offered: {detail.CourseOffered}</p>
            <i>Duration: {detail.Duration}</i>
            <br/>
            <i>Period: {detail.Period}</i>
            <br/>
            <p>About Yourself: {detail.AboutYourself}</p>
            <p>Course Description: {detail.CourseDescription}</p>
            <p>Benefits: {detail.Benefits}</p>
            <i>Fees: {detail.Fees}</i>
            <br/>
            <b>Date: {detail.date}</b> 
            <br/>
            <br/>
            <br/>
          </div>
        ))}
      </div>
      </div>
    )
  }
}

DisplayCourseDetails.propTypes = {};

DisplayCourseDetails.defaultProps = {};

export default DisplayCourseDetails;
