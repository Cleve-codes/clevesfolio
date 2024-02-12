import React from "react";
import "./Contact.css";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="contact-section">
      <div>
        <h1 className="span">CONTACT</h1>
        <div className="about-header">
          <h1 className="h1">Get In Touch</h1>
          <div className="separator"></div>
        </div>
      </div>
      <div className="contact-text">
        <p className="contact-text" >
        If you have any suggestion, project or even you want to <br /> say “hello”,
         please fill out the form below
         <br /> and I will reply you shortly.
        </p>
      </div>
      <form>
        <div>
          <div>
            <input placeholder="Name *" />
          </div>
          <div>
            <input placeholder="Email *" />
          </div>
        </div>
        <div>
            <input placeholder="Phone *" />
            <input placeholder="Message *" />
            <Button>SEND A MESSAGE</Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
