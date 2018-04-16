<template>
    <div class="dashboard-container">
        <v-container>
            <h1 class="text-xs-center total">{{data.total}} Movies Found</h1>
        </v-container>
        <v-container>
            <v-layout row wrap align-items-center>
                <v-flex xs12 class="text-xs-center">
                    <v-pagination :length="data.pages" v-model="data.page" :total-visible="10"></v-pagination>
                </v-flex>
            </v-layout>
            <v-layout row wrap>
                <v-flex xs2 v-for="i in data.docs" :key="i.id">
                    <div class="vod-content">
                        <img :src="i.medium_cover_image">
                    </div>
                </v-flex>
            </v-layout>
            <div class="text-xs-center mt-30">
                <v-pagination :length="data.pages" v-model="data.page" :total-visible="10"></v-pagination>
            </div>
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
import Constant from '../config/Constant';
export default {
    name: 'browse',
    computed: {
        data () {
            return this.$store.getters.data
        }
    },
    asyncData ({ store, route }) {
        let pageSize = Constant.pageSize
        let pageNumber = route.params.pageNumber
        let params = {}
        params.pageSize = pageSize
        params.pageNumber = pageNumber
        return store.dispatch('getData', params)
    },
    watch: {
        'data.page' (to, from) {
            this.$router.push({path: `/browse/${to}/${Constant.pageSize}`})
        }
    }
}
</script>
