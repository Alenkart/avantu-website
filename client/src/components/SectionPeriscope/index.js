import React, { Component } from 'react';
import './style.css';

import Contact from './../Contact';
import Periscope from './../Periscope';

import image1 from './../../assets/img/periscope1.jpeg';
import image2 from './../../assets/img/periscope2.jpeg';
import image3 from './../../assets/img/periscope3.jpeg';

class SectionPeriscope extends Component {

  constructor() {
    super();

    this.periscopesData = [
      {
        img: image1,
        title: "Consulting",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent felis magna, facilisis vel dapibus nec, dignissim sit amet nisi. Donec ac eleifend est, a fringilla leo. Proin vestibulum arcu nunc, vel condimentum eros vestibulum non. Pellentesque mauris nulla, volutpat id ante quis, hendrerit gravida metus. Morbi feugiat scelerisque consequat.",
      },
      {
        img: image2,
        title: "Mobile Apps",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent felis magna, facilisis vel dapibus nec, dignissim sit amet nisi. Donec ac eleifend est, a fringilla leo. Proin vestibulum arcu nunc, vel condimentum eros vestibulum non. Pellentesque mauris nulla, volutpat id ante quis, hendrerit gravida metus. Morbi feugiat scelerisque consequat.",
      },
      {
        img: image3,
        title: "Web Apps",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent felis magna, facilisis vel dapibus nec, dignissim sit amet nisi. Donec ac eleifend est, a fringilla leo. Proin vestibulum arcu nunc, vel condimentum eros vestibulum non. Pellentesque mauris nulla, volutpat id ante quis, hendrerit gravida metus. Morbi feugiat scelerisque consequat.",
      },
    ];
  }

  render() {

    let left = false;

    const periscopes = this.periscopesData.map((periscope) => {
      left = !left;
      return (
        <div className="col-md-12">
          <Periscope left={left} periscope={periscope} />
        </div>
      );
    });

    return (
      <div className="SectionPeriscope row section">
        <div className="col-md-12">
          <h1 style={{ color: "#000", textAlign: 'center' }}>What we do</h1>
          <div className="line"/>
        </div>
        {periscopes}
      </div>
    );
  }

}

export default SectionPeriscope;
