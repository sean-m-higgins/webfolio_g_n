import React from "react"

const ContactForm = () => {
    return <form name="Contact Form" method="POST" data-netlify="true">
      <input type="hidden" name="form-name" value="Contact Form" />
      <div>
        <label>Your Email:</label>
        <input type="email" name="email" />
      </div>
      <div>
        <label>Message:</label>
        <textarea name="message" />
      </div>
      <button type="submit">Send</button>
    </form>
    // <form name="contact" netlify netlify-honeypot="bot-field" hidden>
    //   <input type="text" name="name" />
    //   <input type="email" name="email" />
    //   <textarea name="message"></textarea>
    // </form>
    // <form name="contact" netlify>
    //     <p>
    //         <label>Name <input type="text" name="name" /></label>
    //     </p>
    //     <p>
    //         <label>Email <input type="email" name="email" /></label>
    //     </p>
    //     <p>
    //         <button type="submit">Send</button>
    //     </p>
    // </form>
}

export default ContactForm