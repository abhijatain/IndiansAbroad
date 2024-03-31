<script setup>
import { useStore } from 'vuex'
import { useRoute, RouterView } from 'vue-router'
import Navbar from './components/NavBar.vue'

import {ref, watch, onMounted} from 'vue'
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
  <Navbar :key='has_changed'/>
  <RouterView :key='has_changed_route'/>
 
</template>

