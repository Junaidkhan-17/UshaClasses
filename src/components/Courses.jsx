import "../styles/courses.css";
import english from "../assets/english.png";
import chemistry from "../assets/chemistry.png";
import biology from "../assets/biology.png";
import maths from "../assets/maths.png";
import physics from "../assets/english.png";
import commerce from "../assets/commerce.png";
import { FiActivity, FiAperture, FiBook, FiCheckCircle, FiCpu, FiFeather } from "react-icons/fi";

function Courses() {
  const courses = [
    { icon: <FiCpu />, title: "Physics", level: "Numerical + Theory", image: physics },
  { icon: <FiActivity />, title: "Chemistry", level: "Concept + Reactions", image: chemistry },
  { icon: <FiFeather />, title: "Biology", level: "Diagrams + Notes", image: biology },
  { icon: <FiAperture />, title: "Maths", level: "Practice + Speed", image: maths },
  { icon: <FiBook />, title: "English", level: "Grammar + Writing", image: english },
  { icon: <FiBook />, title: "Commerce", level: "Accounts + Economics", image: commerce },
  ];

  return (
    <section id="courses" className="py-5">
      <div className="container">
        <p className="section-chip">
          <FiCheckCircle /> Academic Programs
        </p>
        <h2 className="sub-2">Subjects We Teach</h2>
        <p className="section-lead">
          Dedicated modules, chapter-wise tests and doubt sessions for school and competitive readiness.
        </p>

        <div className="row mt-4 g-4">
          {courses.map((course) => (
            <div className="col-sm-6 col-lg-4" key={course.title}>
              <div className="course-card"
                style={{ backgroundImage: `url(${course.image})`, }}>
                <span className="course-icon">{course.icon}</span>
                <h5>{course.title}</h5>
                <p>{course.level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
