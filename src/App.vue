<script setup>
import { useStore } from 'vuex'
import { useRoute, RouterView } from 'vue-router'
import Navbar from './components/NavBar.vue'
import NavBody from './components/NavBody.vue'
import Suggestions from './components/SuggestionCard.vue'
 
import {ref, watch, onMounted} from 'vue'
import { useWindowSize } from '@vueuse/core'

const { width, height } = useWindowSize()
const store = useStore()

const route = useRoute()
let has_changed = ref(true)
let has_changed_route = ref(0)

onMounted(async() => {
  if (store.state.isDataLoaded == false){
    await store.dispatch('getArticles')
    await store.dispatch('getDiscusions')
  }
  
})

watch(route,(to,from) => {
  has_changed.value = !has_changed.value
  has_changed_route.value += 1
})
</script>

<template  >
  <Navbar :key='has_changed' />
  <div v-if="width>849" class="d-flex justify-content-center m-auto">
    <NavBody style="margin-top: 6rem;width:250px" :key='has_changed' />
    
    <RouterView :key='has_changed_route' style="width:650px;" />
    <Suggestions style="margin-top: 6rem" />
   
  </div>
  <RouterView :key='has_changed_route' v-else/>
 
</template>

