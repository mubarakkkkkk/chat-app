import React from 'react'
import './index.css'
import Logo from "./Images/ConvoHubLogo.png"

const Home = () => {
  return (
    <div className='landing'>
      <nav className='navigation'>      
      <img className='logo' src={Logo} alt="logo" />
      <a href="/signUp">SignUp</a>
      <button>Login</button>
      </nav>
    </div>
  )
}

export default Home
