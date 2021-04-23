import React from 'react';
import styles from './AfterLoginEmployer.module.css';
import HeaderForEmployer from '../HeaderForEmployer/HeaderForEmployer';
import Footer from '../Footer/Footer';

class AfterLoginEmployer extends React.Component {

  render() {
    return(
      <div>
        <HeaderForEmployer/>
        <div className={styles.AfterLoginEmployer} data-testid="AfterLoginEmployer">
          AfterLoginEmployer Component
        </div>
        <Footer/>
      </div>
    )
  }
}

AfterLoginEmployer.propTypes = {};

AfterLoginEmployer.defaultProps = {};

export default AfterLoginEmployer;
