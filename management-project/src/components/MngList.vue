<template>
  <v-card>
    <v-card-title>
      회원 리스트
      <v-spacer></v-spacer>
      <v-text-field
        v-model="$store.state.search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table  
      :headers="$store.state.headers"
      :items="$store.state.desserts"
      :search="$store.state.search"
      @click="popUpOpen = true"
    >  
    </v-data-table>
    <MngPopUp v-if="popUpOpen === true"/>
  </v-card>
</template>

<script>
import MngPopUp from './MngPopUp.vue'

  export default {
    name: 'MngList',
    data(){
      return{
        popUpOpen : false
      }
    },
    components:{
      MngPopUp
    }
  }
</script> 