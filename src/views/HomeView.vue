<template>
 <h1 class="my-5">Formulario con VUE </h1>
 <form @submit.prevent="procesarFormulario">

 <inputC :tarea="tarea"/>

 </form>

 <hr>
 <p>
  {{tarea}}
 </p>
</template>

<script>
import inputC from '../components/InputC.vue'
import { mapActions } from 'vuex'
const shortid = require('shortid');





export default {
  name: 'Home',
  components: {
    inputC
 
},
data(){
  return{
    tarea:{
      id:'',
      nombre:'',
      categorias:[],
      estado:'',
      numero:0


    }
  
  }
},
methods:{
  ...mapActions(['setTareas']),
  procesarFormulario(){
    console.log(this.tarea)
    //validacion si un nombre en el formulario viene vacio 
    if(this.tarea.nombre.trim() === ""){
      console.log('Campo vacío')
      return
    }
    console.log('no esta vacio')
    //generar datos 
    this.tarea.id = shortid.generate()
    console.log(this.tarea.id)

    //enviar datos 
this.setTareas(this.tarea)

    this.tarea = {
      nombre:'',
      categorias:[],
      estado:'',
      numero:0
    }
  }

}

}
</script>
