<template>
 <form >
  <input type="text"
  class="from-control my-2"
  placeholder="Ingrese su nombre"
  v-model="texto"
  >
 </form>
 <p>
  {{texto}}
 </p>
</template>

<script>


export default {
  name: 'Home',
  components: {
 
},
data(){
  return{
    texto:''
  }
}
}
</script>
