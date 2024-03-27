<script setup>
import CommentSection from '../components/CommentSection.vue'
import { ref,onMounted } from 'vue'
import { useRoute } from 'vue-router'

let discusions = ref([])
const route = useRoute()

onMounted(async () => {
    const p = route.params.id
    const token = localStorage.getItem('auth-token')
        const res = await fetch(`https://community-app-india.onrender.com/api/discusion/${p}`, {
                    method: "GET",
                    Allow: ['GET', 'POST'],
                    headers : {
                            "Authentication-Token" : token,
                            'Content-Type': 'application/json'
                        }
                    })
        const data = await res.json()
        if (res.ok) {
            discusions.value.push(...data)
        }
})
</script>

<template>
<div class="container " style="margin-top:4rem">
    <div v-for="d in discusions">
        <img src="https://cdn.statcdn.com/Infographic/images/normal/30803.jpeg"  class="card-img">
        <div class="mt-2 p-2">
            <i  class="fa-solid fa-heart p-2 fa-lg" style="color: red;"> </i><span class="nav-item small"> 20 </span>
            <a class="link-body-emphasis link-offset-2 link-underline-opacity-0 link-underline-opacity-75-hover" href="#section1"> <i  class="fa-regular fa-comment p-2 fa-lg" ></i><span class="nav-item small" > 100 </span></a>             
            <i class="fa-solid fa-share p-2 fa-lg"></i><span class="nav-item small" > 23 </span>                   
        </div>
        <div class="p-2">
            <span class="badge  text-bg-primary " style="margin-right: .5rem;">canada</span>
            <span class="badge  text-bg-secondary " style="margin-right: .5rem;">abroad</span>
            <span class="badge text-bg-success " style="margin-right: .5rem;">success</span>
            <span class="badge  text-bg-info " style="margin-right: .5rem;">info</span>
        </div>
        <div class="d-flex align-items-center mt-2 p-2">
                                    <!-- Avatar -->
            <div class="avatar avatar-story me-2">
                <a href="#!"> <img class="avatar-img rounded-circle"  height="32px"  src="https://randomuser.me/api/portraits/men/86.jpg" alt=""> </a>
            </div>
                                    <!-- Info -->
            <div>
                <div class="nav nav-divider">
                    <h6 class="nav-item card-title mb-0">{{d.username}}</h6>
                    <span class="nav-item small" style="margin-left:1rem"> {{d.date}}</span>
                </div>                           
            </div>
        </div>
        <div class="mt-2 p-2 bold-lg">
            <h1>{{d.title}}</h1>
        </div>
        <div>
            {{ d.content }}
        </div>
    </div>
    <h1 id="section1" >
        Comments Section
    </h1>
    <CommentSection/>
</div>
</template>
