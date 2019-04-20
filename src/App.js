import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-left" class="col-5">
          <img className="image"
            alt="profile"
            src="tam.jpg"
            style={{ height: "200px" }}>
          </img>
          <p>
            <h3>Chatchana Kruangsanuk</h3>
            <h5>Java Programmer</h5>
          </p>

          <div class="container">
            <div class="row">
              <div class="col">Email</div>
              <div class="col">chatchanak@gmail.com</div>
            </div>
            <div class="row">
              <div class="col">Address</div>
              <div class="col">Phayao, Thailand</div>
            </div>
          </div>

          <h3>Technical Skills</h3>
          <p>
            <div class="container">
              <div class="row">
                <div class="col">Java</div>
                <div class="col">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star unchecked"></span>
                </div>
              </div>
              <div class="row">
                <div class="col">Spring Boot</div>
                <div class="col">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star unchecked"></span>
                </div>
              </div>
              <div class="row">
                <div class="col">Strut</div>
                <div class="col">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star unchecked"></span>
                  <span class="fa fa-star unchecked"></span>
                </div>
              </div>
              <div class="row">
                <div class="col">Hibernate</div>
                <div class="col">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star unchecked"></span>
                  <span class="fa fa-star unchecked"></span>
                </div>
              </div>
              <div class="row">
                <div class="col">Asp.net(C#)</div>
                <div class="col">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star unchecked"></span>
                  <span class="fa fa-star unchecked"></span>
                </div>
              </div>
              <div class="row">
                <div class="col">Javascript</div>
                <div class="col">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star unchecked"></span>
                  <span class="fa fa-star unchecked"></span>
                </div>
              </div>
              <div class="row">
                <div class="col">HTML/CSS</div>
                <div class="col">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star unchecked"></span>
                  <span class="fa fa-star unchecked"></span>
                  <span class="fa fa-star unchecked"></span>
                  <span class="fa fa-star unchecked"></span>
                </div>
              </div>
            </div>
          </p>

          <h2>Language Skills</h2>
          <p>
            <div class="container">
              <div class="row">
                <div class="col">Thai(Native)</div>
                <div class="col">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                </div>
              </div>
              <div class="row">
                <div class="col">English</div>
                <div class="col">
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star checked"></span>
                  <span class="fa fa-star unchecked"></span>
                  <span class="fa fa-star unchecked"></span>
                  <span class="fa fa-star unchecked"></span>
                </div>
              </div>
            </div>
          </p>
        </div>

        <div className="app-right" class="col-7">
          <h3>Education</h3>
          <p>
            <div class="container">
              <div class="row">
                <div class="col">2007 - 2010</div>
                <div class="col">Bachelor of Science in Information Technology, Maejo University</div>
              </div>
            </div>
          </p>

          <h3>Experience</h3>
          <p>
            <div class="container">
              <div class="row">
                <div class="col">
                  <h5>Java Programmer, Krung Thai Bank</h5>
                </div>
                <div class="col" className="smCol">
                  May 2018 -  Present
              </div>
              </div>
              <div class="row">
                <div class="col"></div>
              </div>
              <div class="row">
                <div class="col"><span class="dot" />
                  develop API with Java Spring Boot, Maven, Apache
              </div>
              </div>
              <div class="row">
                <div class="col"><span class="dot" />
                  develop web application with Strut Framework, Oracle, JBoss
              </div>
              </div>
            </div>
          </p>

          <p>
            <div class="container">
              <div class="row">
                <div class="col">
                  <h5>Java Programmer, G-Able</h5>
                </div>
                <div class="col" className="smCol">
                  June 2015 - April 2018
              </div>
              </div>
              <div class="row">
                <div class="col"></div>
              </div>
              <div class="row">
                <div class="col"><span class="dot" />
                  develop web services with JAX-WS, Oracle, WebLogic
              </div>
              </div>
              <div class="row">
                <div class="col"><span class="dot" />
                  develop web application with JSF Framework, Oracle
              </div>
              </div>
              <div class="row">
                <div class="col"><span class="dot" />
                  gather the requirement, analyze and evaluate to come up with software requirement
              </div>
              </div>
              <div class="row">
                <div class="col"><span class="dot" />
                  make program specification for the development team
              </div>
              </div>
              <div class="row">
                <div class="col"><span class="dot" />
                  prepare test cycles, test data and expected results
              </div>
              </div>
            </div>
          </p>

          <p>
            <div class="container">
              <div class="row">
                <div class="col">
                  <h5>Java Programmer(Outsource), Hitachi Consulting</h5>
                </div>
                <div class="col" className="smCol">
                  June 2014 – June 2015
              </div>
              </div>
              <div class="row">
                <div class="col"></div>
              </div>
              <div class="row">
                <div class="col"><span class="dot" />
                  develop web application with Strut Framework, Hibernate, Spring, Oracle, JBoss
              </div>
              </div>
              <div class="row">
                <div class="col"><span class="dot" />
                  create batch job with Java
              </div>
              </div>
            </div>
          </p>

          <p>
            <div class="container">
              <div class="row">
                <div class="col">
                  <h5>Java Programmer, Optimus Soft</h5>
                </div>
                <div class="col" className="smCol">
                  Jan 2011 – May 2014
              </div>
              </div>
              <div class="row">
                <div class="col"></div>
              </div>
              <div class="row">
                <div class="col"><span class="dot" />
                  develop web application with JSF Framework, Oracle, WebSphere, IBM RAD7
              </div>
              </div>
              <div class="row">
                <div class="col"><span class="dot" />
                  create report with iReport
              </div>
              </div>
            </div>
          </p>

          <h3>Interests</h3>
          <p>
            <div class="container">
              <div class="row">
                <div class="col"><span class="dot" />
                  reading books
              </div>
              </div>
              <div class="row">
                <div class="col"><span class="dot" />
                  listening to music
              </div>
              </div>
              <div class="row">
                <div class="col"><span class="dot" />
                  investment
              </div>
              </div>
            </div>
          </p>
        </div>

      </div >
    );
  }
}

export default App;
