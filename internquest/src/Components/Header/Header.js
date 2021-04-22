import React from 'react';
import './Header.css';

class Header extends React.Component {

  constructor() {
    super();
    this.state = {
      isApplicant: false,
      isEmployer: false,
      isTutor: false,
      isLoggedIn: false
    }
  }

  componentDidMount() {
    let isLog = localStorage.getItem('isLogin');
    this.setState({isLoggedIn: isLog});
    //setTimeout(this.getLoginDetails,500)
    setTimeout(console.log(this.state.isLoggedIn),500)
  }

  getLoginDetails = () => {
    console.log("Here")
    if(this.state.isLoggedIn) {
      let data=localStorage.getItem('myData');
      data = JSON.parse(data);
      let type = data.userType;
      if(type === 'Tutor') {
        type = 'tutorProfile';
        this.setState({isTutor: true});
      }
      else if(type === 'Employer') {
        type='employerProfile';
        this.setState({isEmployer: true});
      }
      else {
        type = 'employeeProfile';
        this.setState({isApplicant: true});
      }
    }
    setTimeout(() => {
      console.log(this.state.isLoggedIn)
      console.log(this.state.isApplicant)
      console.log(this.state.isEmployer)
      console.log(this.state.isTutor)
    }, 1000);
  }

  render() {
    return (
      <div>

        <b>Header Component</b>
        {!this.state.isLoggedIn && <div>
          <p>Not Logged in</p>
        </div>}

        {(this.state.isLoggedIn && this.state.isApplicant) && <div>
          <p>Applicant</p>
        </div>}

        {this.state.isEmployer && <div>
          <p>Employer</p>
        </div>}

        {this.state.isTutor && <div>
          <p>Tutor</p>
        </div>}


      </div>
    )
  }
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
