import React from 'react';
import styles from './ApplicationForm.module.css';
import axios from 'axios';

class ApplicationForm extends React.Component {
  
  state = {
    YHire: '',
    DuraAvailable: ''
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
      YHire: this.state.YHire,
      DuraAvailable: this.state.DuraAvailable
    };

    //alert(this.state.YHire+" "+this.state.DuraAvailable);
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

  }

  resetUserInputs = () => {
    this.setState({
      YHire: '',
      DuraAvailable: ''
    })
  };

  render() {

    return (
      <div className={styles.ApplicationForm}>
        <h2>Application Details Form</h2>
        <form onSubmit={this.handleSubmit}>

          <div class="form-group">
            <label>Why Should we hire you</label>
            <div className="form-input">
              <textarea 
                name="YHire" 
                class="form-control"  
                placeholder="Specify the reason to hire you" 
                cols="100" 
                rows="10" 
                value={this.state.YHire} 
                onChange={this.handleChange} >
              </textarea>
            </div>
          </div>

          <br></br>

          <div class="form-group">
            <label>Are you available for the internship</label>
            <div className="form-input">
              <textarea 
                name="DuraAvailable" 
                class="form-control"  
                placeholder="Yes, I am available" 
                cols="150" 
                rows="10" 
                value={this.state.DuraAvailable} 
                onChange={this.handleChange} >
              </textarea>
            </div>
          </div>

          <br></br>

          <button class="btn btn-success">Submit</button> 
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button class="btn btn-info" onClick={this.resetUserInputs}>Reset</button>

        </form>
      </div>
    );
  }
}

ApplicationForm.propTypes = {};

ApplicationForm.defaultProps = {};

export default ApplicationForm;
