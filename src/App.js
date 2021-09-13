import Navbar from './components/navbar/navbar';
import Countries from './components/countries/countries';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CountryDetails from './components/countryDetails.js/countryDetails';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Countries />
          </Route>
          <Route path='/:alpha2Code'>
            <CountryDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
