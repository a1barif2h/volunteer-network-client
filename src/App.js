import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Admin from "./components/Admin/Admin";
import Blog from "./components/Blog/Blog";
import Donation from "./components/Donation/Donation";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Register from "./components/Register/Register";
import UserEvent from "./components/UserEvent/UserEvent";

export const localContext = createContext();

function App() {
  const [logedInUser, setLogedInUser] = useState({});

  return (
    <localContext.Provider
      value={[logedInUser, setLogedInUser]}
      className="App"
    >
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/donation">
            <Donation />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
          <PrivateRoute path="/register/:title">
            <Register />
          </PrivateRoute>
          <Route path="/user-events">
            <UserEvent />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </localContext.Provider>
  );
}

export default App;
