<template>
<!--Se agrega el .prevent para evitar que se refresque la pagina por accion del get -->

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
   v-model.trim="tarea.numero">
  
    

  </div>
  <div class="d-grid gap-2">

  <button class="btn btn-dark mt-2" type="submit" :disabled="bloquear">procesar</button>
</div>
  


  
</template>

<script>
export default {
    props:{
        tarea: Object

    },
    computed:{
  bloquear(){
    return this.tarea.nombre.trim() === "" ? true : false
  }

}

}
</script>

