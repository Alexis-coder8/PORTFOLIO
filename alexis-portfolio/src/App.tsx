
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">

      {/* Navigation */}
      <nav className="navbar">
  <h1 className="logo">Alexis Portfolio</h1>

  <div className="nav-links">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
    <a href="#projects">Projects</a>
  </div>
</nav>

      {/* Welcome Section */}
      <section className="hero" id="home">

        
        <p className="hero-greeting">WELCOME TO MY WORLD</p>

        <h2>
          Hello, I'm Alexis.
          <span> A Future Doctor & Creative Developer.</span>
        </h2>

        <p className="hero-description">
          I'm a first-year Pre-Med Biochemistry student with a growing
          passion for technology, creativity, and building meaningful
          digital experiences.
        </p>

        <button
          onClick={() =>
            document.getElementById("projects")?.scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          Explore My Projects
        </button>
      </section>

      
{/* About Me */}
<section className="about" id="about">
  <div className="about-content">
    <div className="about-text">
      <p className="section-label">GET TO KNOW ME</p>
      <h2>A Little About Me</h2>

      <p>
        I am a first-year Pre-Med Biochemistry student
        at the University of Regina with a growing
        passion for technology and software development.
      </p>

      <p>
        I enjoy exploring new ideas, learning new skills,
        and combining science with creativity to build
        meaningful digital experiences.
      </p>
    </div>

    <div className="about-highlight">
      <h3>A Few Things About Me</h3>
      <div className="highlight-item">
        <span>01</span>
        <p>Science & Biochemistry</p>
      </div>
      <div className="highlight-item">
        <span>02</span>
        <p>Technology & Development</p>
      </div>
      <div className="highlight-item">
        <span>03</span>
        <p>Creativity & Design</p>
      </div>
    </div>
  </div>
</section>

      {/* Skills */}
      <section className="skills" id="skills">
        <h2>My Skills</h2>

        <div className="skill-cards">
          <div className="card">React</div>
          <div className="card">TypeScript</div>
          <div className="card">HTML</div>
          <div className="card">CSS</div>
          <div className="card">Excel</div>
          <div className="card">Microsoft Word</div>
          <div className="card">Microsoft PowerPoint</div>
        </div>
      </section>

      {/* Projects */}
      <section className="projects" id="projects">
        <h2>Featured Projects</h2>

       
<div className="project-grid">

  <div className="project-card">
    <span className="project-number">01</span>
    <p className="project-category">FASHION & STYLE</p>
    <h3>Luveria</h3>
    <p>
      A luxury fashion platform designed to inspire
      personal style and explore fashion trends.
    </p>
    <span className="project-tag">Fashion App</span>
  </div>

  <div className="project-card">
    <span className="project-number">02</span>
    <p className="project-category">ENTERTAINMENT</p>
    <h3>CineVerse</h3>
    <p>
      A movie discovery platform for exploring films
      and finding your next favourite movie.
    </p>
    <span className="project-tag">Movie App</span>
  </div>

  <div className="project-card">
    <span className="project-number">03</span>
    <p className="project-category">GAMING</p>
    <h3>GameVault</h3>
    <p>
      A gaming platform featuring gaming news,
      discoveries, and community experiences.
    </p>
    <span className="project-tag">Gaming App</span>
  </div>

  <div className="project-card">
    <span className="project-number">04</span>
    <p className="project-category">PERSONAL DEVELOPMENT</p>
    <h3>MyDiary</h3>
    <p>
      A personal journaling application for recording
      thoughts, reflections, and daily experiences.
    </p>
    <span className="project-tag">Journal App</span>
  </div>

  <div className="project-card">
    <span className="project-number">05</span>
    <p className="project-category">EDUCATION</p>
    <h3>StudyNova</h3>
    <p>
      An exam preparation platform designed to
      support learning and effective studying.
    </p>
    <span className="project-tag">Education App</span>
  </div>

</div>

      </section>

    </div>
  );
}

export default App;
