import React from 'react'
import "./hero.css"
import Title from '../../common/title/Title'


const Hero = () => {
    return (
        <>
            <section className="hero">
                <div className="container">
                    <div className="row">
                        <Title subtitle='Welcom To Website' title='Best Online Web'/>
                        <p>Empower your business with cutting-edge technology and innovative IT solutions. We're your trusted partner in achieving digital transformation, driving growth, and staying ahead in the fast-paced tech landscape.</p>
                        <div className="button">
                            {/* <button type='submit'>
                            <i>
                            <Link to="/login">Login</Link> 
                            </i>
                            </button> */}

                            
                            <button>
                                Login <i className='fa fa-long-arrow-alt-right'></i>
                            </button>
                            
                            <button>
                                LEARN MORE <i className='fa fa-long-arrow-alt-right'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <div className="marigin"></div>
        </>
    )
}

export default Hero
