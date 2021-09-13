import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {getCountries} from '../../contexts/api/getCountries';
import InputContainer from '../inputContainer/inputContainer';
import Styles from './countries.module.css';

const Countries = () => {
    //state
    const [countries, setCountries] = useState([]);
    const [error, setError] = useState(false);

    //get counties at start
    useEffect(() => {
        //api call
        getCountries(setCountries);
    }, [])

    return (
        <main>
            <InputContainer countries={countries} setCountries={setCountries} setError={setError} />
            <article className={Styles.countiesList}>
                {!error ? countries.map((country) => {
                    return (
                        <Link to={`/${country.alpha2Code}`} key={country.alpha2Code}>
                            <div className={Styles.country} >
                                <img className={Styles.countryImg} src={country.flag} alt="country flag" />
                                <div className={Styles.countryDetails}>
                                    {country.name ? <h3>{country.name}</h3> : null }<br/>
                                    {country.population ? <p>population: {country.population}</p> : null }
                                    {country.region ? <p>region: {country.region}</p> : null }
                                    {country.capital ? <p>capital: {country.capital}</p> : null }
                                </div>
                            </div>
                        </Link>
                    )
                }) : <h3>{error}</h3> }
            </article>
        </main>
    )
}

export default Countries
