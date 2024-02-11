import React from 'react'
import Back from '../common/back/Back'
import './contact.css'
import Footer from '../common/footer/Footer';

const Contact = () => {
    const map = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10497984.389701573!2d81.6692714942129!3d24.706019342564186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1694938524256!5m2!1sen!2sin";
    return (
        <div>
            
            <Back title='Contact Us' />
            <section className="contact padding">
                <div className="container shadow flexSB">
                    <div className="left row">
                        <iframe src={map}></iframe>
                    </div>
                    <div className="right row">
                        <h1>Contact Us</h1>
                        <p>Get in touch with our expert team to explore how our IT solutions can drive your business forward.</p>

                        <div className="items grid2">
                            <div className="box">
                                <h4>ADDRESS:</h4>
                                <p>GALA NO.214, 'B'-WING, AMBERNATH INDUSTRIAI PARK PLOT NO.AM-20; UDYOGBHA 421501</p>
                            </div>
                            <div className="box">
                                <h4>Email:</h4>
                                <p>SFS@gmail.com</p>
                            </div>
                            <div className="box">
                                <h4>Phone:</h4>
                                <p>123 456 7898</p>
                            </div>
                        </div>

                        <form action="">
                            <div className="flexSB">
                                <input type="text" placeholder='Name' />
                                <input type="email" placeholder='Email' />
                            </div>
                            <input type="email" placeholder='Subject' />
                            <textarea cols="30" rows="10">
                                Create a message here...
                            </textarea>
                            <button className="primary-btn">SEND MASSAGE</button>
                        </form>
                        <h3>Follow Us Here</h3>
                        <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
                    </div>
                </div>
            </section>
            <Footer />
        </div>

    )
}

export default Contact
