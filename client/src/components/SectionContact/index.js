import React, { Component } from 'react';
import './style.css';

import Contact from './../Contact';

export default function (props) {

  return (
    <div className="SectionContact row section">
      <div className="col-md-12">
        <h1 style={{ color: "#FFF", textAlign: 'center' }}>Contact Us</h1>
      </div>
      <div className="col-xs-12">
        <hr />
      </div>
      <div className="col-md-6">
        <Contact icon="map-marker" text="Santo Domingo, Dominican Republic"/>
        <Contact icon="phone" text="+1 (849) 555-555"/>
        <Contact icon="envelope" text="info@avantu.com"/>
      </div>
      <div className="col-md-6">
        <form action="/" method="post">
        <div className="col-md-12">
          <div className="form-group">
            <label>Full Name:</label>
            <input type="text" className="form-control" placeholder="First Name & Last Name"/>
          </div>
          <div className="form-group">
            <label>Email Address:</label>
            <input type="email" className="form-control" placeholder="Your Email"/>
          </div>
          <div className="form-group">
            <label>Comment:</label>
            <textarea className="form-control" rows="5" id="comment"></textarea>
          </div>
        </div>
        <div className="col-md-12">
          <button type="submit" className="btn btn-default pull-right">Submit</button>
        </div>
        </form>
      </div>
    </div>
  );
}

