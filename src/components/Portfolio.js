import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

export default class Porfolio extends Component {

  render() {

    let projectData = this.props.projectData;

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns header-col">
            <h1><span> PROJECTS  </span></h1>
          </div>
          <div id="portfolio-wrapper">
            {
              projectData.portfolio.map((project) => {
                return (
                  <div key={project.name}>
                    <div className="columns project-card">
                      <Flippy
                        flipOnHover={false} // default false
                        flipOnClick={true} // default false
                        flipDirection="vertical" // horizontal or vertical
                        ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
                        // if you pass isFlipped prop component will be controlled component.
                        // and other props, which will go to div
                        style={{ width: '290px', height: '220px' }} /// these are optional style, it is not necessary
                      >
                        <FrontSide
                          style={{
                            backgroundColor: '#ffffff', padding: 5
                          }}
                        >
                          <img src={`${project.imgurl}`} className="project-img" alt="" />
                        </FrontSide>
                        <BackSide
                          style={{ backgroundColor: '#ffffff', padding: 5 }}>
                          <h5>{project.name} </h5>
                          <p> {project.description} </p>
                          <h5 className="link"> 
                          <a className="social" href={project.link} target="_blank" rel="noopener noreferrer">
                              <i className="fa fa-flask fa-3x" aria-hidden="true" />
                            </a>
                          </h5>
                          <h5 className="sourceCode">
                            <a className="social" href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                              <i className="fa fa-github fa-3x" aria-hidden="true" />
                            </a>
                          </h5>
                        </BackSide>
                      </Flippy>






                      <div className="overlay">
                        <div className="portfolio-item-meta">

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