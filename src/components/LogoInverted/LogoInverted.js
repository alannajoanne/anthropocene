import React, {Component} from 'react';

export default class LogoInverted extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <svg className="Logo LogoInverted" version="1.2" viewBox="0 0 350 340" style={this.props.style}>
        <g>
          <path d="M0,0v340h350V0H0z M75.3,335H4.5c9.6-7,18.4-16.2,26.5-25.9c8.1-9.8,15.1-18.8,21-27.3
		c7-9.8,13.2-19.8,18.8-30.1c0.2,42.6,32.1,77.5,73.2,82.7c0.5,0.2,1,0.6,1.6,0.6H75.3z M266.1,332L145.7,90.6l37.7-86L345.8,332
		H266.1z"/>
          <path fill="none" d="M70.8,251.7C65.2,262,58.9,272.1,52,281.8c-5.9,8.5-12.9,17.5-21,27.2C22.9,318.8,14.1,328,4.5,335h70.8h70.4
		c-0.6,0-1.1-0.3-1.6-0.6C102.9,329.2,71,294.3,70.8,251.7z"/>
          <polygon fill="none" points="145.7,90.6 266.1,332 345.8,332 183.4,4.6 	"/>
        </g>
      </svg>
    )
  }
}