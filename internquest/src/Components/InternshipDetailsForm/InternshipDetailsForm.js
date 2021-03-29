import React from 'react';
import PropTypes from 'prop-types';
import styles from './InternshipDetailsForm.module.css';
import axios from 'axios';

class InternshipDetailsForm extends React.Component {

  state = {
    CompanyName: '',
    JobRole: '',
    Duration: Number,
    Period: 'Months',
    AboutCompany: '',
    JobDescription: '',
    SkillsRequired: '',
    Benefits: '',
    Stipend: Number
  };

  handleChange = ({target}) => {
    const {name,value} = target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const payLoad = {
      CompanyName: this.state.CompanyName,
      JobRole: this.state.JobRole,
      Duration: this.state.Duration,
      Period: this.state.Period,
      AboutCompany: this.state.AboutCompany,
      JobDescription: this.state.JobDescription,
      SkillsRequired: this.state.SkillsRequired,
      Benefits: this.state.Benefits,
      Stipend: this.state.Stipend
    };
    console.log(payLoad)

    axios({ 
      url: '/api/saveInternshipDetails',
      method: 'POST',
      data: payLoad
    })
    .then(() => {
      console.log("Internship Details Data has been sent to the server");
      this.resetUserInputs();
    })
    .catch(() => {
      console.log("Internal server error in InternshipDetailsForm component");
    });
  }

  resetUserInputs = () => {
    this.setState({
      CompanyName: '',
      JobRole: '',
      Duration: Number,
      Period: 'Months',
      AboutCompany: '',
      JobDescription: '',
      SkillsRequired: '',
      Benefits: '',
      Stipend: Number
    })
  };

  render() {

    return (
      <div className={styles.InternshipDetailsForm}>
        <h2>Internship Details Form</h2>
        <form id='internship_details' onSubmit={this.handleSubmit}>

        <label>Name of your Company</label>
        <div className="form-input">
            <input 
              name="CompanyName" 
              placeholder="Name of your company" 
              value={this.state.CompanyName} 
              onChange={this.handleChange} 
              required>
            </input>
        </div>
        <br/>

        <label>Job Role</label>
        <div className="form-input">
            <input 
              name="JobRole" 
              placeholder="Role name for the job" 
              value={this.state.JobRole} 
              onChange={this.handleChange} 
              required>
            </input>
        </div>
        <br/>

        <label>Duration of the internship</label>
        <div className="form-input">
            <input 
              name="Duration" 
              placeholder="Duration of internship" 
              pattern="[0-9]*"
              value={this.state.Duration} 
              onChange={this.handleChange} 
              required>
            </input>
          </div>
          <br/>

          <label>Period of Internship</label>
          <div className="form-input">
            <select name='Period' value={this.state.Period} onChange={this.handleChange} required>
              <option value="Months">Month/s</option>
              <option value="Weeks">Week/s</option>
              <option value="Days">Days</option>
            </select>
          </div>
          <br/>

          <label>What is your company about</label>
          <div className="form-input">
            <textarea 
              name="AboutCompany" 
              placeholder="How your company works" 
              cols="100" 
              rows="10" 
              value={this.state.AboutCompany} 
              onChange={this.handleChange} 
              required>
            </textarea>
          </div>
          <br/>

          <label>What is this internship about</label>
          <div className="form-input">
            <textarea 
              name="JobDescription" 
              placeholder="How your company works" 
              cols="100" 
              rows="10" 
              value={this.state.JobDescription} 
              onChange={this.handleChange} 
              required>
            </textarea>
          </div>
          <br/>

          <label>Skill Required for this internship</label>
          <div className="form-input">
            <textarea 
              name="SkillsRequired" 
              placeholder="Skills Required" 
              cols="100" 
              rows="10" 
              value={this.state.SkillsRequired} 
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
              cols="100" 
              rows="10" 
              value={this.state.Benefits} 
              onChange={this.handleChange} >
            </textarea>
          </div>
          <br/>

          <label>About you will pay for this internship</label>
          <div className="form-input">
              <input 
                name="Stipend" 
                placeholder="Stipend" 
                pattern="[0-9]*"
                value={this.state.Stipend} 
                onChange={this.handleChange} 
                required>
              </input>
            </div>
            <br/>

          <button class="btn btn-success">Submit</button>   
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button class="btn btn-info" onClick={this.resetUserInputs} >Reset</button> 
          
        </form>
      </div>
    );
  }
}

InternshipDetailsForm.propTypes = {};

InternshipDetailsForm.defaultProps = {};

export default InternshipDetailsForm;
