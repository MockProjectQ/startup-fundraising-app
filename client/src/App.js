import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";


import Home from './components/home/Home';

import ErrorBoundary from './helper/Error';


export default function App() {

  return (
    <div>
        <BrowserRouter>
          {/* <Navbar></Navbar> */}
          <ErrorBoundary>
                <Switch>
                    
                    <Route   exact path="/home"      component={Home} />                  
                    
                </Switch>
          </ErrorBoundary>
        </BrowserRouter>

    </div>
  )
}