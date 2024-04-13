<template>
    <div style="margin-top:4rem;">
        
        
        <div class="container ">
          <TopScroller v-if="route.params.id == 'all' || !route.params.id"/>
        <CheckBox @filter-data="(data) => filter_articles(data)" v-if="route.params.id == 'all' || !route.params.id"/>
            <div class="row d-flex justify-content-center" >  
                
                <News v-for="(art,index) in store.state.articles" 
                :key="index" 
                :title="art.title" 
                :content="art.summary" 
                :source="art.source"
                :image="art.youtube"
                :id="art.id"
                :has_liked="art.has_liked"
                :has_saved="art.has_saved"
                :category="art.category"
                />
            </div>
            <div class="card border rounded-3 up-hover p-4 mb-4">
					<div class="">
						<div class="">
							<!-- Categories -->
							<div style="padding:4px 0px">
                <span class="badge bg-success-subtle text-success m-1" >canada</span>
                <span class="badge bg-warning-subtle text-warning m-1">abroad</span>
                <span class="badge bg-danger-subtle text-danger m-1">success</span>
                <span class="badge bg-primary-subtle text-primary m-1">religion</span>
							</div>
							<!-- Title -->
							<h2 class="card-title mb-3">
								<p  class=" text-reset ">7 common mistakes everyone makes while traveling</p>
							</h2>
							<!-- Author info -->
							<div class="d-flex align-items-center position-relative mt-3 mb-3">
								<div class="avatar me-2">
                                    <img class="avatar-img rounded-circle"  height="38px"  src="../assets/BharatGuildLogo.jpg" alt="Bharat Guild" >
								
								</div>
								<div >
									<h5 class="mb-1"><a href="#" class="stretched-link text-reset btn-link">Lori Ferguson</a></h5>
									<ul class="nav align-items-center small">
										<li class="nav-item me-3">Mar 07, 2022</li>
										<li class="nav-item"><i class="far fa-clock me-1"></i>5 min read</li>
									</ul>
								</div>
							</div>
						</div>
						<!-- Detail -->
						<div class="">
							<p>For who thoroughly her boy estimating conviction. Removed demands expense account in outward tedious do. Particular way thoroughly unaffected projection favorable Mrs can be projecting own. Thirty it matter enable become admire in giving. See resolved goodness felicity shy civility domestic had but. Drawings offended yet answered Jennings perceive laughing six did far. </p>
						</div>
						<!-- Image -->
						<div class="card border-0">
                            <iframe class="rounded-3" width="" height="312" src="https://www.youtube.com/embed/lMpTRda55Cw?si=pa8TQe4XtjNd9ldg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

						</div>
					</div>
				</div>
        </div>
        <div class="container "  v-if="!loaded">
            <div class="row d-flex justify-content-center" >  
                <div class="card  mb-5 shadow-lg"   style="max-width: 95%;">
                     <LoadingCard />
                </div>
                <div class="card  mb-5 shadow-lg"   style="max-width: 95%;">
                     <LoadingCard />
                </div>
    </div></div>
    </div>
</template>
      
<script setup>
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import CheckBox from '@/components/CheckBox.vue'
import TopScroller from '@/components/TopScroller.vue'
import { ref,onMounted } from 'vue'
import LoadingCard from './NewsLoading.vue'
import News from './NewsContent.vue'


const store = useStore()
let articles = ref([])
let original_articles = ref([])
const route = useRoute()

let loaded = ref(false)

onMounted(async () => {
    //console.log(loaded.value)
    //const p = route.params.id
    //if (!p){
        function updateData() {
            if (store.state.isDataLoaded) {
                //articles.value.push(...store.state.articles)
                //original_articles.value.push(...store.state.articles)
                console.log(store.state.articles)
                clearInterval(intervalId);
                loaded.value = true
            }
        }
        const intervalId = setInterval(updateData, 50); // Execute updateData every 5 seconds (5000 milliseconds)

        
    //}else  {
    //    const token = localStorage.getItem('auth-token')
    //    const res = await fetch(`https://test-am3oxfhvvq-em.a.run.app/api/article/${p}`, {
     //               method: "GET",
     //               Allow: ['GET', 'POST'],
     //               headers : {
     //                       "Authentication-Token" : token,
     //                       'Content-Type': 'application/json'
     //                   }
     //               })
      //  const data = await res.json()
      //  if (res.ok) {
       //     
       //     articles.value.push(...data)
       //     original_articles.value.push(...data)  
       //     loaded.value = true
       // }
})



function filter_articles(data) {
    articles.value = original_articles.value
    if (data['v'] == false) {
        articles.value = articles.value.filter(item => item.category != 'voilent')
    }
    if (data['p'] == false) {
        articles.value = articles.value.filter(item => item.category != 'political')
    }
    if (data['r'] == false) {
        articles.value = articles.value.filter(item => item.category != 'religion')
    }
    if (data['o'] == false) {
        articles.value = articles.value.filter(item => item.category != 'stats')
    }

}
</script>



