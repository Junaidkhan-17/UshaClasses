import "../styles/hero.css";
import tutiongirl1 from "../assets/tutiongirl1.webp";
import {
  FiArrowRight,
  FiBookOpen,
  FiCheckCircle,
  FiClock,
  FiPhoneCall,
  FiUsers,
} from "react-icons/fi";

function Hero() {
  return (
    <section
      className="hero"
      id="home"
      style={{ backgroundImage: `url(${tutiongirl1})` }}
    >
      <div className="hero-overlay" />
      <div className="container hero-content">
        <p className="hero-kicker">
          <FiCheckCircle />
          Trusted Coaching for Academic Excellence
        </p>

        <h1>Usha Classes</h1>

        <p className="hero-subtitle">Best Coaching for Classes 8th to 12th</p>

        <p className="hero-description">
          Physics, Chemistry, Biology, Maths, Commerce, English and SST with a
          result-driven system for CBSE and State Board students.
        </p>

        <div className="hero-badges">
          <span>
            <FiBookOpen /> CBSE & State Board
          </span>
          <span>
            <FiUsers /> Small Batches
          </span>
          <span>
            <FiClock /> NEET / JEE Preparation
          </span>
        </div>

        <div className="hero-actions">
          <a className="hero-btn hero-btn-primary" href="#admission">
            Admission Open <FiArrowRight />
          </a>
          <a className="hero-btn hero-btn-secondary" href="#contact">
            <FiPhoneCall /> Contact Now
          </a>
        </div>

        <div className="hero-stats">
          <article className="stat-card">
            <div className="stat-icon">
              <FiUsers />
            </div>
            <div>
              <h3>500+</h3>
              <p>Active Students</p>
            </div>
          </article>
          <article className="stat-card">
            <div className="stat-icon">
              <FiBookOpen />
            </div>
            <div>
              <h3>7+</h3>
              <p>Core Subjects</p>
            </div>
          </article>
          <article className="stat-card">
            <div className="stat-icon">
              <FiCheckCircle />
            </div>
            <div>
              <h3>100%</h3>
              <p>Result Consistency</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Hero;
