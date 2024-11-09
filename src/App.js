import React from 'react'
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"
import Home from './Home'
import CreateAcct from "./Auth/CreateAcct"
import Forgottenpass from "./Auth/ForgottenPass"
import Jesica from './Jesica'

const App = () => {
  return (
    <Router>
      <div>
        {/* <nav>
          <Link to="/">App</Link> | <Link to="/createAcct">Create Account</Link> |{" "}
          <Link to="/forgottenpass">Forgot Password</Link> |{" "}
          <Link to="/jesica">Jesica</Link>
        </nav> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createAcct" element={<CreateAcct />} />
          <Route path="/forgottenpass" element={<Forgottenpass />} />
          <Route path="/jesica" element={<Jesica />} />
          {/* Optional 404 Not Found route */}
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
