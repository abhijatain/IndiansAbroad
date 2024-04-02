<script setup>
import {ref , onMounted} from 'vue'
import Discussions from '../components/DiscussionCard.vue'
import { useStore } from 'vuex'

const store = useStore()
let searchOn = ref(true)
let discussions = ref([])
let news = ref([])
let input = ref('')

async function search() {
	if (searchOn) {
		const res = await fetch(`https://community-app-india.onrender.com/search/discussion/${input.value}`, {
                method: "GET",
                Allow: ['GET', 'POST'],
                headers : {
                        "Authentication-Token" : state.token,
                        'Content-Type': 'application/json'
                    }
                })
		const data = await res.json()
		if (res.ok) {
			discussions.push(...data)
		}
	}else{
		const res = await fetch(`https://community-app-india.onrender.com/search/news/${input.value}`, {
                method: "GET",
                Allow: ['GET', 'POST'],
                headers : {
                        "Authentication-Token" : state.token,
                        'Content-Type': 'application/json'
                    }
                })
		const data = await res.json()
		if (res.ok) {
			news.push(...data)
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
		<form class="d-flex" role="search" >
			<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" v-model="input">
			<button class="btn btn-outline-success" type="submit" >Search</button>
        </form>
		<Discussions v-if="searchOn" :discussions="store.state.discusions"/>
		<Discussions v-else :discussions="store.state.articles"/>
   </div>
    
</template>
      

    