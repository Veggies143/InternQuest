import React from 'react';
import styles from './TutorProfile.module.css';
import axios from 'axios';
import HeaderForTutor from '../HeaderForTutor/HeaderForTutor';
import Footer from '../Footer/Footer';

class TutorProfile extends React.Component {
  state = {
    Details: [],
    dataToDisplay: {},
    loginDetails: {}
  }
  
  componentDidMount = () => {
    this.getTutorProfileDetails();
  };
  
  getTutorProfileDetails = () => {
    axios.get('/api/TutorProfileDetails')
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
        <HeaderForTutor/>
        <div className={styles.TutorProfile} data-testid="TutorProfile">
          <div className={styles.box}>
            <div class="card">
              <div className={styles.simg}>
                <img class="card-img-top" src="https://i.ibb.co/nBSvTbZ/tpic1.jpg" alt="Card cap"/>
                <h3>Profile</h3>
              </div>
              <br/><br/>
              <div class="card-body">
                  <table className="table  table-striped ">
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
        <Footer/>
      </div>
    )
  }

}

TutorProfile.propTypes = {};

TutorProfile.defaultProps = {};

export default TutorProfile;