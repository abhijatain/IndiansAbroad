<template>
    <div style="margin-top:4rem;">
        
        
        <div class="container ">
          <TopScroller v-if="route.params.id == 'all' || !route.params.id"/>
        <CheckBox @filter-data="(data) => filter_articles(data)" v-if="route.params.id == 'all' || !route.params.id"/>
            <div class="row d-flex justify-content-center" >  
                
                <News v-for="(art,index) in articles" 
                :key="index" 
                :title="art.title" 
                :content="art.summary" 
                :source="art.source"
                :image="art.youtube"
                :id="art.id"
                :has_liked="art.has_liked"
                :has_saved="art.has_saved"
                :category="art.category"
                :country="art.country"
                />
            </div>
           
        </div>
        <div class="container "  v-if="!loaded">
            <div class="row d-flex justify-content-center" >  
                <div class="card  mb-5 shadow-lg"   style="max-width: 95%;">
                     <LoadingCard />
                </div>
                <div class="card  mb-5 shadow-lg"   style="max-width: 95%;">
                     <LoadingCard />
                </div>
    </div></div>
    </div>
</template>
      
<script setup>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import CheckBox from '@/components/CheckBox.vue'
import TopScroller from '@/components/TopScroller.vue'
import { ref,onMounted } from 'vue'
import LoadingCard from './NewsLoading.vue'
import News from './NewsContent.vue'


const store = useStore()
let articles = ref([])
let original_articles = ref([])
const route = useRoute()

let loaded = ref(false)

onMounted(async () => {
    console.log(loaded.value)
    const p = route.params.id
    if (!p){
        function updateData() {
            if (store.state.isDataLoaded) {
                articles.value.push(...store.state.articles)
                original_articles.value.push(...store.state.articles)
                clearInterval(intervalId);
                loaded.value = true
            }
        }
        const intervalId = setInterval(updateData, 50); // Execute updateData every 5 seconds (5000 milliseconds)

        
    }else  {
        const token = localStorage.getItem('auth-token')
        const res = await fetch(`https://test-am3oxfhvvq-em.a.run.app/api/article/${p}`, {
                   method: "GET",
                   Allow: ['GET', 'POST'],
                   headers : {
                           "Authentication-Token" : token,
                           'Content-Type': 'application/json'
                       }
                   })
      const data = await res.json()
      if (res.ok) {     
         articles.value.push(...data)
         original_articles.value.push(...data)  
         loaded.value = true
     }
}})



function filter_articles(data) {
    articles.value = original_articles.value
    if (data['v'] == false) {
        articles.value = articles.value.filter(item => item.category != 'voilent')
    }
    if (data['p'] == false) {
        articles.value = articles.value.filter(item => item.category != 'political')
    }
    if (data['r'] == false) {
        articles.value = articles.value.filter(item => item.category != 'religious')
    }
    if (data['o'] == false) {
        articles.value = articles.value.filter(item => item.category != 'stats')
    }

}
</script>



