import React from 'react';
import './HeaderForApplicant.css';

class HeaderForApplicant extends React.Component {

  render() {
    return (
      <div className="Pageh">
        <nav className="navbar navbar-expand-lg ">
          <img src="https://i.ibb.co/KwJSwKG/Screenshot-352.png" alt="logo"/>
          <p className="navbar-brand" >InternQuest</p>
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
                <li className="nav-item">
                  <a className="nav-link" href='/applicationDetails'>YOUR APPLICATIONS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href='/employeeProfile'>PROFILE</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href='/login'>LOGOUT</a>
                </li>
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
