const baseURL = "https://api.themoviedb.org/3"

const auth = '/auth'
const movie = '/discover/movie'
const users = '/users'
const genres = '/genre/movie/list'

const urls = {
    auth: {
        login: auth,
        register: users,
    },
    movie: {
        base: movie,
        byId: (id) => `$/find/${id}`
    },
    genres: {
        base: genres
    },
    poster: {
        base: 'https://media.themoviedb.org/t/p/w220_and_h330_face'
    }
}

export {
    baseURL, urls
}