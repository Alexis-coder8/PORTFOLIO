import React from "react";
import "./App.css";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      [elementName: string]: any;
    }
  }
}

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <h1 className="logo">Alexis Portfolio</h1>
      </nav>
      <section className="hero">
        <h2>Hello, I'm Alexis</h2>

        <p>
          First-Year Pre-Med Student, Future Doctor, and Aspiring Software
          Developer.
        </p>

        <button>Explore My Projects</button>
      </section>

      <section className="about">
        <h2>About Me</h2>

        <p>
          I am a dedicated pre-med student at the University of Regina with a
          growing passion for technology and software development. Through my
          projects, I combine creativity, problem-solving, and design to build
          applications that inspire, educate, and entertain.
        </p>
      </section>

      <section className="skills">
        <h2>My Skills</h2>

        <div className="skill-cards">
          <div className="card">React</div>
          <div className="card">TypeScript</div>
          <div className="card">HTML</div>
          <div className="card">CSS</div>
          <div className="card">Excel</div>
          <div className="card">Microsoft Word</div>
        </div>
      </section>

      <section className="projects">
        <h2>Featured Projects</h2>

        <div className="project-grid">
          <div className="project-card">
            <h3>Veloura</h3>
            <p>Luxury fashion and style app.</p>
          </div>

          <div className="project-card">
            <h3>CineVerse</h3>
            <p>Movie discovery platform.</p>
          </div>

          <div className="project-card">
            <h3>GameVault</h3>
            <p>Gaming news and community app.</p>
          </div>

          <div className="project-card">
            <h3>StudyNova</h3>
            <p>Exam preparation platform.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;