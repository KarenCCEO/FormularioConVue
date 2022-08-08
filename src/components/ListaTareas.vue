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
    <!--Se imprimen las tareas segun el id random que genera vue-->
    <tr v-for="item in tareas" :key="item.id">
      <th scope="row">{{item.id}}</th>
      <td>{{item.nombre}}</td>
      <td>
        <span v-for="(cat, index) in item.categorias" :key="index">
    
        {{
            //separando con comas los datos que hay dentro dle array categorias
            (item.categorias.lenght === index + 1) ? cat : cat + ', '
        }}

        </span>
        </td>
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

