import React from 'react';
import styles from './LoginPage.module.css';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap';

class LoginPage extends React.Component {

  constructor() {
    super();
    this.state = {
      input: {},
      errors: {},
      TutorProfileDetails: {},
      EmployeeProfileDetails: {},
      EmployerProfileDetails: {},
      invalidDetails: ""
    };
     
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
     
  handleChange(event) {
    let input = this.state.input;
    input[event.target.name] = event.target.value;
  
    this.setState({
      input
    });
  }
  
  handleSubmit(event) {
    event.preventDefault();
  
    if(this.validate()){
        console.log(this.state);

        let flag = false;

        if(this.state.input["userType"] === "Tutor") {
          this.state.TutorProfileDetails.forEach(element => {
            //console.log(element.email+"   "+element.password);
            if(element.email === this.state.input["email"] && element.password === this.state.input["password"]) {
              flag=true;
              this.setState({invalidDetails : ""});
              //alert("Login successfull");
            }
          });
          if(!flag) {
            //alert("Login not successfull");
            this.setState({invalidDetails : "Please enter correct login credentials"});
          }
        }
        else if(this.state.input["userType"] === "Employer") {
          this.state.EmployerProfileDetails.forEach(element => {
            //console.log(element.email+"   "+element.password);
            if(element.email === this.state.input["email"] && element.password === this.state.input["password"]) {
              flag=true;
              this.setState({invalidDetails : ""});
              //alert("Login successfull");
            }
          });
          if(!flag) {
            //alert("Login not successfull");
            this.setState({invalidDetails : "Please enter correct login credentials"});
          }
        }
        else {
          this.state.EmployeeProfileDetails.forEach(element => {
            //console.log(element.email+"   "+element.password);
            if(element.email === this.state.input["email"] && element.password === this.state.input["password"]) {
              flag=true;
              this.setState({invalidDetails : ""});
              //alert("Login successfull");
            }
          });
          if(!flag) {
            //alert("Login not successfull");
            this.setState({invalidDetails : "Please enter correct login credentials"});
          }
        }
  
        let input = {};
        input["email"] = "";
        input["password"] = "";
        input["userType"] = "";
        this.setState({input:input});

        if(flag) {
          console.log("Here to redirect");
          if (typeof window !== 'undefined') {
            localStorage.setItem('myData', JSON.stringify(this.state.input));
            localStorage.setItem('isLogin',true);
          }
          window.location.href="firstPage";
        }

        

    }
  }
  
  validate(){
      let input = this.state.input;
      let errors = {};
      let isValid = true;
  
      if (!input["password"]) {
        isValid = false;
        errors["password"] = "Please enter your password.";
      }
  
      if (!input["email"]) {
        isValid = false;
        errors["email"] = "Please enter your email Address.";
      }
  
      if (typeof input["email"] !== "undefined") {
          
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
        if (!pattern.test(input["email"])) {
          isValid = false;
          errors["email"] = "Please enter valid email address.";
        }
      }
  
      this.setState({
        errors: errors
      });
  
      return isValid;
  }

  componentDidMount() {
    axios.get('/api/TutorProfileDetails')
    .then((response) => {
      const data=response.data;
      this.setState({TutorProfileDetails:data});
      //console.log("Data received!!");
    })
    .catch(() => {
      alert("Error retreving data");
    });

    axios.get('/api/EmployeeProfileDetails')
    .then((response) => {
      const data=response.data;
      this.setState({EmployeeProfileDetails:data});
      //console.log("Data received!!");
    })
    .catch(() => {
      alert("Error retreving data");
    });

    axios.get('/api/EmployerProfileDetails')
    .then((response) => {
      const data=response.data;
      this.setState({EmployerProfileDetails:data});
      //console.log("Data received!!");
    })
    .catch(() => {
      alert("Error retreving data");
    });
  }
     
  render() {
    return (
      <div className={styles.LoginPage}> 
        <h1>Login Page</h1>
        <form onSubmit={this.handleSubmit}>

          <div className="form-group">
            <label>Type of user</label>
            <div>
              <select 
                type="text" 
                name='userType' 
                value={this.state.input.userType} 
                className="form-control"  
                onChange={this.handleChange} 
                id="userType" >
                <option value="Applicant">Applicant</option>
                <option value="Employer">Employer</option>
                <option value="Tutor">Tutor</option>
              </select>
            </div>

          </div>

          <div className="form-group">
            <label>Email Address:</label>
            <input 
              type="text" 
              name="email" 
              value={this.state.input.email}
              onChange={this.handleChange}
              className="form-control" 
              placeholder="Enter email" 
              id="email" />
   
              <div className="text-danger">{this.state.errors.email}</div>
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input 
              name="password"
              type="password" 
              value={this.state.input.password}
              onChange={this.handleChange}
              className="form-control" 
              placeholder="Enter password" 
              id="password" />

              <div className="text-danger">{this.state.errors.password}</div>
              <div className="text-danger">{this.state.invalidDetails}</div>
          </div>
             
          <input type="submit" value="Submit" className="btn btn-success" />   
          <br/><br/>
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
        
        </form>
        <br/>
      </div>
    );
  }
}

LoginPage.propTypes = {};

LoginPage.defaultProps = {};

export default LoginPage;
