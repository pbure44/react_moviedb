import {apiService} from "./apiService";
import {urls} from "../constants";

const tokenKey = 'token'

const authService = {

    register(data) {
        return apiService.post(urls.auth.register, data)
    },

    async login(data) {
        const {data} = await apiService.post(urls.auth.register, data)
    },

    setToken(token) {
        localStorage.setItem(tokenKey, token)
    },
    getToken() {
        return localStorage.getItem(tokenKey)
    },
    deleteToken() {
        localStorage.removeItem(tokenKey)
    }
}