import React from 'react';
import HeaderForApplicant from '../HeaderForApplicant/HeaderForApplicant';
import FirstPageSecondComponent from '../FirstPageSecondComponent/FirstPageSecondComponent';
import Footer from '../Footer/Footer';

class AfterLoginApplicant extends React.Component {

  render() {
    return(
      <div>
        <HeaderForApplicant/>
        <FirstPageSecondComponent/>
        <Footer/>
      </div>
    )
  }
}

AfterLoginApplicant.propTypes = {};

AfterLoginApplicant.defaultProps = {};

export default AfterLoginApplicant;
