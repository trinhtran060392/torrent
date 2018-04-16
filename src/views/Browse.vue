<template>
    <div class="dashboard-container">
        <!-- <v-container>
            <h1 class="text-xs-center total">{{data.movie_count}} Movies Found</h1>
        </v-container> -->
        <v-container>
            <v-layout row wrap align-items-center>
                <!-- <v-flex xs10 offset-xs1 class="text-xs-center">
                    <v-pagination :length="data.totalPage" v-model="data.page_number" :total-visible="10"></v-pagination>
                </v-flex> -->
                <v-flex xs1>
                    <v-btn @click="saveAll()">Save All</v-btn>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex xs2 v-for="i in data" :key="i.id">
                    <div class="vod-content">
                        <img :src="i.medium_cover_image">
                    </div>
                </v-flex>
            </v-layout>
            <!-- <div class="text-xs-center mt-30">
                <v-pagination :length="data.totalPage" v-model="data.page_number" :total-visible="10"></v-pagination>
            </div> -->
        </v-container>
        <!-- <v-snackbar
        :timeout="2000"
        :top="true"
        :right="true"
        v-model="snackbar"
        >
        Save successfully !
        </v-snackbar> -->
    </div>
</template>

<script>
export default {
    name: 'browse',
    computed: {
        data () {
            return this.$store.getters.data
        }
    },
    asyncData ({ store, route }) {
        return store.dispatch('getData')
    }
}
</script>
