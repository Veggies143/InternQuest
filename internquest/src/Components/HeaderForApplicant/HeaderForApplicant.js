import React from 'react';
import './HeaderForApplicant.css';
import { Dropdown } from 'react-bootstrap';

class HeaderForApplicant extends React.Component {

  render() {
    return (
      <div className="Pageh">
        <nav className="navbar navbar-expand-lg ">
          <img src="https://i.ibb.co/KwJSwKG/Screenshot-352.png" alt="logo"/>
          <a className="navbar-brand" href='./afterLoginApplicant'>InternQuest</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavDropdown">
            <div className="move">
              <ul className="navbar-nav">
                <li className="nav-item ">
                  <a className="nav-link" href='/internshipDetails'>INTERNSHIPS <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href='/courseDetails'>TUTORIALS</a>
                </li>
                {/* <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/employeeRegistration" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">MORE</a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href='/employeeRegistration'>MY APPLICATIONS</a>
                    <a className="dropdown-item" href='/employeeRegistration'>MY COURSE REGISTRATIONS</a>
                    <a className="dropdown-item" href='/employerRegistration'>PROFILE</a>
                    <a className="dropdown-item" href='/tutorRegistration'>LOGOUT</a>
                  </div>
                </li>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                <Dropdown>
                  <Dropdown.Toggle 
                  variant="secondary btn-sm" 
                  id="dropdown-basic">
                  </Dropdown.Toggle>

                  <Dropdown.Menu style={{backgroundColor:'#73a47'}}>
                      <Dropdown.Item href='/applicationDetails'>MY APPLICATIONS</Dropdown.Item>
                      <Dropdown.Item href='/applicantEnrolledCourses'>MY COURSE REGISTRATIONS</Dropdown.Item>
                      <Dropdown.Item href='/employeeProfile'>PROFILE</Dropdown.Item>
                      <Dropdown.Item href='/beforeLoginPage'>LOGOUT</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </ul> 
            </div>
          </div>
        </nav>
      </div>
    )
  }

}

HeaderForApplicant.propTypes = {};

HeaderForApplicant.defaultProps = {};

export default HeaderForApplicant;
