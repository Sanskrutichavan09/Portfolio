/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import MainContainer from "../../Components/MainContainer/MainContainer";
import ComponentTitle from "../ContainerTitle/ContainerTitle";
import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser";

// Components for form and icons
import Circle from "../../Components/Circle/Circle";

function Contact() {
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_62v73jp",
          "template_uumdq5c",
          form.current,
          "5aAcUTvqoxHTCRKGU"
        )
        .then(
          (result) => {
            alert("Message Sent");
            form.current.reset();
          },
          (error) => {
            alert("Error sending message: " + error.text);
          }
        );
    } else {
      console.error("Form element not found!");
    }
  };

  return (
    <div>
      <Circle top={"-5rem"} right={"-18rem"} />
      <MainContainer>
      <ComponentTitle title={"Get in touch"}  />

        <div className={styles.box}>
          <div className={styles.left_section_indexing}>
            <form ref={form} onSubmit={handleSubmit} className={styles.contactForm}>
              <h3 className={styles.contactTitle}>Email Me 🚀</h3>
              <input
                className={styles.contactInput}
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
              />
              <input
                className={styles.contactInput}
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
              />
              <input
                className={styles.contactInput}
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
              <textarea
                className={styles.contactMessage}
                name="message"
                rows="4"
                placeholder="Message"
                required
              />
              <button type="submit" className={styles.contactButton}>Send</button>
            </form>
          </div>
          
        </div>
      </MainContainer>
    </div>
  );
}

export default Contact;
