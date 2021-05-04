import React from 'react';
import styles from './DisplayCourseDetails.module.css';
import axios from 'axios';
import { TagsSelect } from 'react-select-material-ui';
import HeaderForApplicant from '../HeaderForApplicant/HeaderForApplicant';
import Footer from '../Footer/Footer';
import {Card} from 'react-bootstrap';

class DisplayCourseDetails extends React.Component {
  state = {
    Details: [],
    SortedDetails: [],
    options: [
      'Cooking', 'Crafting', 'Western Dance', 'Java', 'DBMS', 'JavaScript', 'Machine Learning', 'HTML'
    ],
    selectedValues: [],
    MaxFee: '',
    MaxDuration: '',
    MaxPeriod: 'Months'
  }
  
  componentDidMount = () => {
    this.getCourseDetails();
  };
  
  getCourseDetails = () => {
    axios.get('/api/CourseDetails')
    .then((response) => {
      const data=response.data;
      this.setState({Details:data});
      this.setState({SortedDetails:data});
    })
    .catch(() => {
      alert("Error retreving data");
    });
  };

  handleChange = (values) => {
    const select =values;
    this.setState({selectedValues:select});
    //setTimeout(()=>{console.log(this.state.selectedValues)},250);
    
  };

  handleChangeOnSubmitForm = ({target}) => {
    const {name,value} = target;
    this.setState({
      [name]: value
    });
  };

  handleSubmitOnSort = (event) => {
    event.preventDefault();
  }

  sortCourses = () => {
    let maxDays = this.state.MaxDuration;
    let maxPeriod = this.state.MaxPeriod;
    let maxFee = this.state.MaxFee;
    let courses = [];
    courses = this.state.selectedValues;
    let sortedDetails = this.state.Details;
    console.log(courses+" "+maxDays+" "+maxPeriod+" "+maxFee)

    if((courses!==null && courses.length !== 0)) {
      console.log("Courses");
      let tempDetails = [];
      sortedDetails.forEach(element => {
        
        var temp = element.CourseOffered;
        this.state.selectedValues.forEach(course => {
          if(temp === course)
            tempDetails.push(element);
        });

      });
      sortedDetails = tempDetails;
    }
    if(maxFee !== '') {
      console.log("Fees");
      let tempDetails = [];
      sortedDetails.forEach(element => {
        if(element.Fees <= maxFee)
          tempDetails.push(element);
      });
      sortedDetails = tempDetails;
    }
    if(maxDays !== '') {
      console.log("Days")
      let tempDetails = [];
      if(maxPeriod === 'Months') 
        maxDays = maxDays*30;
      else if(maxPeriod === 'Weeks')
        maxDays = maxDays*7;

      sortedDetails.forEach(element => {
        let temp = element.Duration;
        if(element.Period === 'Months')
          temp = temp*30;
        else if(element.Period === 'Weeks')
          temp = temp*7;

        if(temp <= maxDays)
          tempDetails.push(element);
      });
      sortedDetails = tempDetails;
    }
    this.setState({SortedDetails: sortedDetails});

  }

  displayCourse = (value) => {
    //console.log("Here in function  "+value);
    let temp = {};
    this.state.SortedDetails.forEach(element => {
      if(element.Name === value.Name && element.CourseOffered === value.CourseOffered && element.Fees===value.Fees) {
        temp = element;
        return;
      }
    });
    //console.log(temp.Name+" "+temp.Fees);
    localStorage.setItem('courseDetails', JSON.stringify(temp));
    window.location.href = 'singleCourseDisplay';
  }

  render() {
    return(
      <div>
        <HeaderForApplicant/>
        <div className={styles.DispalyCourseDetails}data-testid="DispalycourseDetails">
        <div className={styles.fullcard}>
          <div className="row" >
            
            <div className="col-4" style={{paddingTop:30}}>
              <Card className={styles.left}>
                <Card.Body>
                <b><u style={{fontSize:18, textAlign:'center',color:'#00b09b'}}>SELECT YOUR PREFERENCES</u></b>
              <div>
                <TagsSelect
                  label="Courses"
                  options={this.state.options}
                  onChange={this.handleChange}
                  SelectProps={{
                    isCreatable: true,
                    msgNoOptionsAvailable: 'All tags are selected',
                    msgNoOptionsMatchFilter: 'No tag matches the filter',
                  }}
                />
              </div>

              <br/>

              <form onSubmit={this.handleSubmitOnSort}>

                <div class="form-group">
                  <label>Maximum Fee</label>
                  <div>
                    <input
                      name="MaxFee"
                      placeholder="Enter Maximum Fee"
                      class="form-control"
                      pattern="[0-9]*"
                      value={this.state.MaxFee}
                      onChange={this.handleChangeOnSubmitForm} >
                    </input>
                  </div>
                </div>

                <div className="row">
                  <div className="col">

                  <div class="form-group">
                  <label>Maximum Duration </label>
                  <div>
                    <input
                      name="MaxDuration"
                      placeholder="Enter Maximum Duration of Tutorial"
                      class="form-control"
                      pattern="[0-9]*"
                      value={this.state.MaxDuration}
                      onChange={this.handleChangeOnSubmitForm} >
                    </input>
                  </div>
                </div>

                  </div>
                  <div className="col">
                    
                  <div class="form-group">
                  <label>Maximum Period </label>
                  <div>
                    <select name='MaxPeriod' class="form-control"value={this.state.MaxPeriod} onChange={this.handleChangeOnSubmitForm}
>
                      <option value="Months">Month(s)</option>
                      <option value="Weeks">Week(s)</option>
                      <option value="Days">Day(s)</option>
                    </select>
                  </div>
                </div>

                    </div>
                </div>             
          
                <div class="col text-center">
                <button class="btn btn-info"onClick={this.sortCourses}>Sort Preferences</button>
                </div>
              </form>
              </Card.Body>
              </Card>
            </div>
           

            <div className="col-8" >
            <div className={styles.hcard}>
                <Card.Body>
                  <div>
              {this.state.SortedDetails.map((detail, index) => (
                <div  value={detail} onClick={this.displayCourse.bind(this, detail)} key={index}>
                  <Card >
                    <Card.Body>
                    <p style={{fontSize:20,color:'#89253e'}}><b>{detail.CourseOffered}</b></p>
                  <p>By <b>{detail.Name}</b></p>
                  <div className="row">
                  <div className="col-3">
                    <i class="fa fa-calendar"> Duration</i>
                    <br/><p >{detail.Duration} {detail.Period}</p>
                  </div>
                  <div className="col-3">
                    <i class="fa fa-money" aria-hidden="true"> Fees</i>
                    <br/> <p>{detail.Fees} /-</p>
                  </div>
                </div>
                </Card.Body>
                  </Card>
                  <br/>
                </div>
              ))}
              </div>
              </Card.Body>
              </div>
            </div>
          </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

DisplayCourseDetails.propTypes = {};

DisplayCourseDetails.defaultProps = {};

export default DisplayCourseDetails;
