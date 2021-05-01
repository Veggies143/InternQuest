import React from 'react';
import styles from './AfterLoginEmployer.module.css';
import { CardDeck,Card,Button} from 'react-bootstrap';
import HeaderForEmployer from '../HeaderForEmployer/HeaderForEmployer';
import Footer from '../Footer/Footer';

class AfterLoginEmployer extends React.Component {

  render() {
    return(
      <div>
        <HeaderForEmployer/>
        <div className={styles.AfterLoginEmployer} data-testid="AfterLoginEmployer">
        <Card.Body>  
              <CardDeck>
            <Card><br/>
            <Card.Title style={{textAlignLast:'center'}}><b>View Applicants</b></Card.Title><br/>
              <Card.Img variant="top" src="https://cache.careers360.mobi/media/presets/860X430/presets/860X430/article_images/2020/1/16/AIHMCT-WAT_Application-Form.webp" style={{height:300}} />
              <Card.Body>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
                <div class="col text-center">
                <Button variant="primary" href='./employerApplicantDetails'>View Applicants</Button>
                </div>
              </Card.Body>
            </Card>
            <Card><br/>
            <Card.Title style={{textAlignLast:'center'}}><b>Post Internship</b></Card.Title><br/>
              <Card.Img variant="top" src="https://s3.amazonaws.com/fjwp/blog/wp-content/uploads/2013/04/30195646/20-Companies-Offering-Flexible-Jobs-1024x518.jpg"  style={{height:300}}/>
              <Card.Body>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This card has even longer content than the first to
                  show that equal height action.
                </Card.Text>
                <div class="col text-center">
                <Button variant="primary" href='./internshipForm'>Post InternShip</Button>
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
