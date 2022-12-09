import './App.css';
import selfie from './img/selfie.png';
import osu_logo from './img/OSU_logo.png';
import bullet from './img/bullet.png';
import sqrt from './img/sqrt.png';
import teapot from './img/teapot.png';
import trans from './img/trans.png';
import mochi from './img/mochi.jpg';

function App() {
  return (
    <div className="App">
      <div className="Top">
        <head className="App-header">
          <img src={selfie} alt="pfp"/>
          <div className="App-header-text">
            <h1>
              Jules Brinkley
            </h1>
            <h3>
              Data Science / Security Major
            </h3>
          </div>
        </head>
        <body className="App-body">
          <div className="Socials">
            <a href="https://github.com/brinkljul" id="github" title="GitHub" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="github"/>
            </a>
            <a href="https://www.linkedin.com/in/jules-brinkley-333123250/" id="linkedin" title="LinkedIn" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="linkedin"/>
            </a>
            <a href="mailto:brinklju@oregonstate.edu" id="email" title="Email" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios-filled/50/000000/email.png" alt="email"/>
            </a>
          </div>
          <div className="Body-text">
            <h1 className="Head">
              Hello!
            </h1>
            <div className="p" id="p1">
              <div className="pWrapper" id="p1">
                <a href="https://catalog.oregonstate.edu/college-departments/engineering/school-electrical-engineering-computer-science/computer-science-ba-bs-hba-hbs/computer-systems-option/#text" id="osu" title="OSU Systems Option" target="_blank" rel="noopener noreferrer">
                  <img src={osu_logo} alt="OSU" id="doubleImgSize"/>
                </a>
                <div className="ptext">
                  <p>
                    I'm Jules Brinkley, an Oregon State University 2024 graduate majoring in Computer Science: Systems. I'm looking for a remote summer 2023 internship in Data Science or Cybersecurity.
                  </p>
                </div>
              </div>
              <div className="pWrapper" id="p2">
                <a href="https://scholarships.oregonstate.edu/2023-2024-scholarships-new-osu-students" id="scholarships" title="OSU Scholarships" target="_blank" rel="noopener noreferrer">
                  <img src={sqrt} alt="OSU_scholarships"/>
                </a>
                <div className="ptext">
                  <p>
                    I have a 3.90 GPA on a 4.0 scale, taking 16 credits per term. I'm attending OSU on a Presidential Scholarship and I love having the opportunity to participate in its community.
                  </p>
                </div>
              </div>
              <div className="pWrapper" id="p3">
                <a href="https://catalog.oregonstate.edu/courses/" id="courses" title="OSU Courses" target="_blank" rel="noopener noreferrer">
                  <img src={bullet} alt="OSU Class Catalog"/>
                </a>
                <div className="ptext">
                  <p>
                    As of Winter term 2023, I'm taking:
                  </p>
                  <ul>
                    <li>CS 352: Introduction to Usability Engineering</li>
                    <li>CS 372: Introduction to Computer Networks</li>
                    <li>CS 381: Programming Language Fundamentals</li>
                    <li>ECE 375: Computer Organization and Assembly Language Programming</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="p" id="p2">
              <div className="pWrapper" id="p1">
                <a href="https://github.com/brinkljul" id="github" title="GitHub" target="_blank" rel="noopener noreferrer">
                  <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="github"/>
                </a>
                <div className="ptext">
                  <p>
                    I'm familiar with:
                  </p>
                  <ul>
                    <li>C/C++</li>
                    <li>C#/Java</li>
                    <li>Python</li>
                    <li>HTML/CSS/JS</li>
                    <li>PHP/SQL</li>
                    <li>Rust</li>
                    <li>R/Julia</li>
                  </ul>
                </div>
              </div>
              <div className="pWrapper" id="p2">
                <a href="https://github.com/brinkljul/render" id="advising" title="3D .obj render -- GitHub" target="_blank" rel="noopener noreferrer">
                  <img src={teapot} alt="teapot" id="doubleImgSize"/>
                </a>
                <div className="ptext">
                  <p>
                    I'm fairly proficient with Windows and Linux systems, Git/Github, and general customer service. I enjoy working in teams for classes and on my solo projects in my spare time. I love exploring outside of classes and looking for new learning constantly.
                  </p>
                </div>
              </div>
            </div>
            <div className="p" id="p3">
              <div className="pWrapper" id="p1">
              <img src={mochi} alt="Mochi" id="doubleImgSize"/>
                <div className="ptext">
                  <p>
                    When not in Corvallis, I live in West Linn, Oregon. My family has 2 cats named Mochi and Jasper, a dog named Lily, and the most loving environment anywhere. I would not be where I am without my family and local community. I also enjoy video games (BOTW, Celeste, etc.) and graphic design. 
                  </p>
                </div>
              </div>
              <div className="pWrapper" id="p2">
                <img src={trans} alt="Transgender flag"/>
                <div className="ptext">
                  <p>
                    You may also know me as Julian or Julia. I am transfem (she/her), but have yet to change my legal name (which my resume uses). I'm excited to make some big changes in my life soon, but for now, I'm mostly Jules.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </body>
      </div>
      <footer className="App-footer">
        <p>
          &copy; Jules Brinkley 2022 | Icons <a href="https://icons8.com" id="icons" title="Icons" target="_blank" rel="noopener noreferrer">@icons8.com</a> | Flag <a href="https://grpride.org/product/progress-pride-flag/" id="flag" title="Flag" target="_blank" rel="noopener noreferrer">@grpride.org</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
