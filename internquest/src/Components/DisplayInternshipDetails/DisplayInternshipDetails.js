import React from 'react';
import styles from './DisplayInternshipDetails.module.css';
import axios from 'axios';
import { TagsSelect } from 'react-select-material-ui';

class DisplayInternshipDetails extends React.Component {
  
  constructor() {
    super();
    this.state = {
      Details: [],
      options: ['Personal', 'Hiii', 'Work', 'Important', 'Optional', 'hello','Required'],
      selectedValues: []
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
      console.log("Data received!!");
    })
    .catch(() => {
      alert("Error retreving data");
    });
  };

  handleChange = (values) => {
    const select =values;
    this.setState({selectedValues:select});
    setTimeout(()=>{console.log(this.state.selectedValues)},250);
    
  };

  render() {
    return(
      <div className={styles.DispalyInternshipDetails} data-testid="DispalyInternshipDetails">

        <div className="row">

          <div className="col-4" id={styles.sortInternships}>
            <b>Keep your preferences</b> 
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
            
          <div className="col-8" id={styles.details}>
            {this.state.Details.map((detail, index) => (
              <div key={index}>
                <h1>Company Name: {detail.CompanyName}</h1>
                <p>About Company: {detail.AboutCompany}</p>
                <h2>Job Role: {detail.JobRole}</h2>
                <p>Job Description: {detail.JobDescription}</p>
                <i>Duration: {detail.Duration}</i>
                <br/>
                <i>Period: {detail.Period}</i>
                <br/>
                <b>SkillsRequired: {detail.SkillsRequired}</b>
                <br/>
                <p>Benefits: {detail.Benefits}</p>
                <i>Stipend: {detail.Stipend}</i>
                <br/>
                <b>Date: {detail.date}</b> 
                <br/>
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

DisplayInternshipDetails.propTypes = {};

DisplayInternshipDetails.defaultProps = {};

export default DisplayInternshipDetails;
