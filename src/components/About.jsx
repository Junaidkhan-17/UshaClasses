import "../styles/about.css";
import { FiAward, FiBookOpen, FiCheckCircle, FiUserCheck } from "react-icons/fi";

function About() {
  const highlights = [
    {
      icon: <FiUserCheck />,
      title: "Experienced Faculty",
      text: "Mentors with board-level and entrance exam teaching experience.",
    },
    {
      icon: <FiBookOpen />,
      title: "Conceptual Learning",
      text: "Clarity-first teaching with structured revision and practice tests.",
    },
    {
      icon: <FiAward />,
      title: "Result Focused",
      text: "Regular assessment, individual feedback and exam strategy support.",
    },
  ];

  return (
    <section className="about py-5" id="about">
      <div className="container">
        <p className="section-chip">
          <FiCheckCircle /> Why Students Choose Us
        </p>
        <h2 className="mb-3">About USHA Classes</h2>
        <p className="about-intro">
          USHA Classes provides quality education for students from
          8th to 12th standard. Our experienced faculty focuses on
          conceptual learning and exam preparation.
        </p>

        <div className="row mt-4 g-4">
          {highlights.map((item) => (
            <div className="col-md-4" key={item.title}>
              <div className="card about-card">
                <span className="about-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
