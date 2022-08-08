<template>
Editar{{$route.params.id}} - {{tarea}}
<form @submit.prevent="updateTarea(tarea)">
    <InputC :tarea="tarea"></InputC>
</form>

  
</template>

<script>
import {mapState, mapActions} from 'vuex'

import InputC from '@/components/InputC.vue'
export default {
    components: { InputC },
    computed: {
        ...mapState(["tarea"])
    },
    methods: {
        ...mapActions(["setTarea", "updateTarea"])
    },
    created() {
        this.setTarea(this.$route.params.id);
    }
    
}
</script>

