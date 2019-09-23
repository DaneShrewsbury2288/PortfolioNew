import React, { Component } from 'react';


export default class Resume extends Component {
  render() {
    return (
      <section id="resume">

        <div className="row education">

          <div className="three columns header-col">
            <h1><span> Full Resume Link </span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3><a href="https://drive.google.com/open?id=1Ze_n5MiVxzvStePHdmlOvt9OKkQI1J6C">Resume </a></h3>
              </div>
            </div>

        </div>
      </div>

        <div className="row education">

          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3> University Of Washington - Seattle - Code Boot Camp </h3>
                <p className="info">
                  Full Stack Web Development
                  <span>&bull;</span> <em className="date"> 03 / 2019 - 09 / 2019</em></p>
                <p>
                  Certificate of Completion
                </p>
              </div>
            </div>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3> Gonzaga University </h3>
                <p className="info">
                  Biology / Chemistry
                  <span>&bull;</span> <em className="date"> 09 / 2006 - 06 / 2009</em></p>
                <p>
                  Associate of Arts and Sciences - AAS
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="row work">

          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>


          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3> Teaching Assistant </h3>
                <p className="info">
                  University of Washington - Seattle
                  <span>&bull;</span> <em className="date"> 09 / 2019 - Present </em></p>
                <p>
                  I am a TA for the next session of the University Of Washington Code Boot Camp for Full Stack Web Development.
                </p>
              </div>
            </div>
          </div>


          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3> Cashier and Purchaser </h3>
                <p className="info">
                  The Neighbordhood Market / Tacoma Food Co-Op
                  <span>&bull;</span> <em className="date"> 06 / 2014 - 08 / 2018 </em></p>
                <p> Responsibilities: </p>
                  <ul >
                    <li>  Inventory and Stocks - assisted in the completion of cycle stock counts, stock checks and external counts and ensured all stock movements were replaced, rotated and recorded. </li>
                    <li>  Served customers, provided advice and assistance, and ensured sales targets were achieved. </li>
                    <li>  Conducted end of day banking and reconciliation. </li>
                    <li>  Maintained vendor relationships with a large number of local and large vendors. </li>
                    <li>  Managed software that tracked orders and created purchase orders for entire company. </li>
                  </ul>
              </div>
            </div>
          </div>

        </div>

        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">

            <ul className="ul-skills">
              <li className="li-skills">HTML</li>
              <li className="li-skills">CSS</li>
              <li className="li-skills">Bootstrap</li>
              <li className="li-skills">Javascript</li>
              <li className="li-skills">JQuery</li>
              <li className="li-skills">Ajax</li>
              <li className="li-skills">Express.js</li>
              <li className="li-skills">MySQL</li>
              <li className="li-skills">Mongodb</li>
              <li className="li-skills">Mongoose</li>
              <li className="li-skills">Node.js</li>
              <li className="li-skills">React</li>
              <li className="li-skills">Redux</li>
              <li className="li-skills">Java</li>

            </ul>

          </div>

        </div>

      </section >
    );
  }
}