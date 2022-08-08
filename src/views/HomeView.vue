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
  <div class="mt-2">
    <div class="form-check form-check-inline">
      <input
      type="radio"
      id="radio-1"
      class="form-check-input"
      value="URGENTE"
      v-model="tarea.estado"
      >
      
      <label 
      for="radio-1"
      class="form-check-label"
      > URGENTE</label>
    </div>
    <div class="form-check form-check-inline">
      <input
      type="radio"
      id="radio-2"
      class="form-check-input"
      value="relax"
       v-model="tarea.estado"
      >
      
      <label 
      for="radio-2"
      class="form-check-label"
      > relax</label>
    </div>
    <div class="form-check form-check-inline">
      <input
      type="radio"
      id="radio-3"
      class="form-check-input"
      value="No Importante"
       v-model="tarea.estado"
      >
      
      <label 
      for="radio-3"
      class="form-check-label"
      >No importante</label>
    </div>

  </div>

  <div class="mt-2">
   <input
   type="number"
   class="form-control"
   v-model.number="tarea.numero">
  
    

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
      categorias:[],
      estado:'',
      numero:0

    }
  
  }
}
}
</script>
