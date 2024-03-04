import {apiService} from "./apiService";
import {urls} from "../constants";

const movieService={
    getAll:(page='1')=>apiService.get(urls.movie.base,{params:{page}}),
    getAllGenres:()=>apiService.get(urls.genres.base)
}

export {
    movieService
}