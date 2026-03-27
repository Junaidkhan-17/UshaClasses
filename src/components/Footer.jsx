import "../styles/footer.css";
import {
  FiFacebook,
  FiInstagram,
  FiMail,
  FiPhoneCall,
  FiYoutube,
} from "react-icons/fi";
import webdockwhitelogo from "../assets/webdockwhitelogo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>USHA CLASSES</h4>
            <p>Best Coaching for 8th to 12th</p>
          </div>

          <div className="footer-contact">
            <a href="tel:+919421516346">
              <FiPhoneCall /> +91 9421516346
            </a>
            <a href="mailto:ushaclasses@example.com">
              <FiMail /> ushaclasses@example.com
            </a>
          </div>

          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <FiFacebook />
            </a>
            <a href="#" aria-label="Instagram">
              <FiInstagram />
            </a>
            <a href="#" aria-label="YouTube">
              <FiYoutube />
            </a>
          </div>
        </div>

        <p className="copyright">© 2026 USHA Classes. All rights reserved.</p>
      </div>

      <div className="right-corner">
        <h4>powered by</h4>
        <a
          href="https://webdockstudios.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="logo" src={webdockwhitelogo} alt="Designer" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
