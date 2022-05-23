import React from "react";
import { useNavigate } from "react-router-dom";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
function Navbar() {
    let navigate = useNavigate();
  return (
    <SideNav
      onSelect={(selected) => {
        navigate(`/${selected}`)
      }}
    >
      <SideNav.Toggle />
      <SideNav.Nav defaultSelected="/">
        <NavItem eventKey="">
          <NavIcon>
            <FontAwesomeIcon
              icon={faHome}
              size="xl"
            />
          </NavIcon>
          <NavText>Home</NavText>
        </NavItem>
        <NavItem eventKey="portfolio">
          <NavIcon>
          <FontAwesomeIcon
               icon={faFolder}
               size="xl"
               shake 
              // style={{}}
            />
          </NavIcon>
          <NavText>Portfolio</NavText>
        </NavItem>
        <NavItem eventKey="resume">
          <NavIcon>
          <FontAwesomeIcon icon={faFile} size="xl" />
          </NavIcon>
          <NavText>Resume</NavText>
        </NavItem>
        <NavItem eventKey="about">
          <NavIcon>
          <FontAwesomeIcon icon={faUser} size="xl" />
          </NavIcon>
          <NavText>About Me</NavText>
        </NavItem>
        <NavItem eventKey="contact">
          <NavIcon>
          <FontAwesomeIcon icon={faPhone} size="xl" />
          </NavIcon>
          <NavText>Contact</NavText>
        </NavItem>
      </SideNav.Nav>
    </SideNav>
  );
}
function Home() {}

export default Navbar;
