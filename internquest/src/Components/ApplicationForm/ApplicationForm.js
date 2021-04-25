import React from 'react';
import styles from './ApplicationForm.module.css';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import HeaderForApplicant from '../HeaderForApplicant/HeaderForApplicant';
import Footer from '../Footer/Footer';

class ApplicationForm extends React.Component {
  
  state = {
    YHire: '',
    DuraAvailable: '',
    ResumeLink: '',
    InternDetails: {},
    ApplicantDetails: {}
  };

  componentDidMount() {
    let data=localStorage.getItem('internDetails');
    data = JSON.parse(data);
    this.setState({InternDetails: data});

    let d=localStorage.getItem('myData');
    d = JSON.parse(d);
    this.setState({ApplicantDetails: d});
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
      YHire: this.state.YHire,
      DuraAvailable: this.state.DuraAvailable,
      ResumeLink: this.state.ResumeLink,
      InternDetails: this.state.InternDetails,
      ApplicantDetails: this.state.ApplicantDetails
    };

    axios({ 
      url: '/api/saveApplicationDetails',
      method: 'POST',
      data: payLoad
    })
    .then(() => {
      console.log("Application Details Data has been sent to the server");
      this.resetUserInputs();
    })
    .catch(() => {
      console.log("Internal server error in ApplicationForm Component");
    });
    
    window.location.href = 'internshipDetails';

  }

  resetUserInputs = () => {
    this.setState({
      YHire: '',
      DuraAvailable: '',
      ResumeLink: ''
    })
  };

  render() {

    return (
      <div>
        <HeaderForApplicant/>
        <div className={styles.ApplicationForm}>
          <Card className={styles.stycard}>
          <Card.Header>
             <h2 style={{textAlign:'center'}}>Application Details Form</h2>
          </Card.Header>
          <Card.Body>
                <form onSubmit={this.handleSubmit}>

                  <div class="form-group">
                    <label>Why Should we hire you</label>
                    <div className="form-input">
                      <textarea
                        name="YHire"
                        class="form-control"
                        placeholder="Specify the reason to hire you"
                        cols="100"
                        rows="5"
                        value={this.state.YHire}
                        onChange={this.handleChange}
                        required>
                      </textarea>
                    </div>
                  </div>

                  <br></br>

                  <div class="form-group">
                    <label>Are you available for the duration of "
                      {this.state.InternDetails.Duration} {this.state.InternDetails.Period} "
                      for this internship</label>
                    <div className="form-input">
                      <textarea
                        name="DuraAvailable"
                        class="form-control"
                        placeholder="Yes, I am available"
                        cols="150"
                        rows="5"
                        value={this.state.DuraAvailable}
                        onChange={this.handleChange}
                        required>
                      </textarea>
                    </div>
                  </div>

                  <br></br>

                  <div className="form-group">
                    <label>Provide a google drive link or some other
                    link for resume details</label>
                    <div className="form-input">
                      <input type="text" size="70" name="ResumeLink"
                        onChange={this.handleChange} />
                    </div>
                  </div>

                  <br></br>

                  <div className="row">
                    <div className="col">
                       <button class="btn btn-primary">Submit</button>
                      </div>
                      <div className="col">
                      <button class="btn btn-danger"
                        onClick={this.resetUserInputs}>Reset</button>
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

ApplicationForm.propTypes = {};

ApplicationForm.defaultProps = {};

export default ApplicationForm;
