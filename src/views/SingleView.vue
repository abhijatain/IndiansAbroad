<script setup>
import CommentSection from '../components/CommentSection.vue'
import Editor from 'primevue/editor';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import DOMPurify from 'dompurify'
import { ref,onMounted } from 'vue'
import { useRoute } from 'vue-router'

let discusions = ref([])
let html_content = ref('')
const route = useRoute()

onMounted(async () => {
    const p = route.params.id
    const token = localStorage.getItem('auth-token')
        const res = await fetch(`https://community-app-india.onrender.com/api/discusion/${p}`, {
                    method: "GET",
                    Allow: ['GET', 'POST'],
                    headers : {
                            "Authentication-Token" : token,
                            'Content-Type': 'application/json'
                        }
                    })
        const data = await res.json()
        if (res.ok) {
            discusions.value.push(...data)
            html_content.value = sanitizeHtml(data[0].content)
        }
})

function sanitizeHtml(html){
    return DOMPurify.sanitize(html);
}
</script>

<template>
    
<div class="container " style="margin-top:4rem">
    
    <div v-for="d in discusions">

        <div class="ql-editor">
            <p><strong class="ql-size-huge">{{d.title}}</strong></p>
        </div>
        
        <div style="padding:12px 15px">
            <span class="badge" style="margin-right: .5rem;background-color: #FF204E;">canada</span>
                            <span class="badge" style="margin-right: .5rem;background-color: #A0153E;">abroad</span>
                            <span class="badge" style="margin-right: .5rem;background-color: #5D0E41;">success</span>
                            <span class="badge" style="margin-right: .5rem;background-color: #00224D;">info</span>
                        </div>
       
                                    <!-- Info -->
            <div>
                <div class="d-flex align-items-center mb-2" style="padding:12px 15px">
								<!-- Avatar -->
								<div class="avatar avatar-story me-2">
									<a href="#!"> <img class="avatar-img rounded-circle"  height="42px"  src="https://randomuser.me/api/portraits/men/86.jpg" alt=""> </a>
								</div>
								<!-- Info -->
								<div>
									<div class="">
										<h6 class="card-title mb-0">{{d.username}}</h6>
										<span class="nav-item small" > 2hr ago</span>
									</div>
									
								</div>
							</div>
                                         
            </div>
        
            
        <div  v-html="d.content" class="ql-editor card border-0">
            
        </div>
        
    </div>
   
</div>
</template>

<style scoped>
.display-4 {
    font-size: calc(1.475rem + 2.7vw);
    font-weight: 300;
    line-height: 1.2;
}
</style>
