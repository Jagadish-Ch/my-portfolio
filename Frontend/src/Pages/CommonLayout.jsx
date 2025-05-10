import React, { useState } from "react";
import Home from "../Components/Home";
import Services from "../Components/Services";
import Resume from "../Components/Resume";
import Portfolio from "../Components/Portfolio";
import Contact from "../Components/Contact";

const CommonLayout = ({ children }) => {
  const [menuActive, setMenuActive] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const config = [
    {
      name: "Home",
      component: <Home />,
    },
    {
      name: "Service",
      component: <Services />,
    },
    {
      name: "Resume",
      component: <Resume />,
    },
    {
      name: "Portfolio",
      component: <Portfolio />,
    },
    {
      name: "Contact",
      component: <Contact />,
    },
  ];

  const handleActiveTab = (index) => {
    setActiveTab(index);
    setMenuActive(!menuActive)
  }

  return (
    <div>
      {/* Header */}
      <header className="active">
        <span className="logo" onClick={() => setActiveTab(0)}>
          My<span className="text-green">Portfolio</span>
        </span>

        <i className={`bx ${!menuActive?"bx-menu":"bx-x active"}`} id="menu-icon" onClick={() => setMenuActive(!menuActive)}></i>

        <nav className={!menuActive?"":"active"}>
          {config.map((item, index) => (
            <span
              key={index}
              className={`nav-btn ${activeTab == index ? "active" : ""}`}
              onClick={() => handleActiveTab(index)}
            >
              {item.name}
            </span>
          ))}
        </nav>
      </header>

      {/* animated bars background */}
      <div className="bars-box active">
        <div className="bar" style={{ "--i": 6 }}></div>
        <div className="bar" style={{ "--i": 5 }}></div>
        <div className="bar" style={{ "--i": 4 }}></div>
        <div className="bar" style={{ "--i": 3 }}></div>
        <div className="bar" style={{ "--i": 2 }}></div>
        <div className="bar" style={{ "--i": 1 }}></div>
      </div>

      {/* ActiveTab Rendering */}
      {config[activeTab].component}
    </div>
  );
};

export default CommonLayout;
