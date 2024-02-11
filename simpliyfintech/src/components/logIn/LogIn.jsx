import React, { useState } from 'react'
import './login.css'
const LogIn = () => {

  const [action, setAction] = useState("Sign Up");

  return (
    <section>
      <div className="containerLogin">
        <div className="headerlog">
          <div className="textlog">{action}</div>
          <div className="underline"></div>
        </div>

        <div className="inputs">

          {action==="Login"?<div></div>:<div className="input">
          <img src=".\images\user.webp" alt="" /> 
            <input type="text" placeholder='Enter Name' required/>
          </div>}

          <div className="input">
          <img src=".\images\email.png" alt="" />
            <input type="email" placeholder='Enter Email' required='@gmail.com'/>
          </div>

          <div className="input">
          <img src=".\images\padlock.png" alt="" />
            <input type="password" placeholder='Enter Possword' required/>
          </div>
        </div>

        {action==="Sign Up"?<div></div>:<div className="forgot-password">Forgot password? <span>Click Here!</span></div>}

        <div className="submit-container">
          <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
          <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>

      </div>
    </section>
  )
}

export default LogIn

//#9CC4D0----->bg color
//<i className='fa fa-long-arrow-alt-right'></i>