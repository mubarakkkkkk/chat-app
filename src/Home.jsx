import React from 'react'
import './index.css'
import Logo from "./Images/convohub-logo-v4 (5).png"

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
      <section className='content'>
        <h1>
          The Communications Experience Reimagined
        </h1>
        <p>
          
        </p>
      </section>
    </div>
  )
}

export default Home
