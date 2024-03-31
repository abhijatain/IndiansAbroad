<template>
    <div class="container">
        <ul class="list-group list-group-flush">
            <li class="list-group-item mt-1 p-1">
                <div class="d-flex flex-row justify-content-between align-items-center">
				<div>
					<div class="col d-flex flex-column position-static">
						<Content name="Abhijeet Singh" time="2 days ago" content="Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger."/>
						<div class="d-flex justify-content-between "> 
                            <div>
								<div class="ms-4 align-items-center">
										<i v-if="true" class="fa-solid fa-heart p-2 fa-lg"  style="color: #ea3e13;"></i>
                                        <i v-else class="fa-regular fa-heart p-2 fa-lg" ></i>
                                        <span>100</span>
                                        <span class="badge" style="margin-left: .5rem;background-color: #48b6fb;" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">View Replies</span>
                                </div>
                            </div>
                            <span style="height: 18px;" @click="reply('Abhijeet',1)">Reply</span>
                        </div>
                        <div class="collapse mt-2" id="collapseExample">
                                            
                                            <!-- Card body START -->
                                <div class="card-body ms-4 " style="padding:12px">
                                    
                                    <div class="d-flex flex-row justify-content-between align-items-center">
                                        <div>
                                            <div class="col d-flex flex-column position-static">
                                                <Content name="Vansh Singh" time="2 days ago" content="Some placeholder content for the collapse component."/>
                                                <div class="d-flex justify-content-between "> 
                                                        <div>
                                                            <div class="ms-4 align-items-center">
                                                                <i v-if="true" class="fa-solid fa-heart p-2 fa-lg"  style="color: #ea3e13;"></i>
                                                                <i v-else class="fa-regular fa-heart p-2 fa-lg" ></i>
                                                                <span>100</span>
                                                            </div>
                                                        </div>
                                                        
                                                            <span>Reply</span>
                                                        
                                                </div>
                                            </div>
                                        </div>
                                    </div>			
                                        
                            </div>
                        </div>
					</div>
				</div>
			</div>
            </li>  
            <li class="list-group-item mt-1 p-1">
                <div class="d-flex flex-row justify-content-between align-items-center">
				<div>
					<div class="col d-flex flex-column position-static">
						<Content name="Abhijeet Singh" time="2 days ago" content="Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger."/>
						<div class="d-flex justify-content-between "> 
                            <div>
								<div class="ms-4 align-items-center">
										<i v-if="true" class="fa-solid fa-heart p-2 fa-lg"  style="color: #FB6D48;"></i>
                                        <i v-else class="fa-regular fa-heart p-2 fa-lg" ></i>
                                        <span>100</span>
                                        <span class="badge" style="margin-left: .5rem;background-color: #FB6D48;" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2">View Replies</span>
                                </div>
                            </div>
                            <span style="height: 18px;" @click="reply('Vansh',1)">Reply</span>
                        </div>
                        <div class="collapse mt-2" id="collapseExample2">
                                            
                                            <!-- Card body START -->
                                <div class="card-body ms-4 " style="padding:12px">
                                    
                                    <div class="d-flex flex-row justify-content-between align-items-center">
                                        <div>
                                            <div class="col d-flex flex-column position-static">
                                                <Content name="Abhijeet Singh" time="2 days ago" content="Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger."/>
                                                <div class="d-flex justify-content-between "> 
                                                        <div>
                                                            <div class="ms-4 align-items-center">
                                                                <i v-if="true" class="fa-solid fa-heart p-2 fa-lg"  style="color: red;"></i>
                                                                <i v-else class="fa-regular fa-heart p-2 fa-lg" ></i>
                                                                <span>100</span>
                                                            </div>
                                                        </div>
                                                        
                                                            <span>Reply</span>
                                                        
                                                </div>
                                            </div>
                                        </div>
                                    </div>			
                                        
                            </div>
                        </div>
					</div>
				</div>
			</div>
            </li> 
            <li class="list-group-item mt-1 p-1">
                <div class="d-flex flex-row justify-content-between align-items-center">
				<div>
					<div class="col d-flex flex-column position-static">
						<Content name="Abhijeet Singh" time="2 days ago" content="Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger."/>
						<div class="d-flex justify-content-between "> 
                            <div>
								<div class="ms-4 align-items-center">
										<i v-if="true" class="fa-solid fa-heart p-2 fa-lg"  style="color: #FB6D48;"></i>
                                        <i v-else class="fa-regular fa-heart p-2 fa-lg" ></i>
                                        <span>100</span>
                                        <span class="badge" style="margin-left: .5rem;background-color: #FB6D48;" data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample3">View Replies</span>
                                </div>
                            </div>
                            <span style="height: 18px;" @click="reply('Abhinav',1)">Reply</span>
                        </div>
                        <div class="collapse mt-2" id="collapseExample3">
                                            
                                            <!-- Card body START -->
                                <div class="card-body ms-4 " style="padding:12px">
                                    
                                    <div class="d-flex flex-row justify-content-between align-items-center">
                                        <div>
                                            <div class="col d-flex flex-column position-static">
                                                <Content name="Abhijeet Singh" time="2 days ago" content="Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger."/>
                                                <div class="d-flex justify-content-between "> 
                                                        <div>
                                                            <div class="ms-4 align-items-center">
                                                                <i v-if="true" class="fa-solid fa-heart p-2 fa-lg"  style="color: #FB6D48;"></i>
                                                                <i v-else class="fa-regular fa-heart p-2 fa-lg" ></i>
                                                                <span>100</span>
                                                            </div>
                                                        </div>
                                                        
                                                            <span>Reply</span>
                                                        
                                                </div>
                                            </div>
                                        </div>
                                    </div>			
                                        
                            </div>
                        </div>
					</div>
				</div>
			</div>
            </li>  
            <li class="list-group-item mt-1 p-1">
                <div class="d-flex flex-row justify-content-between align-items-center">
				<div>
					<div class="col d-flex flex-column position-static">
						<Content name="Abhijeet Singh" time="2 days ago" content="Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger."/>
						<div class="d-flex justify-content-between "> 
                            <div>
								<div class="ms-4 align-items-center">
										<i v-if="true" class="fa-solid fa-heart p-2 fa-lg"  style="color: #ea3e13;"></i>
                                        <i v-else class="fa-regular fa-heart p-2 fa-lg" ></i>
                                        <span>100</span>
                                        <span class="badge" style="margin-left: .5rem;background-color: #48b6fb;" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">View Replies</span>
                                </div>
                            </div>
                            <span style="height: 18px;" @click="reply('Rishabh',1)">Reply</span>
                        </div>
                        <div class="collapse mt-2" id="collapseExample">
                                            
                                            <!-- Card body START -->
                                <div class="card-body ms-4 " style="padding:12px">
                                    
                                    <div class="d-flex flex-row justify-content-between align-items-center">
                                        <div>
                                            <div class="col d-flex flex-column position-static">
                                                <Content name="Vansh Singh" time="2 days ago" content="Some placeholder content for the collapse component."/>
                                                <div class="d-flex justify-content-between "> 
                                                        <div>
                                                            <div class="ms-4 align-items-center">
                                                                <i v-if="true" class="fa-solid fa-heart p-2 fa-lg"  style="color: #ea3e13;"></i>
                                                                <i v-else class="fa-regular fa-heart p-2 fa-lg" ></i>
                                                                <span>100</span>
                                                            </div>
                                                        </div>
                                                        
                                                            <span>Reply</span>
                                                        
                                                </div>
                                            </div>
                                        </div>
                                    </div>			
                                        
                            </div>
                        </div>
					</div>
				</div>
			</div>
            </li>  
            <li class="list-group-item mt-1 p-1">
                <div class="d-flex flex-row justify-content-between align-items-center">
				<div>
					<div class="col d-flex flex-column position-static">
						<Content name="Abhijeet Singh" time="2 days ago" content="Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger."/>
						<div class="d-flex justify-content-between "> 
                            <div>
								<div class="ms-4 align-items-center">
										<i v-if="true" class="fa-solid fa-heart p-2 fa-lg"  style="color: #FB6D48;"></i>
                                        <i v-else class="fa-regular fa-heart p-2 fa-lg" ></i>
                                        <span>100</span>
                                        <span class="badge" style="margin-left: .5rem;background-color: #FB6D48;" data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample2">View Replies</span>
                                </div>
                            </div>
                            <span style="height: 18px;" @click="reply('Raghav',1)">Reply</span>
                        </div>
                        <div class="collapse mt-2" id="collapseExample2">
                                            
                                            <!-- Card body START -->
                                <div class="card-body ms-4 " style="padding:12px">
                                    
                                    <div class="d-flex flex-row justify-content-between align-items-center">
                                        <div>
                                            <div class="col d-flex flex-column position-static">
                                                <Content name="Abhijeet Singh" time="2 days ago" content="Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger."/>
                                                <div class="d-flex justify-content-between "> 
                                                        <div>
                                                            <div class="ms-4 align-items-center">
                                                                <i v-if="true" class="fa-solid fa-heart p-2 fa-lg"  style="color: red;"></i>
                                                                <i v-else class="fa-regular fa-heart p-2 fa-lg" ></i>
                                                                <span>100</span>
                                                            </div>
                                                        </div>
                                                        
                                                            <span>Reply</span>
                                                        
                                                </div>
                                            </div>
                                        </div>
                                    </div>			
                                        
                            </div>
                        </div>
					</div>
				</div>
			</div>
            </li> 
            <li class="list-group-item mt-1 p-1">
                <div class="d-flex flex-row justify-content-between align-items-center">
				<div>
					<div class="col d-flex flex-column position-static">
						<Content name="Abhijeet Singh" time="2 days ago" content="Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger."/>
						<div class="d-flex justify-content-between "> 
                            <div>
								<div class="ms-4 align-items-center">
										<i v-if="true" class="fa-solid fa-heart p-2 fa-lg"  style="color: #FB6D48;"></i>
                                        <i v-else class="fa-regular fa-heart p-2 fa-lg" ></i>
                                        <span>100</span>
                                        <span class="badge" style="margin-left: .5rem;background-color: #FB6D48;" data-bs-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="false" aria-controls="collapseExample3">View Replies</span>
                                </div>
                            </div>
                            <span style="height: 18px;">Reply</span>
                        </div>
                        <div class="collapse mt-2" id="collapseExample3">
                                            
                                            <!-- Card body START -->
                                <div class="card-body ms-4 " style="padding:12px">
                                    
                                    <div class="d-flex flex-row justify-content-between align-items-center">
                                        <div>
                                            <div class="col d-flex flex-column position-static">
                                                <Content name="Abhijeet Singh" time="2 days ago" content="Some placeholder content for the collapse component. This panel is hidden by default but revealed when the user activates the relevant trigger."/>
                                                <div class="d-flex justify-content-between "> 
                                                        <div>
                                                            <div class="ms-4 align-items-center">
                                                                <i v-if="true" class="fa-solid fa-heart p-2 fa-lg"  style="color: #FB6D48;"></i>
                                                                <i v-else class="fa-regular fa-heart p-2 fa-lg" ></i>
                                                                <span>100</span>
                                                            </div>
                                                        </div>
                                                        
                                                            <span>Reply</span>
                                                        
                                                </div>
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
        <div class="fixed-bottom card ">
                <div class="p-4">
                    <Transition>
                    <div class="alert alert-dark alert-dismissible m-0 p-1" role="alert" v-if="!hidden" key="alert">
                        <span class="ms-1">Replying to {{ name }}</span>
                        <span class="btn-close p-2"   @click="hidden=true"></span>
                    </div>
                    </Transition>
                    <textarea type="text" class="w-100 border-0" placeholder="Comment Here" />
                    </div>
                </div>
    </div>
</template>

<script setup>
import Content from './CommentCard.vue'
import {ref} from 'vue'

let discusion = ref([])
let name = ref('')
let parent = ref('')
let hidden = ref(true)

function reply(user,id){
    name.value = user
    parent.value = id
    hidden.value = false
}
</script>

<style scoped>
/* we will explain what these classes do next! */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>