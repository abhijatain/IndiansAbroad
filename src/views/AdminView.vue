<template>
    <div class="container mt-5 p-5" >
        <h1>Tags</h1>
        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Name</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" v-model="tag">
        </div>
        <button @click="add_tag" class="mb-5">Add</button>
            <h1>Categories</h1>
        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Name</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" v-model="category">
        </div>
        <button @click="add_category" class="mb-5">Add</button>
        <h1>Article</h1>
        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Title</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" v-model="title">
        </div>
        <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Summary</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="summary"></textarea>
        </div>
        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Youtube</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" v-model="youtube">
        </div>
        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">source</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" v-model="source">
        </div>
        <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Category</label>
        <select class="form-select" aria-label="Default select example" v-model="id" >
            <option :value="c.id" v-for="c in categories">{{c.name}}</option>
        </select>
        </div>
        <button @click="add_article" >Add</button>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
let categories = ref([])
let tag = ref(null)
let category = ref(null)
let title = ref(null)
let summary = ref(null)
let youtube = ref(null)
let source = ref(null)
let id = ref(null)

onMounted(async() => {
    const res = await fetch(`https://community-app-india.onrender.com/api/category`, {
                    method: "GET",
                    Allow: ['GET', 'POST'],
                    headers : {
                        "Authentication-Token" : localStorage.getItem('auth-token'),
                        'Content-Type': 'application/json'
                    }
                })
                const data = await res.json()
    if (res.ok){
        categories.value.push(...data)
    }
})

async function add_article() {
  const res = await fetch(`https://community-app-india.onrender.com/api/article`, {
                    method: "POST",
                    Allow: ['GET', 'POST'],
                    headers : {
                        "Authentication-Token" : localStorage.getItem('auth-token'),
                        'Content-Type': 'application/json'
                    },
                    body : JSON.stringify({
                        "title" : title.value, 
                        "summary" : summary.value,
                        "youtube" : youtube.value,
                        "source" : source.value,
                        "category_id" : id.value
                      }),
                })
const data = await res.json()
if (res.ok){
    alert(data.msg)
}
}

async function add_category() {
    if (categories.value.filter(item => item.name != category.value)){
        const res = await fetch(`https://community-app-india.onrender.com/api/category`, {
                    method: "POST",
                    Allow: ['GET', 'POST'],
                    headers : {
                        "Authentication-Token" : localStorage.getItem('auth-token'),
                        'Content-Type': 'application/json'
                    },
                    body : JSON.stringify({
                        "name" : category.value
                      }),
                })
                const data = await res.json()
    if (res.ok){
        categories.value.push(data)
    }
    }else{
        alert('exists category')
    }
  
}

async function add_tag() {
    
        const res = await fetch(`https://community-app-india.onrender.com/create/tag`, {
                    method: "POST",
                    Allow: ['GET', 'POST'],
                    headers : {
                        "Authentication-Token" : localStorage.getItem('auth-token'),
                        'Content-Type': 'application/json'
                    },
                    body : JSON.stringify({
                        "name" : tag.value
                      }),
                })
                const data = await res.json()
    if (res.ok){
        alert(data.message)
    }
    
}
</script>