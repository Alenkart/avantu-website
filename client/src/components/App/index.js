import React, { Component } from 'react';

import './style.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';

import Menu from './../Menu';
import Section from './../Section';
import SectionVideo from './../SectionVideo';
import SectionFeature from './../SectionFeature';
import SectionContact from './../SectionContact';
import SectionParallax from './../SectionParallax';
import SectionPeriscope from './../SectionPeriscope';
import Fooder from './../Fooder';

class App extends Component {
  render() {

    return (
      <div className="App ">
        <Menu />
        <div className="container-fluid">
          <SectionVideo />
          <Section background="#f05f40">
            <h1 style={{ color: "#FFF", textAlign: 'center' }}>I want to know more</h1>
            <div className="line white" />
            <h4 style={{ color: "#FFF", textAlign: 'center' }}>Start Bootstrap has everything you need to get your new website up and running in no time! All of the templates and themes on Start Bootstrap are open source, free to download, and easy to use. No strings attached!</h4>
            <div className="line white" />
            <a style={{ margin: "auto", display: "table" }} href="#a" className="button">Get Started!</a>
          </Section>
          <SectionFeature />
          <SectionParallax />
          <SectionPeriscope/>
          <SectionContact />
          <Fooder />
        </div>
      </div>
    );
  }
}

export default App;
