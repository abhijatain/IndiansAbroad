<template>
    <div class=" d-flex gap-1  border-0 p-1 justify-content-start mb-0 " aria-current="true">
        <img src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e" alt="twbs" width="34" height="34" class="rounded-circle flex-shrink-0">
                        
                            
        <div class=" " >
				<h6 class="card-title mb-0 lora-regular">Abhijeet Singh </h6>
				<span class=" text-body-secondary lora-regular" style="font-size: 12px;">Posted 9 days ago</span>
        </div>
        
    </div>
    <div class="remove-style">
    <p class="mb-0 r p-1 ql-editor" v-html="content" ></p>
    </div>
</template>
<script setup>
import { onMounted } from 'vue';
defineProps({
  name: String,
  time: String,
  content:String
})

onMounted(()=>{
    // Select the parent div and all of its child elements
    var elements = document.querySelectorAll('.remove-style, .remove-style *');

    // Loop through the NodeList and remove the 'style' attribute from each element
    elements.forEach(function(element) {
    element.removeAttribute('style');
    });

})
</script>

