<script setup>
import { useTextareaAutosize } from '@vueuse/core'
import Editor from 'primevue/editor';
import {ref} from 'vue'

const { textarea, input } = useTextareaAutosize()
let title = ref('')
let value = ref('Type Your Content here')
let fileInput = ref(null)

async function add() {
    const res = await fetch(`https://community-app-india.onrender.com/api/discusion`, {
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
                console.log(data)
}

function clicked() {
  document.getElementById("formFile").click()
  //value.value += `<img src="https://cdn.statcdn.com/Infographic/images/normal/30803.jpeg" >`
}

async function handleFileChange() {
  let data = value.value
  value.value += `<br><h2>Uploading...., Wait for image to show and then type</h2>`
  let formData = new FormData();
  formData.append('image',fileInput.value.files[0]);
  const file = fileInput.value.files[0];
  
  if (file) {
    const res = await fetch(`https://community-app-india.onrender.com/upload/image`, {
                    method: "POST",
                    Allow: ['GET', 'POST'],
                    headers : {
                        "Authentication-Token" : localStorage.getItem('auth-token'),
                        //'Content-Type': 'application/json'
                    },
                    body : formData
                })
    const data = await res.json()
    if ( res.ok){
      value.value = data.value
      value.value += `<img src=${data.url} referrerpolicy="no-referrer">`
    }
      }
}

</script>


<template>


<button class="btn btn-outline-success" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
  <i class="fa-solid fa-pen-to-square" style="color: #337357;"></i>
</button>

<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style="width: 100%;height: 100%;">
  <div class="offcanvas-header">
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
   
    <div class="mb-3">
            <h1>
              <textarea
                  ref="textarea"
                  v-model="title"
                  class="resize-none border-0 arvo-bold p-2"
                  placeholder="Your Post Title"
                  style="width: 90vw"
                />
            
          </h1>
    </div>
    <div class="mb-5">
      <form class="row gy-2 gx-3 align-items-center">
          <div class="col-auto">
        
        <select class="form-select border-0 text-white" id="autoSizingSelect" style="background-color: #FFAF45; width: 25vw;">
          <option selected>Country</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="col-auto">
        <label class="visually-hidden" for="autoSizingSelect">Preference</label>
        <select class="form-select border-0 text-white" id="autoSizingSelect" style="background-color: #FB6D48; width: 25vw;">
          <option selected>Tag2</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="col-auto">
        <label class="visually-hidden" for="autoSizingSelect">Preference</label>
        <select class="form-select border-0 text-white" id="autoSizingSelect" style="background-color: #D74B76; width: 25vw;">
          <option selected>Tag3</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="col-auto">
        <label class="visually-hidden" for="autoSizingSelect">Preference</label>
        <select class="form-select border-0 text-white" id="autoSizingSelect" style="background-color: #673F69; width: 25vw;">
          <option selected>Tag4</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </form>
    </div>
    
            <div class="mb-3">
             
            <Editor v-model="value" editorStyle="height: 60vh;" >
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
                    <button  @click="clicked"> <i class="fa-solid fa-image"></i></button>
                    
                  </span>
                  <span class="ql-formats">
                    <button class="ql-clean"></button>
                   
                  </span>
            
                </template>
            </Editor>
            <input ref="fileInput"  type="file" id="formFile" accept="image/*" hidden @change="handleFileChange">
            </div>
            <div class="offcanvas-body">
              <div class="fixed-bottom p-2 bg-dark">
                <button type="button" class="btn btn-primary m-1" @click="add">Publish</button>
              <button type="button" class="btn btn-secondary m-1" >Preview</button>
              <button type="button" class="btn btn-secondary m-1" @click="add">Edit</button>
              </div>
              
          </div>
            
  </div>
</div>
   
</template>

<style scoped>

textarea {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

textarea::-webkit-scrollbar {
  display: none;
}
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