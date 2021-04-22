import React from 'react';
import styles from './EmployerProfile.module.css';
import axios from 'axios';

class EmployerProfile extends React.Component {
  state = {
    Details: [],
    dataToDisplay: {},
    loginDetails: {}
  }
  
  componentDidMount = () => {
    this.getEmployerProfileDetails();
  };
  
  getEmployerProfileDetails = () => {
    axios.get('/api/EmployerProfileDetails')
    .then((response) => {
      const data=response.data;
      this.setState({Details:data});
      console.log("Data received!!");
    })
    .catch(() => {
      alert("Error retreving data");
    });

    let data=localStorage.getItem('myData');
    data = JSON.parse(data);
    console.log(data);

    setTimeout(() => {
      this.state.Details.forEach(element => {
        if(element.email === data.email && element.password === data.password) {
          this.setState({dataToDisplay: element});
        }
      });
    },1000);
  };

  render() {
    return(
      <div className={styles.EmployerProfile} data-testid="EmployerProfile">
        <div className={styles.box}>
         <div class="card">
          <div className={styles.simg}>
            <img class="card-img-top" src="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg" alt="Card cap"/>
            <h3>Profile</h3>
          </div>
          <br/>
          <div class="card-body">
            {/* <h5 class="card-title">Card title</h5> */}
              <table className="table  table-striped ">
              <tbody>
                        <tr >
                            <td><b>COMPANY NAME</b></td>
                            <td>{this.state.dataToDisplay.companyName}</td>
                          </tr>
                        <tr >
                            <td><b>NAME</b></td>
                            <td>{this.state.dataToDisplay.name}</td>
                          </tr>
                          <tr >
                            <td><b>EMAIL ID</b></td>
                            <td>{this.state.dataToDisplay.email}</td>
                          </tr>
                          <tr >
                            <td><b>PHONE NO</b></td>
                            <td>{this.state.dataToDisplay.phoneNo}</td>
                          </tr>
                          <tr >
                            <td><b>PASSWORD</b></td>
                            <td>{this.state.dataToDisplay.password}</td>
                          </tr>
                            
                      </tbody>
                </table>
            </div>
          </div>
         </div>
      </div>
    )
  }

}

EmployerProfile.propTypes = {};

EmployerProfile.defaultProps = {};

export default EmployerProfile;