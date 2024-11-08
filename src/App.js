import React from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import CreateAcct from "./Auth/CreateAcct"
import Forgottenpass from "./Auth/ForgottenPass"

const App = () => {
  return (
   <Router>
    <div>
      <Switch>
        <Route path='/CreateAcct'>
          <CreateAcct />
        </Route>
      </Switch>
      <Switch>
        <Route path='/Forgottenpass'>
          <Forgottenpass />
        </Route>
      </Switch>
    </div>
   </Router>
  )
}

export default App
