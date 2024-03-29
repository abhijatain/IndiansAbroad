import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      articles: [],
      discusions:[],
      token : localStorage.getItem('auth-token'),
      isDataLoaded: false,
      isDataLoadedDiscusion: false
    };
  },
  mutations: {
    add_articles(state,data) {
      state.articles = data
    },
    like_article(state,id) { 
      state.articles.filter(art => art.id == id)[0].has_liked = !state.articles.filter(art => art.id == id)[0].has_liked
    },
    save_article(state,id) {
      state.articles.filter(art => art.id == id)[0].has_saved = !state.articles.filter(art => art.id == id)[0].has_saved
    },
    add_discusions(state,data) {
      state.discusions = data
    },
    like_discusion(state,id) {
      state.discusions.filter(art => art.id == id)[0].has_liked = !state.discusions.filter(art => art.id == id)[0].has_liked
    },
    save_discusion(state,id) {
      state.discusions.filter(art => art.id == id)[0].has_saved = !state.discusions.filter(art => art.id == id)[0].has_saved
    },
  },
  actions: {

    async getArticles({ commit,state }) {
      // Simulate async operation
      const res = await fetch(`https://community-app-india.onrender.com/api/article/all`, {
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
      await fetch('https://community-app-india.onrender.com/like/article',{
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
      commit('like_article',id)
    },

    async saveArticle({ commit,state },id) {
      // Simulate async operation
      await fetch('https://community-app-india.onrender.com/save',{
                method:"POST",
                Allow: ['GET', 'POST'],
                headers: {
                    "Authentication-Token" : state.token,
                    "Content-type": "application/json"
                },
                body :JSON.stringify({
                        "id" : id.id
                }),
            })
      commit('save_article',id.id)
    },


     // Discussion async operation
    async getDiscusions({ commit,state }) {
     
      const res = await fetch(`https://community-app-india.onrender.com/api/discusion/all`, {
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
      state.isDataLoadedDiscusion = true
    }
    },

    async likeDiscusion({ commit,state },id) {
      // Simulate async operation
      await fetch('https://community-app-india.onrender.com/like/discusion',{
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
      commit('like_discusion',id)
    },

    async saveDiscusion({ commit,state },id) {
      // Simulate async operation
      await fetch('https://community-app-india.onrender.com/save/discusion',{
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
      commit('save_discusion',id)
    },
    
  },
  getters: {
    getCount(state) {
      return state.articles;
    },
  },
});