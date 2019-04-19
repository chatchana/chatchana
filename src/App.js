import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-left">
          <img className="image"
           alt="profile" 
           src="dora.jpg"
           style={{height : "200px"}} >
          </img>
          
          <h1>Chatchana Kruangsanuk</h1>
          <h2>Java Programmer</h2>
          <p>
            <table>
              <tr>
                <td>Email</td>
                <td>chatchanak@gmail.com</td>
              </tr>
              <tr>
                <td>Address</td>
                <td>Bangkok, Thailand</td>
              </tr>            
            </table>
          </p>
         
          <h2>Profile</h2>
          <p>xxxxxxxxxxxxxxxx</p>

          <h2>Technical Skills</h2>
          <p>
            <table>
              <tr>
                <td>Javascript</td>
                <td>Fair</td>
              </tr>
              <tr>
                <td>HTML/CSS</td>
                <td>Fair</td>
              </tr> 
              <tr>
                <td>Java</td>
                <td>Good</td>
              </tr> 
              <tr>
                <td>Spring Boot</td>
                <td>Good</td>
              </tr>                                       
            </table>
          </p>          
          <h2>Language Skills</h2>
          <p>
            <table>
              <tr>
                <td>Thai</td>
                <td>Excellence</td>
              </tr>
              <tr>
                <td>English</td>
                <td>Fair</td>
              </tr>                                             
            </table>
          </p>
        </div>
        <div className="app-right">
          <div className ="title">
          <h2>Experience</h2>
          <h3>Java Programmer (Backend)</h3>
          <p>Develop API with Spring Boot</p>
          <h3>Java Programmer</h3>
          <p>Develop web application with jsf framework</p>
          </div>
          <div className ="title">
            <h2>Education</h2>
          </div>
          <div className ="title">
            <h2>Interests</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
