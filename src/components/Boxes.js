import React, { Component } from 'react'
import './styles.css';

// rcc is the react snippet to get this boilerplate component started.
export default class boxes extends Component {
  render() {
    return (
      <div>
        <div id='tribox1' class="triBox"></div>
        <div id='tribox2' class="triBox"></div>
        <div id='tribox3' class="triBox"></div>
        <div class='singleBox'></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    )
  }
}
