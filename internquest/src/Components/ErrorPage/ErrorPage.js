import React from 'react';
import PropTypes from 'prop-types';
import styles from './ErrorPage.module.css';

const ErrorPage = () => (
  <div className={styles.ErrorPage} data-testid="ErrorPage">
    ErrorPage Component
  </div>
);

ErrorPage.propTypes = {};

ErrorPage.defaultProps = {};

export default ErrorPage;
