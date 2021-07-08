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
    >  
    </v-data-table>
  </v-card>
</template>

<script>
  export default {
    
  }
</script> 