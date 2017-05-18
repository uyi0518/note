<template>
  <div>
    <Tool></Tool>
    <List></List>
  </div>
</template>

<script>
import Tool from './Tool'
import List from './List'
export default {
  name: 'hello',
  data () {
    return {
      
    }
  },
  components:{
    Tool,
    List
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
