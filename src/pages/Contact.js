import React from "react";
import Social from "../components/Social";
import "../styles/Custom.css";
import "../styles/Bootstrap.css";

function Contact() {

    return (

        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h3>Contact</h3>
                </div>
            </div>
            <hr className="my-4" />
            <div className="row">
                <div className="col-md-12" id="form_container">

                    <p> Please send your message below. I will get back to you as soon as I can! </p>
                    <form action="https://formspree.io/f/mwkwzdra" method="POST">
                        <div className="row">
                            <div className="col form-group">
                                <label for="message"> Message:</label>
                                <textarea className="form-control" type="textarea" name="message" id="message" maxlength="6000"
                                    rows="7"></textarea>
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col">
                                <label for="name"> Your Name:</label>
                                <input type="text" className="form-control" id="name" name="name" required />
                            </div>
                            <div className="col">
                                <label for="email"> Email:</label>
                                <input type="email" className="form-control" id="email" name="email" required />
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col">
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </div>

                        {/* </div> */}
                    </form>
                    <Social />
                </div>
            </div>
        </div>
    );
}

export default Contact;