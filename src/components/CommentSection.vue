<template>
    <div class="container">
        <ul class="list-group list-group-flush">
            <li class="list-group-item mt-2 p-1" v-for="(comment,index) in comments" :key="index">
                <div class="d-flex flex-row justify-content-between align-items-center">
				<div>
					<div class="col d-flex flex-column position-static">
						<Content :name="comment.username" time="2 days ago" :content="comment.content"/>
						<div class="d-flex justify-content-around "> 
                            <div>	
                                <small class="opacity-50 text-nowrap" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" @click="get_nested_comments(1)">--- View 3 more replies</small>
                            </div>
                            <small class="opacity-75 text-nowrap ms-2" @click="reply(comment.username,comment.id)">Reply</small>
                        </div>
                        <div class="collapse mt-2" id="collapseExample">
                                            
                                            <!-- Card body START -->
                                <div class="card-body ms-4 " style="padding:12px">
                                    
                                    <div class="d-flex flex-row justify-content-between align-items-center">
                                        <div>
                                            <div class="col d-flex flex-column position-static">
                                                <Content :name="comment.username" time="2 days ago" :content="comment.content"/>
                                                
                                                        <small class=" opacity-75 text-nowrap " @click="reply('Abhijeet',1)" style="margin-left: 50px;">Reply</small>
                                                 
                                            </div>
                                        </div>
                                    </div>			
                                        
                            </div>
                            <div class="card-body ms-4 " style="padding:12px">
                                    
                                    <div class="d-flex flex-row justify-content-between align-items-center">
                                        <div>
                                            <div class="col d-flex flex-column position-static">
                                                <Content name="Vansh Singh" time="2 days ago" content="Some placeholder content for the collapse component."/>
                                                
                                                        <small class=" opacity-75 text-nowrap " @click="reply('Abhijeet',1)" style="margin-left: 50px;">Reply</small>
                                                 
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
        <div class="fixed-bottom card p-0">
                <div class="p-4">
                    
                    <div class="alert alert-dark alert-dismissible m-0 p-1" role="alert" v-if="!hidden" key="alert">
                        <span class="ms-1">Replying to {{ name }}</span>
                        <span class="btn-close p-2"   @click="hidden=true;name='';parent=-1"></span>
                    </div>
                    
                    <textarea type="text" class="w-100 border-0" placeholder="Comment Here" @keyup.enter="comment" v-model="content"/>
                    </div>
                </div>
    </div>
</template>

<script setup>
import Content from './CommentCard.vue'
import { ref,onMounted } from 'vue'

const id = defineProps(['id'])
let comments = ref([])
let nested_comments = ref([])
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
            comments.value.push(...data)
            console.log(comments)
            
        }
})  

async function comment() {

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
            comments.value.push(...data)
            
        }
}

async function get_nested_comments(parent) {
    
        const res = await fetch(`https://test-am3oxfhvvq-em.a.run.app/nested/comments/${parent}`,{
                    method:'GET',
                    headers: {
                        'Content-type': 'application/json'
                    },
                })
        const data = await res.json()
        if (res.ok) {
            nested_comments.value.push(...data)
            console.log(nested_comments)
            
        }
    }
</script>

