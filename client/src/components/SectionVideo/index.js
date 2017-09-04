import React, { Component } from 'react';
import './style.css';
import video from './../../assets/videos/background.mp4';

class SectionVideo extends Component {
  render() {

    const style = {
      color: "#FFF",
      textAlign: 'center',
      fontSize: "3em"
    };

    return (
      <section className="SectionVideo row">
        <div className="SectionVideo-background">
          <video autoPlay loop muted>
            <source src={video}></source>
          </video>
        </div>
        <div className="SectionVideo-content">
          <h1>Avantu</h1>
          <hr className="col-xs-12" />
          <h3>Imagine, Create & success</h3>
          <p style={{ color: "rgba(255,255,255,0.7)", textAlign: 'center' }}>Start Bootstrap can help you build better websites using the Bootstrap CSS framework! Just download your template and start going, no strings attached!</p>
          <hr className="col-xs-12" />
        </div>
      </section>
    );
  }
}

export default SectionVideo;
