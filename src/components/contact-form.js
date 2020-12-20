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
}

export default ContactForm