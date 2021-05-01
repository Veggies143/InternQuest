import React from 'react';
import styles from './AfterLoginTutor.module.css';
import { CardDeck,Card,Button} from 'react-bootstrap';
import HeaderForTutor from '../HeaderForTutor/HeaderForTutor';
import AboutInternQuest from '../AboutInternQuest/AboutInternQuest';
import Footer from '../Footer/Footer';

class AfterLoginTutor extends React.Component {

  goToViewRegs = () => {
    window.location.href='./courseRegistrationDetails'
  }

  goToPostCourse = () => {
    window.location.href='./courseDetailsForm'
  }

  render() {
    return(
      <div>
        <HeaderForTutor/>
        <AboutInternQuest/>
        <div className={styles.AfterLoginTutor} data-testid="AfterLoginTutor">
        <Card.Body>  
              <CardDeck>
            <Card><br/>
            <Card.Title style={{textAlignLast:'center'}}><b>Enrolled Students</b></Card.Title><br/>
              <Card.Img onClick={this.goToViewRegs} variant="top" src="https://davhizrhxzcu1.cloudfront.net/assets/long-form/college-students-in-lecture-hall-90a71b8ede7727d414495e17ecb4b4f2152b34a91593a5fca2b9e4037ccbbf09.jpg" style={{height:300}} />
              <Card.Body>
                <Card.Text>
                The most important principle for designing learning is to see it not as information design but as designing an experience. Click here to view enrolled students. 
                </Card.Text>
                <div class="col text-center">
                <Button variant="primary" href='./courseRegistrationDetails'>View Enrolled Students</Button>
                </div>
              </Card.Body>
            </Card>
            <Card><br/>
            <Card.Title style={{textAlignLast:'center'}}><b>Post Tutorials</b></Card.Title><br/>
              <Card.Img onClick={this.goToPostCourse} variant="top" src="https://s35691.pcdn.co/wp-content/uploads/2019/05/tips-for-teaching-190515.jpg"  style={{height:300}}/>
              <Card.Body>
                <Card.Text>
                  It is the supereme art of the teacher to awaken the joy of learning. Click here to post a tutorial, thus helping the student community.
                </Card.Text>
                <div class="col text-center">
                <Button variant="primary" href='./courseDetailsForm'>Post Tutorials</Button>
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

AfterLoginTutor.propTypes = {};

AfterLoginTutor.defaultProps = {};

export default AfterLoginTutor;
