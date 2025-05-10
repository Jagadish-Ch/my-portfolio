import React, { useState } from "react";
import ResumeListItem from "./ResumeListItem";
import { ResumeConfig } from "../../configData";

const Resume = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="resume active">
      <div className="resume-container">
        <div className="resume-box">
          <h2>Why <span className="text-green">Hire Me</span>?</h2>
          <p className="desc">
            <i>"I don’t just write code—I craft solutions with purpose. Every line I build is backed by a deep desire to learn, grow, and make a real impact through technology."</i>
          </p>
          {ResumeConfig.map((item, index) => (
            <button
              key={index}
              className={`resume-btn ${index == activeTab ? "active" : ""}`}
              onClick={() => setActiveTab(index)}
            >
              {item.name}
            </button>
          ))}
        </div>

        <div className="resume-box">
          {ResumeConfig.map((item, index) => (
            <div
              key={index}
              className={`resume-details ${item.name.toLowerCase()} ${
                activeTab == index ? "active" : ""
              }`}
            >
              {item.name !== "About Me" ? (
                <h2 className="heading">
                  My <span>{item.name}</span>
                </h2>
              ) : (
                <h2 className="heading">
                  About <span>Me</span>
                </h2>
              )}
              <p className="desc">
                <i>{ResumeConfig[activeTab]?.description}</i>
              </p>
              
              <div className="resume-list">
                <ResumeListItem ActiveTabName={item.name} data={ResumeConfig[activeTab]?.data} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
