<template>
  <div>
    <span @click="addnote">+++</span>
    <span>love</span>
    <span>xxx</span> 
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name:"Tool",
    methods:{
        ...mapActions({
            addnote:'ADD'      //映射 this.addnote() 为 this.$store.dispatch('ADD')
        })
    }
  
}
</script>
<style scoped>
div {width: 200px;height: 800px;float: left;}
span{display: block;margin: 20px auto;}
</style>
