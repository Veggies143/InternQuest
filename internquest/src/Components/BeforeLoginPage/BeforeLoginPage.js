import React from 'react';
import styles from './BeforeLoginPage.module.css';
import { Dropdown } from 'react-bootstrap';

class BeforeLoginPage extends React.Component {

  componentDidMount() {
    localStorage.setItem('isLogin',false);
  }

  onLogin() {
    window.location.href='login'
  }

  render() {
    return(
      <div className={styles.BeforeLoginPage} data-testid="BeforeLoginPage">
        <div> BeforeLoginPage Component </div>
        <button className='btn btn-info' onClick={this.onLogin}>Login ?</button>
        <br/>
        <br/>
        <Dropdown>
          <Dropdown.Toggle variant="info" id="dropdown-basic">
            Register ?
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="/employeeRegistration">Applicant</Dropdown.Item>
            <Dropdown.Item href="/employerRegistration">Employer</Dropdown.Item>
            <Dropdown.Item href="/tutorRegistration">Tutor</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div>
          Hello world
        </div>
      </div>
    )
  }
}

BeforeLoginPage.propTypes = {};

BeforeLoginPage.defaultProps = {};

export default BeforeLoginPage;
