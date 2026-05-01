import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowUpRight,
  BadgeCheck,
  Blocks,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Trophy,
} from 'lucide-react';
import './styles.css';

const profileLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/Pallapuvennela12',
    icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/pallapu-vennela-85910b367/',
    icon: Linkedin,
  },
  {
    label: 'CodeChef',
    href: 'https://www.codechef.com/users/veni_06',
    icon: Trophy,
  },
];

const skills = [
  'React UI',
  'JavaScript',
  'HTML5',
  'CSS3',
  'Java',
  'Problem Solving',
  'Git & GitHub',
  'Responsive Design',
];

const projects = [
  {
    title: 'Student Project Dashboard',
    description:
      'A clean dashboard concept for tracking student tasks, submissions, and progress across coursework.',
    stack: 'React, CSS, JavaScript',
    accent: '01',
  },
  {
    title: 'Coding Practice Tracker',
    description:
      'A portfolio-ready idea for displaying coding streaks, solved problems, and platform profile links.',
    stack: 'React, Local Data',
    accent: '02',
  },
  {
    title: 'Personal Portfolio',
    description:
      'This responsive website with profile highlights, project cards, and direct links to coding profiles.',
    stack: 'React, Vite',
    accent: '03',
  },
];

const highlights = [
  { value: '3+', label: 'Profile links' },
  { value: '8', label: 'Core skills' },
  { value: '100%', label: 'Responsive' },
];

function App() {
  return (
    <main>
      <section className="hero" aria-label="Portfolio introduction">
        <div className="heroVisual" aria-hidden="true">
          <div className="floatingBadge badgeTop">
            <Sparkles size={18} />
            Creative frontend learner
          </div>
          <div className="portrait">
            <span>PV</span>
          </div>
          <div className="orbit orbitOne" />
          <div className="orbit orbitTwo" />
          <div className="floatingBadge badgeBottom">
            <BadgeCheck size={18} />
            React Portfolio
          </div>
        </div>

        <div className="heroContent">
          <p className="eyebrow">Portfolio</p>
          <h1>Pallapu Vennela</h1>
          <p className="lead">
            Aspiring developer focused on React, clean user interfaces, and
            steady problem-solving through code.
          </p>

          <div className="actions" aria-label="Profile links">
            {profileLinks.map(({ label, href, icon: Icon }) => (
              <a key={label} className="profileLink" href={href} target="_blank" rel="noreferrer">
                <Icon size={19} />
                <span>{label}</span>
                <ArrowUpRight size={16} />
              </a>
            ))}
          </div>

          <div className="highlightStrip" aria-label="Portfolio highlights">
            {highlights.map((item) => (
              <div key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section about" aria-labelledby="about-title">
        <div>
          <p className="sectionLabel">About</p>
          <h2 id="about-title">I like turning ideas into polished interfaces.</h2>
        </div>
        <p>
          I am building a strong foundation in frontend development and coding
          practice. This portfolio is designed to present my skills, project
          work, and programming profiles in a simple, professional format.
        </p>
      </section>

      <section className="section" aria-labelledby="skills-title">
        <div className="sectionHeader">
          <p className="sectionLabel">Skills</p>
          <h2 id="skills-title">Tools and strengths</h2>
        </div>
        <div className="skillGrid">
          {skills.map((skill) => (
            <span key={skill}>
              <Blocks size={17} />
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="projects-title">
        <div className="sectionHeader">
          <p className="sectionLabel">Projects</p>
          <h2 id="projects-title">Featured work</h2>
        </div>
        <div className="projectGrid">
          {projects.map((project) => (
            <article className="projectCard" key={project.title}>
              <div className="projectNumber">{project.accent}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span>{project.stack}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" aria-labelledby="contact-title">
        <div>
          <p className="sectionLabel">Contact</p>
          <h2 id="contact-title">Let us build something useful.</h2>
        </div>
        <a className="emailLink" href="mailto:pallapuvennela12@gmail.com">
          <Mail size={18} />
          pallapuvennela12@gmail.com
        </a>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
