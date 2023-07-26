import React from "react";
import { FaYoutube, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div>
        <h1>HashCoderz</h1>
        <p>@All Rights Reserved</p>
      </div>

      <div>
        <h5>
          Follow Us
          <div>
            <a
              href="https://www.youtube.com/channel/UClErdcAacgk3XXVW-DjOUEA"
              target="blank"
            >
              <FaYoutube />
            </a>
            <a href="https://www.instagram.com/chirag_27_08/" target="blank">
              <FaInstagram />
            </a>
            <a href="https://github.com/RajputChirag27" target="blank">
              <FaGithub />
            </a>
          </div>
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
