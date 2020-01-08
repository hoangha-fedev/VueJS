<template>
  <div class="about">
    <h1 class="subheading grey--text">Team</h1>

    <v-container class="my-5">
        <v-layout row wrap>
          <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
            <v-card flat class="text-center ma-3">
              <v-responsive class="pt-4">
                <v-avatar size="100" class="grey lighten-2">
                  <img :src="person.avatar">
                </v-avatar>
              </v-responsive>
              <v-card-text>
                <div class="subheading">{{person.name}}</div>
                <div class="grey--text">{{person.role}}</div>
              </v-card-text>
              <v-card-actions>
                <v-btn color="grey white--text"> 
                  <v-icon small left>message</v-icon>
                  <span>Message</span>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      team : [
        {name: 'Hoang Ha', role: 'Web developer', avatar: '/avatar-1.png'},
        {name: 'Hoang Ha 1', role: 'Front-End developer', avatar: '/avatar-2.png'},
        {name: 'Hoang Ha 2', role: 'Maketing', avatar: '/avatar-3.png'},
        {name: 'Hoang Ha 3', role: 'Designer', avatar: '/avatar-4.png'},
        {name: 'Hoang Ha 4', role: 'Sales', avatar: '/avatar-5.png'}
      ]
    }
  }
}
</script>