/* eslint-disable no-unused-vars */
"use client"

import React from "react"
import styles from "./Contact.module.css"
import { Rocket } from "lucide-react"

export const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <section className={styles.container} id="contact">
      <h2 className={styles.title}>Get in touch</h2>
      <div className={styles.formContainer}>
        <h3 className={styles.formTitle}>
          Email Me <Rocket className={styles.rocketIcon} />
        </h3>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input type="email" name="email" placeholder="Your Email" required className={styles.input} />
          </div>
          <div className={styles.inputGroup}>
            <input type="text" name="name" placeholder="Your Name" required className={styles.input} />
          </div>
          <div className={styles.inputGroup}>
            <input type="text" name="subject" placeholder="Subject" required className={styles.input} />
          </div>
          <div className={styles.inputGroup}>
            <textarea name="message" placeholder="Message" required className={styles.textarea} rows={6}></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            Send
          </button>
        </form>
      </div>
    </section>
  )
}

