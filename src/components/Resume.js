import React, { Component } from 'react';


export default class Resume extends Component {
  render() {
    return (
      <section id="resume">

        <div className="row education">
          <div className="twelve columns header-col">
            <h1><span><a href="https://drive.google.com/open?id=1ORmk7nrTl4gG5CeHbXJTbCtEpGrsNcvk" id="ResumeLink"> Full Resume </a></span></h1>
          </div>
        </div>

        {/* <div className="row education">

          <div className="three columns header-col">
            <h2><span>Education</span></h2>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3> University Of Washington - Code Boot Camp </h3>
                <p className="info">
                  Full Stack Web Development
                  <span>&bull;</span> <em className="date"> 03 / 2019 - 09 / 2019</em></p>
                <p> Full Stack Web Development specializing in the MERN stack </p>
                <p> Certificate of Completion </p>
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
            <h2><span>Work</span></h2>
          </div>


          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3> Teaching Assistant </h3>
                <p className="info">
                  University of Washington - Seattle
                  <span>&bull;</span> <em className="date"> 09 / 2019 - Present </em></p>
                <p> Teaching Assistant for University of Washington - Seattle Full Stack Web Development </p>
                <p> Focused on: </p>
                <ul>
                  <li>  Design Patterns - MVP, MVC, Rest </li>
                  <li>  Front End: HTML, CSS, Javascript, Bootstrap, Jquery, React </li>
                  <li>  Back End: Node.js, Express, Redux </li>
                  <li>  Database - MySQL, Sequelize, Mongodb, Mongoose, APIs </li>
                </ul>
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
          </div> */}

        {/* </div> */}

        <div className="row skill">

          <div className="three columns header-col">
            <h2><span>Skills</span></h2>
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
              <li className="li-skills">MongoDB</li>
              <li className="li-skills">Mongoose</li>
              <li className="li-skills">Node.js</li>
              <li className="li-skills">React.js</li>
              <li className="li-skills">Redux</li>
              <li className="li-skills">Java</li>

            </ul>

          </div>

        </div>

      </section >
    );
  }
}