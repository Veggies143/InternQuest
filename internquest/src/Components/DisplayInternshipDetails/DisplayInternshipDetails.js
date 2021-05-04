import React from 'react';
import styles from './DisplayInternshipDetails.module.css';
import axios from 'axios';
import { TagsSelect } from 'react-select-material-ui';
import {Card} from 'react-bootstrap';
import HeaderForApplicant from '../HeaderForApplicant/HeaderForApplicant';
import Footer from '../Footer/Footer';

class DisplayInternshipDetails extends React.Component {
  
  constructor() {
    super();
    this.state = {
      Details: [],
      SortedDetails: [],
      options: [
        'Java', 'C', 'DBMS', 'Problem Solving', 'Communication Skills', 'Python', 'Operating Systems', 'Computer Architecture', 'Analytical Skills', 
        'Unit Testing', 'Integration Testing', 'MS Excel','Ms Word',
        'OOPS','Market Research','C++','Oracle','MySQL',
        'RDBMS','Computer Organization','SEO','Computer Architecture','Violin Skills',
        'Art','Design','Dance','Painting','HTML', 'Latex'
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
            if(!arr.includes(skill)) {
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
        <div className={styles.DispalyInternshipDetails}data-testid="DispalyInternshipDetails">
          <div className={styles.fulleff}>
          <div className="row" >
            
            <div className="col-4" id={styles.sortInternships} style={{paddingTop:30}} >
            <Card className={styles.left} >
              <Card.Body >
              <b><u style={{fontSize:18, textAlign:'center',color:'#00b09b'}}>SELECT YOUR PREFERENCES</u></b>
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

                <div className="form-group">
                  <label><b>Minimum Stipend</b></label>
                  <div>
                    <input
                      name="MinStipend"
                      placeholder="Enter Minimum Stipend"
                      className="form-control"
                      pattern="[0-9]*"
                      value={this.state.MinStipend}
                      onChange={this.handleChangeOnSubmitForm} >
                    </input>
                  </div>
                </div>

                <div className="form-group">
                  <label><b>Location</b></label>
                  <div>
                    <input
                      name="Location"
                      placeholder="Enter Location"
                      className="form-control"
                      value={this.state.Location}
                      onChange={this.handleChangeOnSubmitForm} >
                    </input>
                  </div>
                </div>

                  <div className="row">
                    <div className="col">

                    <div className="form-group">
                  <label><b>Maximum Period</b></label>
                  <div>
                    <select name='MaxPeriod' className="form-control"value={this.state.MaxPeriod} onChange={this.handleChangeOnSubmitForm}
>
                      <option value="Months">Month(s)</option>
                      <option value="Weeks">Week(s)</option>
                      <option value="Days">Day(s)</option>
                    </select>
                  </div>
                </div>
              </div>
                    <div className="col">
                      
                    <div className="form-group">
                  <label><b> Maximum Duration </b></label>
                  <div>
                    <input
                      name="MaxDuration"
                      placeholder="Enter Maximum Duration of Internship"
                      className="form-control"
                      pattern="[0-9]*"
                      value={this.state.MaxDuration}
                      onChange={this.handleChangeOnSubmitForm} >
                    </input>
                  </div>
                </div>

                    </div>
                  </div>
                    <div className="form-group">
                  <label><b>Mode of Internship</b></label>
                  <div>
                    <select name='ModeOfInternship'className="form-control" value={this.state.ModeOfInternship}onChange={this.handleChangeOnSubmitForm} >
                      <option value="Both">Both</option>
                      <option value="WFH">Work From Home</option>
                      <option value="Office">Office</option>
                    </select>
                  </div>
                </div>
                <div class="col text-center">
                <button className="btn btn-info"onClick={this.sortInternships}>Sort Preferences</button>
                </div>
              </form>

              </Card.Body>
              </Card>
            </div>
          

            <div className="col-8" id={styles.details}>
            <p style={{fontSize:20 , textAlign:'center',color:' #e96443'}}>Number of internships: <b>{this.state.SortedDetails.length}</b></p>
              <div className={styles.hcard}>

              {this.state.SortedDetails.map((detail, index) => (
                <div value={detail}onClick={this.displayInternship.bind(this, detail)} key={index}>
                  <Card>
                    <Card.Body>
                   <p style={{fontSize:25,color:'#89253e'}}>{detail.JobRole} </p>
                  <p>In <b> {detail.CompanyName}</b></p>
                  <div className="row">
                  <div className="col-3">
                    <i class="fa fa-calendar"> Duration</i>
                    <br/><p >{detail.Duration} {detail.Period}</p>
                  </div>
                  <div className="col-3">
                    <i class="fa fa-money" aria-hidden="true"> Stipend</i>
                    <br/> <p>{detail.Stipend} /-</p>
                  </div>
                </div>
                </Card.Body>
                  </Card>
                  <br/>
                </div>
              ))}
              
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

DisplayInternshipDetails.propTypes = {};

DisplayInternshipDetails.defaultProps = {};

export default DisplayInternshipDetails;
