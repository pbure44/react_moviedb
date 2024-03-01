const baseURL = "https://api.themoviedb.org/3"

const auth = '/auth'
const movie = '/movie'
const users = '/users'

const urls = {
    auth: {
        login: auth,
        register: users,
        me: `${auth}/me`
    },
    movie: {
        base: movie,
        byId:(id)=>`$/find/${id}`
    },
    moviesPlayNow: {
        base: `${movie}/now-playing`
    },
    moviesTopRated: {
        base: `${movie}/top-rated`
    }
}

export {
    baseURL,urls
}