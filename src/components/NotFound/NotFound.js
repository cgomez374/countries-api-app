import React from 'react';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import Styles from './NotFound.module.css';


const NotFound = () => {
    return (
        <div className={Styles.notFound}>
            <h1>Page Not Found :(</h1>
            <Link to='/'>
                <button>go Home</button>
            </Link>
        </div>
    )
}

export default NotFound;
