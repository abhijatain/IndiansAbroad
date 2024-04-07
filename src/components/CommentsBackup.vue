<template>
    
    <div class="block">
        <div class="form-floating " style="margin-bottom: 1rem;">
            <textarea class="form-control rounded-3" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px;width: 100%" v-model="content" @keyup.enter="comment"></textarea>
            <label for="floatingTextarea2">{{msg}} <i v-if="msg != 'Comment here'" class="fa-solid fa-xmark p-2"></i></label>
        </div>
        <div class="mt-2" >
            <div class="comment">
                <div class="user-banner">
                    <div class="user">
                        <div class="avatar" style="background-color:#fff5e9;border-color:#ffe0bd; color:#F98600">
                            AF
                        </div>
                        <h5>Albert Flores</h5>
                    </div>
                    <button class="btn dropdown"><i class="ri-more-line"></i></button>
                </div>
                <div class="content">
                    <p>Before installing this plugin please put back again your wordpress and site url back to http.</p>
                </div>
                <div class="footer">
                    <i class="fa-regular fa-heart p-2"></i>
                    <div class="divider"></div>
                    <a  data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Reply</a>
                    <div class="divider"></div>
                    <span class="is-mute">2 min</span>
                </div>
            </div>
        

        <div class="collapse" id="collapseExample">
            <div class="card card-body border-0">
                <div class="reply comment">
                            <div class="user-banner">
                                <div class="user">
                                    <div class="avatar">
                                        <img src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e" alt="">
                                        
                                    </div>
                                    <h5>Bessie Cooper</h5>
                                </div>
                                <button class="btn dropdown"><i class="ri-more-line"></i></button>
                            </div>
                            <div class="content">
                                <p>Hi <a href="#" class="tagged-user">@Albert Flores</a>.Thanks for your reply. Before installing this plugin please put back again your wordpress and site url back to http.</p>
                            </div>
                            <div class="footer">
                                <button class="btn"><i class="ri-emotion-line"></i></button>
                                <div class="reactions">
                                    <i class="fa-regular fa-heart p-2"></i>
                                </div>
                                <div class="divider"></div>
                                <a >Reply</a>
                                <div class="divider"></div>
                                <span class="is-mute">18 sec</span>
                            </div>
                                    </div>
                        </div>
            </div>
            
        

        </div>
        <div>
            <div class="comment">
                <div class="user-banner">
                    <div class="user">
                        <div class="avatar" style="background-color:#fff5e9;border-color:#ffe0bd; color:#F98600">
                            AF
                        </div>
                        <h5>Albert Flores</h5>
                    </div>
                    <button class="btn dropdown"><i class="ri-more-line"></i></button>
                </div>
                <div class="content">
                    <p>Before installing this plugin please put back again your are wordpress and site url back to http.</p>
                </div>
                <div class="footer">
                    <i class="fa-regular fa-heart p-2"></i>
                    <div class="divider"></div>
                    <a  data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Reply</a>
                    <div class="divider"></div>
                    <span class="is-mute">2 min</span>
                </div>
            </div>
        

        <div class="collapse" id="collapseExample">
            <div class="card card-body border-0">
                <div class="reply comment">
                            <div class="user-banner">
                                <div class="user">
                                    <div class="avatar">
                                        <img src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e" alt="">
                                        
                                    </div>
                                    <h5>Bessie Cooper</h5>
                                </div>
                                <button class="btn dropdown"><i class="ri-more-line"></i></button>
                            </div>
                            <div class="content">
                                <p>Hi <a href="#" class="tagged-user">@Albert Flores</a>.Thanks for your reply.</p>
                            </div>
                            <div class="footer">
                                <button class="btn"><i class="ri-emotion-line"></i></button>
                                <div class="reactions">
                                    <i class="fa-regular fa-heart p-2"></i>
                                </div>
                                <div class="divider"></div>
                                <a href="#">Reply</a>
                                <div class="divider"></div>
                                <span class="is-mute">18 sec</span>
                            </div>
                                    </div>
                        </div>
            </div>
            
        

        </div>
       
        
    </div>
    
    </template>
        
