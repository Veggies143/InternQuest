import React from 'react';
import PropTypes from 'prop-types';
import styles from './FirstPage.module.css';

const FirstPage = () => (
  <div className={styles.FirstPage} data-testid="FirstPage">
    <p >First </p>
    <i>Page</i>
    <div id={styles.hi}>
      <p > Hello world</p>
    </div>
  </div>
  
);

FirstPage.propTypes = {};

FirstPage.defaultProps = {};

export default FirstPage;
