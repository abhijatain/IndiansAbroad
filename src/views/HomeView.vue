<script setup>
import {onMounted} from 'vue'
import { useStore } from 'vuex'
import ArticleCard from '../components/ArticleCard.vue'

const store = useStore()

onMounted(async() => {
  if (store.state.isDataLoaded == false){
    await store.dispatch('getArticles')
  }
  
})
</script>

<template>
  <main>
    <ArticleCard />
  </main>
</template>
