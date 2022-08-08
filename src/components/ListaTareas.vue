<template>
{{tareas}}
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nombre</th>
      <th scope="col">Categorias</th>
      <th scope="col">Estado</th>
      <th scope="col">Numero</th>
      <th scope="col">Acción</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in tareas" :key="item.id">
      <th scope="row">{{item.id}}</th>
      <td>{{item.nombre}}</td>
      <td>{{item.categorias}}</td>
      <td>{{item.estado}}</td>
      <td>{{item.numero}}</td>
      <td>esta es una accion</td>
    </tr>
    
  </tbody>
</table>
  
</template>

<script>
import{mapState} from 'vuex'
export default {
    computed:{
        ...mapState(['tareas'])
    }

}
</script>

