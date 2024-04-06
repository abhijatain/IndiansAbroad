<script setup>
import AddDiscusion from '../components/AddDiscusion.vue'
import {ref , onMounted} from 'vue'
import Loader from '../components/LoadingCard.vue'
import Carousel from '../components/CarouselCard.vue'
import TopScroller from '@/components/TopScroller.vue'
import Discussions from '../components/DiscussionCard.vue'
import { useStore } from 'vuex'
import { useTimeAgo } from '@vueuse/core'


const store = useStore()
let discusions = ref([])
let id = ref('')
let loaded = ref(false)


onMounted(async() => {
	function updateData() {
            if (store.state.isDiscusionLoaded) {
                discusions.value.push(...store.state.discusions)
                clearInterval(intervalId);
                loaded.value = true
            }
        }
    const intervalId = setInterval(updateData, 1000);
})


async function like(id,index) {
    await fetch('https://community-app-india.onrender.com/like/discusion',{
                method:'POST',
                Allow: ['GET', 'POST'],
                headers: {
                    "Authentication-Token" : localStorage.getItem('auth-token'),
                    'Content-type': 'application/json'
                },
                body : JSON.stringify({
                        "id" : id
                }),
            })
    discusions.value[index].has_liked = !discusions.value[index].has_liked
}



function share(art) {
    if(navigator.share) {
        navigator.share({
        text: art.title,
        url : art.id,
        title : 'Independent',
    })
    }else{
        navigator.clipboard.writeText('Copied')
    }
    
}

</script>

<template>
   <div class="container" style="margin-top:4rem;padding:0px 6px">
	
	<TopScroller />
    <div class="d-flex align-items-center justify-content-between p-2">
	<AddDiscusion />
    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
            <label class="btn btn-outline-secondary" for="btnradio1">Latest</label>

            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
            <label class="btn btn-outline-secondary" for="btnradio2">Popular</label>
        </div></div>
		<div v-if="!loaded" class="card border  border-3 shadow p-2" style="margin-bottom: 1rem;margin-top: 1rem;" v-for="number in 6" >
			<Loader />
		</div>
	
			<Carousel v-if="loaded" />
			<discussions :discussions="discusions" v-if="loaded"/>
            </div>
</template>



