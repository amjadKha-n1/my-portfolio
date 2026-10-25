
import './App.css'
import { projects } from './data/projects'
import { skillGroups } from './data/skills'
import ProjectCard from './components/ProjectCard'
import SkillGroup from './components/SkillGroup'

const technologies = [
  'JavaScript',
  'Node.js',
  'Express',
  'PostgreSQL',
  'MongoDB',
  'React',
  'Git',
]

function App() {
  return (
    <div className="portfolio">
      <header className="navbar">
        <a className="logo" href="#home" aria-label="Amjad home">
          <span className="logo-dot" />
          AMJAD.DEV
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          className="nav-cta"
          href="mailto:amjad22558@gmail.com"
        >
          Let's talk <span>↗</span>
        </a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-dot" />
              Open to junior developer opportunities
            </div>

            <p className="eyebrow">JUNIOR BACKEND DEVELOPER</p>

            <h1>
              Building reliable
              <br />
              backends with
              <br />
              <span>JavaScript.</span>
            </h1>

            <p className="hero-description">
              I build practical web applications with Node.js,
              Express, and databases. I enjoy designing APIs,
              solving problems, and turning ideas into working
              software.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                Explore projects <span>↗</span>
              </a>

              <a className="button button-secondary" href="#contact">
                Contact me
              </a>
            </div>

            <div className="hero-meta">
              <span>
                <span className="meta-dot" />
                JavaScript focused
              </span>
              <span>Based in Moscow</span>
            </div>
          </div>

          <aside className="toolkit-card" aria-label="Technical toolkit">
            <div className="card-heading">
              <div className="terminal-icon">&gt;_</div>

              <div>
                <p className="card-title">My toolkit</p>
                <p className="card-subtitle">
                  Technologies I work with
                </p>
              </div>

              <span className="card-index">01 / STACK</span>
            </div>

            <div className="tech-list">
              {technologies.map((technology) => (
                <span className="tech-tag" key={technology}>
                  {technology}
                </span>
              ))}
            </div>

            <div className="card-footer">
              <span className="footer-indicator" />
              Learning, building, improving.
            </div>
          </aside>

          <div className="hero-decoration" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </section>

        <div className="scroll-hint">
          <span className="scroll-line" />
          SCROLL TO EXPLORE
        </div>

        <section className="projects-section" id="projects">
          <div className="section-heading">
            <div>
              <p className="eyebrow">SELECTED WORK</p>
              <h2>Projects that solve real problems.</h2>
              <p className="section-description">
                A selection of applications I've built while
                developing my skills in backend and full-stack
                development.
              </p>
            </div>

            <a
              className="github-link"
              href="https://github.com/amjadKha-n1"
              target="_blank"
              rel="noreferrer"
            >
              GitHub profile <span>↗</span>
            </a>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-heading">
            <div>
              <p className="eyebrow">TECHNICAL SKILLS</p>
              <h2>The tools behind my work.</h2>
              <p className="section-description">
                Technologies and concepts I've used to build
                practical web applications, with backend
                development as my main focus.
              </p>
            </div>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group) => (
              <SkillGroup key={group.id} group={group} />
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="about-label">
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <h2>Backend first. Always learning.</h2>
          </div>

          <div className="about-content">
            <p className="about-lead">
              I'm a JavaScript developer focused on building
              backend applications, APIs, and database-driven
              web projects.
            </p>

            <p>
              Through independent learning and practical projects,
              I've worked with Node.js, Express, MongoDB, and
              PostgreSQL. I've built applications with
              authentication, different user roles, data management,
              and payment integrations in test mode.
            </p>

            <p>
              I also work with React to build user interfaces
              for my applications. My current goal is to deepen
              my backend engineering skills and contribute to a
              development team as a junior developer.
            </p>

            <div className="about-focus">
              <span className="about-focus-icon">&gt;_</span>
              <div>
                <h3>What I'm focusing on</h3>
                <p>
                  Writing clean JavaScript, improving SQL and
                  PostgreSQL, building reliable APIs, and becoming
                  more confident at solving problems independently.
                </p>
              </div>
            </div>

            <a
              className="github-link about-github"
              href="https://github.com/amjadKha-n1"
              target="_blank"
              rel="noreferrer"
            >
              Explore my code on GitHub <span>↗</span>
            </a>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="eyebrow">LET'S CONNECT</p>
          <h2>Let's build something useful.</h2>
          <p className="contact-description">
            I'm interested in junior backend development
            opportunities where I can contribute, learn from
            experienced developers, and grow as an engineer.
          </p>

          <div className="hero-actions contact-actions">
            <a
              className="button button-primary"
              href="mailto:amjad22558@gmail.com"
            >
              Send me an email <span>↗</span>
            </a>

            <a
              className="button button-secondary"
              href="https://github.com/amjadKha-n1"
              target="_blank"
              rel="noreferrer"
            >
              Visit GitHub <span>↗</span>
            </a>

            <a
              className="button button-secondary"
              href="/resume.pdf"
              download="Amjad-Faqirzai-CV.pdf"
            >
              Download CV <span>↓</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="logo" href="#home">
          <span className="logo-dot" />
          AMJAD.DEV
        </a>

        <p>Built with React, JavaScript, and CSS.</p>

        <a
          className="footer-github"
          href="https://github.com/amjadKha-n1"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>
      </footer>
    </div>
  )
}

export default App
