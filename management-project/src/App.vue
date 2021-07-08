<template>
  <div id="app"> 
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
              <v-list-item-title>홈</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item router :to="{name: 'list'}">
            <v-list-item-action>
              <v-icon>mdi-login</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>회원관리</v-list-item-title>
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
        <v-toolbar-title>Management</v-toolbar-title>
      </v-app-bar>
  
      <v-main>
        <v-container
          class="fill-height"
          fluid
        >
          <v-row
              align="center"
              justify="center"
            >
              <v-col class="text-center">
                <router-view></router-view>
              </v-col>
            </v-row> 
        </v-container>
      </v-main>
      <v-footer
        color="indigo"
        app
      >
        <span class="white--text">&copy; {{ new Date().getFullYear() }}</span>
      </v-footer>
    </v-app> 
</div>
</template>

<script>  
export default { 

  data: () => ({
    drawer: null,
  }),
  props: {
    source: String,
  }, 
};
</script>
