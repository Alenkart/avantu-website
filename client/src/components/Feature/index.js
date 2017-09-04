import React, { Component } from 'react';
import './style.css';

class Feature extends Component {
  
  render() {
    
    const style = {
      color: this.props.feature.iconColor
    };
  
    return (
      <div className="Feature">
        <i style={style} className={`fa fa-5x fa-${this.props.feature.icon}`} aria-hidden="true"/>
        <h2>{this.props.feature.title}</h2>
        <p>{this.props.feature.text}</p>
      </div>
    );
  }
}

export default Feature;
