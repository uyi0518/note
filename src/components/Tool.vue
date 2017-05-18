<template>
  <div>
    <span @click="addnote">+++</span>
    <span>love</span>
    <span @click="removenote">xxx</span> 
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name:"Tool",  //作为import
    methods:{
        ...mapActions({
            addnote:'ADD',      //映射 this.addnote() 为 this.$store.dispatch('ADD')
            removenote:'REMOVE'
        })
    }
  
}
</script>
<style scoped>
div {width: 100px;height: 800px;float: left;border:1px solid black;}
span{display: block;margin: 20px auto;}
</style>
