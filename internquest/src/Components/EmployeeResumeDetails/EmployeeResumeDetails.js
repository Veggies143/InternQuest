import React from 'react';
import styles from './EmployeeResumeDetails.module.css';

class EmployeeResumeDetails extends React.Component {

  render(){
    return(
      <div className={styles.EmployeeResumeDetails} data-testid="EmployeeResumeDetails">
        <h1>EmployeeResumeDetails Component</h1>
      </div>
    )
  }
}

EmployeeResumeDetails.propTypes = {};

EmployeeResumeDetails.defaultProps = {};

export default EmployeeResumeDetails;
