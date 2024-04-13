<script setup>
//import { useTextareaAutosize } from '@vueuse/core'
import {ref} from 'vue'
//import Chips from 'primevue/chips';
//import Textarea from 'primevue/textarea';
//import MultiSelect from 'primevue/multiselect';
import Tiptap from '../components/TipTap.vue'


const selectedCities = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);


let title = ref('')
let value = ref('<p>Type Your Content here</p>')
let customTag = ref()
let fileInput = ref(null)

async function add() {
    const res = await fetch(`https://test-am3oxfhvvq-em.a.run.app/api/discusion`, {
                    method: "POST",
                    Allow: ['GET', 'POST'],
                    headers : {
                        "Authentication-Token" : localStorage.getItem('auth-token'),
                        'Content-Type': 'application/json'
                    },
                    body : JSON.stringify({
                        "title" : title.value,
                        "data" : value.value,
                      }),
                })
                const data = await res.json()
}


</script>


<template>



  
  <div class="container" style="margin-top: 6rem;" >
    
    
   
    <div class="">
            <h1>
              <textarea
                  v-model="title"
                  class=" border-0 arvo-bold p-2"
                  placeholder="Your Post Title"
                  autoResize
                  
                  style="width:100%"                  
                />
            
          </h1>
    </div>
     
    <div class=" ">
       <!-- 
      <label for="chips">Select Tags</label>
        <MultiSelect v-model="selectedCities" :options="cities" filter optionLabel="name" placeholder="Select Countries" display="chip" class=" w-100 md:w-20rem " :maxSelectedLabels="3">
            <template #option="slotProps">
                <div class="flex align-items-center">

                    <div>{{ slotProps.option.name }}</div>
                </div>
            </template>
            <template #footer>
                <div class="py-2 px-3">
                    <b>{{ selectedCities ? selectedCities.length : 0 }}</b> item{{ (selectedCities ? selectedCities.length : 0) > 1 ? 's' : '' }} selected.
                </div>
            </template>
        </MultiSelect>

        <div class=" p-fluid mt-2">
          <label for="chips">Custom Tags</label>
          <Chips v-model="customTag" />
          
      </div>
    -->
    </div>
    
            <div class="mb-2">
              
              <Tiptap v-model="value"  />
              <div class="content">
      <h3>Content</h3>
      <p>{{ value }}</p>
    </div>
   
              
             <!--
              <Editor v-model="value" editorStyle="height: 60vh" >
                <template v-slot:toolbar>
                  <span class="ql-formats">
                    <select class="ql-font"></select>
                    <select class="ql-size"></select>
                  </span>
                  <span class="ql-formats">
                    <button class="ql-bold"></button>
                    <button class="ql-italic"></button>
                    <button class="ql-underline"></button>
                    <button class="ql-strike"></button>
                  </span>
                  <span class="ql-formats">
                    <select class="ql-color"></select>
                    <select class="ql-background"></select>
                  </span>
                  
                  <span class="ql-formats">
                    <button class="ql-list" value="ordered"></button>
                    <button class="ql-list" value="bullet"></button>
                    <button class="ql-indent" value="-1"></button>
                    <button class="ql-indent" value="+1"></button>
                  </span>
                  <span class="ql-formats">
                    <button class="ql-direction" value="rtl"></button>
                    <select class="ql-align"></select>
                  </span>
                  <span class="ql-formats">
                    <button class="ql-video"></button> 
                    <button class="ql-link"></button>
                    <button  @click="clicked"> <i class="fa-solid fa-image" style="color: black;"></i></button>
                    
                  </span>
                  <span class="ql-formats">
                    <button class="ql-clean"></button>
                   
                  </span>
            
                </template>
            </Editor>
            <input ref="fileInput"  type="file" id="formFile" accept="image/*" hidden @change="handleFileChange">
             -->
            
            </div>
          
           
    <div class="mb-3 ">
        <button type="button" class="btn btn-primary m-1" @click="add">Publish</button>
        <button type="button" class="btn btn-secondary m-1" >Preview</button>
        <button type="button" class="btn btn-secondary m-1" @click="add">Edit</button>
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
.ql-editor {
  border: 0;
}
</style>