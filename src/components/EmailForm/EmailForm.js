import React from "react";


const EmailForm = () => (
    <div>
        <div>   
            <h4 className="custFont center light-blue-text text-darken-4">Contact</h4>
            <form action="https://formspree.io/danielkylepruitt@gmail.com" method="POST">
                <div className="input-field col s12">
                    <input type="text" name="name" />
                    <label htmlFor="autocomplete-input">Name</label>
                </div>

                <div className="input-field col s12">
                    <input type="text" name="subject" className="autocomplete" />
                    <label htmlFor="autocomplete-input">Subject</label>
                </div>

                <div className="input-field col s12">
                    <input type="text" name="body" />
                    <label htmlFor="autocomplete-input">Body</label>
                </div>

                <div className="input-field col s12">
                    <input type="email" name="_replyto" />
                    <label htmlFor="autocomplete-input">Email</label>
                </div>

                <button type="submit" value="Send" className="center" >Send</button>
                <p className="text-grey text-lighten-5">*Form hosted by Formspree.io, please continue through the next pages to send me an email!</p>
            </form>
        </div>
    </div>


);

export default EmailForm;
