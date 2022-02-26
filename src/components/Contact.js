import React from "react";
/* icons */
import { VscGithub } from "react-icons/vsc";
import { AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  return (
    <section id="contact">
      <h1 className="section-title">Let's get in touch!</h1>
      <div className="findme">
        <p>
          I am currenty available and would love to hear about any opportunities
          and projects you have in mind!
        </p>
        <h3>FIND ME ON</h3>
        <div className="findme-icons">
          <a
            href="https://github.com/romainnm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <VscGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/romain-n-a4535128"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillLinkedin />
          </a>
        </div>
        <hr className="line-separator" />
        <p>Email Me</p>
      </div>

      <form
        className="contact-form"
        action="mailto:romain.nim+website@gmail.com"
        method="get"
        encType="application/x-www-form-urlencoded"
      >
        <div className="contact-col2">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
        </div>
        <textarea
          name="subject"
          placeholder="Let me know what you have in mind and I will get back to you as quickly as possible!"
        ></textarea>
        <button type="submit" className="btn btn-contact">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
