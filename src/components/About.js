import React, { Component } from 'react';

export default class About extends Component {

   render() {

      return (

         <section id="about">

            <div className="row">

               <div className="twelve columns main-col">

                  <h2><span> About </span></h2>

               </div>
               <div className="twelve columns main-col">

                  <h3> Mission-driven full stack developer with a passion for thoughtful UI design, collaboration, and learning. </h3>

                  <p>
                     I strive for pixel-perfect front-end responsive websites. Using preprocessors
                     and following best practices, I deliver maintainable and well-structured code.
                  </p>
                  <p>
                     I studied Biology with a minor in Chemistry at Gonzaga Unversity. If I'm not coding,
                     I'm out enjoying the natural beauty of the Pacific Northwest! Some of my
                     outdoor endeavours include skiing, hiking, and biking.
                  </p>
                  <p>
                   <strong> Current Focus: </strong>
                        JavaScript, React.js, Node.js
                  </p>

               </div>
            </div>
         </section>
      );
   }
}