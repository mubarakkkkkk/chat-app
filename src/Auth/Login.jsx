import React from 'react'

const Login = () => {
  return (
    <div>
      <div className='loginContainer'>
        <h1>
            Welcome Back
        </h1>
        <div className='googleAndApple'>
            <button>
              Conntinue With Google
            </button>
            <button>
              Conntinue With Apple
            </button>
        </div>
        <div className='auth'>
            <input type="text" placeholder='Enter Email or Username' />
            <input type="password" placeholder='Enter Password' />
            <button>Login</button>
            <a href="/forgottenPass">Forgot password ?</a>
        </div>
      </div>
    </div>
  )
}

export default Login
