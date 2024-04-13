import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      image: localStorage.getItem('image'),
      articles: [],
      discusions:[],
      token : localStorage.getItem('auth-token'),
      isDataLoaded: false,
      isDiscusionLoaded: false
    };
  },
  mutations: {
    add_articles(state,data) {
      state.articles = data
    },
    add_discusions(state,data) {
      state.discusions = data
    }
  },
  actions: {

    async getArticles({ commit,state }) {
      // Simulate async operation
      const res = await fetch(`https://test-am3oxfhvvq-em.a.run.app/api/article/all`, {
                method: "GET",
                Allow: ['GET', 'POST'],
                headers : {
                        "Authentication-Token" : state.token,
                        'Content-Type': 'application/json'
                    }
                })
    const data = await res.json()
    if (res.ok) {
      commit('add_articles',data);
      state.isDataLoaded = true
    }
    },

    async likeArticle({ commit,state },id) {
      // Simulate async operation
      await fetch('https://test-am3oxfhvvq-em.a.run.app/like/article',{
                method:'POST',
                Allow: ['GET', 'POST'],
                headers: {
                    "Authentication-Token" :  state.token,
                    'Content-type': 'application/json'
                },
                body : JSON.stringify({
                        "id" : id
                }),
            })
     
    },

    async saveArticle({ commit,state },id) {
      // Simulate async operation
      await fetch('https://test-am3oxfhvvq-em.a.run.app/save',{
                method:"POST",
                Allow: ['GET', 'POST'],
                headers: {
                    "Authentication-Token" : state.token,
                    "Content-type": "application/json"
                },
                body :JSON.stringify({
                        "id" : id
                }),
            })
      
    },


     // Discussion async operation
    async getDiscusions({ commit,state }) {
     
      const res = await fetch(`https://test-am3oxfhvvq-em.a.run.app/api/discusion/all`, {
                method: "GET",
                Allow: ['GET', 'POST'],
                headers : {
                        "Authentication-Token" : state.token,
                        'Content-Type': 'application/json'
                    }
                })
    const data = await res.json()
    if (res.ok) {
      commit('add_discusions',data);
      state.isDiscusionLoaded = true
    }
    },

    async likeDiscusion({ commit,state },id) {
      // Simulate async operation
      await fetch('https://test-am3oxfhvvq-em.a.run.app/like/discusion',{
                method:'POST',
                Allow: ['GET', 'POST'],
                headers: {
                    "Authentication-Token" :  state.token,
                    'Content-type': 'application/json'
                },
                body : JSON.stringify({
                        "id" : id
                }),
            })
      
    },

    async saveDiscusion({ commit,state },id) {
      // Simulate async operation
      await fetch('https://test-am3oxfhvvq-em.a.run.app/save/discusion',{
                method:"POST",
                Allow: ['GET', 'POST'],
                headers: {
                    "Authentication-Token" : state.token,
                    "Content-type": "application/json"
                },
                body :JSON.stringify({
                        "id" : id
                }),
            })
    },
    
  },
  getters: {
    getCount(state) {
      return state.articles;
    },
  },
});