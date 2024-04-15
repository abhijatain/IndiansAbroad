<template>
        <div class="card border rounded-3  p-4 mb-4">
					<div class="">
						<div class="">
							<!-- Categories -->
							<div style="padding:4px 0px">
                            <span class="badge bg-success-subtle text-success m-1" >{{category}}</span>
                            <span class="badge bg-danger-subtle text-danger m-1" >{{country}}</span>
							</div>
                            <div class="card border-0 mb-3">
                            <img class="rounded-3" v-if="isImageLink(image)" :src="image" >
                            <iframe v-else height="250"  class="embed-responsive-item rounded-3" :src="image" allowfullscreen loading="lazy"></iframe>
						</div>
							<!-- Title -->
							<h2 class="card-title mb-3">
								<p  class="montserrat-title text-reset ">{{title}}</p>
							</h2>
							<!-- Author info -->
							
						</div>
						<!-- Detail -->
						<div class="montserrat-summary">
							<p>{{content}} </p>
						</div>
						<!-- Image -->
						
                        <br>
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
  country:String,
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

function isImageLink(url) {
    return /\.(jpeg|jpg|gif|png)$/.test(url)
}
</script>

<style scoped>
.montserrat-title {
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
}

.montserrat-summary {
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-weight: 450;
  font-style: normal;
}


</style>
