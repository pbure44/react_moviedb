import css from './MovieInfo.module.css'
import {urls} from "../../constants";
import {useLocation} from "react-router-dom";
import StarRatings from "react-star-ratings/build/star-ratings";

const MovieInfo = () => {
    const location = useLocation();
    const {title, original_title, original_language, poster_path, release_date, vote_average, vote_count, popularity, overview}=location.state
    const poster = urls.poster.base + poster_path;
    return (
        <div className={css.MovieInfo}>
            <h1>Movie Title: "{title}"</h1>
            <h3>Ogirinal title: "{original_title}"</h3>
            <img className={css.img} src={poster} alt={title}/>
            <div>Rating: <StarRatings rating={vote_average} starRatedColor="yellow" starEmptyColor="grey" numberOfStars={10} name='vote_average' starDimension="20px" starSpacing="4px"/></div>
            <p>release_date: {release_date}</p>
            <p>vote_count:{vote_count}</p>
            <p>popularity:{popularity}</p>
            <p>overview:{overview}</p>
        </div>
    );
};

export {MovieInfo};