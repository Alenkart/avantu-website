import React, { Component } from 'react';
import './style.css';

class Periscope extends Component {

  getImg() {
    
    const imgStyle = {
      backgroundImage: `url(${this.props.periscope.img})`
    };

    return (
      <div className="col-md-6">
        <div className="Periscope-img" style={imgStyle}></div>
      </div>
    );
  }

  getContect() {
    return (
      <div className="col-md-6">
        <h1>{this.props.periscope.title}</h1>
        <div className="line"/>
        <p>{this.props.periscope.text}</p>
      </div>
    );
  }

  render() {

    if(this.props.left) {
      
      return (
        <div className="Periscope">
          {this.getImg()}
          {this.getContect()}
        </div>
      );
    } 

    return (
      <div className="Periscope">
        {this.getContect()}
        {this.getImg()}
      </div>
    );

  }
}

export default Periscope;
