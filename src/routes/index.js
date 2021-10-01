import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Store from '../pages/store';
import NotFound from '../pages/NotFound';
import ProductDetails from "../pages/details/productdetails";

// Component for routing management
const Routes = () => {

  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Store}/>
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="*" component={NotFound} />
        </Switch>
    </Router>
  );
}

export default Routes;
