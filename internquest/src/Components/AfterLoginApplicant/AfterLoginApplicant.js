import React from 'react';
import HeaderForApplicant from '../HeaderForApplicant/HeaderForApplicant';
import {Card, CardDeck,Button} from 'react-bootstrap';
import styles from './AfterLoginApplicant.module.css';
import Footer from '../Footer/Footer';

class AfterLoginApplicant extends React.Component {

  goToCourses = () => {
    window.location.href='./courseDetails'
  }

  goToInternships = () => {
    window.location.href='./internshipDetails'
  }

  render() {
    return(
      <div>
        <HeaderForApplicant/>
        <div className={styles.AboutInternQuestCard} data-testid="AboutInternQuestCard">
        <Card.Body>  
          <CardDeck>
        <Card><br/>
        <Card.Title style={{textAlignLast:'center'}}><b>Internships</b></Card.Title><br/>
          <Card.Img variant="top" onClick={this.goToInternships} src="https://reason.org/wp-content/uploads/dreamstime_xl_79091934-1200x630.jpg" style={{height:300}} />
          <Card.Body>
            <Card.Text>
            The only way to do great work is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. 
            </Card.Text>
            <div class="col text-center">
            <Button variant="primary" href='./internshipDetails'>View Internships</Button>
            </div>
          </Card.Body>
        </Card>
        <Card><br/>
        <Card.Title style={{textAlignLast:'center'}}><b>Tutorials</b></Card.Title><br/>
          <Card.Img variant="top" onClick={this.goToCourses} src="https://stackify.com/wp-content/uploads/2017/08/CSharp-Tutorials-Header-min-1280x720.jpg"  style={{height:300}}/>
          <Card.Body>
            <Card.Text>
            In order to create an engaging learning experience, the role of instructor is optional, but the role of learner is essential.
            </Card.Text>
            <div class="col text-center">
            <Button variant="primary" href='./courseDetails'>View Tutorials</Button>
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

AfterLoginApplicant.propTypes = {};

AfterLoginApplicant.defaultProps = {};

export default AfterLoginApplicant;
