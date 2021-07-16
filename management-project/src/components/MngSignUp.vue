<template>
  <div id="app"> 
    <v-app id="inspire">
      <v-main>
        <v-container
          class="fill-height"
          fluid
        >
          <v-row
            align="center"
            justify="center"
          >
            <v-col
              cols="12"
              sm="8"
              md="4"
            >
              <v-card class="elevation-12">
                <v-toolbar
                  color="primary"
                  dark
                  flat
                >
                  <v-toolbar-title>회원가입</v-toolbar-title> 
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field
                      v-model="email"
                      label="이메일"
                      name="email"
                      prepend-icon="mdi-email"
                      type="text"
                    ></v-text-field>
  
                    <v-text-field
                      v-model="password"
                      label="비밀번호"
                      name="password"
                      prepend-icon="mdi-lock"
                      type="password"
                    ></v-text-field>

                    <v-text-field
                      v-model="name"
                      label="이름"
                      name="name"
                      prepend-icon="mdi-account"
                      type="text"
                    ></v-text-field>
                    
                    <v-text-field
                      v-model="addr"
                      label="주소"
                      name="addr"
                      prepend-icon="mdi-call-split"
                      type="text"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" @click="userInfo">SignUp</v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app> 
</div>
</template>

<script>
export default {
  name: 'MngSignUp',
  data(){
    return{
      email: "",
      password: "",
      name: "",
      addr: ""
    } 
  },
  props: {
    source: String,
  },
  methods:{
    userInfo(){
      console.log(this.email);
    }
  }
}
</script>

<style>

</style>