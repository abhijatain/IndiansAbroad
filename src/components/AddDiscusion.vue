<script setup>
import { resolveFocusPosition } from '@tiptap/vue-3';
import Editor from 'primevue/editor';

import {ref} from 'vue'
let title = ref('')
let value = ref('')
let image = ref(null)
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
                        "image": image.value
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
      value.value += `<img src=${data.url} referrerpolicy="no-referrer">`
    }
      }
}
</script>

<template>


<button class="btn btn-outline-success" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
  Create Post
</button>

<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style="width: 100%;height: 100%;">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Edit Preview</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    
    <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Title</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" v-model="title">
    </div>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Tags</label>
      <form class="row gy-2 gx-3 align-items-center">
          <div class="col-auto">
        <label class="visually-hidden" for="autoSizingSelect">Preference</label>
        <select class="form-select" id="autoSizingSelect">
          <option selected>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="col-auto">
        <label class="visually-hidden" for="autoSizingSelect">Preference</label>
        <select class="form-select" id="autoSizingSelect">
          <option selected>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="col-auto">
        <label class="visually-hidden" for="autoSizingSelect">Preference</label>
        <select class="form-select" id="autoSizingSelect">
          <option selected>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="col-auto">
        <label class="visually-hidden" for="autoSizingSelect">Preference</label>
        <select class="form-select" id="autoSizingSelect">
          <option selected>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </form>
    </div>
    
            <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Content</label>
            <Editor v-model="value" editorStyle="height: 55vh">
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
            <div class="mb-3">
              <button type="button" class="btn btn-danger " >Discard</button>
              <button type="button" class="btn btn-success " @click="add">Publish</button>
            </div>
          </div>
            
  </div>
</div>
   
</template>