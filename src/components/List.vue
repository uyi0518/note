<template>
  <div>
    <button>好心情</button>
    <button>坏心情</button>
    <ul>
        <li v-for="item in notelist" :class="{active:item==activeNote}" @click="choosenote(item)">{{item.txt}}</li>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'
export default {
    name:"List",
    computed:{
        ...mapState({
            notelist:'note',      // 传字符串参数 'note' 等同于 `state => state.count` 
            activeNote:'activenote'
        })


    },
    methods:{
        ...mapActions({
            choosenote:'CHOOSE'
        })
    }
  
}
</script>
<style scoped>
* {margin: 0;padding: 0;}
div {width: 210px;height: 947px;float: left;border: 1px solid black;}
button {width: 80px;height: 30px;margin:20px 10px; }
li {list-style: none;}
li.active {background: blue;}
</style>

