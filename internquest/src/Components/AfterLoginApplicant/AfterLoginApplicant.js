import React from 'react';
import styles from './AfterLoginApplicant.module.css';
import HeaderForApplicant from '../HeaderForApplicant/HeaderForApplicant';
import Footer from '../Footer/Footer';

class AfterLoginApplicant extends React.Component {

  render() {
    return(
      <div>
        <HeaderForApplicant/>
        <div className={styles.AfterLoginApplicant} data-testid="AfterLoginApplicant">
          AfterLoginApplicant Component
        </div>
        <Footer/>
      </div>
    )
  }
}

AfterLoginApplicant.propTypes = {};

AfterLoginApplicant.defaultProps = {};

export default AfterLoginApplicant;
