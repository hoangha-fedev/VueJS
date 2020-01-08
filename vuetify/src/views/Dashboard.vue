<template>
  <div class="home">
    <h1 class="subheading grey--text">Dashboard</h1>

    <v-container class="my-5">
      <v-layout row class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small color="grey white--text mr-4" v-on="on" @click="sortBy('title')">
              <v-icon left small>folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Sort projects by project name</span>
        </v-tooltip>
        
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small color="grey white--text mr-4" v-on="on" @click="sortBy('person')">
              <v-icon left small>person</v-icon>
              <span class="caption text-lowercase">By Person</span>
            </v-btn>
          </template>
          <span>Sort projects by person</span>
        </v-tooltip>
      </v-layout>

      <v-card flat v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project Title</div>
            <div>{{project.title}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{project.person}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{project.due}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="d-flex justify-end">
              <v-chip
                small
                :class="`${project.status} white--text caption my-2`"
              >{{ project.status }}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      projects: [
        {
          title: "Design a new website",
          person: "Hoang Ha",
          due: "7th Freb 2019",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ea eius illo exercitationem optio eos tempora, laboriosam esse animi aperiam est eligendi! Eligendi, enim! Earum et libero placeat cum nobis."
        },
        {
          title: "Code up the homepage",
          person: "Hoang Ha 2",
          due: "7th Freb 2019",
          status: "complete",
          content:
            "Lorem  ipsum dolor sit amet consectetur, adipisicing elit. Odio ea eius illo exercitationem optio eos tempora, laboriosam esse animi aperiam est eligendi! Eligendi, enim! Earum et libero placeat cum nobis."
        },
        {
          title: "Design video thumbnails",
          person: "Hoang Ha 3",
          due: "7th Freb 2019",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ea eius illo exercitationem optio eos tempora, laboriosam esse animi aperiam est eligendi! Eligendi, enim! Earum et libero placeat cum nobis."
        },
        {
          title: "Create a community forum",
          person: "Hoang Ha 4",
          due: "7th Freb 2019",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio ea eius illo exercitationem optio eos tempora, laboriosam esse animi aperiam est eligendi! Eligendi, enim! Earum et libero placeat cum nobis."
        }
      ]
    };
  },
  components: {},
  methods:{
    sortBy(prop) {
      this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
    }
  }
};
</script>

<style lang="scss">
.project {
  &.complete {
    border-left: 4px solid #3cd1c2;
  }
  &.ongoing {
    border-left: 4px solid orange;
  }
  &.overdue {
    border-left: 4px solid tomato;
  }
}
.v-chip {
  &.complete {
    background: #3cd1c2 !important;
  }
  &.ongoing {
    background: #ffaa2c !important;
  }
  &.overdue {
    background: #f83e70 !important;
  }
}
</style>