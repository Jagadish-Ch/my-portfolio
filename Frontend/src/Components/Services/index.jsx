import React, { useState, useEffect } from "react";
// import { serviceSecData } from "../../configData";
import { getServices } from "../../api/service.api";

const Services = () => {
  const [serviceSecData, setServiceSecData] = useState([]);

  useEffect(() => {
    getServices()
      .then((res) => {
        setServiceSecData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching services data:", error);
      });
  }, []);

  // if (serviceSecData.length !== 0) {
    return (
      <section className="active">
        <h2 className="heading">
          My <span>Services</span>
        </h2>
        <div className="services-container">
          {serviceSecData.map((item, index) => (
            <div key={index} className="services-box">
              <div className="icon">
                <i className="bx bx-code-alt"></i>
                <a href={item.link}>
                  <i className="bx bx-arrow-back"></i>
                </a>
              </div>
              <h3>{item.name}</h3>
              <p>
                <i>{item.desc}</i>
              </p>
            </div>
          ))}
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

export default Services;
