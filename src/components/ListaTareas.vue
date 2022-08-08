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

    
     
            <!--separando con comas los datos que hay dentro dle array categorias-->
           {{item.categorias.join(', ')}}
      

       
        </td>
      <td>{{item.estado}}</td>
      <td>{{item.numero}}</td>
      <td>
        <!--cada vez que se presiona el boton se ejecuta la accion delete tareas que se encuentra en el index y toma el id para poder borrar el elemento-->
        <button class="btn btn-danger btn-sm" @click="deleteTareas(item.id)">    
            Eliminar 

        </button>
         <!--name es l ruta a donde tenemos qu eir y tomamos el id como parametro -->
       <router-link class="btn btn-warning ml-2 btn-sm"
      
       :to="{
        name:'Editar',
        params:{
          id: item.id
        }
       }" 
       >
        Editar
       </router-link>
      </td>
    </tr>
    
  </tbody>
</table>
  
</template>

<script>
import{mapState, mapActions} from 'vuex'
export default {
    computed:{
        ...mapState(['tareas'])
    }
    ,
    methods:{
        ...mapActions(['deleteTareas'])
    }

}
</script>

