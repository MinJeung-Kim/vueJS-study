<template>
 <v-container fill-height style="max-width:450px;">
    <v-layout align-center row wrap>
      <v-flex xs12>
        <v-alert type="success" :value="isLogin" class="mb-3">
          I'm a success alert.
        </v-alert>
        <v-alert type="error" :value="isLoginError" class="mb-3">
          I'm an error alert.
        </v-alert>
        <v-card>
          <v-toolbar flat
            color="indigo"
            dark
          > 
            <v-toolbar-title>Login</v-toolbar-title> 
            <v-spacer></v-spacer> 
          </v-toolbar> 
          <div class="pa-3">
            <v-text-field
              v-model="email"
              label="email"
            ></v-text-field>
            <v-text-field
              type= password
              v-model="password"
              label="password"
            ></v-text-field>
            <v-btn
              large
              block
              depressed
              color="primary"
              @click="login({
                email: email, 
                password: password
              })"
            >로그인</v-btn> 
          </div>
        </v-card> 
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>  
import { mapState, mapActions} from "vuex"

export default {
  data() {
    return {
      email: null,
      password: null,  
    }
  },
  computed: {
    ...mapState(["isLogin", "isLoginError"])
  },
  methods: {
    ...mapActions(["login"]),  
  },

}
</script>

