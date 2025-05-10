import React from 'react'
import { serviceSecData } from '../../configData'

const Services = () => {
  return (
    <section className="active">
      <h2 className="heading">My <span>Services</span></h2>
      <div className="services-container">
      {serviceSecData.map((item, index) => (
        <div className="services-box">
          <div className="icon">
            <i className="bx bx-code-alt"></i>
            <a href={item.link}><i className="bx bx-arrow-back"></i></a>
          </div>
          <h3>{item.name}</h3>
          <p>
            <i>{item.desc}</i>
          </p>
        </div>
      ))}

        
      </div>
    </section>
  )
}

export default Services
