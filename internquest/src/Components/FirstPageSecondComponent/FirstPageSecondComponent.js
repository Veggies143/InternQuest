import React from 'react';
import {Card, CardDeck,Button} from 'react-bootstrap';
import styles from './FirstPageSecondComponent.module.css';

class FirstPageSecondComponent extends React.Component {

  render() {
    return(
      <div className={styles.AboutInternQuestCard} data-testid="AboutInternQuestCard">
        <Card.Body>  
          <CardDeck>
        <Card><br/>
        <Card.Title style={{textAlignLast:'center'}}><b>Internships</b></Card.Title><br/>
          <Card.Img variant="top" src="https://reason.org/wp-content/uploads/dreamstime_xl_79091934-1200x630.jpg" style={{height:300}} />
          <Card.Body>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This content is a little bit longer.
            </Card.Text>
            <div class="col text-center">
            <Button variant="primary" href='./internshipDetails'>View Internships</Button>
            </div>
          </Card.Body>
        </Card>
        <Card><br/>
        <Card.Title style={{textAlignLast:'center'}}><b>Tutorials</b></Card.Title><br/>
          <Card.Img variant="top" src="https://stackify.com/wp-content/uploads/2017/08/CSharp-Tutorials-Header-min-1280x720.jpg"  style={{height:300}}/>
          <Card.Body>
            <Card.Text>
              This is a wider card with supporting text below as a natural lead-in to
              additional content. This card has even longer content than the first to
              show that equal height action.
            </Card.Text>
            <div class="col text-center">
            <Button variant="primary" href='./courseDetails'>View Tutorials</Button>
            </div>
          </Card.Body>
        </Card>
      </CardDeck>
      </Card.Body>
          
      </div>
    )
  }
}

FirstPageSecondComponent.propTypes = {};

FirstPageSecondComponent.defaultProps = {};

export default FirstPageSecondComponent;
