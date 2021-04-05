import React from 'react';
import PropTypes from 'prop-types';
import styles from './ErrorPage.module.css';

function redirect() {
  window.location.href="firstPage"
}

 const ErrorPage = () => (
  <div className={styles.Error}>  
    <div className={styles.Ebutton}>
      <button  className= "btn  btn-danger btn-lg" onClick={redirect}>Take me home</button>
    </div> 
  </div>
    
 );


ErrorPage.propTypes = {};

ErrorPage.defaultProps = {};

export default ErrorPage;