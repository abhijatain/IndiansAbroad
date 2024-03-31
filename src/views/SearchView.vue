<script setup>
import { ref, onMounted} from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

let saved = ref([])
let content = route.params.content

onMounted(async () => {
    const token = localStorage.getItem('auth-token')
    const res = await fetch(`https://community-app-india.onrender.com/get/save`, {
                method: "GET",
                Allow: ['GET', 'POST'],
                headers : {
                        "Authentication-Token" : token,
                        'Content-Type': 'application/json'
                    }
                })
    const data = await res.json()
    if (res.ok) {
        saved.value.push(...data)
        console.log(saved)
    }
})



</script>


<template>
   <div class="container" style="margin-top:4rem;padding:0px 6px">
      <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" >
        <label class="btn btn-outline-secondary" for="btnradio1">News</label>
        <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" checked>
        <label class="btn btn-outline-secondary" for="btnradio2">Discusions</label>
      </div>
		<div v-if="!loaded" class="card border  border-3 shadow p-2" style="margin-bottom: 1rem;margin-top: 1rem;" v-for="number in 6" >
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
    </div>
    
</template>
      

    