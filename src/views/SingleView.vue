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
            
        }
  }
    
})

</script>

<template>
    
<div class="" style="margin-top:3.5rem">
    
    <div v-for="d in discusions">
        
            <img src='https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg' width="100%" height="300px">
            <div style="padding:6px 8px">
            <h1 class="barlow-bold p-1 m-0">{{d.title}}</h1>
            
        </div>
        <div class="d-flex justify-content-between p-2 align-items-center"> 
                            <div>
                                <i  class="fa-solid fa-heart p-2 fa-lg"  style="color: red;"></i><span> 63</span>
                            </div>
                            <div>
                                <i class="fa-regular fa-comment fa-lg p-2"></i>
                                <span> 23</span>
                                
                            </div>
                           
                            <div>
                                <i class="fa-solid fa-share p-2 fa-lg"></i>
                                <span> 30</span>
                            </div>
                            
                        
                            <i  class="fa-regular fa-bookmark p-2 fa-lg"></i>
                        
                    </div>
            <div>
                <div class="d-flex align-items-center mb-1 mt-1" style="padding:8px 12px">
								<!-- Avatar -->
								<div class="avatar avatar-story me-2">
									<a href="#!"> <img class="avatar-img rounded-circle"  height="42px"  src="https://randomuser.me/api/portraits/men/86.jpg" alt=""> </a>
								</div>
								<!-- Info -->
								<div>
									<div class=" " >
										<h6 class="card-title mb-0 ">Abhijeet Singh </h6>
										<span class=" text-body-secondary" style="font-size: 12px;">Posted 9 days ago</span>
									</div>
									
								</div>
							</div>
                                         
            </div>
            
                  

        
        
        <div style="padding:4px 10px">
          <span class="badge bg-success-subtle text-success m-1" >canada</span>
                <span class="badge bg-warning-subtle text-warning m-1">abroad</span>
                <span class="badge bg-danger-subtle text-danger m-1">success</span>
                <span class="badge bg-primary-subtle text-primary m-1">religion</span>
								
							
        </div>
        <div  v-html="d.content" class="ql-editor card border-0 " style="margin-bottom:2rem">
            
        </div>
      <hr>
        <div class="m-2 border-0">
          
          <Comments id="2" class="mt-1"/> 
        </div>
         
        
        
    </div>
    
</div>
</template>

<style scoped>


.arvo-regular {
  font-family: "Arvo", serif;
  font-weight: 550;
  font-style: normal;
}

.arvo-bold {
  font-family: "Arvo", serif;
  font-weight: 700;
  font-style: normal;
}

.arvo-regular-italic {
  font-family: "Arvo", serif;
  font-weight: 400;
  font-style: italic;
}

.arvo-bold-italic {
  font-family: "Arvo", serif;
  font-weight: 700;
  font-style: italic;
}

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
  font-size: 32px;
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
