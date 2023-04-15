import React from "react";
import { isMobile } from "react-device-detect";

import Intro from "../Intro";

import NavigationList from "../NavigationList/NavigationList";

import "./Header.scss";

function Header() {
  return (
    <section className="wrapper">
      <div className="intro">
        <div className="headerBar">
          <div className="initials">AYC</div>
          <div className="right">
            <label aria-hidden={true} className="hamburgerMenu">
              <input
                aria-label="Toggle hidden menu"
                aria-expanded={false}
                type="checkbox"
              />
            </label>
            {isMobile ? (
              <aside className="sidebar">
                <nav className="navList">
                  <NavigationList />
                </nav>
              </aside>
            ) : (
              <NavigationList />
            )}
          </div>
        </div>
        <Intro />
      </div>
    </section>
  );
}

export default Header;
