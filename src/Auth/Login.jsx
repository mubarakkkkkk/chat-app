import React from 'react'
import '../index.css'
import GoogleIcon from './Icon/googleIcon'
import AppleIcon from './Icon/appleIcon'

const Login = () => {

  return (
    <div>
      <div className='loginContainer'>
        <h1 className='welcomeTxt'>
            Welcome Back
        </h1>
        <div className='googleAndApple'>
            <button className='continueWithGoogle'>
              Conntinue With Google
              <GoogleIcon />
            </button>
            <button className='continueWithApple'>
              Conntinue With Apple
              <AppleIcon />
            </button>
        </div>
        <div className='auth'>
            <input type="text" placeholder='Enter Email or Username' className='userId'/>
            <input type="password" placeholder='Enter Password' className='password'/>
            <button className='loginBtn'>Login</button>
            <a href="/forgottenPass" className='forgottenPasswordLink'>Forget password ?</a>
        </div>
      </div>
    </div>
  )
}

export default Login
