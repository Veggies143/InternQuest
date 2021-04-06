import React from 'react';
import styles from './FirstPage.module.css';

class FirstPage extends React.Component { 
  constructor() {
    super();
  }

  goToProfile = () => {
    let data=localStorage.getItem('myData');
    data = JSON.parse(data);
    let type = data.userType;
    if(type === 'Tutor') 
      type = 'tutorProfile';
    else if(type === 'Employer') {
      type='employerProfile';
    }
    else {
      type = 'employeeProfile';
    }
    window.location.href = type;
  }

  onLogout = () => {
    window.location.href = 'beforeLoginPage'; 
  }

  render() {
    return (
      <div className={styles.FirstPage} data-testid="FirstPage">
      <p >First </p>
      <i>Page</i>
      <div id={styles.hi}>
        <p > Hello world</p>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <button className='btn btn-info' onClick={this.goToProfile}>Profile</button>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <button className='btn btn-info' onClick={this.onLogout}>Logout</button>
      </div>
      </div>
    )
  }
}

FirstPage.propTypes = {};

FirstPage.defaultProps = {};

export default FirstPage;
