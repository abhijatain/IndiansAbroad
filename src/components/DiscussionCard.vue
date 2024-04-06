<template>
    <div class="col" v-for="(d,index) in discussions" :key="index" style="margin:8px 4px" v-if="width <850">
        <div class="card card-cover overflow-hidden  rounded-4 shadow-lg" style="background-image: url('');" >
          <div class="d-flex flex-column h-100 p-3   text-shadow-1">
            <ul class="d-flex list-unstyled mb-2">
              <li class="me-auto">
                <img src="../assets/BharatGuildLogo.jpg" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white">
                <small class="p-1">Abhijeet Singh</small>
                <small class="p-1">3d</small>
				<router-link :to="`/discusion/${d.id}/${d.title}`" >
				<h5 class="mt-3 display-7 lh-1 fw-bold" >{{ d.title }}</h5>		
				</router-link>
              </li>
			  
              <li class="d-flex align-items-center me-3">
              
              </li>
              <li class="d-flex align-items-center">
				<img v-if="index == 0" src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_640.jpg" height="80" width="80">
				<img v-else-if="index == 1" src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg" height="80" width="80">
                <img v-else-if="index == 2" src="https://media.istockphoto.com/id/533297303/photo/lion-mother-with-cub.jpg?s=612x612&w=0&k=20&c=W-8_Yb__gWrDFePNhEOBtVQ8ND6qsNb5X8AB00apkvk=" height="80" width="80">
				<img v-else-if="index == 3" src="https://miro.medium.com/v2/da:true/resize:fill:400:268/0*axOYB0WNLkM2gS0q" height="80" width="80">
				<img v-else src="https://miro.medium.com/v2/da:true/resize:fill:400:268/0*axOYB0WNLkM2gS0q" height="80" width="80">
              </li>
            </ul>
			
			<div class="d-flex flex-row justify-content-between align-items-end">
				<div class="p-2">
					<span class="badge bg-success-subtle text-success m-1" >canada</span>
                <span class="badge bg-warning-subtle text-warning m-1">abroad</span>
                <span class="badge bg-danger-subtle text-danger m-1">success</span>
                <span class="badge bg-primary-subtle text-primary m-1">religion</span>
								
							</div>
			
			<i  class="fa-solid fa-bookmark p-2 " ></i>
			
		</div>
            
            
          </div>
        </div>
      		</div>	

          <div class="col" v-for="(d,index) in discussions" :key="index" style="margin:8px 4px" v-if="width >849">
        <div class="card card-cover overflow-hidden  rounded-4 shadow-lg" style="background-image: url('');" >
          <div class="d-flex flex-column h-100 p-3   text-shadow-1">
            <ul class="d-flex list-unstyled mb-2">
              <li class="me-auto">
                <img src="../assets/BharatGuildLogo.jpg" alt="Bootstrap" width="32" height="32" class="rounded-circle border border-white">
                <small class="p-1">Abhijeet Singh</small>
                <small class="p-1">3d</small>
                <router-link :to="`/discusion/${d.id}/${d.title}`" >
                <h5 class="mt-3 display-7 lh-1 fw-bold p-1" >{{ d.title }}</h5>		
                </router-link>
                <div class="p-2">
                  <span class="badge bg-success-subtle text-success m-1" >canada</span>
                  <span class="badge bg-warning-subtle text-warning m-1">abroad</span>
                  <span class="badge bg-danger-subtle text-danger m-1">success</span>
                  <span class="badge bg-primary-subtle text-primary m-1">religion</span>
							  </div>
              </li>
			  
              <li class="d-flex align-items-center me-3">
              
              </li>
              <li class="d-flex align-items-center">
				<img v-if="index == 0" src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_640.jpg" height="120" width="120">
				<img v-else-if="index == 1" src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg" height="120" width="120">
                <img v-else-if="index == 2" src="https://media.istockphoto.com/id/533297303/photo/lion-mother-with-cub.jpg?s=612x612&w=0&k=20&c=W-8_Yb__gWrDFePNhEOBtVQ8ND6qsNb5X8AB00apkvk=" height="120" width="120">
				<img v-else-if="index == 3" src="https://miro.medium.com/v2/da:true/resize:fill:400:268/0*axOYB0WNLkM2gS0q" height="120" width="120">
				<img v-else src="https://miro.medium.com/v2/da:true/resize:fill:400:268/0*axOYB0WNLkM2gS0q" height="120" width="120">
              </li>
            </ul>
			
			
            
            
          </div>
        </div>
      		</div>	
</template>

<script setup>
import {ref } from 'vue'
import { useWindowSize } from '@vueuse/core'

const { width, height } = useWindowSize()

const props = defineProps({
  discussions: {
    type:Array,
    required:true
}
})

async function save(id,index) {
    const token = localStorage.getItem('auth-token')
    await fetch('https://test-am3oxfhvvq-em.a.run.app/save/discusion',{
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
</script>

<style scoped>
a {
  color: inherit; /* Inherit color from parent */
  text-decoration: none; /* Remove underline */
}

</style>