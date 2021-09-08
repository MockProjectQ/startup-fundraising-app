import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Login from './components/login/Login';
import LoginNext from './components/login/LoginNext';
import Home from './components/home/Home';
import CompanyList from './components/companyList/companyList';

import ErrorBoundary from './helper/Error';
import AdminDashboard from './components/adminDashboard/adminDashboard';

export default function App() {

  return (
    <div>
        <BrowserRouter>
          {/* <Navbar></Navbar> */}
          <ErrorBoundary>
                <Switch>
                    <Route   exact path="/login"     component={Login}/>
                    <Route   exact path="/home"      component={Home} />                  
                    <Route   exact path="/list"      component={CompanyList} />                  
                    <Route   exact path="/admin/dashboard"      component={AdminDashboard} />                  
                    <Route   exact path="*"          component={LoginNext} />
                </Switch>
          </ErrorBoundary>
        </BrowserRouter>

    </div>
  )
}
