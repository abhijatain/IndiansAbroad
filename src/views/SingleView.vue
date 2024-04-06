<script setup>
import Comments from '../components/CommentSection.vue'
import { ref,onMounted } from 'vue'
import { useRoute } from 'vue-router'

let discusions = ref([])

const route = useRoute()

onMounted(async () => {
    const p = route.params.id
    const token = localStorage.getItem('auth-token')
        const res = await fetch(`https://indiansabroad.el.r.appspot.com/api/discusion/${p}`, {
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
})

</script>

<template>
    
<div class="container " style="margin-top:4rem">
    
    <div v-for="d in discusions">
        <div class="card border-0 shadow bg-primary-subtle ">
                <div class="d-flex align-items-center mb-2" style="padding:12px 15px">
								<!-- Avatar -->
								<div class="avatar avatar-story me-2">
									<a href="#!"> <img class="avatar-img rounded-circle"  height="42px"  src="https://randomuser.me/api/portraits/men/86.jpg" alt=""> </a>
								</div>
								<!-- Info -->
								<div>
									<div class=" " >
										<h6 class="card-title mb-0 ">Abhijeet Singh </h6>
										<span class=" text-body-secondary" style="font-size: 12px;">Posted on March 2022</span>
									</div>
									
								</div>
							</div>
                                         
            </div>
        <div >
            <h1 class="barlow-bold p-2 ">{{d.title}}</h1>
        </div>
        
        <div style="padding:12px 15px">
            <span class="badge" style="margin-right: .5rem;background-color: #FF204E;">canada</span>
                            <span class="badge" style="margin-right: .5rem;background-color: #A0153E;">abroad</span>
                            <span class="badge" style="margin-right: .5rem;background-color: #5D0E41;">success</span>
                            <span class="badge" style="margin-right: .5rem;background-color: #00224D;">info</span>
                        </div>
        <div  v-html="d.content" class="ql-editor card border-0 " style="margin-bottom:4.5rem">
            
        </div>
        
        
    </div>
    <div class="fixed-bottom p-3 card " >
        <div class="d-flex justify-content-between"> 
                            <div>
                                <i  class="fa-solid fa-heart p-2 fa-lg"  style="color: red;"></i><span> 63</span>
                            </div>
                            <div>
                                <i data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" class="fa-regular fa-comment fa-lg p-2"></i>
                                <span> 23</span>
                                <div class="offcanvas offcanvas-bottom" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel" style="height: 70vh">
                                <div class="offcanvas-header">
                                    <h5 class="offcanvas-title" id="offcanvasBottomLabel">Comments</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body small" style="padding: 0;">
                                    <Comments id="1" />  
                                </div>

                                </div>
                            </div>
                           
                            <div>
                                <i class="fa-solid fa-share p-2 fa-lg"></i>
                                <span> 30</span>
                            </div>
                            
                        
                            <i  class="fa-regular fa-bookmark p-2 fa-lg"></i>
                        
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
