<template>
    <div class="listrender page">
        <h1>List Render</h1>
        <div class="user" v-for="(user, users) in userActive" v-bind:key="users">{{ user.email }}</div>
        <ul class="scores">
            <li v-for="(value, key) in scores" v-bind:key="key">{{ key }} : {{value}}</li>
        </ul>
        <div class="list-blog">
            <div v-for="(list, index) in listBlogs" v-bind:key="index" class="blog">
                <div class="title">{{ list.title }}</div>
                <div class="desc">{{ list.body }}</div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'ListRender',
        data () {
            return {
                arrUser: [
                    { email: 'hoangha.fedev@gmail.com', isActive: false},
                    { email: 'hoangha.fedev1@gmail.com', isActive: true},
                    { email: 'hoangha.fedev2@gmail.com', isActive: false},
                    { email: 'hoangha.fedev3@gmail.com', isActive: true},
                    { email: 'hoangha.fedev4@gmail.com', isActive: false},
                    { email: 'hoangha.fedev5@gmail.com', isActive: true},
                ],
                scores: {
                    Math: 9.0,
                    English: 8.5,
                    Physics: 8.0
                },

                listBlogs: [
                    {
                        "userId": 1,
                        "id": 1,
                        "title": "Post 1",
                        "body": "Acupuncture Canada offers educational certification programs with a variety of courses for regulated health professionals ranging from introductory courses to advanced courses, to courses that teach Traditional Chinese Medicine assessment and treatment. Some courses take place onsite with hands-on workshops only, some combine online and onsite training, and we also deliver webinars."
                    },
                    {
                        "userId": 1,
                        "id": 2,
                        "title": "Post 2",
                        "body": "Acupuncture Canada offers educational certification programs with a variety of courses for regulated health professionals ranging from introductory courses to advanced courses, to courses that teach Traditional Chinese Medicine assessment and treatment. Some courses take place onsite with hands-on workshops only, some combine online and onsite training, and we also deliver webinars."
                    },
                    {
                        "userId": 1,
                        "id": 3,
                        "title": "Post 3",
                        "body": "Acupuncture Canada offers educational certification programs with a variety of courses for regulated health professionals ranging from introductory courses to advanced courses, to courses that teach Traditional Chinese Medicine assessment and treatment. Some courses take place onsite with hands-on workshops only, some combine online and onsite training, and we also deliver webinars."
                    },
                    {
                        "userId": 1,
                        "id": 4,
                        "title": "Post 4",
                        "body": "Acupuncture Canada offers educational certification programs with a variety of courses for regulated health professionals ranging from introductory courses to advanced courses, to courses that teach Traditional Chinese Medicine assessment and treatment. Some courses take place onsite with hands-on workshops only, some combine online and onsite training, and we also deliver webinars."
                    },
                    {
                        "userId": 1,
                        "id": 5,
                        "title": "Post 5",
                        "body": "Acupuncture Canada offers educational certification programs with a variety of courses for regulated health professionals ranging from introductory courses to advanced courses, to courses that teach Traditional Chinese Medicine assessment and treatment. Some courses take place onsite with hands-on workshops only, some combine online and onsite training, and we also deliver webinars."
                    },
                    {
                        "userId": 1,
                        "id": 6,
                        "title": "Post 6",
                        "body": "Acupuncture Canada offers educational certification programs with a variety of courses for regulated health professionals ranging from introductory courses to advanced courses, to courses that teach Traditional Chinese Medicine assessment and treatment. Some courses take place onsite with hands-on workshops only, some combine online and onsite training, and we also deliver webinars."
                    },
                    {
                        "userId": 1,
                        "id": 7,
                        "title": "Post 7",
                        "body": "Acupuncture Canada offers educational certification programs with a variety of courses for regulated health professionals ranging from introductory courses to advanced courses, to courses that teach Traditional Chinese Medicine assessment and treatment. Some courses take place onsite with hands-on workshops only, some combine online and onsite training, and we also deliver webinars."
                    },
                    {
                        "userId": 1,
                        "id": 8,
                        "title": "Post 8",
                        "body": "Acupuncture Canada offers educational certification programs with a variety of courses for regulated health professionals ranging from introductory courses to advanced courses, to courses that teach Traditional Chinese Medicine assessment and treatment. Some courses take place onsite with hands-on workshops only, some combine online and onsite training, and we also deliver webinars."
                    },
                    {
                        "userId": 1,
                        "id": 9,
                        "title": "Post 9",
                        "body": "Acupuncture Canada offers educational certification programs with a variety of courses for regulated health professionals ranging from introductory courses to advanced courses, to courses that teach Traditional Chinese Medicine assessment and treatment. Some courses take place onsite with hands-on workshops only, some combine online and onsite training, and we also deliver webinars."
                    },
                    {
                        "userId": 1,
                        "id": 10,
                        "title": "Post 10",
                        "body": "Acupuncture Canada offers educational certification programs with a variety of courses for regulated health professionals ranging from introductory courses to advanced courses, to courses that teach Traditional Chinese Medicine assessment and treatment. Some courses take place onsite with hands-on workshops only, some combine online and onsite training, and we also deliver webinars."
                    },
                    {
                        "userId": 1,
                        "id": 11,
                        "title": "Post 11",
                        "body": "Acupuncture Canada offers educational certification programs with a variety of courses for regulated health professionals ranging from introductory courses to advanced courses, to courses that teach Traditional Chinese Medicine assessment and treatment. Some courses take place onsite with hands-on workshops only, some combine online and onsite training, and we also deliver webinars."
                    },
                    {
                        "userId": 1,
                        "id": 12,
                        "title": "Post 12",
                        "body": "Acupuncture Canada offers educational certification programs with a variety of courses for regulated health professionals ranging from introductory courses to advanced courses, to courses that teach Traditional Chinese Medicine assessment and treatment. Some courses take place onsite with hands-on workshops only, some combine online and onsite training, and we also deliver webinars."
                    },
                    {
                        "userId": 1,
                        "id": 13,
                        "title": "Post 13",
                        "body": "Acupuncture Canada offers educational certification programs with a variety of courses for regulated health professionals ranging from introductory courses to advanced courses, to courses that teach Traditional Chinese Medicine assessment and treatment. Some courses take place onsite with hands-on workshops only, some combine online and onsite training, and we also deliver webinars."
                    },
                    {
                        "userId": 1,
                        "id": 14,
                        "title": "Post 14",
                        "body": "Acupuncture Canada offers educational certification programs with a variety of courses for regulated health professionals ranging from introductory courses to advanced courses, to courses that teach Traditional Chinese Medicine assessment and treatment. Some courses take place onsite with hands-on workshops only, some combine online and onsite training, and we also deliver webinars."
                    },
                    {
                        "userId": 1,
                        "id": 15,
                        "title": "Post 15",
                        "body": "Acupuncture Canada offers educational certification programs with a variety of courses for regulated health professionals ranging from introductory courses to advanced courses, to courses that teach Traditional Chinese Medicine assessment and treatment. Some courses take place onsite with hands-on workshops only, some combine online and onsite training, and we also deliver webinars."
                    }
                ]
            }
        },
        methods: {

        },
        computed: {
            userActive() {
                return this.arrUser.filter(function(u) {
                    return u.isActive;
                });
                return user
            }
        }
    }
</script>

<style scoped>
    .list-blog{display: flex; flex-wrap: wrap; margin: auto;justify-content: center}
    .blog{padding: 15px; flex: 0 0 25%; max-width: 20%; border: 1px solid #333; margin: 15px}
    .blog .title{font-weight: bold; text-align: center; color:red; font-size: 18px}
    .scores{display: flex; justify-content: center; list-style: none}
    .scores li{padding: 15px}
</style>