<script setup>
import { ref, onMounted} from 'vue'

let saved = ref([])

onMounted(async () => {
    const token = localStorage.getItem('auth-token')
    const res = await fetch(`https://test-am3oxfhvvq-em.a.run.app/get/save`, {
                method: "GET",
                Allow: ['GET', 'POST'],
                headers : {
                        "Authentication-Token" : token,
                        'Content-Type': 'application/json'
                    }
                })
    const data = await res.json()
    if (res.ok) {
        saved.value.push(...data)
        console.log(saved)
    }
})

async function save(id,index) {
    const token = localStorage.getItem('auth-token')
    await fetch('https://test-am3oxfhvvq-em.a.run.app/save',{
                method:"POST",
                Allow: ['GET', 'POST'],
                headers: {
                    "Authentication-Token" : token,
                    "Content-type": "application/json"
                },
                body :JSON.stringify({
                        "id" : id.id
                }),
            })
    saved.value.splice(index, 1)
}

</script>


<template>
   
    <div class="container" style="margin-top: 5rem">
        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
            <label class="btn btn-outline-warning" for="btnradio1">News</label>

            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
            <label class="btn btn-outline-warning" for="btnradio2">Discusions</label>
        </div>
        
        <div class="card  mt-3" v-for="(s,index) in saved" :key="index">
        <div class="card-body">
                <div class="text-section">
                    <h5 class="card-title fw-bold">{{s.category}}</h5>
                    <p class="card-text">{{s.title}}</p>
                    <router-link :to="s.link">View Post</router-link>
                </div>
          <div class="cta-section">
            <div></div>
            <i class="fa-solid fa-bookmark p-2" @click="save(s,index)"></i>
          </div>
        </div>
      </div>
    </div>
    
</template>
      
<style scoped>
     body {
      
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
    .card {
      max-width: 30em;
      flex-direction: row;
    
      border: 0;
      box-shadow: 0 7px 7px rgba(0, 0, 0, 0.18);
      margin: auto;
    }
   
    
    
    .card img {
      max-width: 25%;
      margin: auto;
      padding: 0.5em;
      border-radius: 0.7em;
    }
    .card-body {
      display: flex;
      justify-content: space-between;
    }
    .text-section {
      max-width: 90%;
    }
    .cta-section {
      max-width: 40%;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      justify-content: space-between;
    }
    .cta-section .btn {
      padding: 0.3em 0.5em;
      /* color: #696969; */
    }
    
    @media screen and (max-width: 475px) {
      .card {
        font-size: 0.9em;
      }
    }
</style>
    