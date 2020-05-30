import React from "react"
import Title from "../Title"
import styles from "../../css/contact.module.css"

const Contact = () => {
  return (
    <section className={styles.contact}>
      <Title title="contact" subtitle="us" />
      <div className={styles.center}>
        <form
          action="https://formspree.io/oruiz622@gmail.com"
          method="POST"
          className={styles.form}
        >
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className={styles.formControl}
              placeholder="John Smith"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className={styles.formControl}
              placeholder="email@email.com"
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              type="message"
              id="message"
              rows="10"
              className={styles.formControl}
              placeholder="Hello there..."
            />
          </div>
          <div>
            <input
              type="submit"
              value="Submit Here"
              className={styles.submit}
            />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
