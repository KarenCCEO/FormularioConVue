<template>
 <h1 class="my-5">Formulario con VUE </h1>
 <form @submit.prevent="procesarFormulario">

 <inputC :tarea="tarea"/>

 </form>

 <hr>
 <p>
  <!---->
  <!--Muestra todo lo que esta dentro de las tareas-->
  {{tarea}}
 </p>
 <ListaTareas />
</template>

<script>
import inputC from '../components/InputC.vue'
import { mapActions } from 'vuex'
import ListaTareas from '../components/ListaTareas.vue'
const shortid = require('shortid');





export default {
  name: 'Home',
  components: {
    inputC,
    ListaTareas
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
    //generar id random 
    this.tarea.id = shortid.generate()
    console.log(this.tarea.id)

    //enviar datos 
this.setTareas(this.tarea)
//Limpiando los datos
    this.tarea = {
      id:'',
      nombre:'',
      categorias:[],
      estado:'',
      numero:0
    }
  }

}

}
</script>
