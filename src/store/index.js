import { createStore } from 'vuex'
import router from '../router'

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
    },
    tarea(state, payload){
      if(!state.tareas.find(item => item.id === payload )){
        router.push('/')
        return
      }
      state.tarea = state.tareas.find(item => item.id === payload )

    },
    update(state, payload){
      //la funcion map nos regresa un dato dependiendo de la condicion que nosotros le demos
      //por lo tanto esta funcion devuelve el array modificado 
      state.tareas = state.tareas.map(item => item.id === payload.id ? payload : item )
      router.push('/')
    }

  },
  actions: {
    
    setTareas({commit}, tarea){
      //set esta arriba en las mutaciones 
      commit('set', tarea)

    },
    deleteTareas({commit}, id){
      commit('eliminar', id)
    },
    //imprime las tareas en la pagina de editar 
    setTarea({commit}, id){
      commit('tarea', id)
    },
    updateTarea({commit}, tarea){
      commit('update', tarea)
    }
  },
  modules: {
  }
})
