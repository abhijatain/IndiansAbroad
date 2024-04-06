<template>
    <div class="container mt-5 p-5" >
        <div class="spinner-border" role="status" v-if="!done1">
            <span class="visually-hidden">Loading...</span>
        </div>
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
        <div class="spinner-border" role="status" v-if="!done2">
            <span class="visually-hidden">Loading...</span>
        </div>
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
        <div class="spinner-border" role="status" v-if="!done3">
            <span class="visually-hidden">Loading...</span>
        </div>
        <button @click="add_article" >Add</button>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

let done1 = ref(true)
let done2 = ref(true)
let done3 = ref(true)

let categories = ref([])
let tag = ref(null)
let category = ref(null)
let title = ref(null)
let summary = ref(null)
let youtube = ref(null)
let source = ref(null)
let id = ref(null)

onMounted(async() => {
    const res = await fetch(`https://test-am3oxfhvvq-em.a.run.app/api/category`, {
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
    if (id.value != 1) {
        function convertYouTubeLinkToEmbed(link) {
            const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
            const match = link.match(regExp);
            return (match && match[2].length === 11) ? 'https://www.youtube.com/embed/' + match[2] : null;
        }

        // Example usage:
        const youtubeLink = youtube.value;
        const iframeLink = convertYouTubeLinkToEmbed(youtubeLink);
        youtube.value = iframeLink
        console.log(iframeLink)
    } 
    done3.value = false
  const res = await fetch(`https://test-am3oxfhvvq-em.a.run.app/api/article`, {
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
    done3.value = true
    alert(data.msg)
}
}

async function add_category() {
    done2.value = false
    if (categories.value.filter(item => item.name != category.value)){
        const res = await fetch(`https://test-am3oxfhvvq-em.a.run.app/api/category`, {
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
        done2.value = true
        alert('added')
    }
    }else{
        alert('exists category')
    }
  
}

async function add_tag() {
    done1.value = false
        const res = await fetch(`https://test-am3oxfhvvq-em.a.run.app/create/tag`, {
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
        done1.value = true
        alert(data.message)
        
    }
    
}
</script>