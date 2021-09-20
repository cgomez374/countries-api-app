import React, { useEffect, useState} from 'react'
import { getCountry } from '../../contexts/api/getCountry'
import {Link} from 'react-router-dom'
import Styles from './Borders.module.css'

const Borders = ({code}) => {
    const [borderCountry, setBorderCountry] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        getCountry(setBorderCountry, code, setError);
    }, [code])

    return (
        <div>
            {!error &&
                <Link to={{ pathname: `/${borderCountry.alpha2Code}`,
                            state: { 
                                country: borderCountry 
                        }}} className={Styles.border} >
                    <button>{borderCountry.name}</button>
                </Link>
            }
        </div>
    )
}

export default Borders
