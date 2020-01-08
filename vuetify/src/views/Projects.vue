<template>
  <div class="about">
    <h1 class="subheading grey--text">Projects</h1>

    <v-container class="my-5">
      <v-expansion-panels>
      <v-expansion-panel v-for="project in myProjects" :key="project.title">
        <v-expansion-panel-header>{{project.title}}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <div class="font-weight-bold">Due by {{project.due}}</div>
          <div>{{project.content}}</div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
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
    }
  },
  computed :{
    myProjects() {
      return this.projects.filter(project => {
        return project.person === 'Hoang Ha'
      })
    }
  }
}
</script>