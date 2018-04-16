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
        }
    }
})
