import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { getCountries } from "../../contexts/api/getCountries";
import { ThemeContext } from "../../contexts/ThemeContext/ThemeContext";
import InputContainer from "../inputContainer/inputContainer";
import Styles from "./countries.module.css";

const Countries = () => {
  //context
  const { darkTheme } = useContext(ThemeContext);

  //state
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(false);

  //get counties at start
  useEffect(() => {
    //api call
    getCountries(setCountries, setError);
  }, []);

  return (
    <main id={darkTheme ? "darkBackground" : undefined}>
      <InputContainer
        countries={countries}
        setCountries={setCountries}
        setError={setError}
        error={error}
      />
      <article
        className={Styles.countiesList}
        id={darkTheme ? "darkBackground" : undefined}
      >
        {!error && countries.length > 0 ? (
          countries.map((country) => {
            return (
              <Link
                to={{
                  pathname: `/${country.alpha2Code}`,
                  state: {
                    country: country,
                  },
                }}
                key={country.alpha2Code}
              >
                <div
                  className={Styles.country}
                  id={darkTheme ? "darkElements" : undefined}
                >
                  <img
                    className={Styles.countryImg}
                    src={country.flags[0] ? country.flags[0] : "./error.jpg"}
                    alt="country flag"
                  />
                  <div
                    className={Styles.countryDetails}
                    id={darkTheme ? "darkElements" : undefined}
                  >
                    {country.name ? <h3>{country.name}</h3> : null}
                    <br />
                    {country.population ? (
                      <p>population: {country.population}</p>
                    ) : null}
                    {country.region ? <p>region: {country.region}</p> : null}
                    {country.capital ? <p>capital: {country.capital}</p> : null}
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <h3>{error}</h3>
        )}
      </article>
    </main>
  );
};

export default Countries;
