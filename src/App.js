import React from 'react'
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"
import Home from './Home'
import SignUp from "./Auth/SignUp"
import Forgottenpass from "./Auth/ForgottenPass"
import Login from './Auth/Login'

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgottenpassword" element={<Forgottenpass />} />
          <Route path="/login" element={<Login />} />
          {/* Optional 404 Not Found route */}
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
