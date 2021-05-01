import React from 'react';
import './HeaderBeforeLogin.css';

class HeaderBeforeLogin extends React.Component {

  render() {
    return (
      <div className="Pageh">
        <nav className="navbar navbar-expand-lg ">
          <img src="https://i.ibb.co/KwJSwKG/Screenshot-352.png" alt="logo"/>
          <a className="navbar-brand"  href='./beforeLoginPage'>InternQuest</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavDropdown">
            <div className="move">
              <ul className="navbar-nav">
                {/* <li className="nav-item ">
                  <a className="nav-link" href='/internshipDetails'>INTERNSHIPS <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href='/courseDetails'>TUTORIALS</a>
                </li> */}
                <li className="nav-item">
                  <a className="nav-link" href='/login'>LOGIN</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/employeeRegistration" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    REGISTER
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href='/employeeRegistration'>APPLICANT</a>
                    <a className="dropdown-item" href='/employerRegistration'>EMPLOYER</a>
                    <a className="dropdown-item" href='/tutorRegistration'>TUTOR</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }

}

HeaderBeforeLogin.propTypes = {};

HeaderBeforeLogin.defaultProps = {};

export default HeaderBeforeLogin;
