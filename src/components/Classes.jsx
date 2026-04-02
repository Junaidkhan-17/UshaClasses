import "../styles/classes.css";
import { FiCheckCircle, FiClock, FiStar } from "react-icons/fi";

function Classes() {
  const classGroups = [
    { cls: "8th", focus: "Foundation" },
    { cls: "9th", focus: "Core Concepts" },
    { cls: "10th", focus: "Board Excellence" },
    { cls: "11th", focus: "Advanced Stream" },
    { cls: "12th", focus: "Board + Entrance" },
  ];

  return (
    <section id="classes" className="py-5">
      <div className="container">
        <p className="section-chip">
          <FiCheckCircle /> Class Structure
        </p>
        <h2 className="cla-2">Classes Available</h2>
        <p className="section-lead">
          Smart scheduling with focused batches for each standard and exam stage.
        </p>

        <div className="row mt-4 g-4">
          {classGroups.map((item) => (
            <div className="col-sm-6 col-lg" key={item.cls}>
              <div className="class-card">
                <span className="class-icon">
                  <FiStar />
                </span>
                <h5>{item.cls} Class</h5>
                <p>{item.focus}</p>
                <small>
                  <FiClock /> Weekly assessments
                </small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Classes;
