<template>
    <div class="container">
        <ul class="list-group list-group-flush " style="margin-bottom: 2rem;">
            <li class="list-group-item mt-2 p-1" v-for="(comment,index) in comments" :key="index">
                <div class="d-flex flex-row justify-content-between align-items-center">
				<div>
					<div class="col d-flex flex-column position-static">
						<Content :name="comment.username" time="2 days ago" :content="comment.content"/>
						<div class="d-flex justify-content-around "> 
                            <div>	
                                <a class="opacity-50 text-nowrap"  @click="get_nested_comments(comment.id)">--- View 3 more replies</a>
                            </div>
                            <small class="opacity-75 text-nowrap ms-2" @click="reply(comment.username,comment.id)" data-bs-toggle="modal" data-bs-target="#exampleModal">Reply</small>
                        </div>
                        
                                            
                                            <!-- Card body START -->
                                <div class="card-body ms-4 " style="padding:12px" v-for="(c) in comment.replies" :key="c.content">
                                    
                                    <div class="d-flex flex-row justify-content-between align-items-center">
                                        <div >
                                            <div class="col d-flex flex-column position-static" >
                                                <Content :name="c.username" time="2 days ago" :content="c.content"/>
                                                
                                                <small class=" opacity-75 text-nowrap " @click="reply(c.username,comment.id)" style="margin-left: 50px;" data-bs-toggle="modal" data-bs-target="#exampleModal">Reply</small>
                                                 
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
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Comment Here</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="alert alert-dark alert-dismissible m-0 p-1" role="alert" v-if="!hidden" key="alert">
                        <span class="ms-1">Replying to {{ name }}</span>
                        <span class="btn-close p-2"   @click="hidden=true;name='';parent=-1"></span>
                </div>
                    
                <textarea type="text" class="w-100 border-0" placeholder="Comment Here"  v-model="content"/>
               
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

const id = defineProps(['id'])
let comments = ref([])
let name = ref('')
let content = ref('')
let parent = ref(-1)
let hidden = ref(true)

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

