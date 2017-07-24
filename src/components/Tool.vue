<template>
  <div class="tool">
    <button @click="addnote">新增</button>
    <button @click="favoritenote" :class='{active:lovenote}'>喜欢</button>
    <button @click="removenote">删除</button> 
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import { mapState } from 'vuex'
export default {
    name:"Tool",  //作为import
    computed:{
        lovenote(){
            return this.$store.state.activenote.favorite
        }
    },
    methods:{
        ...mapActions({
            addnote:'ADD',      //映射 this.addnote() 为 this.$store.dispatch('ADD')
            removenote:'REMOVE',
            favoritenote:'FAVORITE'
        })
    },
    mounted:function () {
        var _height=document.documentElement.clientHeight    //直接操作dom要等到mounted周期以后
        console.log(_height)
        var odiv=document.getElementsByClassName("tool")
        console.log(odiv)
        odiv[0].style.height=_height+"px"
    }
  
}
</script>
<style scoped>
div {width: 100px;float: left;border:1px solid black;}
button{display: block;margin: 20px auto;width: 80px;height: 30px;background: red;color: white;border-width: 0;}
button.active {background: yellow;color: black;}
</style>
