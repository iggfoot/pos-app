import React, { Component } from 'react';
//import 'src/App.css'

class Title extends Component {
  render() {
    return (
      <div className="Title">
        <span>{this.props.topline}</span>
        <br />
        <span>{this.props.blurb}</span>
      </div>
    );
  }
  
}

export default Title;