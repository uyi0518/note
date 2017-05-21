<template>
  <div>
    <button @click="allnote">ALL</button>
    <button @click="love">LOVE</button>
    <ul>
        <li v-for="item in notelist" :class="{active:item==activeNote}" @click="choosenote(item)" v-if="all ||item.favorite " >{{item.txt}}</li>
    </ul>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'
export default {
    name:"List",
    data(){
        return {
            all:"1111"
        }
    },
    computed:{
        ...mapState({
            notelist:'note',      // 传字符串参数 'note' 等同于 `state => state.count` 
            activeNote:'activenote'
        })
       


    },
    methods:{
        ...mapActions({
            choosenote:'CHOOSE'
            
        }),
        love () {
            this.all=false;
            alert(this.notelist)
        },
        allnote () {
            this.all=true
        }
       },
created:function () {
   var  oldnote=localStorage.getItem("old") ;
    var oldold=eval("(" + oldnote + ")");
    this.$store.commit({type:'init',data:oldold})
  
    
    window.onbeforeunload = () => {              //绑定一个全局方法，在页面刷新或者离开时存储
    var NOTE=JSON.stringify(this.notelist)
        localStorage.setItem("old",NOTE) 
    }
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