<script setup>
    const id = defineProps(['id'])
    
    import { ref,onMounted } from 'vue'
    
    let comments = ref([])
    let nested_comments = ref([])
    let content = ref('')
    let parent = ref(-1)
    let msg = ref('Comment here')
    const token = localStorage.getItem('auth-token')
    
    async function get_comments() {
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
            
        }
    }
    
    async function like(id) {
        await fetch('comment/like',{
                    method:'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body : JSON.stringify({
                        "id" : id
                    }),
                })
    }
    
    async function comment() {
        await fetch('https://test-am3oxfhvvq-em.a.run.app/comment',{
                    method:'POST',
                    headers: {
                        "Authentication-Token" : token ,
                        'Content-type': 'application/json'
                    },
                    body : JSON.stringify({
                        'parent' : parent.value,
                        'content' : content.value,
                        'article' : id.id
                    }),
                })
    }
    
    
    
    </script>
    
    <style scoped>
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap");
    body {
        min-height: 100vh;
        display: flex;
        font-size: 16px;
        align-items: center;
        justify-content: center;
        font-family: Inter;
        padding: 1rem;
        
    }
    .block {
        
        
        padding: 1rem;
        
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.06),
            0px 1px 1px rgba(0, 0, 0, 0.08);
        border-radius: 8px;
        display: block;
        &-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 16px;
            .title {
                display: flex;
                align-items: flex-start;
                .tag {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-left: 4px;
                    background: #f7f7f7;
                    color: #1c1c1c;
                    text-align: center;
                    padding: 0 4px;
                    letter-spacing: 0.04em;
                    text-transform: uppercase;
                    font-weight: 500;
                    font-size: 10px;
                    line-height: 16px;
                    border: 1px solid #e8e8e8;
                    border-radius: 96px;
                }
            }
        }
    }
    .writing {
        background: #ffffff;
        border: 1px solid #e8e8e8;
        border-radius: 8px;
        overflow: hidden;
        margin-bottom: 24px;
        padding: 12px;
        .textarea {
            width: 100%;
            font-family: "Inter";
            
            height: 50px;
            overflow-y: auto;
            appearance: none;
            border: 0;
            outline: 0;
            resize: none;
            font-size: 16px;
            line-height: 24px;
        }
        &:focus-within {
            border: 1px solid #0085ff;
            box-shadow: 0px 0px 2px 2px rgba(0, 133, 255, 0.15);
        }
        .footer {
            margin-top: 12px;
            padding-top: 12px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-top: 1px solid #e8e8e8;
            .text-format {
                display: flex;
                align-items: center;
                gap: 12px;
            }
        }
    }
    .comment {
        display: grid;
        gap: 14px;
        margin-bottom: 20px;
        padding-left: 10px;
        .user-banner {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .user {
                gap: 8px;
                align-items: center;
                display: flex;
                .avatar {
                    height: 32px;
                    width: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 1px solid transparent;
                    position: relative;
                    border-radius: 100px;
                    font-weight: 500;
                    font-size: 13px;
                    line-height: 20px;
                    img {
                        max-width: 100%;
                        border-radius: 50%;
                    }
                    .stat {
                        display: flex;
                        position: absolute;
                        right: -2px;
                        bottom: -2px;
                        display: block;
                        width: 12px;
                        height: 12px;
                        z-index: 9;
                        border: 2px solid #ffffff;
                        border-radius: 100px;
                       
                    }
                }
            }
        }
        .footer {
            gap: 12px;
            display: flex;
            align-items: center;
            .reactions {
                display: flex;
                align-items: center;
                gap: 8px;
            }
            .divider {
                height: 12px;
                width: 1px;
                
            }
        }
        &:not(.comment:first-child) {
            padding-bottom: 12px;
            margin-bottom: 12px;
            border-bottom: 1px solid #e8e8e8;
        }
        & + & {
            padding-top: 12px;
        }
        &.reply {
            .user-banner,
            .content,
            .footer {
                margin-left: 32px;
            }
        }
    }
    .group-radio {
        position: relative;
        display: flex;
        user-select: none;
        align-items: stretch;
        .button-radio {
            box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.06);
            label {
                cursor: pointer;
                padding: 4px 8px;
                font-weight: 500;
                font-size: 14px;
                display: flex;
                height: 28px;
                align-items: center;
                line-height: 28px;
                transition: 0.2s ease;
            }
            &:first-child {
                border-top-left-radius: 8px;
                border-bottom-left-radius: 8px;
                border-left: 1px solid #e8e8e8;
                border-top: 1px solid #e8e8e8;
                border-bottom: 1px solid #e8e8e8;
            }
            &:last-child {
                border-top-right-radius: 8px;
                border-right: 1px solid #e8e8e8;
                border-top: 1px solid #e8e8e8;
                border-bottom: 1px solid #e8e8e8;
                border-bottom-right-radius: 8px;
            }
            input[type="radio"] {
                display: none;
                &:checked + label {
                    background: #f7f7f7;
                }
            }
        }
        .divider {
            width: 1px;

        }
    }
    h5 {
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
       
        letter-spacing: 0em;
        text-align: left;
    }
    .btn {
        appearance: none;
        background: transparent;
        border: 0;
        padding: 0;
        display: flex;
        font: inherit;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        
        transition: 0.2s ease;
        i {
            
            font-size: 18px;
            transition: 0.15s ease-in-out;
        }
        &.primary {
            min-width: 64px;
            padding: 8px 12px;
            height: 40px;
            
            display: inline-flex;
            
            box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.06),
                0px 1px 1px rgba(0, 0, 0, 0.08);
            border-radius: 8px;
            
        }
        &:hover {
            i {
                opacity: 0.7;
            }
        }
        outline: none;
        img {
            max-width: 18px;
            height: auto;
        }
        &.react {
            padding: 4px 8px 4px 4px;
            
            border: 1px solid #e8e8e8;
            border-radius: 8px;
            gap: 4px;
          
        }
        &.dropdown {
            display: flex;
            cursor: pointer;
            border-radius: 50%;
            align-items: center;
            justify-content: center;
            padding: 0;
            width: 26px;
            height: 26px;
          
        }
    }
    p {
        line-height: 24px;
        a.tagged-user {
            display: inline-flex;
            padding: 2px 8px;
            
            border-radius: 256px;
            
        }
    }
    .is-mute {
        font-weight: 400;
        font-size: 13px;
        line-height: 20px;
        
    }
    a {
        font-weight: 500;
        font-size: 13px;
        line-height: 20px;
        
        text-decoration: none;
        transition: opacity 0.15s ease-in-out;
        &:hover {
            opacity: 0.7;
        }
    }
    h2 {
        font-weight: 500;
        font-size: 20px;
        line-height: 28px;
        
    }
    * {
        box-sizing: border-box;
    }
    .load {
        display: flex;
        align-items: center;
        justify-content: center;
        span {
            display: flex;
            align-items: center;
            font-weight: 400;
            font-size: 13px;
            line-height: 20px;
           
            i {
                margin-right: 6px;
            }
        }
    }
    .group-button {
        display: flex;
        gap: 16px;
    }
    
</style>