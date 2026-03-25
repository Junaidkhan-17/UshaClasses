import "../styles/admission.css";
import { FiArrowRight, FiCheckCircle, FiClipboard, FiTarget, FiTrendingUp } from "react-icons/fi";

function Admission() {
  const points = [
    { icon: <FiClipboard />, text: "Simple 3-step admission process" },
    { icon: <FiTarget />, text: "NEET / JEE focused strategy sessions" },
    { icon: <FiTrendingUp />, text: "Performance tracking with regular reports" },
  ];

  return (
    <section id="admission" className="admission text-center">
      <div className="container">
        <p className="section-chip">
          <FiCheckCircle /> 2026 Batch Admissions
        </p>
        <h2>Admission Open</h2>
        <p className="admission-lead">CBSE & State Board | NEET / JEE Preparation</p>

        <div className="row g-3 mt-3">
          {points.map((point) => (
            <div className="col-md-4" key={point.text}>
              <div className="admission-card">
                <span>{point.icon}</span>
                <p>{point.text}</p>
              </div>
            </div>
          ))}
        </div>

        <a className="enroll-btn" href="#contact">
          Enroll Now <FiArrowRight />
        </a>
      </div>
    </section>
  );
}

export default Admission;
