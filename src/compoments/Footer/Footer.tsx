import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.scss";

const Footer = () => (
  <footer className="footer">
    <div className="footer__social">
      <ul className="footer__social-list">
        <li className="footer__social-item">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="#"
            className="footer__social-link"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li className="footer__social-item">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="#"
            className="footer__social-link"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>
        <li className="footer__social-item">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="#"
            className="footer__social-link"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
      </ul>
    </div>
    <div className="footer__copyright">
      <p>
        © 2023 <strong>Tran Dung</strong>
      </p>
    </div>
  </footer>
);

export default Footer;
