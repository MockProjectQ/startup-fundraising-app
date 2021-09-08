import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from './components/login/Login';
import LoginNext from './components/login/LoginNext';
import Home from './components/home/Home';
import Profile from './components/profile/Profile';
import ErrorBoundary from './helper/Error';
import InvestorForm from './components/investor/InvestorForm';

export default function App() {

  return (
    <div>
        <BrowserRouter>
          {/* <Navbar></Navbar> */}
          <ErrorBoundary>
                <Switch>
                    <Route   exact path="/login"     component={Login}/>
                    <Route   exact path="/home"      component={Home} />                  
                    <Route   exact path="/profile"      component={Profile} />                  
                    <Route   exact path="/investor"      component={InvestorForm} />                  
                    
                    <Route   exact path="*"          component={LoginNext} />
                </Switch>
          </ErrorBoundary>
        </BrowserRouter>

    </div>
  )
}
