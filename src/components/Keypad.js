import React, { Component } from 'react';

export default class Keypad extends Component {

  upKeyPress = () => {
    console.log('Entering Password')
  }

  render() {
    return (
      <input keyUp={this.upKeyPress} type="password" />
    )
  }
}
