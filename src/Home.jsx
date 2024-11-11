import React from 'react'
import './index.css'
import Logo from "./Images/ConvoHubLogo.png"

const Home = () => {
  return (
    <div className='landing'>
      <nav className='navigation'>      
      <img className='logo' src={Logo} alt="logo" />
      <div className='linkNBtn'>
      <a href="/signUp" className='link'>SignUp</a>
      <button className='loginBtn'>Login</button>
      </div>     
      </nav>
    </div>
  )
}

export default Home
