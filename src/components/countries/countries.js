import React, { useState, useEffect } from 'react';
import {getCountries} from '../../contexts/api/getCountries'
import Styles from './countries.module.css'

const Countries = () => {
    //state
    const [countries, setCountries] = useState([]);

    //get counties at start
    useEffect(() => {
        //api call
        getCountries(setCountries);
    }, [])

    return (
        <main>
            <article className={Styles.countiesList}>
                {countries.map((country) => {
                    return (
                        <div className={Styles.country}>
                            <img className={Styles.countryImg} src={country.flag} alt="country flag" />
                            <div className={Styles.countryDetails}>
                                <h3>{country.name}</h3><br />
                                <p>population: {country.population}</p>
                                <p>region: {country.region}</p>
                                <p>capital: {country.capital}</p>
                            </div>
                        </div>
                    )
                })}
            </article>
        </main>
    )
}

export default Countries
