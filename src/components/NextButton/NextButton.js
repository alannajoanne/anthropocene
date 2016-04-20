import './NextButton.scss';

import React, {Component} from 'react';

export default class NextButton extends Component {
  static defaultProps = {
    onClick: (e) => {},
    style: {}
  };

  constructor(props) {
    super(props);
  }

  clicked() {
    setTimeout(() => this.refs.button.blur(), 75);
    this.props.onClick();
  }

  render() {
    return <button className={`NextButton ${this.props.className}`} onClick={this.clicked.bind(this)} title="Next" style={this.props.style}>
      <div className="wrapper">
        <svg className="bottom" width="100%" height="100%" viewBox="0 0 180 67">
          <rect x="1" y="1" width="178" height="65"/>
        </svg>

        <svg className="top" width="100%" height="100%" viewBox="0 0 180 67">
          <rect x="1" y="1" width="178" height="65"/>
        </svg>

        <label>Next</label>
        <i className={`fa fa-angle-right`} />
      </div>
    </button>
  }
}