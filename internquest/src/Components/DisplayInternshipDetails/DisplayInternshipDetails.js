import React from 'react';
import styles from './DisplayInternshipDetails.module.css';
import axios from 'axios';
import { TagsSelect } from 'react-select-material-ui';
import HeaderForApplicant from '../HeaderForApplicant/HeaderForApplicant';
import Footer from '../Footer/Footer';

class DisplayInternshipDetails extends React.Component {
  
  constructor() {
    super();
    this.state = {
      Details: [],
      SortedDetails: [],
      options: [
        'Java', 'HTML', 'CSS', 'Python', 'Django', 'JavaScript', 'Machine Learning', 'SQL', 'Music'
      ],
      selectedValues: [],
      MinStipend: '',
      MaxDuration: '',
      Location: '',
      ModeOfInternship: 'Both',
      MaxPeriod: 'Months'
    }
  }
  
  componentDidMount = () => {
    this.getInternshipDetails();
  };
  
  getInternshipDetails = () => {
    axios.get('/api/InternshipDetails')
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

  sortInternships = () => {
    let maxDays = this.state.MaxDuration;
    let maxPeriod = this.state.MaxPeriod;
    let minPay = this.state.MinStipend;
    let loc = this.state.Location;
    let mode = this.state.ModeOfInternship;
    let skills = [];
    skills = this.state.selectedValues;
    let sortedDetails = this.state.Details;
    //console.log(skills+" "+maxDays+" "+maxPeriod+" "+minPay)

    if((skills !== null && skills.length !== 0)) {
      let tempDetails = [];
      sortedDetails.forEach(element => {
        let isValid = true;
        if(this.state.selectedValues !== null) {
          this.state.selectedValues.forEach(skill => {
            var temp = element.SkillsRequired;
            var arr = temp.split("\n");
            console.log(arr)
            if(!temp.includes(skill)) {
              isValid = false;
              return;
            }
          });
        }
        if(isValid) {
          tempDetails.push(element);
        }
      });
      sortedDetails = tempDetails;
    }
    if(minPay !== '') {
      let tempDetails = [];
      sortedDetails.forEach(element => {
        if(element.Stipend >= minPay)
          tempDetails.push(element);
      });
      sortedDetails = tempDetails;
    }
    if(maxDays !== '') {
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
    if(loc !== '') {
      let tempDetails = [];
      sortedDetails.forEach(element => {
        if(element.Location === loc) {
          tempDetails.push(element);
        }
      });
      sortedDetails = tempDetails;
    }
    if(mode !== '' && mode !== 'Both') {
      let tempDetails = [];
      sortedDetails.forEach(element => {
        if(element.ModeOfInternship === mode) {
          tempDetails.push(element);
        }
      });
      sortedDetails = tempDetails;
    }

    this.setState({SortedDetails: sortedDetails});

  }
  
  handleSubmitOnSort = (event) => {
    event.preventDefault();
  }

  displayInternship = (value) => {
    //console.log("Here in function  "+value);
    let temp = {};
    this.state.SortedDetails.forEach(element => {
      if(element.CompanyName === value.CompanyName && element.Stipend === value.Stipend && element.Period===value.Period) {
        temp = element;
        return;
      }
    });
    //console.log(temp.CompanyName+" "+temp.Stipend);
    localStorage.setItem('internDetails', JSON.stringify(temp));
    window.location.href="singleInternshipDisplay";
  }

  render() {
    return(
      <div>
        <HeaderForApplicant/>
        <div className={styles.DispalyInternshipDetails} data-testid="DispalyInternshipDetails">

          <div className="row">

            <div className="col-4" id={styles.sortInternships}>
              <h3>SELECT YOUR PREFERENCES</h3> 
              <div>
                <TagsSelect
                  label="Skills"
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
                  <label>Minimum Stipend</label>
                  <div>
                    <input 
                      name="MinStipend" 
                      placeholder="Enter Minimum Stipend" 
                      class="form-control" 
                      pattern="[0-9]*"
                      value={this.state.MinStipend} 
                      onChange={this.handleChangeOnSubmitForm} >
                    </input>
                  </div>
                </div>

                <div class="form-group">
                  <label>Location</label>
                  <div>
                    <input 
                      name="Location" 
                      placeholder="Enter Location" 
                      class="form-control" 
                      value={this.state.Location} 
                      onChange={this.handleChangeOnSubmitForm} >
                    </input>
                  </div>
                </div>

                <div class="form-group">
                  <label>Mode of Internship</label>
                  <div>
                    <select name='ModeOfInternship' class="form-control" value={this.state.ModeOfInternship} onChange={this.handleChangeOnSubmitForm} >
                      <option value="Both">Both</option>
                      <option value="WFH">Work From Home</option>
                      <option value="Remote">Office</option>
                    </select>
                  </div>
                </div>

                <div class="form-group">
                  <label>Maximum Duration of Internship</label>
                  <div>
                    <input 
                      name="MaxDuration" 
                      placeholder="Enter Maximum Duration of Internship" 
                      class="form-control" 
                      pattern="[0-9]*"
                      value={this.state.MaxDuration} 
                      onChange={this.handleChangeOnSubmitForm} >
                    </input>
                  </div>
                </div>

                <div class="form-group">
                  <label>Maximum Period of Internship</label>
                  <div>
                    <select name='MaxPeriod' class="form-control" value={this.state.MaxPeriod} onChange={this.handleChangeOnSubmitForm} >
                      <option value="Months">Month(s)</option>
                      <option value="Weeks">Week(s)</option>
                      <option value="Days">Day(s)</option>
                    </select>
                  </div>
                </div>

                <button class="btn btn-info" onClick={this.sortInternships}>Sort Preferences</button>

              </form>
              
            </div>
              
            <div className="col-8" id={styles.details}>
              <b>Number of internships: {this.state.SortedDetails.length}</b>
              {this.state.SortedDetails.map((detail, index) => (
                <div value={detail} onClick={this.displayInternship.bind(this, detail)} key={index}>
                  
                  <h1> Company Name: {detail.CompanyName} </h1>
                  <h2>Job Role: {detail.JobRole}</h2>
                  <i>Duration: {detail.Duration}</i>
                  <br/>
                  <i>Period: {detail.Period}</i>
                  <br/>
                  <i>Stipend: {detail.Stipend}</i>
                  <br/>
                  <br/>
                </div>
              ))}
            </div>

          </div>
        </div>
        <Footer/>
      </div>
    )
  }

}

DisplayInternshipDetails.propTypes = {};

DisplayInternshipDetails.defaultProps = {};

export default DisplayInternshipDetails;
