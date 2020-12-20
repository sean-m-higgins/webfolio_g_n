import React from "react"

import StyledButton from "./moreButton"

const ContactForm = () => {
    return <form name="Contact Form" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="Contact Form" />
                <div className="col">   
                    <label>Your Email:</label>
                </div>
                <div className="col">   
                    <input type="email" name="email" />
                </div>
                <div className="col">   
                    <label>Message:</label>
                </div>
                <div className="col">   
                    <textarea name="message" />
                </div>
                <a type="submit">
                    <StyledButton children="Send"/>
                </a>
            </form>
}

export default ContactForm