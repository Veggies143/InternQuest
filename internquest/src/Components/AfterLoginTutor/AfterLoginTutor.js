import React from 'react';
import styles from './AfterLoginTutor.module.css';
import { CardDeck,Card,Button} from 'react-bootstrap';
import HeaderForTutor from '../HeaderForTutor/HeaderForTutor';
import Footer from '../Footer/Footer';

class AfterLoginTutor extends React.Component {

  render() {
    return(
      <div>
        <HeaderForTutor/>
        <div className={styles.AfterLoginTutor} data-testid="AfterLoginTutor">
        <Card.Body>  
              <CardDeck>
            <Card><br/>
            <Card.Title style={{textAlignLast:'center'}}><b>View Students</b></Card.Title><br/>
              <Card.Img variant="top" src="https://davhizrhxzcu1.cloudfront.net/assets/long-form/college-students-in-lecture-hall-90a71b8ede7727d414495e17ecb4b4f2152b34a91593a5fca2b9e4037ccbbf09.jpg" style={{height:300}} />
              <Card.Body>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
                <div class="col text-center">
                <Button variant="primary" href='./courseRegistrationDetails'>View Students</Button>
                </div>
              </Card.Body>
            </Card>
            <Card><br/>
            <Card.Title style={{textAlignLast:'center'}}><b>Post Tutorials</b></Card.Title><br/>
              <Card.Img variant="top" src="https://s35691.pcdn.co/wp-content/uploads/2019/05/tips-for-teaching-190515.jpg"  style={{height:300}}/>
              <Card.Body>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This card has even longer content than the first to
                  show that equal height action.
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
