<template>
  <Navbar/>
  <div class="continer"></div>
  <router-view/>
</template>


<script>
import { mapActions } from 'vuex'
import  Navbar  from './components/Navbar.vue'

export default {
  components:{
    Navbar
  },
  methods:{
    ...mapActions(['cargarLocalStorage'])
  },
  created(){
    this.cargarLocalStorage()
  }
}
</script>


<style>

</style>
