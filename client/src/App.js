import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from './components/login/Login';
import LoginNext from './components/login/LoginNext';
import Home from './components/home/Home';
import CompanyList from './components/companyList/companyList';

import ErrorBoundary from './helper/Error';
import AdminDashboard from './components/adminDashboard/adminDashboard';
import Profile from './components/profile/Profile';
import InvestorForm from './components/investor/InvestorForm';
import Signup from './components/signup/Signup';

export default function App() {

  return (
    <div>
        <BrowserRouter>
          {/* <Navbar></Navbar> */}
          <ErrorBoundary>
                <Switch>
                    <Route   exact path="/login"     component={Login}/>
                    <Route   exact path="/home"      component={Home} />                  
                    <Route   exact path="/admin/list"      component={CompanyList} />                  
                    <Route   exact path="/admin/dashboard"      component={AdminDashboard} />                  
                    <Route   exact path="/profile"      component={Profile} />                  
                    <Route   exact path="/startup/:id"      component={Profile} />                  
                    <Route   exact path="/investor"      component={InvestorForm} />                  
                    <Route   exact path="/signup"      component={Signup} />                  
                    
                    <Route   exact path="*"          component={LoginNext} />
                </Switch>
          </ErrorBoundary>
        </BrowserRouter>

    </div>
  )
}
