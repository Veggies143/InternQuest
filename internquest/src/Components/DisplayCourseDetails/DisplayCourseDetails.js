import React from 'react';
import styles from './DisplayCourseDetails.module.css';
import axios from 'axios';
import { TagsSelect } from 'react-select-material-ui';

class DisplayCourseDetails extends React.Component {
  state = {
    Details: [],
    SortedDetails: [],
    options: [
      'Java', 'HTML', 'CSS', 'Python', 'Django', 'Javascript', 'Machine Learning', 'SQL'
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
      console.log("Data received!!");
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
    let sortedDetails = this.state.SortedDetails;
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
      <div className={styles.DispalyCourseDetails} data-testid="DispalycourseDetails">

        <div className="row">

          <div className="col-4">
            <b>Keep your preferences</b> 
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
                    placeholder="Maximum Fee" 
                    class="form-control" 
                    pattern="[0-9]*"
                    value={this.state.MaxFee} 
                    onChange={this.handleChangeOnSubmitForm} >
                  </input>
                </div>
              </div>

              <div class="form-group">
                <label>Maximum Duration of the course</label>
                <div>
                  <input 
                    name="MaxDuration" 
                    placeholder="Maximum Duration of course" 
                    class="form-control" 
                    pattern="[0-9]*"
                    value={this.state.MaxDuration} 
                    onChange={this.handleChangeOnSubmitForm} >
                  </input>
                </div>
              </div>

              <div class="form-group">
                <label>Maximum Period of course</label>
                <div>
                  <select name='MaxPeriod' class="form-control" value={this.state.MaxPeriod} onChange={this.handleChangeOnSubmitForm} >
                    <option value="Months">Month/s</option>
                    <option value="Weeks">Week/s</option>
                    <option value="Days">Days</option>
                  </select>
                </div>
              </div>

              <button class="btn btn-info" onClick={this.sortCourses}>Sort Courses</button>

            </form>
          </div>

          <div className="col-8">
            {this.state.SortedDetails.map((detail, index) => (
              <div  value={detail} onClick={this.displayCourse.bind(this, detail)} key={index}>
                <h1>Name: {detail.Name}</h1>
                <p>Course Offered: {detail.CourseOffered}</p>
                <i>Duration: {detail.Duration}</i>
                <br/>
                <i>Period: {detail.Period}</i>
                <br/>
                <p>About Yourself: {detail.AboutYourself}</p>
                <p>Course Description: {detail.CourseDescription}</p>
                <p>Benefits: {detail.Benefits}</p>
                <i>Fees: {detail.Fees}</i>
                <br/>
                <b>Date: {detail.date}</b> 
                <br/>
                <h2>{detail.TutorDetails.email}</h2>
                <br/>
                <br/>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    )
  }
}

DisplayCourseDetails.propTypes = {};

DisplayCourseDetails.defaultProps = {};

export default DisplayCourseDetails;
