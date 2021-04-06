import React from 'react';
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
        <form onSubmit={this.handleSubmit}>

          <div class="form-group">
            <label>Name of your Company</label>
            <div>
              <input 
                name="CompanyName" 
                placeholder="Name of your company" 
                class="form-control"  
                value={this.state.CompanyName} 
                onChange={this.handleChange} 
                required>
              </input>
            </div>

          </div>

          <div class="form-group">
            <label>Job Role</label>
            <div>
              <input 
                name="JobRole" 
                placeholder="Role name for the job" 
                class="form-control" 
                value={this.state.JobRole} 
                onChange={this.handleChange} 
                required>
              </input>
            </div>
            <br/>
          </div>

          <div class="form-group">
            <label>Duration of the internship</label>
            <div>
              <input 
                name="Duration" 
                placeholder="Duration of internship" 
                class="form-control" 
                pattern="[0-9]*"
                value={this.state.Duration} 
                onChange={this.handleChange} 
                required>
              </input>
            </div>
            <br/>
          </div>

          <div class="form-group">
            <label>Period of Internship</label>
            <div>
              <select name='Period' class="form-control" value={this.state.Period} onChange={this.handleChange} required>
                <option value="Months">Month/s</option>
                <option value="Weeks">Week/s</option>
                <option value="Days">Days</option>
              </select>
            </div>
            <br/>
          </div>

          <div class="form-group">
            <label>What is your company about</label>
            <div>
              <textarea 
                name="AboutCompany" 
                placeholder="How your company works"
                class="form-control"  
                cols="100" 
                rows="10" 
                value={this.state.AboutCompany} 
                onChange={this.handleChange} 
                required>
              </textarea>
            </div>
            <br/>
          </div>

          <div class="form-group">
            <label>What is this internship about</label>
            <div>
              <textarea 
                name="JobDescription" 
                placeholder="How your company works" 
                class="form-control" 
                cols="100" 
                rows="10" 
                value={this.state.JobDescription} 
                onChange={this.handleChange} 
                required>
              </textarea>
            </div>
            <br/>
          </div>

          <div class="form-group">
            <label>Skill Required for this internship</label>
            <div>
              <textarea 
                name="SkillsRequired" 
                placeholder="Skills Required" 
                class="form-control" 
                cols="100" 
                rows="10" 
                value={this.state.SkillsRequired} 
                onChange={this.handleChange} 
                required>
              </textarea>
            </div>
            <br/>
          </div>

          <div class="form-group">
            <label>What benefits will you give</label>
            <div>
              <textarea 
                name="Benefits" 
                placeholder="Benefits provided" 
                class="form-control" 
                cols="100" 
                rows="10" 
                value={this.state.Benefits} 
                onChange={this.handleChange} >
              </textarea>
            </div>
            <br/>
          </div>

          <div class="form-group">
            <label>About you will pay for this internship</label>
            <div>
                <input 
                  name="Stipend" 
                  placeholder="Stipend" 
                  class="form-control" 
                  pattern="[0-9]*"
                  value={this.state.Stipend} 
                  onChange={this.handleChange} 
                  required>
                </input>
            </div>
            <br/>
          </div>

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
