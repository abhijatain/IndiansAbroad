<script setup>
import AddDiscusion from '../components/AddDiscusion.vue'
import {ref , onMounted} from 'vue'
import { useRoute } from 'vue-router'
import Loader from '../components/LoadingCard.vue'
import { useStore } from 'vuex'
import { useTimeAgo } from '@vueuse/core'


let discusions = ref([])
const store = useStore()
const route = useRoute()
let id = ref('')
let loaded = ref(false)

onMounted(async() => {
	function updateData() {
            if (store.state.isDiscusionLoaded) {
                discusions.value.push(...store.state.discusions)
                clearInterval(intervalId);
                loaded.value = true
            }
        }
    const intervalId = setInterval(updateData, 1000);
})

async function like(id,index) {
    await fetch('https://community-app-india.onrender.com/like/discusion',{
                method:'POST',
                Allow: ['GET', 'POST'],
                headers: {
                    "Authentication-Token" : localStorage.getItem('auth-token'),
                    'Content-type': 'application/json'
                },
                body : JSON.stringify({
                        "id" : id
                }),
            })
    discusions.value[index].has_liked = !discusions.value[index].has_liked
}

async function save(id,index) {
    const token = localStorage.getItem('auth-token')
    await fetch('https://community-app-india.onrender.com/save/discusion',{
                method:"POST",
                Allow: ['GET', 'POST'],
                headers: {
                    "Authentication-Token" : token,
                    "Content-type": "application/json"
                },
                body :JSON.stringify({
                        "id" : id.id
                }),
            })
	discusions.value[index].has_saved = !discusions.value[index].has_saved
}

function share(art) {
    if(navigator.share) {
        navigator.share({
        text: art.title,
        url : art.id,
        title : 'Independent',
    })
    }else{
        navigator.clipboard.writeText('Copied')
    }
    
}

</script>

