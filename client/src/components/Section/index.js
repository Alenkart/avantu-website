import React, { Component } from 'react';
import './style.css';

class Section extends Component {
  render() {

    const style = {
      background: this.props.background
    }

    return (
        <section className="Section section row" style={style}>
          {this.props.children}
        </section>
    );
  }
}

export default Section;
