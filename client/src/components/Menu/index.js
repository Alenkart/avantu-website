import React, { Component } from 'react';

import './style.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';

class Menu extends Component {

  constructor() {
    super();

    this.state = {
      scrolled: false,
    };
  }

  handleScroll = (event) => {
    const scroll = event.srcElement.body.scrollTop;
    this.setState({ "scrolled": scroll > 0 });
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {

    const menuClass = this.state.scrolled ? "active" : "";

    return (
      <div className={`Menu ${menuClass}`}>
        <a href="#ddd">Homne</a>
        <a href="#ddd">Know More</a>
        <a href="#ddd">What we do</a>
        <a href="#ddd">Contact Us</a>
      </div>
    );
  }
}

export default Menu;
