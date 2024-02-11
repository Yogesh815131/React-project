import React from 'react'

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className="container flexSB">
            <div className="logo">
                <h3>SIMPLIY FINTECH <br /><span class="highlight">SOLUTIONS</span></h3>
                <span className='space'>Web Develop</span>
            </div>

            <div className="social">
                <i className='fab fa-facebook-f icon'></i>
                <a href="https://www.instagram.com/yogesh_jadhav_05/?next=%2F" target="_blank"><i className='fab fa-instagram icon'></i></a>
                <i className='fab fa-twitter icon'></i>
                <a href="https://www.linkedin.com/in/yogesh-jadhav-937472272/" target="_blank"><i className='fab fa-linkedin icon'></i></a> 

            </div>
        </div>
      </section>
    </>
  )
}

export default Head
