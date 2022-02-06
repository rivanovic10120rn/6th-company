import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
    squads: [],
    token: ''
  },
  mutations: {

    addSquads(state, allSquads) {
      state.squads = allSquads;
      // state.squads.push(allSquads);
    },

    setToken(state, token) {
      state.token = token;
      localStorage.token = token;
    },

    removeToken(state) {
      state.token = '';
      localStorage.token = '';
    },

    
  },
  actions: {

    fetchSquads({ commit }) {
      fetch('http://localhost:8080/admin/squads', {
          headers: {
              'Authorization': `Bearer ${localStorage.token}`
          }
      })
            .then( obj => obj.json() )
            .then( res => commit('addSquads', res));
    },

    login({ commit }, obj) {
      fetch('http://localhost:9000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
    }).then( res => res.json() )
      .then( tkn => {
        if (tkn.msg) {
          alert(tkn.msg);
        } else {
          commit('setToken', tkn.token)
        }
      });
    },

  },
  modules: {
  }
})
