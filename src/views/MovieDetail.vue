<template>
    <div class="dashboard-container detail">
        <v-container>
            <v-layout row wrap>
                <v-flex xs3 class="text-md-center image-container">
                    <img :src="movie.medium_cover_image">
                </v-flex>
                <v-flex xs9>
                    <v-card>
                    <v-card-title class="text-xs-left">
                        {{movie.title_long}}
                    </v-card-title>
                    <v-card-text class="genres">
                        {{movie.genresTxt}}
                    </v-card-text>
                    <v-card-text>
                        <v-layout row wrap>
                            <v-flex xs2>
                                <div>Available in
                            
                                </div>
                            </v-flex>
                            <v-flex xs10>
                                <div  class="link">
                                    <a v-for="item in movie.torrents" :key="item.url" :href="item.url">{{item.quality}}.BruRay</a>
                                </div>
                            </v-flex>
                        </v-layout>
                        
                    </v-card-text>
                    <v-card-text>
                      <v-icon>favorite</v-icon>
                    </v-card-text>
                    <v-card-text>
                      <v-layout align-center>
                        <a :href="movie.imdbLink" target="_blank"><img src="/public/logo-imdb.svg"/></a>
                        <span class="ibm">{{movie.rating}}</span>
                        <v-icon>star_rate</v-icon>
                      </v-layout>
                    </v-card-text>
                    <v-card-text class="grey--text text-xs-left">Summary</v-card-text>
                    <v-card-text class="text-xs-left">
                        {{movie.summary}}
                    </v-card-text>
                    <v-card-text class="grey--text text-xs-left">Detail</v-card-text>
                    <v-card-text class="text-xs-left">
                        <p>Rating: {{movie.rating}}</p>
                        <p>Year: {{movie.year}}</p>
                    </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import MovieService from '../components/MovieService'
export default {
    name: 'detail',
    computed: {
      movie () {
          return this.$store.getters.movie
      }
    },
    asyncData ({ store, route: { params: { title }} }) {
        return store.dispatch('getMovie', title)
    },
    watch: {
      '$route.params.title' (value) {
        console.log(this.movie)
      }
    },
    created () {
      console.log(this.movie)
    },
    title () {
      return this.movie
      ? this.movie.title_long
      : 'Movie not found'
    }
}
</script>
