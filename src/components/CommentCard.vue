<template>
    <div class=" d-flex gap-3  border-0 p-1 justify-content-between " aria-current="true">
                        <img src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e" alt="twbs" width="28" height="28" class="rounded-circle flex-shrink-0">
                        <div class="d-flex gap-2 w-100 justify-content-between">
                            <div >
                                <div class="d-flex">
                                    <h6 class="mb-0">{{ name }}</h6>
                                    <small class="opacity-50 text-nowrap ms-2">now</small>
                                </div>
                            
                            <p class="mb-0 opacity-75">{{ content }}</p>
                            </div>
                            
                            
                        </div>
                        <div class="d-flex row  justify-content-center p-2">
                                <i v-if="true" class="fa-solid fa-heart p-1"  style="color: #ea3e13; "></i>
                                <i v-else class="fa-regular fa-heart p-1" ></i>
                                <small class="opacity-75 text-nowrap p-1">100</small>
                            </div>
    </div>
                    <!--
    <div class="d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-top">
                                    
            <div class="avatar avatar-story me-2 ">
                <a href="#!"> <img class="avatar-img rounded-circle"  height="36px"  src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e" alt=""> </a>
            </div>
                                    
            <div>
                <div class="d-flex justify-content-between">
                    <span class="card-title mb-0"><strong></strong></span>
                    <span class=" small text-body-secondary" >{{time}}</span>
                </div>	
                <p></p>
            </div>
        </div>
	</div>-->
</template>
<script setup>
defineProps({
  name: String,
  time: String,
  content:String
})


</script>