import React from 'react';
import styles from './SingleInternshipDisplay.module.css';
import HeaderForApplicant from '../HeaderForApplicant/HeaderForApplicant';
import Footer from '../Footer/Footer';

class SingleInternshipDisplay extends React.Component {

  constructor() {
    super();
    this.state = {
      DetailsInfo: {},
      Skills: [],
      Benefits: [],
      JobDescription: []
    }
  }

  componentDidMount() {
    let data=localStorage.getItem('internDetails');
    data = JSON.parse(data);
    this.setState({DetailsInfo: data});

    let skillsArray = data.SkillsRequired.split("\n");
    let jobDesArray = data.JobDescription.split("\n");
    let benefitsArray = data.Benefits.split("\n");

    setTimeout(this.splitData(skillsArray,jobDesArray,benefitsArray),500);
  }

  splitData = (s,j,b) => {
    this.setState({Skills: s});
    this.setState({JobDescription: j});
    this.setState({Benefits: b});
    
  }
  
  onApplyIntern = () => {
    window.location.href="applicationForm";
  }
  
  render() {
    return(
      <div>
        <HeaderForApplicant/>
        <div className={styles.SingleInternshipDisplay} data-testid="SingleInternshipDisplay">
          <b>SingleInternshipDisplay Component</b>
          <div>
            <button className='btn btn-info' onClick={this.onApplyIntern}>Apply</button>
            <h1> Company Name: {this.state.DetailsInfo.CompanyName} </h1>
            <br/>
            <p>About Company: {this.state.DetailsInfo.AboutCompany}</p>
            <h2>Job Role: {this.state.DetailsInfo.JobRole}</h2>
            <br/>

            <h3>Job Description:  </h3>
            {this.state.JobDescription.map((ele, index) => (
              <div key={index}>
                <p>{ele}</p>
              </div>
            ))}

            <i>Duration: {this.state.DetailsInfo.Duration}</i>
            <br/>
            <br/>
            <i>Period: {this.state.DetailsInfo.Period}</i>
            <br/>
            <br/>

            <b>SkillsRequired: </b>
            {this.state.Skills.map((ele, index) => (
              <div key={index}>
                <p>{ele}</p>
              </div>
            ))}

            <b>Benefits: </b>
            {this.state.Benefits.map((ele, index) => (
              <div key={index}>
                <p>{ele}</p>
              </div>
            ))}

            <i>Stipend: {this.state.DetailsInfo.Stipend}</i>
            
            <br/>
            <br/>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }

}

SingleInternshipDisplay.propTypes = {};

SingleInternshipDisplay.defaultProps = {};

export default SingleInternshipDisplay;
