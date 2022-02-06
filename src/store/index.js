import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [],
    squads: [],
    squad: [],
    soldiers: [],
    soldier: [],
    loadouts: [],
    loadout: [],
    missions: [],
    mission: [],
    token: ''
  },
  mutations: {

    addSquads(state, allSquads) {
      state.squads = allSquads;
      // state.squads.push(allSquads);
    },

    getSquadByID(state, singleSquad){
      state.squad = singleSquad;
    },

    addSoldiers(state, allSoldiers) {
      state.soldiers = allSoldiers;
    },

    getSoldierByID(state, singleSoldier){
      state.soldier = singleSoldier;
    },

    addLoadouts(state, allLoadouts) {
      state.loadouts = allLoadouts;
    },

    getLoadoutByID(state, singleLoadout){
      state.loadout = singleLoadout;
    },

    addMissions(state, allMissions) {
      state.missions = allMissions;
    },

    getMissionByID(state, singleMission){
      state.mission = singleMission;
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

    fetchSquadByID({ commit }, id) {
      fetch(`http://localhost:8080/admin/squads/${id}`,{
        headers: {
          'Authorization': `Bearer ${localStorage.token}`
        }
      })
          .then( obj => obj.json() )
          .then( res => commit('getSquadByID', res) );
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

    fetchSoldierByID({ commit }, id) {
      fetch(`http://localhost:8080/admin/soldiers/${id}`,{
        headers: {
          'Authorization': `Bearer ${localStorage.token}`
        }
      })
          .then( obj => obj.json() )
          .then( res => commit('getSoldierByID', res) );
    },

    fetchSoldiersBySquadID({ commit }, id) {
      fetch(`http://localhost:8080/admin/soldiers/squad/${id}`,{
        headers: {
          'Authorization': `Bearer ${localStorage.token}`
        }
      })
          .then( obj => obj.json() )
          .then( res => commit('addSoldiers', res) );
    },

    fetchSoldiersByLoadoutID({ commit }, id) {
      fetch(`http://localhost:8080/admin/soldiers/loadout/${id}`,{
        headers: {
          'Authorization': `Bearer ${localStorage.token}`
        }
      })
          .then( obj => obj.json() )
          .then( res => commit('addSoldiers', res) );
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

    fetchLoadoutByID({ commit }, id) {
      fetch(`http://localhost:8080/admin/loadouts/${id}`,{
        headers: {
          'Authorization': `Bearer ${localStorage.token}`
        }
      })
          .then( obj => obj.json() )
          .then( res => commit('getLoadoutByID', res) );
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

    fetchMissionByID({ commit }, id) {
      fetch(`http://localhost:8080/admin/missions/${id}`,{
        headers: {
          'Authorization': `Bearer ${localStorage.token}`
        }
      })
          .then( obj => obj.json() )
          .then( res => commit('getMissionByID', res) );
    },

    fetchMissionsBySquadID({ commit }, id) {
      fetch(`http://localhost:8080/admin/missions/squad/${id}`,{
        headers: {
          'Authorization': `Bearer ${localStorage.token}`
        }
      })
          .then( obj => obj.json() )
          .then( res => commit('addMissions', res) );
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
