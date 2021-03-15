import React from 'react';
import PropTypes from 'prop-types';
import styles from './ApplicationForm.module.css';

class ApplicationForm extends React.Component {
  constructor() {
    super();
    this.onChangeYHire = this.onChangeYHire.bind(this);
    this.onChangeDurAvail = this.onChangeDurAvail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      YHire: '',
      DurationAvailable: ''
    }
  }

  onChangeYHire(e) {
    this.setState({ YHire: e.target.value })
  }

  onChangeDurAvail(e) {
      this.setState({ DurationAvailable: e.target.value })
  }

  handleSubmit(event) {
    alert('Submitted: ' + this.state.YHire+"\n"+this.state.DurationAvailable);
    event.preventDefault();
    this.setState({
      YHire: '',
      DurationAvailable: ''
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.ApplicationForm}>
        <label>
          Why should we hire you
          <input type="textarea" value={this.state.YHire} onChange={this.onChangeYHire} />
        </label>
        <br/>
        <label>
          Are you available for full duration of internship
          <input type="textarea" value={this.state.DurationAvailable} onChange={this.onChangeDurAvail} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ApplicationForm.propTypes = {};

ApplicationForm.defaultProps = {};

export default ApplicationForm;
