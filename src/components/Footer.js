import React from 'react'
import "./Footer.css";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMedium } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Footer() {
  return (
    <div className="footer">
      <div className="social-links">
        <a className="github-link" href="https://github.com/MohamedMuflahi" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} style={{width: "4vh",height:"4vh"}}/>
        </a>
        <a className="linked-link" href="https://www.linkedin.com/in/mohamed-muflahi/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} style={{width: "4vh",height:"4vh"}}/>
        </a>
        <a className="medium-link" href="https://medium.com/@mohamedmuflahi" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faMedium} style={{width: "4vh",height:"4mvh"}}/>
        </a>
      </div>
      <div className="nav-links">

      </div>
      <div className="extra"></div>
    </div>
  )
}

export default Footer