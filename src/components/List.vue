<template>
  <div>
    <button>好心情</button>
    <button>坏心情</button>
    <ul>
        <li v-for="item in notelist">{{item.txt}}</li>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name:"List",
    computed:{
        ...mapState({
            notelist:'note'      // 传字符串参数 'note' 等同于 `state => state.count`
        })

    }
  
}
</script>
<style scoped>
div {width: 400px;height: 800px;}
button {width: 100px;height: 50px;margin:20px auto; }
</style>

