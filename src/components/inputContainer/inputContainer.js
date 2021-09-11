import React, { useEffect, useState } from 'react';
import { getCountriesByName } from '../../contexts/api/getCountriesByName';
import Styles from './inputContainer.module.css'

const InputContainer = ({ setCountries, setError }) => {
    //state for change
    const [input, setInput] = useState('');

    //handle input change
    const changeHandler = (e) => {
        if(e !== null){
            setInput(e.target.value);
        }

    }
    //update countries as input changes
    useEffect(() => {
        getCountriesByName(setCountries, setError, input);
    }, [input])

    return (
        <article className={Styles.filter}>
            <input type="text" onChange={changeHandler} className={Styles.search} placeholder='Search for a country...' />
            <select name="cars" id="cars">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
                </select>
        </article>
    )
}

export default InputContainer;
