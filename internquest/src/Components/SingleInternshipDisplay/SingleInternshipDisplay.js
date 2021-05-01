import React from 'react';
import styles from './SingleInternshipDisplay.module.css';
import {Card} from 'react-bootstrap';
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
          
          <Card className={styles.cstyle}>
            <Card.Header className={styles.cbody}>
            <h3 style={{textAlign:'center'}}>  {this.state.DetailsInfo.CompanyName} </h3>
            </Card.Header>
           <Card.Body>
               
                <p style={{fontSize:20}}> &emsp;<b>{this.state.DetailsInfo.JobRole}</b></p>
                <p > &emsp;&emsp;( {this.state.DetailsInfo.CompanyName} )</p>
                
                <p>  &emsp;&emsp;Mode of Internship:  <b style={{fontSize:20}} >{this.state.DetailsInfo.JobRole}</b></p>
                &emsp;&emsp;
                <i class="fa fa-map-marker" aria-hidden="true"> {this.state.DetailsInfo.JobRole}</i>
                <br/><br/>

                <div className="row">
                &emsp;&emsp;
                  <div className="col-3">
                    <i class="fa fa-calendar"> Duration</i>
                    <br/><p >{this.state.DetailsInfo.Duration}  {this.state.DetailsInfo.Period}</p>
                  </div>
                  <div className="col-3">
                    <i class="fa fa-money" aria-hidden="true"> Stipend</i>
                    <br/> <p>{this.state.DetailsInfo.Stipend} </p>
                  </div>
                </div>
      
                <br/>
                <hr/>
                <b style={{fontSize:20}}>About {this.state.DetailsInfo.CompanyName} :</b>
                  <p style={{textAlign:'left'}}><br/>  &emsp; {this.state.DetailsInfo.AboutCompany}</p>
                <br/>
                <div className={styles.lspace}>
                    <b style={{fontSize:20}}>Job Description:  </b>
                    {this.state.JobDescription.map((ele, index) => (
                      <div key={index} >
                        <p style={{paddingLeft:10}}>{ele}</p>
                      </div>
                    ))}

                    <br/>

                    <b style={{fontSize:20}}>Skills Required: </b><br/><br/>
                    <div className="container">
                      <div className="row">
                      {this.state.Skills.map((ele, index) => (
                      <div key={index}  id='cardItem' className="col-sm-3" >
                        <p style={{paddingLeft:10,textAlign:'center', borderRadius:15, 
                        background:"linear-gradient(to top, #9bc5c3, #9bc5c3)" }}>{ele}</p>
                      </div>
                    ))}
                      </div>
                    </div>
                    
                    <b style={{fontSize:20}}>Incentives: </b><br/>
                    {this.state.Benefits.map((ele, index) => (
                      <div key={index}>
                        <ul>
                        <p style={{paddingLeft:10}}><li>{ele}</li></p>
                        </ul>
                      </div>
                    ))}
                    <br/>

                    <b style={{fontSize:20}}>Expected Requirements: </b><br/>
                    {this.state.Benefits.map((ele, index) => (
                      <div key={index}>
                        <ul>
                        <p style={{paddingLeft:10}}><li>{ele}</li></p>
                        </ul>
                      </div>
                    ))}

                </div>
                <div class="col text-center">
                <button className='btn btn-info btn-lg' onClick={this.onApplyIntern}>Apply now</button>
                </div>
                <br/>
            </Card.Body>
          </Card>
        </div>
        <Footer/>
      </div>
    )
  }

}

SingleInternshipDisplay.propTypes = {};

SingleInternshipDisplay.defaultProps = {};

export default SingleInternshipDisplay;
