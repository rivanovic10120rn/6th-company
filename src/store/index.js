import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
    squads: [],
    soldiers: [],
    loadouts: [],
    missions: [],
    token: ''
  },
  mutations: {

    addSquads(state, allSquads) {
      state.squads = allSquads;
      // state.squads.push(allSquads);
    },

    addSoldiers(state, allSoldiers) {
      state.soldiers = allSoldiers;
    },

    addLoadouts(state, allLoadouts) {
      state.loadouts = allLoadouts;
    },

    addMissions(state, allMissions) {
      state.missions = allMissions;
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

    fetchSoldiers({ commit }) {
      fetch('http://localhost:8080/admin/soldiers', {
          headers: {
              'Authorization': `Bearer ${localStorage.token}`
          }
      })
            .then( obj => obj.json() )
            .then( res => commit('addSoldiers', res));
    },

    fetchLoadouts({ commit }) {
      fetch('http://localhost:8080/admin/loadouts', {
          headers: {
              'Authorization': `Bearer ${localStorage.token}`
          }
      })
            .then( obj => obj.json() )
            .then( res => commit('addLoadouts', res));
    },

    fetchMissions({ commit }) {
      fetch('http://localhost:8080/admin/missions', {
          headers: {
              'Authorization': `Bearer ${localStorage.token}`
          }
      })
            .then( obj => obj.json() )
            .then( res => commit('addMissions', res));
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
