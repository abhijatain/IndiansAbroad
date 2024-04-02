<script setup>
import {ref , onMounted} from 'vue'
import Discussions from '../components/DiscussionCard.vue'
import { useStore } from 'vuex'

const store = useStore()
let searchOn = ref(true)
let discussions = ref([])
let input = ref('')

async function search() {
	discussions.value = []
	if (searchOn) {
		const res = await fetch(`https://community-app-india.onrender.com/search/discussion`, {
                method: "POST",
                Allow: ['GET', 'POST'],
                headers : {
                        'Content-Type': 'application/json'
                    },
				body : JSON.stringify({
                        "search" : input.value
                      })
                })
		const data = await res.json()
		if (res.ok) {
			discussions.value.push(...data)
		}
	}else{
		const res = await fetch(`https://community-app-india.onrender.com/search/news`, {
                method: "GET",
                Allow: ['GET', 'POST'],
                headers : {
                        'Content-Type': 'application/json'
                    },
				body : JSON.stringify({
                        "search" : input.value
                      }),
                })
		const data = await res.json()
		if (res.ok) {
			discussions.value.push(...data)
		}
	}
	
}
</script>


<template>
   <div class="container" style="margin-top: 4rem;">
		
	   	<div class="btn-group mb-3" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked @click="searchOn = true">
            <label class="btn btn-outline-secondary" for="btnradio1">Discussions</label>

            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" @click="searchOn = false">
            <label class="btn btn-outline-secondary" for="btnradio2">News</label>
        </div>
		<form class="d-flex" role="search" @submit.prevent="search">
			<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="input">
			<button class="btn btn-outline-success" type="submit" >Search</button>
        </form>
		<div class="col" v-for="(d,index) in discussions" :key="index" style="margin:8px 4px">
        <div class="card card-cover overflow-hidden  rounded-4 shadow-lg" style="background-image: url('');" >
          <div class="d-flex flex-column h-100 p-3   text-shadow-1">
            <ul class="d-flex list-unstyled mb-2">
              <li class="me-auto">
                <img src="../assets/BharatGuildLogo.jpg" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white">
                <small class="p-1">Abhijeet Singh</small>
                <small class="p-1">3d</small>
				<router-link :to="`/discusion/${d.id}/${d.title}`" >
				<h5 class="mt-3 display-7 lh-1 fw-bold" >{{ d.title }}</h5>		
				</router-link>
              </li>
			  
              <li class="d-flex align-items-center me-3">
              
              </li>
              <li class="d-flex align-items-center">
				<img v-if="index == 0" src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_640.jpg" height="80" width="80">
				<img v-else-if="index == 1" src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg" height="80" width="80">
                <img v-else-if="index == 2" src="https://media.istockphoto.com/id/533297303/photo/lion-mother-with-cub.jpg?s=612x612&w=0&k=20&c=W-8_Yb__gWrDFePNhEOBtVQ8ND6qsNb5X8AB00apkvk=" height="80" width="80">
				<img v-else-if="index == 3" src="https://miro.medium.com/v2/da:true/resize:fill:400:268/0*axOYB0WNLkM2gS0q" height="80" width="80">
				<img v-else src="https://miro.medium.com/v2/da:true/resize:fill:400:268/0*axOYB0WNLkM2gS0q" height="80" width="80">
              </li>
            </ul>
			
			<div class="d-flex flex-row justify-content-between align-items-end" v-if="searchOn">
				<div class="p-2">
					<span class="badge" style="margin-right: .5rem;background-color: #5E1675;">canada</span>
                <span class="badge" style="margin-right: .5rem;background-color: #EE4266;">abroad</span>
                <span class="badge" style="margin-right: .5rem;background-color: #e1b216;">success</span>
                <span class="badge" style="margin-right: .5rem;background-color: #337357;">religion</span>
								
							</div>
			
			
			
		</div>
            
            
          </div>
        </div>
      		</div>	
   </div>
    
</template>
      

    