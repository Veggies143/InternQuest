import React from 'react';
import styles from './ResumeUploadPage.module.css';
import axios from 'axios';

class ResumeUploadPage extends React.Component {

  constructor() {
    super();
      this.state = {
        selectedFile: null
      }
   
  }

  onChangeHandler=event=>{
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0,
    })
  }

  onClick = () => {
    const Resume = new FormData() 
    Resume.append('file', this.state.selectedFile)

    console.log(typeof(this.state.selectedFile))

    axios({ 
      url: '/api/saveResumePDF',
      method: 'POST',
      data: Resume
    })
    .then(() => {
      console.log("Resume PDF Upload Data has been sent to the server");
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
          <input type="file" name="file" onClick={this.onClickHandler}/>
          <br/>
          <br/>
          <button type="button" class="btn btn-success btn-block" onClick={this.onClick}>Upload</button>
        </form>
      </div>
    )
  }
}
ResumeUploadPage.propTypes = {};

ResumeUploadPage.defaultProps = {};

export default ResumeUploadPage;
