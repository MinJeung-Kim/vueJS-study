<template>
  <v-app id="inspire">
      <v-navigation-drawer
        v-model="drawer"
        app
      >
        <v-list dense>
          <v-list-item router :to="{name: 'home'}">
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-if="isLogin === false" router :to="{name: 'login'}">
            <v-list-item-action>
              <v-icon>mdi-login</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Login</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-else router :to="{name: 'mypage'}">
            <v-list-item-action>
              <v-icon>mdi-login</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Mypage</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  
      <v-app-bar
        app
        color="indigo"
        dark
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Application</v-toolbar-title>
        <v-spacer></v-spacer>  
          <v-menu offset-y falt v-if="isLogin">
            <template v-slot:activator="{ on, attrs }">
              <v-btn 
                icon
                dark
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item router :to="{name: 'mypage'}">
                <v-list-item-title>마이페이지</v-list-item-title>
              </v-list-item>
              <!--  
                @click="$store.commit('logout')"
                  => store.js의 mutations에 접근 하고 싶을때는 commit() 사용 
                @click="$store.dispatch('logout')"
                  => actions 접근은 dispatch() 사용
              -->
              <v-list-item
                @click="$store.dispatch('logout')"
              >
                <v-list-item-title>로그아웃</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-btn falt v-else router :to="{name:'isLogin'}">Log In</v-btn> 
      </v-app-bar>
  
      <v-main>
        <v-container
          class="fill-height"
          fluid
        >
        <router-view></router-view>
        </v-container>
      </v-main>
      <v-footer
        color="indigo"
        app
      >
        <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
      </v-footer>
    </v-app>
</template>

<script> 
import { mapState } from "vuex"
export default {  
  data: () => ({
    drawer: null,
  }),
  computed: {
    ...mapState(['isLogin'])
  }, 
  props: {
    source: String,
  },
};
</script>
