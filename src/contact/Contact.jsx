import phone from "../images/phone.png";
import email from "../images/email.png";
import address from "../images/address.png"

const Contact = () => {
    return (
        <div className="contact">
            <div className="contact-backgr"></div>
            <div className="contact-wrapper">
                <div className="contact-left">
                    <h1 className="contact-title">let's discuss your project</h1>
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <img src={phone}
                            alt=""
                            className="contact-icon"/>
                            +1 123 4567 8900
                        </div>
                        <div className="contact-info-item">
                            <img src={email}
                            alt=""
                            className="contact-icon"/>
                            adiana@gmail.com
                        </div>
                        <div className="contact-info-item">
                            <img src={address}
                            alt=""
                            className="contact-icon"/>
                            main st pittsburgh 15102 PA
                        </div>

                    </div>
                </div>
                <div className="contact right">
                    <p className="contact-description">
                        <b> What is your Project</b>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ea perspiciatis impedit molestias mollitia corrupti excepturi fugiat quia qui? Minima quibusdam beatae esse ea nesciunt quis reiciendis saepe ipsum dignissimos?
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Contact