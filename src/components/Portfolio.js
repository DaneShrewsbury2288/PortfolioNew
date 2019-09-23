import React, { Component } from 'react';



export default class Porfolio extends Component {
  render() {
    let projectData = this.props.projectData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns header-col">
            <h1><span> PROJECTS:  </span></h1>
          </div>
          <div id="portfolio-wrapper">
            {
              projectData.portfolio.map((project) => {
                return (
                  <div key={project.name}>
                    <div className="columns project-card">
                      <a href={project.modal} className="has-popup-media">
                        <img src={`${project.imgurl}`} className="project-img" alt="" height="300px" />
                      </a>
                        <div className="overlay">
                          <div className="portfolio-item-meta">
                            <h5>{project.name} </h5>
                            <h5 className="link"> <a href={project.link}> Demo </a></h5>
                            <h5 className="sourceCode"> <a href={project.sourceCode}> Source Code </a></h5>
                          </div>
                        </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    );
  }
}