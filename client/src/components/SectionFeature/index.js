import React, { Component } from 'react';
import './style.css';

import Contact from './../Contact';
import Feature from './../Feature';

class SectionFeature extends Component {

  constructor() {
    super();

    this.featuresData = [
      {
        icon: "terminal",
        iconColor: "#f05f40",
        title: "Consulting",
        text: "Our management consulting services focus on our clients' most critical issues and opportunities.",
      },
      {
        icon: "mobile",
        iconColor: "#f05f40",
        title: "Mobile Apps",
        text: "Swift, Objective-C, Java & Kotlin",
      },
      {
        icon: "desktop",
        iconColor: "#f05f40",
        title: "Web Apps",
        text: "Node.Js & PHP",
      },
    ];
  }

  componentDidMount() {

  }

  render() {

    const features = this.featuresData.map((feature) => {
      console.log(feature);
      return (
        <div className="col-md-4">
          <Feature feature={feature} />
        </div>
      );
    });

    return (
      <div className="SectionFeature row section">
        <div className="col-md-12">
          <h1 style={{ color: "#2b2b2b", textAlign: 'center' }}>What we do</h1>
          <div className="line" />
        </div>
        {features}
        <div className="col-md-12">
          <div className="line" />
        </div>
      </div>
    );
  }

}

export default SectionFeature;
