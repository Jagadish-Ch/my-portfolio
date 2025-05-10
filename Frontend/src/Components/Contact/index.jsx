import React, { useState } from "react";
import Swal from 'sweetalert'
import { ContactConfig } from "../../configData";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "", subject: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    
    setLoading(true);
    try {
      
    const formData = new FormData(event.target);
    formData.append("access_key", "e31fcc1d-c76e-48a6-b909-7ba8dc397c0b");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setLoading(false);
      Swal({
      title: "Thank You!",
      text: "I will contact you shortly",
      icon: "success"
      });
      setFormData({ name: "", email: "", mobile: "", subject: "", message: "" });

    } else {
      setLoading(false);
      Swal({
        icon: "error",
        title: "Oops...",
        text: res?.message,
      });
      console.log("Failed: ", res);
      setFormData({ name: "", email: "", mobile: "", subject: "", message: "" });
      }
    } catch (error) {
      setLoading(false);
      Swal({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Retry again...",
      });
      console.log("Failed: ", error);
    }
  };

  return (
    <section className="contact active">
      <div className="contact-container">
        <div className="contact-box">
          <h2>
            Let's <span className="text-green">Work Togeather</span>
          </h2>
          <p className="desc">
            <i>
              "Ready to build something great together? Reach out and let’s make
              it happen"
            </i>
          </p>

          {/* Email Details */}
          <div className="contact-detail">
            <i className="bx bxs-envelope"></i>
            <div className="detail">
              <p>{ContactConfig?.email?.name}</p>
              <p>{ContactConfig?.email?.value}</p>
            </div>
          </div>
        </div>

        <div className="contact-box">
          <form action="" onSubmit={onSubmit} method="POST">
            <h2 className="heading">
              Contact <span>Me!</span>
            </h2>
            <div className="field-box">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData?.name}
                onChange={handleChange}
                id=""
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                value={formData?.email}
                onChange={handleChange}
                id=""
                required
              />
              <input
                type="text"
                name="mobile"
                placeholder="Your Phone Number"
                value={formData?.mobile}
                onChange={handleChange}
                id=""
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Email Subject"
                value={formData?.subject}
                onChange={handleChange}
                id=""
                required
              />
              <textarea
                name="message"
                id=""
                placeholder="Your Message"
                value={formData?.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn">
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
