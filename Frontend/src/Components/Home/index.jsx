import React from "react";
import { homeSecData } from "../../configData";

const Home = () => {
  return (
    <section className="home active">
      <div className="home-detail">
        <h1>{homeSecData.introduction}</h1>
        <h2>
          I'm a{" "}
          <span style={{ "--i": 4 }} data-text={homeSecData.yourRoles[0]}>
            {homeSecData.yourRoles[0]}
          </span>
          <span style={{ "--i": 3 }} data-text={homeSecData.yourRoles[1]}>
            {homeSecData.yourRoles[1]}
          </span>
          <span style={{ "--i": 2 }} data-text={homeSecData.yourRoles[2]}>
            {homeSecData.yourRoles[2]}
          </span>
          <span style={{ "--i": 1 }} data-text={homeSecData.yourRoles[3]}>
            {homeSecData.yourRoles[3]}
          </span>
        </h2>
        <p>
          <i>
            <b>{homeSecData.desc}</b>
          </i>
        </p>
        <div className="btn-sci">
          <a href={homeSecData.resumeLink} target="_blank" className="btn">
            Download CV
          </a>
          <div className="sci">
            <a href={homeSecData.gitHubLink} target="_blank">
              <i className="bx bxl-github"></i>
            </a>
            <a href={homeSecData.linkedLink} target="_blank">
              <i className="bx bxl-linkedin"></i>
            </a>
            {/* <a href="#"><i className="bx bxl-discord-alt"></i></a>
            <a href="#"><i className="bx bxl-youtube"></i></a> */}
          </div>
        </div>
      </div>

      <div className="home-img">
        <div className="img-box">
          <div className="img-item">
            {/* <img className="profile-item" src={homeSecData.profileImageAddress} /> */}
            <video className="profile-item" autoPlay muted loop>
              <source  src="https://videocdn.cdnpk.net/videos/c82f7ea6-0091-59b4-8001-85eb7ab11e89/horizontal/previews/clear/large.mp4?token=exp=1746886951~hmac=f36b829b3fbe8aaee25ab4b522b9a77c4666da7e5b1eec112ae0b8dac7c8eb86" type="video/mp4"/>
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
