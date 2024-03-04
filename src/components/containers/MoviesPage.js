import {useEffect, useState} from "react";
import {apiService, movieService} from "../../services";
import {MoviesList} from "../MoviesList/MoviesList";
import css from './MoviesPage.module.css'
import {useSearchParams} from "react-router-dom";
import {MoviesGenres} from "../MoviesGenres/MoviesGenres";

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [trigger, setTrigger] = useState(null);

    const [query, setQuery] = useSearchParams({page: '1'})
    const [prevNext, setPrevNext] = useState({prev: null, next: null})
    const [currentPage, setCurrentPage] = useState('1')
    useEffect(() => {
        console.log('UseEff....')
        movieService.getAll(query.get('page')).then(({data}) => {
            console.log('Data.res', data);
            console.log("Current page", data.page)
            setCurrentPage(data.page)
            setMovies(data.results)

        })
    }, [query.get('page')]);

    const prev = () => {
        setQuery(prev => {
            if (prev.get('page') > 1) {
                prev.set('page', (+prev.get('page') - 1).toString())
                console.log('Prev: ', prev.get('page'))
                return prev
            }
        })
    }

    const next = () => {
        setQuery(next => {
            next.set('page', (+next.get('page') + 1).toString())
            console.log('Next: ', next)
            return next
        })
    }

    return (
        <div className={css.MoviesPage}>
            <div><MoviesGenres/></div>
            <MoviesList movies={movies}/>
            <footer className={css.footer}>
                <button onClick={prev}>Previous</button>
                <button>{currentPage}</button>
                <button onClick={next}>Next</button>
            </footer>
        </div>
    );
};

export {MoviesPage};