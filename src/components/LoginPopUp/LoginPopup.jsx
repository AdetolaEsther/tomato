import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

       const [currState, setCurrState] = useState("Login")

  return (
    <div className='login-popup'>
        <form className='login-popup-container'>
            <div className='login-popup-title'>
                <h2>{currState}</h2>

                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon}/>
            </div>
            <div className='login-popup-inputs'>
                {currState==="Login"?<></>: <input type='text' placeholder='Your name' required/>}
                <input type='email' placeholder='Your email' required/>
                <input type='password' placeholder='Your password' required/>
            </div>
            <button>{currState==='sign up'?'create account':'login'}</button>
            <div className='login-popup-condition'>
                <input type='checkbox' required/>
                <p>By continuing, I agrre to all terms of use and conditions.</p>
            </div>
            {currState==='Login'
            ? <p>Create account?<span onClick={()=>setCurrState("sign up")}>click here</span></p>
            :<p>existing account?<span onClick={()=>setCurrState("Login")}>Login here</span></p>
            }
           
            
       </form>
    </div>
  )
}

export default LoginPopup