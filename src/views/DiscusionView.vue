<script setup>
import AddDiscusion from '../components/AddDiscusion.vue'
import {ref , onMounted} from 'vue'
import { useRoute } from 'vue-router'

let discusions = ref([])
const route = useRoute()
let id = ref('')

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
        url : art.source,
        title : 'Independent',
    })
    }else{
        navigator.clipboard.writeText('Copied')
    }
    
}

</script>

<template>
   <div class="container" style="margin-top:4rem">
    <div class="d-flex align-items-center justify-content-between p-2">
	<AddDiscusion />
    <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
            <label class="btn btn-outline-secondary" for="btnradio1">Latest</label>

            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
            <label class="btn btn-outline-secondary" for="btnradio2">Popular</label>
        </div></div>
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
                            <span  style="margin-right: .5rem;"><span class="text-success">#</span>canada</span>
                            <span  style="margin-right: .5rem;"><span class="text-primary">#</span>abroad</span>
                            <span  style="margin-right: .5rem;"><span class="text-warning">#</span>success</span>
                            <span  style="margin-right: .5rem;"><span class="text-danger">#</span>info</span>
                        </div>
						<router-link to='/' class=" p-2">
							<p>
								I'm thrilled to share that I've completed a graduate certificate course in project management with the president's honor roll.
							</p>
							
							
						</router-link>
                        
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
                            <span  style="margin-right: .5rem;"><span class="text-success">#</span>canada</span>
                            <span  style="margin-right: .5rem;"><span class="text-primary">#</span>abroad</span>
                            <span  style="margin-right: .5rem;"><span class="text-warning">#</span>success</span>
                            <span  style="margin-right: .5rem;"><span class="text-danger">#</span>info</span>
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
                            <span  style="margin-right: .5rem;"><span class="text-success">#</span>canada</span>
                            <span  style="margin-right: .5rem;"><span class="text-primary">#</span>abroad</span>
                            <span  style="margin-right: .5rem;"><span class="text-warning">#</span>success</span>
                            <span  style="margin-right: .5rem;"><span class="text-danger">#</span>info</span>
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
                            <span class="badge  text-bg-primary " style="margin-right: .5rem;">canada</span>
                            <span class="badge  text-bg-secondary " style="margin-right: .5rem;">abroad</span>
                            <span class="badge text-bg-success " style="margin-right: .5rem;">success</span>
                            <span class="badge  text-bg-info " style="margin-right: .5rem;">info</span>
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
                            <span class="badge  text-bg-primary " style="margin-right: .5rem;">canada</span>
                            <span class="badge  text-bg-secondary " style="margin-right: .5rem;">abroad</span>
                            <span class="badge text-bg-success " style="margin-right: .5rem;">success</span>
                            <span class="badge  text-bg-info " style="margin-right: .5rem;">info</span>
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
                            <span class="badge  text-bg-primary " style="margin-right: .5rem;">canada</span>
                            <span class="badge  text-bg-secondary " style="margin-right: .5rem;">abroad</span>
                            <span class="badge text-bg-success " style="margin-right: .5rem;">success</span>
                            <span class="badge  text-bg-info " style="margin-right: .5rem;">info</span>
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
            </div>
</template>

<style scoped>
a {
  color: inherit; /* Inherit color from parent */
  text-decoration: none; /* Remove underline */
}
</style>

