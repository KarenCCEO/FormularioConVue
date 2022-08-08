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
  procesarFormulario(){
    console.log(this.tarea)
    //validacion si un nombre en el formulario viene vacio 
    if(this.tarea.nombre.trim() === ""){
      console.log('Campo vacío')
      return
    }
    console.log('no esta vacio')
    //enviar datos 
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
