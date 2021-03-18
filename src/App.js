import logo from "./logo.svg";
import "./App.css";
import Nava from "./components/Nav/Nav";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Confermation from "./components/Confermation/Confermation";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import { createContext, useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const userContext = createContext();

function App() {
  const [user, setUser] = useState({});
  console.log(user);
  return (
    <userContext.Provider value={[user, setUser]}>
      <Router>
        <Nava></Nava>
        <Switch>
          <Route exact path="/">
            <LandingPage></LandingPage>
          </Route>
          <Route path="/home">
            <LandingPage></LandingPage>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
          <PrivateRoute path="/id/:id">
            <Confermation></Confermation>
          </PrivateRoute>
          {/* <Route path="/id/:id">
            <Confermation></Confermation>
          </Route> */}
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </userContext.Provider>
  );
}

export default App;
