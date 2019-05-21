/* eslint-disable prefer-template */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unused-state */
import React from 'react';

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      selectedFiles: null,
    };
  }

  componentDidMount() {
    const logo = document.getElementById('logo');
    const randomization = Math.round(Math.random() * 300) + 100;
    logo.style.setProperty('--left-offset', randomization + 'px');
  }

  render() {
    return (
      <div>
        <div className="line"></div>
        <svg version="1.1" id="logo" xmlnsSketch="http://www.bohemiancoding.com/sketch/ns" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="-434 235 91 91" xmlSpace="preserve" width="25px" height="25px">
          <g>
            <polygon fill="#FFFFFF" points="-384.1,265.2 -409.1,265.2 -409.1,268.6 -390.4,268.6 -412,304.6 -412,305.4 -365.6,305.4 -365.6,301.9 -406.2,301.9" />
            <polygon fill="#FFFFFF" points="-409.1,257.7 -370.8,257.7 -393,294.4 -365.6,294.4 -365.6,290.9 -386.7,290.9 -365,255 -365,254.2 -409.1,254.2" />
            <path fill="#B70038" d="M-388.5,235c-25.1,0-45.5,20.4-45.5,45.5s20.4,45.5,45.5,45.5c25.1,0,45.5-20.4,45.5-45.5 S-363.4,235-388.5,235z M-365.6,305.4H-412v-0.8l21.7-36h-18.7v-3.5h25l-22.1,36.7h40.7V305.4z M-365,255l-21.7,36h21.1v3.5H-393 l22.1-36.7h-38.3v-3.5h44.1V255z" />
          </g>
        </svg>
      </div>
    );
  }
}

export default Graph;