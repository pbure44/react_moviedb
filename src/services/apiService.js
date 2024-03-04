import axios, {request} from "axios";

import {baseURL} from "../constants";
import {authService, TOKEN} from "./authService";

const apiService = axios.create({baseURL})

apiService.interceptors.request.use(request=>{
    authService.setToken(TOKEN);

    const token = authService.getToken();
    if (token){
        request.headers.Authorization=`Bearer ${token}`
    }
    return request
})

export {
    apiService
}