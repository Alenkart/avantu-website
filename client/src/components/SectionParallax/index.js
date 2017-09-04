import React, { Component } from 'react';
import './style.css';

import Contact from './../Contact';

import image from './../../assets/img/periscope4.jpeg';

export default function (props) {

  const style = {
    backgroundImage: `url(${image})`
  };

  return (
    <div className="SectionParallax row section" style={style}>
      <div className="SectionParallax-background" />
      <div className="SectionParallax-content">
        <h1 style={{ color: "#FFF", textAlign: 'center' }}>We've got what you need!</h1>
        <div className="line white" />
        <h4 style={{ color: "#FFF", textAlign: 'center' }}>Start Bootstrap has everything you need to get your new website up and running in no time! All of the templates and themes on Start Bootstrap are open source, free to download, and easy to use. No strings attached!</h4>
      </div>
    </div>
  );
}

