import React from 'react';
import styles from './CourseDetailsForm.module.css';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import HeaderForTutor from '../HeaderForTutor/HeaderForTutor';
import Footer from '../Footer/Footer';

class CourseDetailsForm extends React.Component {

  state = {
    Name: '',
    CourseOffered: '',
    Duration: Number,
    Period: 'Months',
    AboutYourself: '',
    CourseDescription: '',
    Benefits: '',
    Fees: Number,
    TutorDetails: {}
  };

  componentDidMount() {
    let d=localStorage.getItem('myData');
    d = JSON.parse(d);
    this.setState({TutorDetails: d});
  }

  handleChange = ({target}) => {
    const {name,value} = target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const payLoad = {
      Name: this.state.Name,
      CourseOffered: this.state.CourseOffered,
      Duration: this.state.Duration,
      Period: this.state.Period,
      AboutYourself: this.state.AboutYourself,
      CourseDescription: this.state.CourseDescription,
      Benefits: this.state.Benefits,
      Fees: this.state.Fees,
      TutorDetails: this.state.TutorDetails
    };
    //console.log(payLoad)

    axios({ 
      url: '/api/saveCourseDetails',
      method: 'POST',
      data: payLoad
    })
    .then(() => {
      console.log("Course Details Data has been sent to the server");
      this.resetUserInputs();
      window.location.href = 'afterLoginTutor'
    })
    .catch(() => {
      console.log("Internal server error in CourseDetailsForm component");
    });
  }

  resetUserInputs = () => {
    this.setState({
      Name: '',
      CourseOffered: '',
      Duration: Number,
      Period: 'Months',
      AboutYourself: '',
      CourseDescription: '',
      Benefits: '',
      Fees: Number
    })
  };

  render() {

    return (
      <div>
        <HeaderForTutor/>
        <div className={styles.CourseDetailsForm}>
          <Card className={styles.stycard}>
            <Card.Header>
              <h2 style={{textAlign:'center'}}>Course Details Form</h2>
            </Card.Header>
            <Card.Body>
              <form id='course_details' onSubmit={this.handleSubmit}>

                  <label>Name</label>
                  <div className="form-input">
                      <input 
                        name="Name" 
                        placeholder="Name" 
                        class="form-control"
                        value={this.state.Name} 
                        onChange={this.handleChange} 
                        required>
                      </input>
                  </div>
                  <br/>

                  <label>Course Offered</label>
                  <div className="form-input">
                      <input 
                        name="CourseOffered" 
                        placeholder="Course Offered" 
                        class="form-control"
                        value={this.state.CourseOffered} 
                        onChange={this.handleChange} 
                        required>
                      </input>
                  </div>
                  <br/>

                  
                    <div className="row">
                      <div className="col">
                      <label>Course Fees</label>
                        <div className="form-input">
                            <input 
                              name="Fees" 
                              placeholder="Fees" 
                              class="form-control"
                              pattern="[0-9]*"
                              value={this.state.Fees} 
                              onChange={this.handleChange} 
                              required>
                            </input>
                          </div>
                          <br/>
                      </div>
                          <div className="col">
                            <label>Period of Course</label>
                            <div className="form-input">
                              <select name='Period' class="form-control" value={this.state.Period} onChange={this.handleChange} required>
                                <option value="Months">Month/s</option>
                                <option value="Weeks">Week/s</option>
                                <option value="Days">Days</option>
                              </select>
                            </div>
                            <br/>
                        </div>
                      </div>
                    

                    <label>Duration of the internship</label>
                    <div className="form-input">
                      <input 
                          name="Duration" 
                          placeholder="Duration of internship" 
                          pattern="[0-9]*"
                          class="form-control"
                          value={this.state.Duration} 
                          onChange={this.handleChange} 
                          required>
                      </input>
                      </div>
                    <br/>

                    <label>About yourself</label>
                    <div className="form-input">
                      <textarea 
                        name="AboutYourself" 
                        placeholder="About Yourself" 
                        class="form-control"
                        cols="100" 
                        rows="5" 
                        value={this.state.AboutYourself} 
                        onChange={this.handleChange} 
                        required>
                      </textarea>
                    </div>
                    <br/>

                    <label>Course Description</label>
                    <div className="form-input">
                      <textarea 
                        name="CourseDescription" 
                        placeholder="Course Description" 
                        class="form-control"
                        cols="100" 
                        rows="5" 
                        value={this.state.CourseDescription} 
                        onChange={this.handleChange} 
                        required>
                      </textarea>
                    </div>
                    <br/>

                    <label>What benefits will you give</label>
                    <div className="form-input">
                      <textarea 
                        name="Benefits" 
                        placeholder="Benefits provided" 
                        class="form-control"
                        cols="100" 
                        rows="5" 
                        value={this.state.Benefits} 
                        onChange={this.handleChange} >
                      </textarea>
                    </div>
                    <br/>

                    <div className="row">
                      <div className="col">
                        <button class="btn btn-primary">Submit</button>   
                      </div>
                      <div className="col">
                          <button class="btn btn-danger" onClick={this.resetUserInputs} >Reset</button> 
                      </div>
                    </div>
                  </form>
            </Card.Body>
          </Card> 
        </div>
        <Footer/>
      </div>
    );
  }
}

CourseDetailsForm.propTypes = {};

CourseDetailsForm.defaultProps = {};

export default CourseDetailsForm;
