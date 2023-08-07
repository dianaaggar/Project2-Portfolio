
import phone from "../images/phone.png";
import email from "../images/email.png";
import address from "../images/address.png";
import { useState } from "react"



const Contact = () => {
    // State variables for form inputs
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    // create function form
    const handleSubmit = (e) => {
        e.preventDefault();
        // Prevent refreshing the webpage
        // Handle form submission logic here
        // You can access the form values using the state variables (name, email, subject, message)
        console.log(name, email, subject, message);

    
    }

    return (
        <div className="contact">
            <div className="contact-backgr"></div>
            <div className="contact-wrapper">
                <div className="contact-left">
                    <h1 className="contact-title">let's discuss your project</h1>
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <img src={phone} alt="" className="contact-icon" />
                            +1 123 4567 8900
                        </div>
                        <div className="contact-info-item">
                            <img src={email} alt="" className="contact-icon" />
                            adiana@gmail.com
                        </div>
                        <div className="contact-info-item">
                            <img src={address} alt="" className="contact-icon" />
                            main st pittsburgh 15102 PA
                        </div>
                    </div>
                </div>
                <div className="contactRight">
                    <p className="contact-description">
                        <b> What is your Project</b>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ea perspiciatis impedit molestias mollitia corrupti excepturi fugiat quia qui? Minima quibusdam beatae esse ea nesciunt quis reiciendis saepe ipsum dignissimos?
                    </p>
                    <div className="infos">
                        <form onSubmit={handleSubmit}>
                            
                            <input
                                type="text"
                                placeholder="Name"
                                name="user_name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Email"
                                name="user_email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Subject"
                                name="user_subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                            />
                            <div>
                                <textarea
                                    rows="8"
                                    placeholder="Message"
                                    name="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;


