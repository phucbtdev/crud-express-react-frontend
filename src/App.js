import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from "./components/Login/Login";
import Navigation from "./components/Navigation/Navigation";
import Register from "./components/Register/Register";

const App = () => {
  return (
    <Router>
      <div className="container">
        <Navigation />
        <Switch>
          <Route path="/" exact>
            home
          </Route>
          <Route path="/about">
            about
          </Route>
          <Route path="/news">
            news
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
