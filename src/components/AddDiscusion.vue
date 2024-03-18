<script setup>
import Editor from 'primevue/editor';

import {ref} from 'vue'
let title = ref('')
let value = ref('')
let image = ref(null)

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
                        "image" : image.value
                      }),
                })
                const data = await res.json()
                console.log(data)
}
</script>

<template>
    <!-- Button trigger modal -->
    
<button  class="btn btn-outline-success align-items-center" data-bs-toggle="modal" data-bs-target="#exampleModal" style="margin-bottom:1rem">
  Add Post
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Add Post</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="card border-0" style="width: 100%;">
        <div class="card-body">
            <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Title</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" v-model="title">
            </div>
            <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">Content</label>
            <Editor v-model="value" editorStyle="height: 320px">
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
                    <button class="ql-link"></button>
                  </span>
                  <span class="ql-formats">
                    <button class="ql-clean"></button>
                  </span>
                  
                </template>
            </Editor>
            </div>
            <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Image Link</label>
            <input type="text" class="form-control" id="exampleFormControlInput1" v-model="image">
            </div>
            
        </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-success" @click="add">Add</button>
      </div>
    </div>
  </div>
</div>
</template>