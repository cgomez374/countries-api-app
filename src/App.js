import Navbar from "./components/navbar/navbar";
import Countries from "./components/countries/countries";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CountryDetails from "./components/countryDetails.js/countryDetails";
import { ThemeContext } from "./contexts/ThemeContext/ThemeContext";
import React, { useContext } from "react";

function App() {
  const {darkTheme} = useContext(ThemeContext);

  return (
    <Router>
      <div id={darkTheme && "darkBackground"}>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Countries />
          </Route>
          <Route path="/:alpha2Code">
            <CountryDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
