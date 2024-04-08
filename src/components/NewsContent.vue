<template>
    
                <div class="card  mb-3 shadow-lg" style="max-width: 95%;">
                  
                    <div class="card-header ">
                        <strong class="p-1 bg-info-subtle rounded-4 ">{{category}}</strong>
                    </div>
                    
                    <img v-if="category == 'stats'" :src="image" class="card-img">
                    <iframe v-else style="height: 30vh"  class="embed-responsive-item" :src="image" allowfullscreen></iframe>
                    

                    <div class="card-body">
                        <h3 class="barlow-semibold">{{title}}</h3>
                        <p class="card-text barlow-regular">{{content}} <router-link :to="`article/${id}/${title}`" >Read More</router-link>
                        </p><br>
                        <div class="d-flex justify-content-between"> 
                            <div>
                                
                                <i v-if="has_liked" class="fa-solid fa-heart p-2 fa-lg" @click="like(id)" style="color: #FB6D48;"></i>
                                <i v-else class="fa-regular fa-heart p-2 fa-lg" @click="like(id)"></i>
                                <i data-bs-toggle="offcanvas" :data-bs-target="`#${id}`" :aria-controls="id" class="fa-regular fa-comment fa-lg p-2" @click="open = !open"></i>
                                <div class="offcanvas offcanvas-bottom" tabindex="-1" :id="id" aria-labelledby="offcanvasBottomLabel" style="height: 60vh">
                                
                                <div class="offcanvas-body small" style="padding: 0;">
                                    <CommentSection :id="id" v-if="open"/>  
                                    
                                </div>

                                </div>
                                <i class="fa-solid fa-share p-2 fa-lg" @click='share()'></i>
                            </div>
                            <div>
                                <LoginModel v-if="!login">
                                    <i  class="fa-regular fa-bookmark p-2 fa-lg"></i>
                                </LoginModel>
                                <i v-else-if="has_saved" class="fa-solid fa-bookmark p-2 fa-lg" @click="save(id)"></i>
                                <i v-else class="fa-regular fa-bookmark p-2 fa-lg" @click="save(id)"></i>
                            </div>
                        </div>
                    </div>
                </div>
                
          
                
       
        
  
</template>
      
<script setup>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import CommentSection from '@/components/CommentSection.vue'

import LoginModel from '@/components/LoginModel.vue'
import { ref } from 'vue'

defineProps({
  title: String,
  image: String,
  content:String,
  source:String,
  category:String,
  id:Number,
  has_liked:Boolean,
  has_saved:Boolean
})

const store = useStore()

const route = useRoute()
let open = ref(false)
let login = localStorage.getItem('auth-token')

async function like(id) {
    store.state.articles.filter(art => art.id == id)[0].has_liked = !store.state.articles.filter(art => art.id == id)[0].has_liked
    await store.dispatch('likeArticle',id).then(() => {
        //articles.filter(art => art.id == id)[0].has_liked = !articles.filter(art => art.id == id)[0].has_liked
    })
    
}

async function save(id) {
    store.state.articles.filter(art => art.id == id)[0].has_saved = !store.state.articles.filter(art => art.id == id)[0].has_saved
    await store.dispatch('saveArticle',id).then(() => {
        //articles.filter(art => art.id == id)[0].has_saved = !articles.filter(art => art.id == id)[0].has_saved
    })
}

function share() {
    if(navigator.share) {
        navigator.share({
        text: title,
        url : `https://abhijatain.github.io/Indians/article/${id}`,
        title : 'Bharat Guild'
    })
    }else{
        navigator.clipboard.writeText(`https://abhijatain.github.io/Indians/article/${id}`)
        alert("Link Copied")
    }
    
}


</script>