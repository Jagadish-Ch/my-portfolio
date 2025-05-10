import React, { useState } from "react";
import { PortfolioConfig } from "../../configData";

const Portfolio = () => {
  var [activeProject, setActiveProject] = useState(0);

  const handleClick = (navigate) => {
    if (navigate == "left") {
      if (activeProject > 0) {
        setActiveProject(activeProject - 1);
      }
    } else if (navigate == "right") {
      if (activeProject < PortfolioConfig.length - 1) {
        setActiveProject(activeProject + 1);
      }
    }
  };
  console.log(activeProject);
  return (
    <section className="portfolio active">
      <h2 className="heading">
        Latest <span>Project</span>
      </h2>
      <div className="portfolio-container">
        <div className="portfolio-box">
          {PortfolioConfig.map((item, index) => (
            <div
              key={index}
              className={`portfolio-detail ${
                index == activeProject ? "active" : ""
              }`}
            >
              <p className="numb">
                {index >= 0 && index < 10 ? `0${index + 1}` : index + 1}
              </p>
              <h3>{item.projectName}</h3>
              <p>{item.desc}</p>
              <div className="tech">
                <p>{item.projectSkills}</p>
              </div>
              <div className="live-github">
                <a href={item.projectLiveURL} target="_blank">
                  <i className="bx bx-arrow-back"></i>
                  <span>Live Project</span>
                </a>
                <a href={item.gitHubRepo} target="_blank">
                  <i className="bx bxl-github"></i>
                  <span>Github Repository</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="portfolio-box">
          <div className="portfolio-carousel">
            <div
              className="img-slide"
              style={{
                transform: `translateX(calc(${activeProject * -100}% - ${
                  activeProject * 2
                }rem))`,
              }}
            >
              {PortfolioConfig.map((item, index) => (
                <div key={index} className="img-item">
                  <img src={item.projectThumbNail} />
                </div>
              ))}
            </div>
          </div>

          <div className="navigation">
            <button
              className="arrow-left"
              style={
                activeProject > 0
                  ? { opacity: 1, cursor: "pointer" }
                  : {
                      opacity: 0.4,
                      pointerEvents: "none",
                    }
              }
              onClick={() => handleClick("left")}
            >
              <i className="bx bx-chevron-left"></i>
            </button>
            <button
              className="arrow-right"
              style={
                activeProject < PortfolioConfig.length - 1
                  ? { opacity: 1, cursor: "pointer" }
                  : {
                      opacity: 0.4,
                      pointerEvents: "none",
                    }
              }
              onClick={() => handleClick("right")}
            >
              <i className="bx bx-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
