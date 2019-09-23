import React, { Component } from 'react';



export default class Header extends Component {

  render() {

    return (

      <header id="home">
        <nav id="nav-wrap">
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Experience</a></li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline"> Dane Shrewsbury </h1>
            <h3 style={{color: '#fff', fontFamily: 'sans-serif '}}>Full Stack Web Developer in Seattle, Washington </h3>
            <hr />
            <ul className="social">
              <li className="li-social-links">
                <a className="social" href="https://github.com/DaneShrewsbury2288" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"
                  aria-hidden="true"></i></a>
              </li>
              <li className="li-social-links">
                <a className="social" href="https://linkedin.com/in/dane-shrewsbury-276b60181" target="_blank" rel="noopener noreferrer"><i
                  className="fa fa-linkedin" aria-hidden="true"></i></a>
              </li>
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
        </p>

      </header>
    );
  }
}