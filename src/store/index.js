import { createStore } from 'vuex'

export default createStore({
  state: {
    tareas:[],
    tarea:{
      id:'',
      nombre:'',
      categorias:[],
      estado:'',
      numero:0

    }
  },
  getters: {
  },
  mutations: {
    set(state, payload){
      state.tareas.push(payload)
      console.log(state.tareas)
    },
    eliminar(state, payload){
      //filtramos todos los elementos que son diferentes de el id que esta en payload
      state.tareas =state.tareas.filter(item => item.id !== payload)
    }

  },
  actions: {
    setTareas({commit}, tarea){
      //set esta arriba en las mutaciones 
      commit('set', tarea)

    },
    deleteTareas({commit}, id){
      commit('eliminar', id)
    }
  },
  modules: {
  }
})
