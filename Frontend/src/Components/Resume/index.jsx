import React, { useState, useEffect } from "react";
import ResumeListItem from "./ResumeListItem";
import { ResumeConfig } from "../../configData";
import { getExperiences } from "../../api/experience.api";
import { getCertifications } from "../../api/certifications.api";
import { getEducations } from "../../api/education.api";
import { getSkills } from "../../api/skill.api";
import { getAboutMe } from "../../api/aboutme.api";

const Resume = () => {
  const [activeTab, setActiveTab] = useState(0);

  const [expSecData, setExpSecData] = useState([]);
  const [certSecData, setCertSecData] = useState([]);
  const [eduSecData, setEduSecData] = useState([]);
  const [skillsSecData, setSkillsSecData] = useState([]);
  const [aboutMeSecData, setAboutMeSecData] = useState([]);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        const expRes = await getExperiences();
        setExpSecData(expRes?.data || []);

        const certSecRes = await getCertifications();
        setCertSecData(certSecRes?.data || []);

        const eduSecRes = await getEducations();
        setEduSecData(eduSecRes?.data || []);

        const skillsSecRes = await getSkills();
        setSkillsSecData(skillsSecRes?.data || []);

        const aboutMeSecRes = await getAboutMe();
        setAboutMeSecData(aboutMeSecRes?.data || []);
      } catch (err) {
        console.log(err);
      }
    };

    fetchAllData();
  }, []);

  ResumeConfig[0].data = expSecData;
  ResumeConfig[1].data = certSecData;
  ResumeConfig[2].data = eduSecData;
  ResumeConfig[3].data = skillsSecData;
  ResumeConfig[4].data = aboutMeSecData;

  // if (ResumeConfig[activeTab]?.data?.length !== 0) {
    return (
      <section className="resume active">
        <div className="resume-container">
          <div className="resume-box">
            <h2>
              Why <span className="text-green">Hire Me</span>?
            </h2>
            <p className="desc">
              <i>
                "I don’t just write code—I craft solutions with purpose. Every
                line I build is backed by a deep desire to learn, grow, and make
                a real impact through technology."
              </i>
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
                  <ResumeListItem
                    ActiveTabName={item.name}
                    data={ResumeConfig[activeTab]?.data}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  // } else {
  //   return (
  //     <div className="loader">
  //       <h1>Loading...</h1>
  //     </div>
  //   );
  // }
};

export default Resume;
