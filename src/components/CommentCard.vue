<template>
    <div class="d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-top">
                                    <!-- Avatar -->
            <div class="avatar avatar-story me-2 ">
                <a href="#!"> <img class="avatar-img rounded-circle"  height="36px"  src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e" alt=""> </a>
            </div>
                                    <!-- Info -->
            <div>
                <div class="d-flex justify-content-between">
                    <span class="card-title mb-0"><strong>{{ name }}</strong></span>
                    <span class=" small text-body-secondary" >{{time}}</span>
                </div>	
                <p>{{ content }}</p>
            </div>
        </div>
	</div>
</template>
<script setup>
defineProps({
  name: String,
  time: String,
  content:String
})


</script>