import React from 'react';
import styles from './SingleCourseDisplay.module.css';
import axios from 'axios';
import HeaderForApplicant from '../HeaderForApplicant/HeaderForApplicant';
import Footer from '../Footer/Footer';

class SingleCourseDisplay extends React.Component {
  
  constructor() {
    super();
    this.state = {
      DetailsInfo: {},
      ApplicantDetails: {},
      CourseDescription: [],
      Benefits: []
    }
  }

  componentDidMount() {
    let data=localStorage.getItem('courseDetails');
    data = JSON.parse(data);
    this.setState({DetailsInfo: data});

    let d=localStorage.getItem('myData');
    d = JSON.parse(d);
    this.setState({ApplicantDetails: d});

    let benefitsArray = data.Benefits.split("\n");
    let courseDesArray = data.CourseDescription.split("\n");

    setTimeout(this.splitData(courseDesArray,benefitsArray),500);
  }

  splitData = (c,b) => {
    this.setState({Benefits: b});
    this.setState({CourseDescription: c});
  }
  
  onRegisterCourse = () => {
    console.log("Apply for the internship");
    const payLoad = {
      DetailsInfo: this.state.DetailsInfo,
      ApplicantDetails: this.state.ApplicantDetails
    };

    axios({ 
      url: '/api/saveCourseRegistrationDetails',
      method: 'POST',
      data: payLoad
    })
    .then(() => {
      console.log("Course Registration Details Data has been sent to the server");
      window.location.href = 'afterLoginApplicant'
    })
    .catch(() => {
      console.log("Internal server error in SingleCourseDisplay Component");
    });
  }

  render() {
    return(
      <div>
        <HeaderForApplicant/>
        <div className={styles.SingleCourseDisplay} data-testid="SingleCourseDisplay">
          <b>SingleCourseDisplay Component</b>
          <div>
            <button className='btn btn-info' onClick={this.onRegisterCourse}>Register for the course</button>
            <h1>Name: {this.state.DetailsInfo.Name}</h1>
            <p>Course Offered: {this.state.DetailsInfo.CourseOffered}</p>
            <i>Duration: {this.state.DetailsInfo.Duration}</i>
            <br/>
            <i>Period: {this.state.DetailsInfo.Period}</i>
            <br/>
            <p>About Yourself: {this.state.DetailsInfo.AboutYourself}</p>

            <b>Course Description: </b>
            {this.state.CourseDescription.map((ele, index) => (
              <div key={index}>
                <p>{ele}</p>
              </div>
            ))}

            <b>Benefits: </b>
            {this.state.Benefits.map((ele, index) => (
              <div key={index}>
                <p>{ele}</p>
              </div>
            ))}

            <i>Fees: {this.state.DetailsInfo.Fees}</i>
            <br/>
            <br/>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

SingleCourseDisplay.propTypes = {};

SingleCourseDisplay.defaultProps = {};

export default SingleCourseDisplay;
