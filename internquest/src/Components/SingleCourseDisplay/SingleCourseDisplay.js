import React from 'react';
import styles from './SingleCourseDisplay.module.css';
import axios from 'axios';
import {Card} from 'react-bootstrap';
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

          <div className={styles.dispic}>
            <Card className={styles.cstyle}>
              <Card.Header>
              <h3 style={{textAlign:'center'}}> Course Details </h3>
              </Card.Header>
              <Card.Body>
            
                <p><b> Tutor Name:</b> {this.state.DetailsInfo.Name}</p><br/>
                <p><b>Course Offered:</b> {this.state.DetailsInfo.CourseOffered}</p><br/>

                <div className="row">
                {/* &emsp;&emsp; */}
                  <div className="col-3">
                    <i class="fa fa-calendar"> Duration</i>
                    <br/><p >{this.state.DetailsInfo.Duration}  {this.state.DetailsInfo.Period}</p>
                  </div>
                  <div className="col-3">
                    <i class="fa fa-money" aria-hidden="true"> Fees</i>
                    <br/> <p>{this.state.DetailsInfo.Fees} /-</p>
                  </div>
                </div>
                  <br/>
                <p><b>About Yourself:</b> <br/> &emsp;&emsp;{this.state.DetailsInfo.AboutYourself}</p><br/>

                <b>Course Description: </b>
                {this.state.CourseDescription.map((ele, index) => (
                  <div key={index}>
                        <ul>
                        <p style={{paddingLeft:10}}><li>{ele}</li></p>
                        </ul>
                  </div>
                ))}<br/>

                <b>Benefits: </b>
                {this.state.Benefits.map((ele, index) => (
                    <div key={index}>
                        <ul>
                        <p style={{paddingLeft:10}}><li>{ele}</li></p>
                        </ul>
                  </div>
                ))}

                <div class="col text-center">
                <button className='btn btn-info btn-lg' onClick={this.onRegisterCourse}>Register for the course</button>
                </div>
            </Card.Body>
            </Card>
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
