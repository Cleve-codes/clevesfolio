import React from "react";
import "./Contact.css";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="contact-section" id="contact" >
      <div>
        <h1 className="contact-span">CONTACT</h1>
        <div className="contact-header">
          <h1 className="h1">Get In Touch</h1>
          <div className="separator"></div>
        </div>
      </div>
      <div className="contact-text">
        <p className="contact-text" >
        If you have any suggestion, project or even you want to say “hello”,
         please fill  out the form below and I will reply you shortly.
        </p>
      </div>
      <form className="form" >
        <div className="flexdiv" >
          <div>
            <input className="input-contact"  placeholder="Name *" />
          </div>
          <div>
            <input className="input-contact" placeholder="Email *" />
          </div>
        </div>
        <div>
            <input className="input-contact" placeholder="Phone *" />
            <div className="input-container">
            <label for="message" className="input-label" >Message *</label>
            <input className="input-contact" type="text" id="message" />
            </div>
            <Button className="input-contact" variant="ghost" >SEND MESSAGE</Button>
        </div>
      </form>
      <div className="address" >
        <div className="address-detail" >
          <p>ADDRESS</p>
          <h2>South B, Nairobi, <br/> Kenya </h2>
        </div>
        <div className="address-detail" >
          <p>PHONE</p>
          <h2 className="phone">(+254) 700164733</h2>
        </div>
        <div className="address-detail" >
          <h6>clevemomanyi@gmail.com</h6>
        </div>
      </div>
    </div>
  );
};

export default Contact;
