import React, { useEffect } from 'react'
import { useState } from 'react/cjs/react.development'
import { getCountry } from '../../contexts/api/getCountry'
import {Link} from 'react-router-dom'
import Styles from './Borders.module.css'

const Borders = ({code}) => {
    const [borderCountry, setBorderCountry] = useState({});

    useEffect(() => {
        getCountry(setBorderCountry, code);
    }, [code])

    return (
        <div>
            <Link to={{ pathname: `/${borderCountry.alpha2Code}`,
                        state: { 
                            country: borderCountry 
                    }}} className={Styles.border} >
                <button >{borderCountry.name}</button>
            </Link>
        </div>
    )
}

export default Borders
