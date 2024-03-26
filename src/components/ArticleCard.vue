<template>
    <div style="margin-top:4rem;">
    <TopScroller v-if="route.params.id == 'all' || !route.params.id"/>
   <CheckBox @filter-data="(data) => filter_articles(data)" v-if="route.params.id == 'all' || !route.params.id"/>
    
    <div class="container ">
        <div class="row d-flex justify-content-center" >  
            <div class="card  mb-5 shadow-lg"  v-for="(art,index) in articles" :key="art.id" style="max-width: 95%;">
                <div class="card-header">
                    Featured
                </div>
                <img v-if="art.category == 'stats'" :src="art.youtube" class="card-img">
                <iframe v-else style="height: 30vh"  class="embed-responsive-item" :src="art.youtube" allowfullscreen></iframe>
                

                <div class="card-body">
                    <h5 class="card-title">{{art.title}}</h5>
                    <p class="card-text">{{art.summary}} <a href="" >Read More</a>
                    </p><br>
                    <div class="d-flex justify-content-between"> 
                        <div>
                            <div v-if="!login">
                                
                            </div>
                            <i v-else-if="art.has_liked" class="fa-solid fa-heart p-2 fa-lg" @click="like(art.id,index)" style="color: red;"></i>
                            <i v-else class="fa-regular fa-heart p-2 fa-lg" @click="like(art.id,index)"></i>
                            <i data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" class="fa-regular fa-comment fa-lg p-2"></i>
                            <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel" style="height: 70vh">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasBottomLabel">Comments</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body small" style="padding: 0;">
                                <CommentSection :id="art.id" />  
                            </div>

                            </div>
                            <i class="fa-solid fa-share p-2 fa-lg" @click='share(art)'></i>
                        </div>
                        <div>
                            <LoginModel v-if="!login">
                                <i  class="fa-regular fa-bookmark p-2 fa-lg"></i>
                            </LoginModel>
                            <i v-else-if="art.has_saved" class="fa-solid fa-bookmark p-2 fa-lg" @click="save(art,index)"></i>
                            <i v-else class="fa-regular fa-bookmark p-2 fa-lg" @click="save(art,index)"></i>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
            
    </div></div>
</template>
      
<script setup>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import CommentSection from '@/components/CommentSection.vue'
import CheckBox from '@/components/CheckBox.vue'
import TopScroller from '@/components/TopScroller.vue'
import LoginModel from '@/components/LoginModel.vue'
import { ref,onMounted } from 'vue'

const store = useStore()
let articles = ref([])
let original_articles = ref([])
const route = useRoute()
let id = ref('')
let login = localStorage.getItem('auth-token')

onMounted(async () => {
    const p = route.params.id
    if (!p){
        function updateData() {
            if (store.state.isDataLoaded) {
                articles.value.push(...store.state.articles)
                original_articles.value.push(...store.state.articles)
                clearInterval(intervalId);
            }
        }
        const intervalId = setInterval(updateData, 1000); // Execute updateData every 5 seconds (5000 milliseconds)

        
    }else if (p != 'all' ) {
        const token = localStorage.getItem('auth-token')
        const res = await fetch(`https://community-app-india.onrender.com/api/article/${p}`, {
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
        }
    }else{
        function updateData() {
            if (store.state.isDataLoaded) {
                articles.value.push(...store.state.articles)
                original_articles.value.push(...store.state.articles)
                clearInterval(intervalId);
            }
        }
        const intervalId = setInterval(updateData, 50);
    }

    
    
})

async function like(id,index) {
    await store.dispatch('likeArticle',id).then(() => {
        articles.value[index].has_liked = !articles.value[index].has_liked
    })
    
}

async function save(id,index) {
    await store.dispatch('saveArticle',id).then(() => {
        articles.value[index].has_saved = !articles.value[index].has_saved
    })
}

function share(art) {
    if(navigator.share) {
        navigator.share({
        text: art.title,
        url : `https://abhijatain.github.io/Indians/article/${art.id}`,
        title : 'Independent'
    })
    }else{
        navigator.clipboard.writeText(`https://abhijatain.github.io/Indians/article/${art.id}`)
        alert("Link Copied")
    }
    
}

function filter_articles(data) {
    articles.value = original_articles.value
    if (data['v'] == false) {
        articles.value = articles.value.filter(item => item.category != 'voilent')
    }
    if (data['p'] == false) {
        articles.value = articles.value.filter(item => item.category != 'political')
    }
    if (data['r'] == false) {
        articles.value = articles.value.filter(item => item.category != 'religion')
    }
    if (data['o'] == false) {
        articles.value = articles.value.filter(item => item.category != 'stats')
    }

}
</script>

