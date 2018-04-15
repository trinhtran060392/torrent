<template>
  <div class="dashboard-container">
    <v-container>
        <div class="text-xs-center">
            <v-pagination :length="info.totalPage" v-model="info.page_number" :total-visible="10"></v-pagination>
        </div>
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
export default {
    name: 'dashbard',
    computed: {
        info () {
            return this.$store.getters.info
        }
    },
    asyncData ({ store, route }) {
        return store.dispatch('getMovies')
    }
}
</script>
