import React, { Component } from 'react';
import './style.css';

export default function(props) {

  return (
    <div className="Contact col-sm-12">
      <div className="col-sm-2">
        <i className={`fa fa-2x fa-${props.icon}`} aria-hidden="true" />
      </div>
      <div className="col-sm-10">
        <p>{props.text}</p>
      </div>
    </div>
  );
}
