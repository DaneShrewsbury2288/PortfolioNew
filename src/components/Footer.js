import React, { Component } from 'react';


export default class Footer extends Component {
  render() {
    return (
      <footer>
      <div className="row">
        <div className="twelve columns">
        <ul className="social-links">
              <li className="li-social-links">
                <a className="social" href="https://github.com/DaneShrewsbury2288" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-github"
                  aria-hidden="true"></i></a>
              </li>
              <li className="li-social-links">
                <a className="social" href="https://linkedin.com/in/dane-shrewsbury-276b60181" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-linkedin" aria-hidden="true"></i></a>
              </li>
            </ul>
          
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
      </div>
    </footer>
    );
  }
}