
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">

      {/* Navigation */}
      <nav className="navbar">
        <h1 className="logo">Alexis Portfolio</h1>
      </nav>

      {/* Welcome Section */}
      <section className="hero">
        <h2>
          Welcome to my Portfolio, You are about to Learn more About Alexis
        </h2>

        <p>
          First-Year Pre-Med Student, Future Doctor,
          and Aspiring Software Developer.
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
      <section className="about">
        <h2>About Me</h2>

        <p>
          I am a dedicated first-year Pre-Med Biochemistry
          student at the University of Regina with a growing
          passion for technology and software development.

          I am just beginning to explore the world of
          technology. Through my projects, I combine creativity,
          problem-solving, and design to build applications
          that inspire, educate, and entertain.
        </p>
      </section>

      {/* Skills */}
      <section className="skills">
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
            <h3>Luveria</h3>
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
            <h3>MyDiary</h3>
            <p>Personal journaling app.</p>
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
