import React from 'react';
import HeaderBeforeLogin from '../HeaderBeforeLogin/HeaderBeforeLogin';
import FirstPageSecondComponent from '../FirstPageSecondComponent/FirstPageSecondComponent';
import Footer from '../Footer/Footer';

class BeforeLoginPage extends React.Component {

  componentDidMount() {
    localStorage.setItem('isLogin',false);
  }

  // onLogin() {
  //   window.location.href='login'
  // }

  render() {
    return(
      <div>
        <HeaderBeforeLogin/>
        <FirstPageSecondComponent/>
        <Footer/>
      </div>
    )
  }
}

BeforeLoginPage.propTypes = {};

BeforeLoginPage.defaultProps = {};

export default BeforeLoginPage;
