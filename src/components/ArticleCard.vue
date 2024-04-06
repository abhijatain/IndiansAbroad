<template>
    <div style="margin-top:4rem;">
        
        
        <div class="container ">
          <TopScroller v-if="route.params.id == 'all' || !route.params.id"/>
        <CheckBox @filter-data="(data) => filter_articles(data)" v-if="route.params.id == 'all' || !route.params.id"/>
            <div class="row d-flex justify-content-center" >  
                <div class="card  mb-5 shadow-lg"  v-for="(art,index) in articles" :key="index" style="max-width: 95%;">
                  
                    <div class="card-header">
                        Featured
                    </div>
                    
                    <img v-if="art.category == 'stats'" :src="art.youtube" class="card-img">
                    <iframe v-else style="height: 30vh"  class="embed-responsive-item" :src="art.youtube" allowfullscreen></iframe>
                    

                    <div class="card-body">
                        <h3 class="barlow-semibold">{{art.title}}</h3>
                        <p class="card-text barlow-regular">{{art.summary}} <router-link :to="`article/${art.id}/${art.title}`" >Read More</router-link>
                        </p><br>
                        <div class="d-flex justify-content-between"> 
                            <div>
                                
                                <i v-if="art.has_liked" class="fa-solid fa-heart p-2 fa-lg" @click="like(art.id,index)" style="color: #FB6D48;"></i>
                                <i v-else class="fa-regular fa-heart p-2 fa-lg" @click="like(art.id,index)"></i>
                                <i data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" class="fa-regular fa-comment fa-lg p-2"></i>
                                <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel" style="height: 90vh">
                                <div class="offcanvas-header">
                                    <div></div>
                                    <h5 class="offcanvas-title text-center" id="offcanvasBottomLabel"><strong>Comments</strong></h5>
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
import CommentSection from '@/components/CommentSection.vue'
import CheckBox from '@/components/CheckBox.vue'
import TopScroller from '@/components/TopScroller.vue'
import LoginModel from '@/components/LoginModel.vue'
import { ref,onMounted } from 'vue'
import LoadingCard from './NewsLoading.vue'


const store = useStore()
let articles = ref([])
let original_articles = ref([])
const route = useRoute()
let id = ref('')
let login = localStorage.getItem('auth-token')
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
        const intervalId = setInterval(updateData, 1000); // Execute updateData every 5 seconds (5000 milliseconds)

        
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
    }

    
    console.log(loaded.value)
    
})

async function like(id,index) {
    await store.dispatch('likeArticle',id).then(() => {
        console.log(1)
        articles.filter(art => art.id == id)[0].has_liked = !articles.filter(art => art.id == id)[0].has_liked
    })
    
}

async function save(id,index) {
    await store.dispatch('saveArticle',id).then(() => {
        articles.filter(art => art.id == id)[0].has_saved = !articles.filter(art => art.id == id)[0].has_saved
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

<style scoped>
.barlow-thin {
  font-family: "Barlow", sans-serif;
  font-weight: 100;
  font-style: normal;
}

.barlow-extralight {
  font-family: "Barlow", sans-serif;
  font-weight: 200;
  font-style: normal;
}

.barlow-light {
  font-family: "Barlow", sans-serif;
  font-weight: 300;
  font-style: normal;
}

.barlow-regular {
  font-family: "Barlow", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.barlow-medium {
  font-family: "Barlow", sans-serif;
  font-weight: 500;
  font-style: normal;
}

.barlow-semibold {
  font-family: "Barlow", sans-serif;
  font-weight: 600;
  font-style: normal;
}

.barlow-bold {
  font-family: "Barlow", sans-serif;
  font-weight: 700;
  font-style: normal;
}

.barlow-extrabold {
  font-family: "Barlow", sans-serif;
  font-weight: 800;
  font-style: normal;
}

.barlow-black {
  font-family: "Barlow", sans-serif;
  font-weight: 900;
  font-style: normal;
}

.barlow-thin-italic {
  font-family: "Barlow", sans-serif;
  font-weight: 100;
  font-style: italic;
}

.barlow-extralight-italic {
  font-family: "Barlow", sans-serif;
  font-weight: 200;
  font-style: italic;
}

.barlow-light-italic {
  font-family: "Barlow", sans-serif;
  font-weight: 300;
  font-style: italic;
}

.barlow-regular-italic {
  font-family: "Barlow", sans-serif;
  font-weight: 400;
  font-style: italic;
}

.barlow-medium-italic {
  font-family: "Barlow", sans-serif;
  font-weight: 500;
  font-style: italic;
}

.barlow-semibold-italic {
  font-family: "Barlow", sans-serif;
  font-weight: 600;
  font-style: italic;
}

.barlow-bold-italic {
  font-family: "Barlow", sans-serif;
  font-weight: 700;
  font-style: italic;
}

.barlow-extrabold-italic {
  font-family: "Barlow", sans-serif;
  font-weight: 800;
  font-style: italic;
}

.barlow-black-italic {
  font-family: "Barlow", sans-serif;
  font-weight: 900;
  font-style: italic;
}
</style>

