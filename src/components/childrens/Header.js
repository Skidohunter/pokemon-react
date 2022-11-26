import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
        <header>
                <div className='filtrer'>
                    <nav>
                        <ul className='navContainer'>
                            <li><NavLink to={'/'}>Home</NavLink></li>
                            <li><NavLink to={'/Pokemons'}>Pokemons</NavLink></li>
                            <li><NavLink to={'/Arrayjson'}>Arrayjson</NavLink></li>
                            <li><NavLink to={'/Type'}>Type</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
};

export default Header;