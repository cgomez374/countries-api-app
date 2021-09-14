import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const CountryDetails = () => {
    //use params
    const { alpha2Code } = useParams();
    const location = useLocation();
    const {countries} = location.state;

    return (
        <div>
            {countries.map(country => {
                if(country.alpha2Code === alpha2Code){
                    return(
                        <div>
                            <img src={country.flag} alt="country flag" />
                            <div>
                                {country.name ? <h2>{country.name}</h2> : null }<br/>
                                <div>
                                    <h4>native name: {country.nativeName} </h4>
                                    <h4>population: {country.population} </h4>
                                    <h4>region: {country.region} </h4>
                                    <h4>sub region: {country.subregion} </h4>
                                    <h4>capital: {country.capital} </h4>
                                    <h4>top level domain: {country.topLevelDomain[0]} </h4>
                                    <h4>currencies: {country.currencies.map(element => {
                                        return element.name;
                                    })} </h4>
                                    <h4>languages: {country.languages.map(element => {
                                        return element.name;
                                    })} </h4>
                                </div>
                                <h3>border countries: {
                                    country.borders.map(element => {
                                        return element + " ";
                                    })
                                    } 
                                </h3>    
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default CountryDetails;
