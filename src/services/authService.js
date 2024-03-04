import {apiService} from "./apiService";
import {urls} from "../constants";

const tokenKey = 'token'
const registerData = 'registerData'
const TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNTQ5ZjlmOGRlNmMzNTI0MTYyMjgxMjQ5NDQ1MzFhZCIsInN1YiI6IjY1ZTFmYzI3YTgwNjczMDE4NGFiNzU4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UBJxs7EZvC1wcw4AW-2l3P8qA_Rm7JM1d2ITCRSV_XI'

const authService = {

    register(item) {
        localStorage.setItem(registerData,JSON.stringify(item))
    },

    login() {
        return JSON.parse(localStorage.getItem(registerData))
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
export {
    authService,TOKEN
}