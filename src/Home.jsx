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
      <a href="/login">
      <button className='navLoginBtn'>Login</button>
      </a>
      </div>     
      </nav>
      <section className='content'>
        <h1>
          The Communications Experience Reimagined
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos itaque doloremque libero commodi aliquid quibusdam! Fuga dolorem quasi minima ex? At quis ullam iure officia necessitatibus incidunt unde tempore?
        </p>
      </section>
    </div>
  )
}

export default Home
