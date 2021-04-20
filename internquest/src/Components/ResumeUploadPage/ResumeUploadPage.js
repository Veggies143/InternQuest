import React from 'react';
import styles from './ResumeUploadPage.module.css';
import axios from 'axios';

class ResumeUploadPage extends React.Component {

  constructor() {
    super()
    this.state = {
      ResumeLink: '',
      ApplicantDetails: {}
    }
  }

  componentDidMount() {
    let d=localStorage.getItem('myData');
    d = JSON.parse(d);
    this.setState({ApplicantDetails: d});
  }

  handleResumeLink = ({target}) => {
    const {name,value} = target;
    this.setState({
      [name]: value
    });
  };

  UploadResume = () => {
    console.log(this.state)
    const link = {
      ResumeLink: this.state.ResumeLink,
      ApplicantDetails: this.state.ApplicantDetails
    }

    axios({ 
      url: '/api/saveResumePDF',
      method: 'POST',
      data: link
    })
    .then(() => {
      console.log("Resume Link Data has been sent to the server");
      this.setState({ResumeLink: ''});
      window.location.href = 'firstPage';
    })
    .catch(() => {
      console.log("Internal server error in ResumeUploadPage Component");
    });

  }

  render() {
    return (
      <div className={styles.ResumeUploadPage} data-testid="ResumeUploadPage">
        <b>ResumeUploadPage Component</b>

        <form>
          <div className="form-group">
            <label>Provide a google drive link or some other link for resume details</label>
            <div className="form-input">
              <input type="text" size="70" name="ResumeLink" onChange={this.handleResumeLink} />
            </div>
          </div>
          <button type="button" onClick={this.UploadResume}>Upload</button>
        </form>
        
      </div>
    )
  }

}
ResumeUploadPage.propTypes = {};

ResumeUploadPage.defaultProps = {};

export default ResumeUploadPage;
