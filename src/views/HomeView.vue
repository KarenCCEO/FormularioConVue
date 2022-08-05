<template>
 <form >
  <input 
  type="text"
  class="from-control my-2"
  placeholder="Ingrese su nombre"
  v-model="tarea.nombre"
  >
  <div class="form-check form-check-inline">
    <input 
    type="checkbox"
    id="check-1"
    class="form-check-input"
    v-model="tarea.categorias"
    value="JavaScript"
    >
    <label for="check-1" class="form-check-label">JavaScript</label>
  </div>
  <div class="form-check form-check-inline">
    <input 
    type="checkbox"
    id="check-2"
    class="form-check-input"
    v-model="tarea.categorias"
    value="node js"
    >
    <label for="check-2" class="form-check-label">Node.js</label>
  </div>
 </form>
 <hr>
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
      nombre:'',
      categorias:[]

    }
  
  }
}
}
</script>
