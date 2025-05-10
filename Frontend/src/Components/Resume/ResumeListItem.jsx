import React from "react";

const ResumeListItem = ({ ActiveTabName, data }) => {
  const handleLink = (link) => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  if (ActiveTabName === "Skills") {
    return data.map((item, index) => (
      <div key={index} className="resume-item">
        <i className={`bx bxl-${item.icon}`}></i>
        <span>{item.name}</span>
      </div>
    ));
  } else if (ActiveTabName === "About Me") {
    return data.map((item, index) => (
      <div key={index} className="resume-item">
        <p>
          {item.name} <span>{item.value}</span>
        </p>
      </div>
    ));
  } else {
    return data.map((item, index) => (
      <div key={index} className="resume-item">
        {item?.expType && (
          <p className="exp-type">
            {item?.expType?.toUpperCase() + " || " + item?.location}
          </p>
        )}
        {ActiveTabName == "Certifications" ? (
          <p className="exp-type year">{item?.certType?.toUpperCase()}</p>
        ) : (
          <p className="year">{item.year}</p>
        )}
        <h3 onClick={() => handleLink(item.certificateLink)} className="role">
          {item.roleName + " "}
          {ActiveTabName !== "Education" && (
            <i className="bx bx-link-external"></i>
          )}
        </h3>
        <p className="company">{item.company}</p>
        <p>{item.description}</p>
      </div>
    ));
  }
};

export default ResumeListItem;
