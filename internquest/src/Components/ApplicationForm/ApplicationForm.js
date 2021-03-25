import React from 'react';
import PropTypes from 'prop-types';
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
      console.log("Data has been sent to the server");
      this.resetUserInputs();
    })
    .catch(() => {
      console.log("Internal server error");
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

          <div className="form-input">
            <textarea 
              name="YHire" 
              placeholder="Specify the reason to hire you" 
              cols="100" 
              rows="10" 
              value={this.state.YHire} 
              onChange={this.handleChange} >
            </textarea>
          </div>

          <br></br>

          <div className="form-input">
            <textarea 
              name="DuraAvailable" 
              placeholder="Yes, I am available" 
              cols="100" 
              rows="10" 
              value={this.state.DuraAvailable} 
              onChange={this.handleChange} >
            </textarea>
          </div>

          <br></br>

          <button>Submit</button> 
          
        </form>
      </div>
    );
  }
}

ApplicationForm.propTypes = {};

ApplicationForm.defaultProps = {};

export default ApplicationForm;
