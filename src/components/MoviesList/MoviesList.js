import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {useEffect} from "react";
import css from './MoviesList.module.css'
import {useSearchParams} from "react-router-dom";

const MoviesList = ({movies}) => {


    return (
        <div className={css.body}>
            <div className={css.MoviesList}>
                {movies.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            </div>


        </div>
    )
        ;
};

export {MoviesList};