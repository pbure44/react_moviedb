import {useEffect, useState} from "react";
import {movieService} from "../../services";
import {GenreBadge} from "./GenreBadge";
import css from './MoviesGenres.module.css'

const MoviesGenres = () => {
    const [genres, setGenres] = useState([])
    useEffect(() => {

        movieService.getAllGenres().then(({data})=> {
            console.log("Genres:",data.genres);
            return  setGenres(data.genres);

        })

    }, []);
    return (
        <div className={css.MoviesGenres}>
            MoviesGenres
            {genres.map(genre=><GenreBadge key={genre.id} genre={genre}/>)}

        </div>
    );
};

export {MoviesGenres};