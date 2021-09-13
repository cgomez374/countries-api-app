import React from 'react'
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    //use params
    const { alpha2Code } = useParams();

    return (
        <div>
            <h2>country details - {alpha2Code}</h2>
        </div>
    )
}

export default CountryDetails;
