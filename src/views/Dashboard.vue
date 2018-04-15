<template>
<div class="dashboard-container">
    <v-container>
        <h1 class="text-xs-center total">{{info.movie_count}} Movies Found</h1>
    </v-container>
    <v-container>
        <v-layout row wrap align-items-center>
            <v-flex xs10 offset-xs1 class="text-xs-center">
                <v-pagination :length="info.totalPage" v-model="info.page_number" :total-visible="10"></v-pagination>
            </v-flex>
            <v-flex xs1>
                <v-btn @click="saveAll()">Save All</v-btn>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs2 v-for="i in info.movies" :key="i.id">
                <div class="vod-content">
                    <img :src="i.medium_cover_image">
                </div>
            </v-flex>
        </v-layout>
        <div class="text-xs-center mt-30">
            <v-pagination :length="info.totalPage" v-model="info.page_number" :total-visible="10"></v-pagination>
        </div>
    </v-container>
  </div>
</template>

<script>
import MovieService from '../components/MovieService'
export default {
    name: 'dashbard',
    computed: {
        info () {
            return this.$store.getters.info
        }
    },
    asyncData ({ store, route: { params: { id }} }) {
        return store.dispatch('getMovies', id)
    },
    watch: {
        'info.page_number' (to, from) {
            console.log(to)
            this.$router.push({path: `/movie/${to}`})
            location.reload();
        }
    },
    methods: {
        saveAll () {
            let count = 0
            for (let i = 0; i < this.info.movies.length; i++) {
                let temp = this.info.movies[i]
                MovieService.create(temp).then((response) => {
                    count++
                })
            }
            if (count === this.info.movies.length) {
                this.$notify({
                    group: 'foo',
                    title: 'Success',
                    text: 'Save Successfully!'
                    });
            }
        }
    }
}
</script>
