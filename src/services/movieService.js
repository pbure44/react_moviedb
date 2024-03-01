import {apiService} from "./apiService";
import {urls} from "../constants";

const movieService={
    getAll:()=>apiService.get(urls.movie.base),
    getById:(id)=>apiService.get(urls.movie.byId(id))
}

export {
    movieService
}