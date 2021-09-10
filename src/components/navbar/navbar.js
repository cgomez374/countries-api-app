import React from 'react';
import Styles from './navbar.module.css';

const navbar = () => {
    return (
        <header>
            <nav className={Styles.navbar}>
                <ul className={Styles.nav}>
                    <li>where in the world?</li>
                    <li>dark mode</li>
                </ul>
            </nav>
        </header>
    )
}

export default navbar
