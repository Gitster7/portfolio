import './App.css';
import Header from './components/header'
import Skills from './components/skills'
import CarouselPage from './components/carousel'
import Navbar from './components/navbar'
import Contact from './components/contact'
import About from './components/about'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <header>
        <Navbar className="navbar"/>
        <Header />
      </header>
      <div id="skills" className="skills">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3 className="skills-title">Skills</h3>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Skills />
            </div>
          </div>
        </div>
      </div>
      <div id="projects" className="projects">
        <h3 className="projects-title">Projects</h3>
        <CarouselPage />
      </div>
      <div id="contact" className="contacts">
        <Contact className="contact" />
        <img className="contact-img" src="images/contact.jpg" alt="Contact" />
      </div>
      <div id="about" className="about">
        <h3 className="about-title">About Me</h3>
        <About />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
