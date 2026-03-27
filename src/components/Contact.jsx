import "../styles/contact.css";
import { FiCheckCircle, FiMapPin, FiMessageCircle, FiPhoneCall } from "react-icons/fi";

function Contact() {
  const phoneNumbers = ["9421516346", "8010501839"];

  return (
    <section id="contact" className="py-5">
      <div className="container">
        <p className="section-chip">
          <FiCheckCircle /> Get In Touch
        </p>
        <h2>Contact Us</h2>
        <p className="section-lead">Talk to our team for admissions, batches and counseling.</p>

        <div className="contact-card">
          <div className="contact-list">
            {phoneNumbers.map((num) => (
              <a key={num} href={`tel:+91${num}`}>
                <h3><FiPhoneCall /> +91 {num}</h3>
              </a>
            ))}
            <p className="contact-location">
              <FiMapPin /> In-person support available at coaching center.
            </p>
          </div>

          <a href="https://wa.me/919421516346" className="contact-btn" target="_blank" rel="noreferrer">
            <FiMessageCircle /> WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
