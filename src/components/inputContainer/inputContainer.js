import React, { useEffect, useState } from 'react';
import { getCountriesByName } from '../../contexts/api/getCountriesByName';
import {getCountriesByRegions} from '../../contexts/api/getCountriesByRegions';
import {getCountries} from '../../contexts/api/getCountries'
import Styles from './inputContainer.module.css'

const InputContainer = ({ countries, setCountries, setError }) => {
    //state for change
    const [input, setInput] = useState('');
    const [region, setRegion] = useState("Filter by Region");

    //update countries as input changes
    useEffect(() => {
        getCountriesByName(setCountries, setError, input);

        if(region !== "Filter by Region") {
            let query = input.toLowerCase();
            let countryRegX = new RegExp(query);
            let results = [];

            countries.filter(country => {
                if(countryRegX.test(country.name.toLowerCase()))
                    results.push(country);
            });

            setCountries(results);
        }
    }, [input]);

    //handle input change
    const changeHandler = (e) => {
        if(e !== null){
            setInput(e.target.value);
        }
    };

    const setCountriesByRegion = (e) => {
        setRegion(e.target.value);

        if(e !== null && e.target.value !== "Filter by Region") {
            getCountriesByRegions(setCountries, setError, e.target.value);
        }
        else if(e.target.value === "Filter by Region"){
            getCountries(setCountries, setError);
        }
    }

    return (
        <article className={Styles.filter}>
            <input type="text" onChange={changeHandler} className={Styles.search} placeholder='Search for a country...' />
            <select name="regions" onChange={setCountriesByRegion} className={Styles.select}>
                <option value="Filter by Region">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
                </select>
        </article>
    )
}

export default InputContainer;
