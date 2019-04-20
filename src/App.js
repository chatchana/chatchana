import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-left">
          <img className="image"
            alt="profile"
            src="tam.jpg"
            style={{ height: "200px"}} />

          <h3>Chatchana Kruangsanuk</h3>
          <h5>Java Programmer</h5>
          
        <Container>
          <Row>
            <Col>Email</Col>
            <Col>chatchanak@gmail.com</Col>
          </Row>
          <Row>
            <Col>Address</Col>
            <Col>Phayao, Thailand</Col>
          </Row>
        </Container>

        <h3>Technical Skills</h3>
        <p>
          <Container>
            <Row>
              <Col>Java</Col>
              <Col>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star unchecked"></span>
              </Col>
            </Row>
            <Row>
              <Col>Spring Boot</Col>
              <Col>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star unchecked"></span>
              </Col>
            </Row>
            <Row>
              <Col>Strut</Col>
              <Col>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star unchecked"></span>
                <span class="fa fa-star unchecked"></span>
              </Col>
            </Row>
            <Row>
              <Col>Hibernate</Col>
              <Col>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star unchecked"></span>
                <span class="fa fa-star unchecked"></span>
              </Col>
            </Row>
            <Row>
              <Col>Asp.net(C#)</Col>
              <Col>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star unchecked"></span>
                <span class="fa fa-star unchecked"></span>
              </Col>
            </Row>
            <Row>
              <Col>Javascript</Col>
              <Col>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star unchecked"></span>
                <span class="fa fa-star unchecked"></span>
              </Col>
            </Row>
            <Row>
              <Col>HTML/CSS</Col>
              <Col>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star unchecked"></span>
                <span class="fa fa-star unchecked"></span>
                <span class="fa fa-star unchecked"></span>
                <span class="fa fa-star unchecked"></span>
              </Col>
            </Row>
          </Container>
        </p>
        <h2>Language Skills</h2>
        <p>
          <Container>
            <Row>
              <Col>Thai(Native)</Col>
              <Col>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
              </Col>
            </Row>
            <Row>
              <Col>English</Col>
              <Col>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star unchecked"></span>
                <span class="fa fa-star unchecked"></span>
                <span class="fa fa-star unchecked"></span>
              </Col>
            </Row>
          </Container>
        </p>
        <h3>Education</h3>
        <p>
          <Container>
            <Row>
              <Col>2007 - 2010</Col>
              <Col>Bachelor of Science in Information Technology, Maejo University</Col>
            </Row>
          </Container>
        </p>
      </div>

      <div className="app-right">
        <h3>Experience</h3>
        <p>
          <Container>
            <Row className="headRow">
              <Col><h5>Java Programmer, Krung Thai Bank</h5></Col>
              <Col sm={{ size: 15, order: 2, offset: 0 }}>May 2018 - Present</Col>
            </Row>
            <Row>
              <Col sm={{ size: 15, order: 2, offset: 1 }}><span class="dot"/>develop API with Java Spring Boot, Maven, Apache</Col>
            </Row>
            <Row>
              <Col sm={{ size: 15, order: 2, offset: 1 }}><span class="dot"/>develop web application with Strut Framework, Oracle, JBoss</Col>
            </Row>
          </Container>
        </p>
        <p>
          <Container>
          <Row className="headRow">
              <Col><h5>Java Programmer, G-Able</h5></Col>
              <Col sm={{ size: 15, order: 2, offset: 0 }}>June 2015 - April 2018</Col>
            </Row>
            <Row>
              <Col sm={{ size: 15, order: 2, offset: 1 }}><span class="dot"/>develop web services with JAX-WS, Oracle, WebLogic</Col>
            </Row>
            <Row>
              <Col sm={{ size: 15, order: 2, offset: 1 }}><span class="dot"/>develop web application with JSF Framework, Oracle</Col>
            </Row>
            <Row>
              <Col sm={{ size: 15, order: 2, offset: 1 }}><span class="dot"/>gather the requirement, analyze and evaluate to come up with software requirement</Col>
            </Row>
            <Row>
              <Col sm={{ size: 15, order: 2, offset: 1 }}><span class="dot"/>make program specification for the development team</Col>
            </Row>
            <Row>
              <Col sm={{ size: 15, order: 2, offset: 1 }}><span class="dot"/>prepare test cycles, test data and expected results</Col>
            </Row>
          </Container>
        </p>
        <p>
          <Container>
          <Row className="headRow">
              <Col><h5>Java Programmer(Outsource), Hitachi Consulting</h5></Col>
              <Col sm={{ size: 15, order: 2, offset: 0 }}>June 2014 – June 2015</Col>
            </Row>
            <Row>
              <Col sm={{ size: 15, order: 2, offset: 1 }}><span class="dot"/>develop web application with Strut Framework, Hibernate, Spring, Oracle, JBoss</Col>
            </Row>
            <Row>
              <Col sm={{ size: 15, order: 2, offset: 1 }}><span class="dot"/>create batch job with Java</Col>
            </Row>
          </Container>
        </p>
        <p>
          <Container>
            <Row className="headRow">
              <Col><h5>Java Programmer, Optimus Soft</h5></Col>
              <Col sm={{ size: 15, order: 2, offset: 0 }}>Jan 2011 – May 2014</Col>
            </Row>
            <Row>
              <Col sm={{ size: 15, order: 2, offset: 1 }}><span class="dot"/>develop web application with JSF Framework, Oracle, WebSphere, IBM RAD7</Col>
            </Row>
            <Row>
              <Col sm={{ size: 15, order: 2, offset: 1 }}><span class="dot"/>create report with iReport</Col>
            </Row>
          </Container>
        </p>

        <h3>Interests</h3>
        <p>
          <Container>
            <Row>
              <Col sm={{ size: 15, order: 2, offset: 1 }}><span class="dot"/>reading books</Col>
            </Row>
            <Row>
              <Col sm={{ size: 15, order: 2, offset: 1 }}><span class="dot"/>listening to music</Col>
            </Row>
            <Row>
              <Col sm={{ size: 15, order: 2, offset: 1 }}><span class="dot"/>investment</Col>
            </Row>
          </Container>
        </p>
      </div>
      </div >
    );
  }
}

export default App;
