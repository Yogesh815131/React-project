import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <>
            <section className="newletter">
                <div className="container flexSB">
                    <div className="left row">
                        <h1>NewSletter -Stay tune and get the latedt update</h1>
                        <span>far far away, behind  the word mountains</span>
                    </div>
                    <div className="right row">
                        <input type="text" placeholder='Enter email address' />
                        <i className="fa fa-paper-plane"></i>
                    </div>
                </div>
            </section>
            <footer>
                <div className="container padding">
                    <div className="box logo">
                        <h1>SFS</h1>
                        <span>WEB DESIGNING & DEVELOPE</span>
                        <p>We specialize in web design, creating<br />stunning and user-friendly websites <br />tailored to your brand's unique identity.</p>
                        <i className='fab fa-facebook-f icon'></i>
                        <i className='fab fa-instagram icon'></i>
                        <i className='fab fa-twitter icon'></i>
                        <i className='fab fa-linkedin icon'></i>
                    </div>

                    <div className='box link'>
                        <h3>Explore</h3>
                        <ul>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Contact us</li>
                            <li>Home</li>
                        </ul>
                    </div>

                    <div className="box link">
                        <h3>Quck Links</h3>
                        <ul>
                            <li>Contact Us</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy</li>
                            <li>Feedbacks</li>
                        </ul>
                    </div>

                    <div className="box last">
                        <h3>Have a Questions?</h3>
                        <ul>
                            <li>
                                <i className="fa fa-map"></i>
                                203 Fake ST. Mount View, <br /> san francisio california, USA
                            </li>
                            <li>
                                <i className="fa fa-phone-alt"></i>
                                +123 456 7898
                            </li>
                            <li>
                                <i className="fa fa-paper-plane"></i>
                                SFS@gmail.com
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className="legal">
                <p>Copyright @2023 All rights reserved | This Template is made with <i className="fa fa-heart"></i> By Yogesh</p>
            </div>
        </>
    )
}

export default Footer
