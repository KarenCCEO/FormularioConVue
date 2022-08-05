<template>
 <form >
  <input 
  type="text"
  class="from-control my-2"
  placeholder="Ingrese su nombre"
  v-model="tarea.nombre"
  >
 </form>
 <p>
  {{tarea}}
 </p>
</template>

<script>


export default {
  name: 'Home',
  components: {
 
},
data(){
  return{
    tarea:{
      nombre:''

    }
  
  }
}
}
</script>
