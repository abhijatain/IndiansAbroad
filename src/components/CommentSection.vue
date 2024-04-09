<template>
    <div class="p-2">
        <div style="padding:10px 8px" class="d-flex justify-content-between">
            <h3 class=" p-1  barlow-semibold">Comments</h3>
            <button class="button bg-success-subtle border-0 rounded p-2 "  data-bs-toggle="modal" data-bs-target="#exampleModal">Add To Discussion</button>
        </div>
        
        <ul class="list-group list-group-flush " style="margin-bottom: 2rem;">
            <li class="list-group-item mt-2 p-1 " v-for="(comment,index) in comments" :key="index">
                <div class="">
				<div>
					<div class="col d-flex flex-column position-static">
						<Content :name="comment.username" time="2 days ago" :content="comment.content"/>
						<div class="d-flex justify-content-between ms-5"> 
                            <div class="">	
                                <button class="border-0 bg-transparent">
                                <i v-if="true" class="fa-solid fa-heart p-1"  style="color: #ea3e13; "></i>
                                <i v-else class="fa-regular fa-heart p-1" ></i>
                                <small class="opacity-75 text-nowrap p-1">100</small>
                                </button>
                                <button class="border-0 bg-transparent" @click="get_nested_comments(comment.id)" data-bs-toggle="collapse" :href="`#nested${comment.id}`"  aria-expanded="false" :aria-controls="`nested${comment.id}`">
                                    <i class="fa-regular fa-comment ms-1" ></i>
                                    <small class="opacity-75 text-nowrap p-1">100</small>
                                </button>
                               
                            </div>
                            <small class="opacity-75 text-nowrap " @click="reply(comment.username,comment.id)" data-bs-toggle="modal" data-bs-target="#exampleModal">Reply</small>
                        </div>
                        <div class="collapse" :id="`nested${comment.id}`">
                            <div class="card-body ms-2 mt-2 " style="padding:12px" v-for="(c) in comment.replies" :key="c.content">
                                <div >
                                    <div class="col d-flex flex-column position-static " >
                                        <Content :name="c.username" time="2 days ago" :content="c.content"/>
                                        <div class="d-flex justify-content-between ms-5"> 
                            <div class="">	
                                <button class="border-0 bg-transparent">
                                <i v-if="true" class="fa-solid fa-heart p-1"  style="color: #ea3e13; "></i>
                                <i v-else class="fa-regular fa-heart p-1" ></i>
                                <small class="opacity-75 text-nowrap p-1">100</small>
                                </button>
                               
                               
                            </div>
                            <small class="opacity-75 text-nowrap " @click="reply(comment.username,comment.id)" data-bs-toggle="modal" data-bs-target="#exampleModal">Reply</small>
                        </div>

                                    </div>
                                </div>			
                            </div>
                        </div>
					</div>
				</div>
			</div>
            </li>  
            
        </ul>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog mt-5">
            <div class="modal-content">
            
            <div class="modal-body">
                <div class="alert alert-warning alert-dismissible m-0 p-1 mb-1" role="alert" v-if="!hidden" key="alert">
                        <span class="ms-1">Replying to {{ name }}</span>
                        <span class="btn-close p-2"   @click="hidden=true;name='';parent=-1"></span>
                </div>
                <Editor v-model="content" editorStyle="height: 25vh;" >
                <template v-slot:toolbar>
                  <span class="ql-formats">
                    <select class="ql-font"></select>
                    <select class="ql-size"></select>
                  </span>
                  <span class="ql-formats">
                    <button class="ql-bold"></button>
                    <button class="ql-italic"></button>
                  </span>
                  <span class="ql-formats">
                    <button class="ql-list" value="ordered"></button>
                    <button class="ql-list" value="bullet"></button>
                  </span>
                  
                  <span class="ql-formats">
                    <button class="ql-video"></button>
                    <button class="ql-link"></button>
                    <button class="ql-clean"></button>
                  </span>
                  
            
                </template>
            </Editor>
               
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" @click="comment">Comment</button>
            </div>
            </div>
        </div>
        </div>
        
    </div>
</template>

<script setup>
import Content from './CommentCard.vue'
import { ref,onMounted } from 'vue'
import Editor from 'primevue/editor';

const id = defineProps(['id'])
let comments = ref([])
let name = ref('')
let content = ref('')
let parent = ref(-1)
let hidden = ref(true)
let value = ref('')

function reply(user,id){
    name.value = user
    parent.value = id
    hidden.value = false
}

onMounted(async () => {
    const url = `https://test-am3oxfhvvq-em.a.run.app/article/comments/${id.id}`
        const res = await fetch(url, {
                    method: "GET",
                    Allow: ['GET', 'POST'],
                    headers : {
                            //"Authentication-Token" : this.token,
                            'Content-Type': 'application/json'
                        }
                    })
        const data = await res.json()
        if (res.ok) {
            for (const c of data) {
                comments.value.push({
                    'id':c.id,
                    'content':c.content,
                    'likes_count':c.likes_count,
                    'username':c.username,
                    'image':c.image,
                    'replies':[]
                })
            }
            
            console.log(comments)
            
        }
})  

async function comment() {
    if (comment.value == ''){
        alert('type first')
    }else{
        const url = `https://test-am3oxfhvvq-em.a.run.app/comment`
        const res = await fetch(url, {
                    method: "POST",
                    Allow: ['GET', 'POST'],
                    headers : {
                            "Authentication-Token" : localStorage.getItem('auth-token'),
                            'Content-Type': 'application/json'
                        },
                    body : JSON.stringify({
                        "article" : id.id, 
                        "parent" : parent.value,
                        "content" : content.value
                      })
                    })
        const data = await res.json()
        if (res.ok) {
            if (parent != -1) {
                comments.value.filter(art => art.id == parent)[0].replies.push({'content':content.value,
            'likes_count':0,
            'username':localStorage.getItem('name'),
            'image':localStorage.getItem('image')})
            }else{
                comments.value.push({
                    'id':id.id,
                    'content':content.value,
                    'likes_count':0,
                    'username':localStorage.getItem('name'),
                    'image':localStorage.getItem('image')
                })
            }
            
        }
    }
    
}

async function get_nested_comments(parent2) {

        const res = await fetch(`https://test-am3oxfhvvq-em.a.run.app/nested/comments/${parent2}`,{
                    method:'GET',
                    headers: {
                        'Content-type': 'application/json'
                    },
                })
        const data = await res.json()
        if (res.ok) {
            comments.value.filter(art => art.id == parent2)[0].replies = data        
        }
    }
</script>

