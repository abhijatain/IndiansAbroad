<script setup>
import Comments from '../components/CommentSection.vue'
import { ref,onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'



const store = useStore()

let discusions = ref([])

const route = useRoute()

onMounted(async () => {
  const p = route.params.id
  if (store.state.discusions.filter(art => art.id == p).length >0){
    discusions.value = store.state.discusions.filter(art => art.id == p)
  }else{
    const token = localStorage.getItem('auth-token')
        const res = await fetch(`https://test-am3oxfhvvq-em.a.run.app/api/discusion/${p}`, {
                    method: "GET",
                    Allow: ['GET', 'POST'],
                    headers : {
                            "Authentication-Token" : token,
                            'Content-Type': 'application/json'
                        }
                    })
        const data = await res.json()
        if (res.ok) {
            discusions.value.push(...data)
            console.log(discusions)
            
        }
  }
    
})

async function like(id) {
  if (discusions.value[0].has_liked) {
    discusions.value[0].has_liked = false
    discusions.value[0].likes_count -=1
   }else{
    discusions.value[0].has_liked = true
    discusions.value[0].likes_count +=1
   }
  if (store.state.discusions.filter(art => art.id == id).length >0) {
    if (store.state.discusions.filter(art => art.id == id)[0].has_liked) {
    store.state.discusions.filter(art => art.id == id)[0].has_liked = false
    store.state.discusions.filter(art => art.id == id)[0].likes_count -=1
   }else{
    store.state.discusions.filter(art => art.id == id)[0].has_liked = true
    store.state.discusions.filter(art => art.id == id)[0].likes_count +=1
   }
  }
   
    
    await store.dispatch('likeDiscusion',id).then(() => {
        //articles.filter(art => art.id == id)[0].has_liked = !articles.filter(art => art.id == id)[0].has_liked
    })
    
}

async function save(id) {
    store.state.discusions.filter(art => art.id == id)[0].has_saved = !store.state.discusions.filter(art => art.id == id)[0].has_saved
    await store.dispatch('saveDiscusion',id).then(() => {
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

<template>
  <!-- 
  <div class="" style="margin-top:3.5rem">
            <img class="rounded cover-img" src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg" alt="">
            <div class="mt-4">
              
              <div style="padding:4px 10px">
                <span class="badge bg-success-subtle text-success m-1" >canada</span>
                <span class="badge bg-warning-subtle text-warning m-1">abroad</span>
                <span class="badge bg-danger-subtle text-danger m-1">success</span>
                <span class="badge bg-primary-subtle text-primary m-1">religion</span>
							</div>
              
              <h1 class="mb-2 ">New comment moderation and support features, including live chat.</h1>
              <ul class="nav nav-stack gap-3 align-items-center">
                <li class="nav-item">
                  <div >
                    by <a href="#" class="text-reset btn-link">Louis Ferguson</a>
                  </div>
                </li>
                <li class="nav-item"><i class="fa-regular fa-calendar-days pe-1"></i>Nov 15, 2022</li>
              </ul>
            
              
             
              Blockquote START
              <figure class="bg-light rounded p-3 p-sm-4 my-4">
                <blockquote class="blockquote">
                  <p>Dashwood does provide stronger is. But discretion frequently sir she instruments unaffected.</p>
                </blockquote>
                <figcaption class="blockquote-footer mb-0">
                  Albert Schweitzer
                </figcaption>
              </figure>
               
              </div>
          </div>-->
   
<div class="container" style="margin-top:4rem">
    
    <div v-for="d in discusions">
        <div class="card">
          <img class="rounded cover-img" src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg" alt="">
        </div>
      
           
      
      <div style="padding:6px 8px">
            <h1 class="mt-2 mb-3"><strong>{{d.title}}</strong></h1>
            <div class="d-flex align-items-center position-relative mt-3 mb-3">
								<div class="avatar me-2">
                                    <img class="avatar-img rounded-circle"  height="38px"  src="../assets/BharatGuildLogo.jpg" alt="Bharat Guild" >
								
								</div>
								<div >
									<h5 class="mb-1"><a href="#" class="stretched-link text-reset btn-link">Lori Ferguson</a></h5>
									<ul class="nav align-items-center small">
										<li class="nav-item me-3">Mar 07, 2022</li>
										<li class="nav-item"><i class="far fa-clock me-1"></i>5 min read</li>
									</ul>
								</div>
							</div>
            
        </div>
        
        <div style="padding:8px 0px">
                <span class="badge bg-success-subtle text-success m-1" >canada</span>
                <span class="badge bg-warning-subtle text-warning m-1">abroad</span>
                <span class="badge bg-danger-subtle text-danger m-1">success</span>
                <span class="badge bg-primary-subtle text-primary m-1">religion</span>
							</div>
        
          
            <div>
                                 
            </div>
        <div  v-html="d.content" class="tiptap card border-0 mt-3" style="margin-bottom:2rem;padding:6px 8px">
            
        </div>
      <hr>
        <div class="m-2 border-0">
          
          <Comments id="2" class="mt-1"/> 
        </div>
         <!--
        <div class="d-flex justify-content-center p-2 align-items-center fixed-bottom bg-success" > 
                            <div>
                              <div v-if="d.has_liked" class="p-2">
                                <i  class="fa-solid fa-heart p-2 fa-lg" @click="like(d.id)" style="color: red;"></i><span> {{d.likes_count}}</span>
                              </div>
                              <div v-else class="p-2">
                                <i  class="fa-regular fa-heart p-2 fa-lg" @click="like(d.id)" ></i><span> {{d.likes_count}}</span>
                              </div>
                                
                                
                            </div>
                            <div class="p-2">
                                <i class="fa-regular fa-comment fa-lg p-2"></i>
                                <span>{{d.comments_count}}</span>
                                
                            </div>
                            
                        
                            <i  class="fa-regular fa-bookmark p-2 fa-lg"></i>
                        
                    </div>-->
        
    </div>
    
</div>
</template>


<style lang="scss">
.cover-img{
 max-height: 300px;
}
.lora-font {
  font-family: "Lora", serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  
}

.lora-regular {
  font-family: "Lora", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}

/* Basic editor styles */
.tiptap {
  min-height: 100px;
  > * + * {
    margin-top: 0.75em;
    
  }

  ul,
  ol {
    padding: 0 1rem;
    margin: 1rem;
  }
  ul,
  ol  {
   p{
      margin: 0px;
   }
    
  }

  
  h3
   {
    font-size: 50px;
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }

  pre {
    background: #0D0D0D;
    color: #FFF;
    font-family: 'JetBrainsMono', monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }
  }

  img {
    max-width: 80%;
    height: auto;
    margin:auto;
    display: block;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }


  hr {
    border: none;
    border-top: 2px solid ;
    margin: 2rem 0;
  }
  iframe {
  border: 4px solid #000;
  border-radius: 2px;
  width: 90%;
  height: 200px;
  display: block;
  outline: 0px solid transparent;
  margin:auto;
  box-shadow: 0 4px 8px rgba(85, 80, 80, 0.1);
}

div[data-youtube-video] {
  cursor: move;
  padding-right: 24px;
}

.ProseMirror-selectednode iframe {
  transition: outline 0.15s;
  outline: 6px solid #ece111;
}
}
</style>