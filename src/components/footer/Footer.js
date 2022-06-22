import {
  FaLinkedin, FaGithub, FaTwitter, FaInstagram,
} from 'react-icons/fa';

import '../../stylesheets/Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer__container">
      <div className="footer__container__left">
        <a href="/">RM</a>
      </div>
      <ul className="footer__container__second">
        <li>Home</li>
        <li>About me</li>
        <li>Projects</li>
        <li>Contact me</li>
      </ul>
      <div className="footer__container__social">
        <p>Social</p>
        <ul className="social__links">
          <li><a href="https://www.linkedin.com/in/rickymormor/" aria-label="LinkedIn logo"><FaLinkedin /></a></li>
          <li><a href="https://github.com/cwaku" aria-label="Github logo"><FaGithub /></a></li>
          <li><a href="https://twitter.com/rickymormor" aria-label="Twitter logo"><FaTwitter /></a></li>
          <li><a href="https://instagram.com/rickymormor" aria-label="Instagram logo"><FaInstagram /></a></li>
        </ul>
      </div>
    </div>
    <div className="footer__container__copyright">
      <p>© 2022 Ricky Mormor.</p>
    </div>
  </footer>
);

export default Footer;