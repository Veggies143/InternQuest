import React from 'react';
import PropTypes from 'prop-types';
import styles from './SkillsDropdown.module.css';
import { Multiselect } from "multiselect-react-dropdown";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class SkillsDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      objectArray: [
        { key: "Option 1"  },
        { key: "Option 2"  },
        { key: "Option 3"},
        { key: "Option 4"},
        { key: "Option 5"},
        { key: "Option 6" },
        { key: "Option 7" }
      ],
      selectedValues: [
      ]
    };
    this.style = {
      chips: {
        background: "red"
      },
      searchBox: {
        border: "none",
        "border-bottom": "1px solid blue",
        "border-radius": "0px"
      },
      multiselectContainer: {
        color: "red"
      }
    };
    this.addItem = this.addItem.bind(this);
  }
  addItem() {
    this.selectedValues.push({ key: "Option 3", cat: "Group 1" });
  }

  render() {
    const { objectArray, selectedValues } = this.state;
    return (
      <div className="App">
        
        <div className="col-12 d-md-flex">
          
          <div className="examples col-12 col-md-5">
            <Multiselect
              options={objectArray}
              closeIcon="close"
              displayValue="key"
              selectedValues={selectedValues}
              avoidHighlightFirstOption
            />
          </div>
        </div>
      </div>
    );
  }
}

SkillsDropdown.propTypes = {};

SkillsDropdown.defaultProps = {};

export default SkillsDropdown;
