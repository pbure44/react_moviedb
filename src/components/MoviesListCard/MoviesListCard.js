import {MovieInfo} from "../MovieInfo/MovieInfo";
import css from './MoviesListCard.module.css'
import {urls} from "../../constants";
import {useNavigate} from "react-router-dom";
import StarRatings from "react-star-ratings/build/star-ratings";

const MoviesListCard = ({movie}) => {
    // console.log('MovieListCard...', movie)
    const {title, release_date, poster_path, vote_average} = movie;
    const poster = urls.poster.base + poster_path;

    const navigate = useNavigate();
    const navigateToMovieInfo = () => {
        navigate('/movieinfo', {state: movie})
    }

    return (
        <div className={css.MoviesListCard}>
            <div className={css.card}>

                <a onClick={() => navigateToMovieInfo()} className={css.poster}><img src={poster} alt={title}/></a>

                <div className={css.background}>
                    <p className={css.p}>title: {title}</p>
                    <p className={css.p}>release_date: {release_date}</p>
                    <figure className={css.figure}>
                        <div>Rating:</div>
                        <StarRatings rating={vote_average} starRatedColor="blue" numberOfStars={10} name='vote_average'
                                     starDimension="15px" starSpacing="2px"/>
                    </figure>
                </div>
            </div>
        </div>
    );
};


export {MoviesListCard};