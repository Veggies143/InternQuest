import React from 'react';
import styles from './AfterLoginTutor.module.css';
import HeaderForTutor from '../HeaderForTutor/HeaderForTutor';
import Footer from '../Footer/Footer';

class AfterLoginTutor extends React.Component {

  render() {
    return(
      <div>
        <HeaderForTutor/>
        <div className={styles.AfterLoginTutor} data-testid="AfterLoginTutor">
          AfterLoginTutor Component
        </div>
        <Footer/>
      </div>
    )
  }
}

AfterLoginTutor.propTypes = {};

AfterLoginTutor.defaultProps = {};

export default AfterLoginTutor;
