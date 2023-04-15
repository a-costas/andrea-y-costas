import React, { useState, useEffect } from "react";
// import { isMobile } from "react-device-detect";

import Intro from "../Intro";

import NavigationList from "../NavigationList/NavigationList";

import "./Header.scss";

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 670);

  const handleWindowSizeChange = () => {
    setIsMobile(window.innerWidth <= 670);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  console.log(isMobile);

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
