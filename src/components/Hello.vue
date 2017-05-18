<template>
  <div>
    <Tool></Tool>
    <List></List>
    <Edit></Edit>
  </div>
</template>

<script>
import Tool from './Tool'    //使用组件的name引入
import List from './List'
import Edit from './Edit'
export default {
  name: 'hello',
  data () {
    return {
      
    }
  },
  components:{
    Tool,
    List,
    Edit
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
