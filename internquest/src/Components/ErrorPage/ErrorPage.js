import React from 'react';
import styles from './ErrorPage.module.css';

function redirect() {
  window.location.href="beforeLoginPage"
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