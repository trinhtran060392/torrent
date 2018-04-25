import Vue from 'vue'
import Constant from '../config/Constant'
export default new Vue({
    methods: {
        create (movie) {
            let uri = `${Constant.api}movies/add`
            return this.axios.post(uri, movie)
        },
        get (page, limit) {
            let uri = `${Constant.entryPoint}list_movies.json?page=${page}&limit=${limit}`
            return this.axios.get(uri)
        },
        saveAll (movies) {
            console.log(movies)
            let uri = `${Constant.api}movies/addall`
            return this.axios.post(uri, movies)
        },
        list (pageNumber, pageSize) {
            let uri = `${Constant.api}movies/${pageNumber}/${pageSize}`
            return this.axios.get(uri)
        },
        get (title) {
            let uri = `${Constant.api}movies/movie/${title}`
            return new Promise((resolve, reject) => {
                this.axios.get(uri).then((response) => {
                    let result = ''
                    let temp = response.data[0]
                    for (let i = 0; i < temp.genres.length; i++) {
                        result += temp.genres[i]
                        if(i !== temp.genres.length - 1) {
                            result += '/'
                        }
                    }
                    temp.genresTxt = result
                    temp.imdbLink = `https://www.imdb.com/title/${temp.imdb_code}`
                    resolve(temp)
                })
            })
            
        },
        relatedMovies (genre) {
            let uri = `${Constant.api}movies/relate/${genre}`
            return this.axios.get(uri)
        }
    }
})