<template>
   <div class="container" style="margin-top:4rem;padding:0px 6px">
    <div class="d-flex align-items-center justify-content-between p-2">
	<AddDiscusion />
    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
            <label class="btn btn-outline-secondary" for="btnradio1">Latest</label>

            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
            <label class="btn btn-outline-secondary" for="btnradio2">Popular</label>
        </div></div>
		<div v-if="!loaded" class="card border  border-3 shadow p-2" style="margin-bottom: 1rem;margin-top: 1rem;">
			<Loader />
		</div>
		<div v-if="!loaded" class="card border  border-3 shadow p-2" style="margin-bottom: 1rem;margin-top: 1rem;">
			<Loader />
		</div>
		<div v-if="!loaded" class="card border  border-3 shadow p-2" style="margin-bottom: 1rem;margin-top: 1rem;">
			<Loader />
		</div>
		<div v-if="!loaded" class="card border  border-3 shadow p-2" style="margin-bottom: 1rem;margin-top: 1rem;">
			<Loader />
		</div>
		<div v-if="!loaded" class="card border  border-3 shadow p-2" style="margin-bottom: 1rem;margin-top: 1rem;">
			<Loader />
		</div>
					
			
		<div class="card border-0 shadow-lg rounded" style="margin-bottom: 1rem;margin-top: 1rem;" v-for="(d,index) in discusions" :key="index">
					<!-- Card body START -->
		<div class="card-body" style="padding:12px">
			
			<div class="d-flex flex-row justify-content-between align-items-center">
				<div>
						<div class="col d-flex flex-column position-static">
							<div class="d-flex align-items-center justify-content-between">
							<div class="d-flex align-items-center mb-2">
								<!-- Avatar -->
								<div class="avatar avatar-story me-2 ">
									<a href="#!"> <img class="avatar-img rounded-circle"  height="36px"  src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e" alt=""> </a>
								</div>
								<!-- Info -->
								<div>
									<div class="">
										<h6 class="card-title mb-0">Abhijeet Singh</h6>
										<span class="nav-item small text-body-secondary" > 28 March 2024</span>
									</div>
									
								</div>
							</div>
							
							<!-- Card feed action dropdown END -->
						</div>
                        
						<router-link :to="`/discusion/${d.id}`" class=" p-2">
							<h5 class="barlow-semibold">
								{{ d.title }}
							</h5>
							
							
						</router-link>
						</div>
				</div>
				<div class="">
					<img v-if="index%2 != 0" src="https://miro.medium.com/v2/resize:fill:200:200/1*TYNsHKGvELRsgalw4UwIdg.png" height="100" width="100">
					<img v-else src="https://miro.medium.com/v2/da:true/resize:fill:400:268/0*axOYB0WNLkM2gS0q" height="100" width="100">
				</div>
			</div>
						<!-- Card img -->
						
						<div class="d-flex justify-content-between"> 
                                <div>
									<div class="p-2">
										<span class="badge" style="margin-right: .5rem;background-color: #5E1675;">canada</span>
                            <span class="badge" style="margin-right: .5rem;background-color: #EE4266;">abroad</span>
                            <span class="badge" style="margin-right: .5rem;background-color: #e1b216;">success</span>
                            <span class="badge" style="margin-right: .5rem;background-color: #337357;">religion</span>
								
							</div>
                                </div>
                            <div class="p-2">
								
                                <i  class="fa-solid fa-bookmark p-2 fa-lg" ></i>
                            </div>
                        </div>
						
				</div>
					
					
					
					
				</div>		
		<ul class="list-group list-group-flush" style="margin-top: 1rem;" >
			<li class="list-group-item" v-for="(d,index) in discusions" :key="index" style="margin-bottom: 1rem;padding: 12px 4px">
				<div class="d-flex flex-row justify-content-between align-items-center">
				<div>
						<div class="col d-flex flex-column position-static">
							<div class="d-flex align-items-center justify-content-between">
							<div class="d-flex align-items-center mb-2">
								<!-- Avatar -->
								<div class="avatar avatar-story me-2 ">
									<a href="#!"> <img class="avatar-img rounded-circle"  height="36px"  src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e" alt=""> </a>
								</div>
								<!-- Info -->
								<div>
									<div class="">
										<h6 class="card-title mb-0">Abhijeet Singh</h6>
										<span class="nav-item small" > 28 March 2024</span>
									</div>
									
								</div>
							</div>
							
							<!-- Card feed action dropdown END -->
						</div>
                        
						<router-link :to="`/discusion/${d.id}`" class=" p-2">
							<h5 class="barlow-semibold">
								{{ d.title }}
							</h5>
							
							
						</router-link>
						</div>
				</div>
				<div class="">
					<img v-if="index%2 != 0" src="https://miro.medium.com/v2/resize:fill:200:200/1*TYNsHKGvELRsgalw4UwIdg.png" height="100" width="100">
					<img v-else src="https://miro.medium.com/v2/da:true/resize:fill:400:268/0*axOYB0WNLkM2gS0q" height="100" width="100">
				</div>
				</div>
						<!-- Card img -->
						
						<div class="d-flex justify-content-between"> 
                                <div>
									<div class="p-2">
										<span class="badge" style="margin-right: .5rem;background-color: #5E1675;">canada</span>
                            <span class="badge" style="margin-right: .5rem;background-color: #EE4266;">abroad</span>
                            <span class="badge" style="margin-right: .5rem;background-color: #e1b216;">success</span>
                            <span class="badge" style="margin-right: .5rem;background-color: #337357;">religion</span>
								
							</div>
                                </div>
                            <div class="p-2">
								
                                <i  class="fa-solid fa-bookmark p-2 fa-lg" ></i>
                            </div>
                        </div>
			</li>
		</ul>
	
				<div class="card border  border-3 shadow rounded" style="margin-bottom: 1rem;margin-top: 1rem;">
					<!-- Card body START -->
					<div class="card-body ">
						
						<div class="col d-flex flex-column position-static">
							<div class="d-flex align-items-center justify-content-between">
							<div class="d-flex align-items-center mb-2">
								<!-- Avatar -->
								<div class="avatar avatar-story me-2">
									<a href="#!"> <img class="avatar-img rounded-circle"  height="42px"  src="https://randomuser.me/api/portraits/men/86.jpg" alt=""> </a>
								</div>
								<!-- Info -->
								<div>
									<div class="">
										<h6 class="card-title mb-0">Lori Ferguson</h6>
										<span class="nav-item small" > 2hr ago</span>
									</div>
									
								</div>
							</div>
							
							<!-- Card feed action dropdown END -->
						</div>
                        <div class="p-2">
                            <span class="badge" style="margin-right: .5rem;background-color: #0C0C0C;">canada</span>
								<span class="badge" style="margin-right: .5rem;background-color: #481E14;">abroad</span>
								<span class="badge" style="margin-right: .5rem;background-color: #9B3922;">success</span>
								<span class="badge" style="margin-right: .5rem;background-color: #F2613F;">info</span>
                        </div>
						<p class=" p-2">I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll.</p>
                        
						<!-- Card img -->
						
						
						</div>
					</div>
					
					
				</div>
				<div class="card border  border-3 shadow" style="margin-bottom: 1rem;margin-top: 1rem;">
					<!-- Card body START -->
					<div class="card-body">
						
						<div class="col d-flex flex-column position-static">
							<div class="d-flex align-items-center justify-content-between">
							<div class="d-flex align-items-center mb-2">
								<!-- Avatar -->
								<div class="avatar avatar-story me-2">
									<a href="#!"> <img class="avatar-img rounded-circle"  height="42px"  src="https://randomuser.me/api/portraits/men/86.jpg" alt=""> </a>
								</div>
								<!-- Info -->
								<div>
									<div class="">
										<h6 class="card-title mb-0">Lori Ferguson</h6>
										<span class="nav-item small" > 2hr ago</span>
									</div>
									
								</div>
							</div>
							
							<!-- Card feed action dropdown END -->
						</div>
                        <div class="p-2">
                            <span class="badge" style="margin-right: .5rem;background-color: #FF204E;">canada</span>
                            <span class="badge" style="margin-right: .5rem;background-color: #A0153E;">abroad</span>
                            <span class="badge" style="margin-right: .5rem;background-color: #5D0E41;">success</span>
                            <span class="badge" style="margin-right: .5rem;background-color: #00224D;">info</span>
                        </div>
						<p class=" p-2">I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll.</p>
                        
						<!-- Card img -->
						
						<div class="d-flex justify-content-between"> 
                                <div>
                                <i  class="fa-solid fa-heart p-2 fa-lg" style="color: red;"></i>
                                <i class="fa-solid fa-share p-2 fa-lg"></i>
                                </div>
                            <div>
                                <i  class="fa-solid fa-bookmark p-2 fa-lg" ></i>
                            </div>
                        </div>
						</div>
					</div>
					
					
				</div>
                <div class="card border border-3 border-info-subtle shadow" style="margin-bottom: 1rem;">
					<!-- Card body START -->
					<div class="card-body">
                        <div class="d-flex align-items-center justify-content-between">
							<div class="d-flex align-items-center mb-2">
								<!-- Avatar -->
								<div class="avatar avatar-story me-2">
									<a href="#!"> <img class="avatar-img rounded-circle"  height="32px"  src="https://randomuser.me/api/portraits/men/86.jpg" alt=""> </a>
								</div>
								<!-- Info -->
								<div>
									<div class="nav nav-divider">
										<h6 class="nav-item card-title mb-0">Lori Ferguson</h6>
										<span class="nav-item small" style="margin-left:1rem"> 2hr ago</span>
									</div>
									
								</div>
							</div>
							
							<!-- Card feed action dropdown END -->
						</div>
                        <div class="p-2">
                            <span  style="margin-right: .5rem;"><span class="text-success">#</span>canada</span>
                            <span  style="margin-right: .5rem;"><span class="text-primary">#</span>abroad</span>
                            <span  style="margin-right: .5rem;"><span class="text-warning">#</span>success</span>
                            <span  style="margin-right: .5rem;"><span class="text-secondary">#</span>info</span>
                        </div>
						<p class=" p-2">I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll.</p>
                        
						<!-- Card img -->
						
						<div class="d-flex justify-content-between"> 
                                <div>
                                <i  class="fa-solid fa-heart p-2 fa-lg" style="color: red;"></i>
                                <i class="fa-solid fa-share p-2 fa-lg"></i>
                                </div>
                            <div>
                                <i  class="fa-solid fa-bookmark p-2 fa-lg" ></i>
                            </div>
                        </div>
					</div>
					
					
				</div>
                <div class="card border border-3 border-success-subtle shadow" style="margin-bottom: 1rem;">
					<!-- Card body START -->
					<div class="card-body">
                        <div class="d-flex align-items-center justify-content-between">
							<div class="d-flex align-items-center">
								<!-- Avatar -->
								<div class="avatar avatar-story me-2">
									<a href="#!"> <img class="avatar-img rounded-circle"  height="32px"  src="https://randomuser.me/api/portraits/men/86.jpg" alt=""> </a>
								</div>
								<!-- Info -->
								<div>
									<div class="nav nav-divider">
										<h6 class="nav-item card-title mb-0">Lori Ferguson</h6>
										<span class="nav-item small" style="margin-left:1rem"> 2hr ago</span>
									</div>
									
								</div>
							</div>
							
							<!-- Card feed action dropdown END -->
						</div>
                        <div class="p-2">
							<span class="badge" style="margin-right: .5rem;background-color: #0C0C0C;">canada</span>
                            <span class="badge" style="margin-right: .5rem;background-color: #481E14;">abroad</span>
                            <span class="badge" style="margin-right: .5rem;background-color: #9B3922;">success</span>
                            <span class="badge" style="margin-right: .5rem;background-color: #F2613F;">info</span>
                        </div>
						<p class=" p-2">I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll.</p>
                        
						<!-- Card img -->
						
						<div class="d-flex justify-content-between"> 
                                <div>
                                <i  class="fa-solid fa-heart p-2 fa-lg" style="color: red;"></i>
                                <i class="fa-solid fa-share p-2 fa-lg"></i>
                                </div>
                            <div>
                                <i  class="fa-solid fa-bookmark p-2 fa-lg" ></i>
                            </div>
                        </div>
					</div>
					
					
				</div>
                <div class="card border border-3 border-warning-subtle shadow" style="margin-bottom: 1rem;">
					<!-- Card body START -->
					<div class="card-body">
                        <div class="d-flex align-items-center justify-content-between">
							<div class="d-flex align-items-center">
								<!-- Avatar -->
								<div class="avatar avatar-story me-2">
									<a href="#!"> <img class="avatar-img rounded-circle"  height="32px"  src="https://randomuser.me/api/portraits/men/86.jpg" alt=""> </a>
								</div>
								<!-- Info -->
								<div>
									<div class="nav nav-divider">
										<h6 class="nav-item card-title mb-0">Lori Ferguson</h6>
										<span class="nav-item small" style="margin-left:1rem"> 2hr ago</span>
									</div>
									
								</div>
							</div>
							
							<!-- Card feed action dropdown END -->
						</div>
                        <div class="p-2">
                            <span class="badge" style="margin-right: .5rem;background-color: #5E1675;">canada</span>
                            <span class="badge" style="margin-right: .5rem;background-color: #EE4266;">abroad</span>
                            <span class="badge" style="margin-right: .5rem;background-color: #e1b216;">success</span>
                            <span class="badge" style="margin-right: .5rem;background-color: #337357;">info</span>
                        </div>
						<p class=" p-2">I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll.</p>
                        
						<!-- Card img -->
						
						<div class="d-flex justify-content-between"> 
                                <div>
                                <i  class="fa-solid fa-heart p-2 fa-lg" style="color: red;"></i>
                                <i class="fa-solid fa-share p-2 fa-lg"></i>
                                </div>
                            <div>
                                <i  class="fa-solid fa-bookmark p-2 fa-lg" ></i>
                            </div>
                        </div>
					</div>
					
					
				</div>
                <div class="card border border-3 border-danger-subtle shadow" style="margin-bottom: 2rem;">
					<!-- Card body START -->
					<div class="card-body">
                        <div class="d-flex align-items-center justify-content-between">
							<div class="d-flex align-items-center">
								<!-- Avatar -->
								<div class="avatar avatar-story me-2">
									<a href="#!"> <img class="avatar-img rounded-circle"  height="32px"  src="https://randomuser.me/api/portraits/men/86.jpg" alt=""> </a>
								</div>
								<!-- Info -->
								<div>
									<div class="nav nav-divider">
										<h6 class="nav-item card-title mb-0">Lori Ferguson</h6>
										<span class="nav-item small" style="margin-left:1rem"> 2hr ago</span>
									</div>
									
								</div>
							</div>
							
							<!-- Card feed action dropdown END -->
						</div>
                        <div class="p-2">
                            <span class="badge" style="margin-right: .5rem;background-color: #FF204E;">canada</span>
                            <span class="badge" style="margin-right: .5rem;background-color: #A0153E;">abroad</span>
                            <span class="badge" style="margin-right: .5rem;background-color: #5D0E41;">success</span>
                            <span class="badge" style="margin-right: .5rem;background-color: #00224D;">info</span>
                        </div>
						<p class=" p-2">I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll.</p>
                        
						<!-- Card img -->
						
						<div class="d-flex justify-content-between"> 
                                <div>
                                <i  class="fa-solid fa-heart p-2 fa-lg" style="color: red;"></i>
                                <i class="fa-solid fa-share p-2 fa-lg"></i>
                                </div>
                            <div>
                                <i  class="fa-solid fa-bookmark p-2 fa-lg" ></i>
                            </div>
                        </div>
					</div>
					
					
				</div>
                <div class="card rounded border-0" style="margin-bottom: 2rem;">
					<!-- Card header START -->
					<div class="card-header border-0 pb-0">
						<div class="d-flex align-items-center justify-content-between">
							<div class="d-flex align-items-center">
								<!-- Avatar -->
								<div class="avatar avatar-story me-2">
									<a href="#!"> <img class="avatar-img rounded-circle"  height="32px"  src="https://randomuser.me/api/portraits/men/86.jpg" alt=""> </a>
								</div>
								<!-- Info -->
								<div>
									<div class="nav nav-divider">
										<h6 class="nav-item card-title mb-0">Lori Ferguson</h6>
										<span class="nav-item small" style="margin-left:1rem"> 2hr ago</span>
									</div>
									
								</div>
							</div>
							
							<!-- Card feed action dropdown END -->
						</div>
					</div>
					<!-- Card header END -->
					<!-- Card body START -->
					<div class="card-body">
                        
						<p class=" p-2">I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll.</p>
                        <div class="p-2">
                            <span class="badge  text-bg-primary " style="margin-right: .5rem;">canada</span>
                            <span class="badge  text-bg-secondary " style="margin-right: .5rem;">abroad</span>
                            <span class="badge text-bg-success " style="margin-right: .5rem;">success</span>
                            <span class="badge  text-bg-info " style="margin-right: .5rem;">info</span>
                        </div>
						<!-- Card img -->
						
						
					</div>
					<div class="card-footer ">
                        <div class="d-flex justify-content-between"> 
                                <div>
                                <i  class="fa-solid fa-heart p-2 fa-lg" style="color: red;"></i>
                                <i class="fa-solid fa-share p-2 fa-lg"></i>
                                </div>
                            <div>
                                <i  class="fa-solid fa-bookmark p-2 fa-lg" ></i>
                            </div>
                        </div>
                        
					</div>
					
				</div>
                <div class="card rounded" style="margin-bottom: 2rem;">
					<!-- Card header START -->
					<div class="card-header border-0 pb-0">
						<div class="d-flex align-items-center justify-content-between">
							<div class="d-flex align-items-center">
								<!-- Avatar -->
								<div class="avatar avatar-story me-2">
									 <img class="avatar-img rounded-circle"  height="32px"  src="https://randomuser.me/api/portraits/men/86.jpg" alt=""> 
								</div>
								<!-- Info -->
								<div>
									<div class="nav nav-divider">
										<h6 class="nav-item card-title mb-0">Lori Ferguson</h6>
										<span class="nav-item small" style="margin-left:1rem"> 2hr ago</span>
									</div>
									
								</div>
							</div>
							
							<!-- Card feed action dropdown END -->
						</div>
					</div>
					<!-- Card header END -->
					<!-- Card body START -->
					<div class="card-body">
                        
						<p class=" p-2">I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll.</p>
                        <div class="p-2">
                            <span class="badge  text-bg-primary " style="margin-right: .5rem;">canada</span>
                            <span class="badge  text-bg-secondary " style="margin-right: .5rem;">abroad</span>
                            <span class="badge text-bg-success " style="margin-right: .5rem;">success</span>
                            <span class="badge  text-bg-info " style="margin-right: .5rem;">info</span>
                        </div>
						<!-- Card img -->
						
						
					</div>
					<div class="card-footer ">
                        <div class="d-flex justify-content-between"> 
                                <div>
                                <i  class="fa-solid fa-heart p-2 fa-lg" style="color: red;"></i>
                                <i class="fa-solid fa-share p-2 fa-lg"></i>
                                </div>
                            <div>
                                <i  class="fa-solid fa-bookmark p-2 fa-lg" ></i>
                            </div>
                        </div>
                        
					</div>
					
				</div>
            </div>
</template>

<style scoped>
a {
  color: inherit; /* Inherit color from parent */
  text-decoration: none; /* Remove underline */
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


</style>

