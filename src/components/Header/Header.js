import {NavLink} from "react-router-dom";

import css from './Header.module.css';
import {useEffect, useState} from "react";
import {MoviesPage} from "../containers/MoviesPage";
import {LoginForm} from "../containers/LoginForm";
import {MoviesGenres} from "../MoviesGenres/MoviesGenres";

const Header = () => {


    return (
        <div className={css.Header}>
            <div>
                <h1>Movies</h1>
            </div>
            <div>
                <NavLink to={'login'} className={css.login}>Login</NavLink>
                <NavLink to={'register'} className={css.login}>Register</NavLink>
            </div>

        </div>
    );
};

export {Header};