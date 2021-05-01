import React from 'react';
import styles from './EmployeeProfile.module.css';
import axios from 'axios';
import Avatar from '@material-ui/core/Avatar';
import HeaderForApplicant from '../HeaderForApplicant/HeaderForApplicant';
import Footer from '../Footer/Footer';

class EmployeeProfile extends React.Component {
  state = {
    Details: [],
    dataToDisplay: {},
    loginDetails: {}
  }
  
  componentDidMount = () => {
    this.getEmployeeProfileDetails();
    
  };
  
  getEmployeeProfileDetails = () => {
    axios.get('/api/EmployeeProfileDetails')
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
      <div>
        <HeaderForApplicant/>
        <div className={styles.EmployeeProfile} data-testid="EmployeeProfile">
          <img  class="img-responsive" alt="imageInEmployeeProfile" src="https://png.pngtree.com/thumb_back/fw800/back_pic/04/47/12/785857e15ddbe19.jpg" width="1263" height="300" /> 
          <div className={styles.lb}>
            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJbcOaYiR3F79EU0S0Ew95QUv9tVFoF4YZdA&usqp=CAU" style={{ height: '200px', width: '200px' }}  />
            <h3>Profile</h3>
          </div>
          <div className={styles.tstyle}>
            <div className={styles.card}>
            <table className="table table-bordered table-striped " >
              <tbody>
                <tr >
                  <td><b>NAME</b></td>
                  <td>{this.state.dataToDisplay.name}</td>
                </tr>
                <tr >
                  <td><b>EMAIL ID</b></td>
                  <td>{this.state.dataToDisplay.email}</td>
                </tr>
                <tr >
                  <td><b>AGE</b></td>
                  <td>{this.state.dataToDisplay.age}</td>
                </tr>
                {/* <tr >
                  <td><b>PASSWORD</b></td>
                  <td>{this.state.dataToDisplay.password}</td>
                </tr> */}
              </tbody>
            </table>
          </div>
          </div>   
        </div>
        <Footer/>
      </div>
    )
  }

}

EmployeeProfile.propTypes = {};

EmployeeProfile.defaultProps = {};

export default EmployeeProfile;