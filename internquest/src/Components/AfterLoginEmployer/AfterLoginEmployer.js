import React from 'react';
import styles from './AfterLoginEmployer.module.css';
import { CardDeck,Card,Button} from 'react-bootstrap';
import AboutInternQuest from '../AboutInternQuest/AboutInternQuest';
import HeaderForEmployer from '../HeaderForEmployer/HeaderForEmployer';
import Footer from '../Footer/Footer';

class AfterLoginEmployer extends React.Component {

  goToPostIntern = () => {
    window.location.href='./internshipForm'
  }

  goToReviewApp = () => {
    window.location.href='./employerApplicantDetails'
  }

  render() {
    return(
      <div>
        <HeaderForEmployer/>
        <AboutInternQuest/>
        <div className={styles.AfterLoginEmployer} data-testid="AfterLoginEmployer">
        <Card.Body>  
              <CardDeck>
            
            <Card><br/>
            <Card.Title style={{textAlignLast:'center'}}><b>Post Internship</b></Card.Title><br/>
              <Card.Img variant="top" onClick={this.goToPostIntern} src="https://s3.amazonaws.com/fjwp/blog/wp-content/uploads/2013/04/30195646/20-Companies-Offering-Flexible-Jobs-1024x518.jpg"  style={{height:300}}/>
              <Card.Body>
                <Card.Text>
                We can never fall short when it comes to recruiting, hiring and growing our workforce. It is the employees who make our organization’s success a reality.
                </Card.Text>
                <div class="col text-center">
                <Button variant="primary" href='./internshipForm'>Post Internship</Button>
                </div>
              </Card.Body>
            </Card>
            <Card><br/>
            <Card.Title style={{textAlignLast:'center'}}><b>View Applications</b></Card.Title><br/>
              <Card.Img onClick={this.goToReviewApp} variant="top" src="https://cache.careers360.mobi/media/presets/860X430/presets/860X430/article_images/2020/1/16/AIHMCT-WAT_Application-Form.webp" style={{height:300}} />
              <Card.Body>
                <Card.Text>
                Click here to view the applicants who have shown interest to work for you. Kindly let them know the reason of their selection/rejection.
                </Card.Text>
                <div class="col text-center">
                <Button variant="primary" href='./employerApplicantDetails'>View Applications</Button>
                </div>
              </Card.Body>
            </Card>
          </CardDeck>
          </Card.Body>
        </div>
        <Footer/>
      </div>
    )
  }
}

AfterLoginEmployer.propTypes = {};

AfterLoginEmployer.defaultProps = {};

export default AfterLoginEmployer;
