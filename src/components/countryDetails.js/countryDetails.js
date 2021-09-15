import React from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import Styles from './countryDetails.module.css';
import Borders from '../Borders/Borders';

const CountryDetails = () => {
    //use params
    const { alpha2Code } = useParams();
    const location = useLocation();
    const {country} = location.state;

    return (
        <div className={Styles.detailsPage} >
            <Link to='/' >
                <button className={Styles.backButton} ><i class="fas fa-long-arrow-alt-left"></i>  back</button>
            </Link>
                        <div className={Styles.detailsContainer}>
                            <img src={country.flag} alt="country flag" />
                            <div className={Styles.detailsRight} >
                                {country.name ? <h2>{country.name}</h2> : null }
                                <div className={Styles.detailsText}>
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
                                <div className={Styles.borders}>
                                    <h4>border countries:</h4>
                                    {/* <div className={Styles.borderList} > */}
                                        { country.borders.map((element, index) => { 
                                            if(index < 3)
                                                return <Borders code={element} />
                                        })}
                                    {/* </div> */}
                                      
                                </div> 
                            </div>
                        </div>
                    ) 
        </div>
    )
}

export default CountryDetails;
