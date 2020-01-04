import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="resume-content">
        <h2>Harish Kyatham</h2>
        <div>To work for an organisation which provides me the opportunity to improve my skills along with the organisation objectives</div>
        <hr></hr>
        <div className="short-details">
          <div>
            <div className="details">
              <i class="fas fa-envelope"></i>
              <span>kyathamharish15@gmail.com</span>
            </div>
            <div className="details">
              <i class="fas fa-mobile-alt"></i>
              <span>8978030468</span>
            </div>
            <div className="details">
              <i class="fas fa-map-marked-alt"></i>
              <span>Ameerpet,Hyderabad</span>
            </div>
            <div className="details">
              <i class="fab fa-github"></i>
              <span><a href="https://github.com/harish583">github.com/harish583</a></span>
            </div>
            <div className="details">
              <i class="fab fa-github"></i>
              <span><a href="https://github.com/harish583/portfolio">github.com/harish583/portfolio</a></span>
            </div>
          </div>
          <div>
            <h2>Skills</h2>
            <hr></hr>
            <div className="skill">HTML</div>
            <div className="skill">CSS</div>
            <div className="skill">JAVASCRIPT</div>
            <div className="skill">BOOTSTRAP</div>
            <div className="skill">CORE JAVA</div>
            <div className="skill">AJAX</div>
            <div className="skill">React</div>
            <div className="skill">JQuery</div>
            <div className="skill">Fetch</div>
            <div className="skill">JSON</div>
          </div>
          <div>
            <h2>Languages</h2>
            <hr/>
            <ul>
              <li className="language">English</li>
              <li className="language">Telugu</li>
              <li className="language">Hindi</li>
            </ul>
          </div>
          <div>
            <h2>Interests</h2>
            <hr />

            <div className="intersts">Exploring Technologies</div>
            <div className="intersts">Browsing on Internet</div>
          </div>
        </div>
        <div className="full-details">
          <h2>Education</h2>
          <hr />
          <div>
            <div>
              <h2>B-TECH</h2>
              <div>JNTU College Of Engg. Manthani</div>
              <span>09/2013 – 05/2017</span>
              <i className="place">Peddapalli</i>
              <div>
                <span>Cource : </span>
                <span>Electrical and Electronics Engineering</span>
              </div>
            </div>
            <div>
              <h2>Intermediate</h2>
              <div>Shivani Junior College</div>
              <span>06/2011 – 03/2013</span>
              <i className="place">Hanumakonda</i>
              <div>
                <span>Cource : </span>
                <span>M.P.C</span>
              </div>
            </div>
            <div>
              <h2>SSC</h2>
              <div>Kakatiya High School</div>
              <span>05/2010 – 04/2011</span>
              <i className="place">Jammikunta</i>
            </div>
          </div>
          <div>
            <h2>Projects</h2>
            <ul>
              <li><a href="https://harish583.github.io/web-practice/practice/js/local%20storage/localStorage.html">Student Management System</a></li>
              <li><a href="https://harish583.github.io/web-practice/practice/js/carousel/index.html">Multi curosels</a></li>
              <li>
                <div>Study of 500MW Generator protection (12/2015 – 12/2015)</div>
                <i>Have done mini project at KTPS VI-STAGE , PALVANCHA</i>
              </li>
              <li>
                <div>Overview of Electrical Systems in Coat Handing Plant (02/2017 – 03/2017)</div>
                <i>Have done major projct at CHP ELECTRICAL MAINTANENCE DEPT. at NTPC LTD., Ramagundam</i>
              </li>
            </ul>
          </div>
          <div>
            <h2>Extra Activities</h2>
            <hr></hr>
            <ul>
              <li>Participated in my college events.</li>
              <li>Participated in games and won prizes in school life.</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
