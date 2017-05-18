<template>
  <div>
<textarea :value="onnote.txt" @input="editnote"></textarea>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name:"edit",
  computed:{
      ...mapState({
          Notes:'note',
          onnote:'activenote'
      })
  }
}
</script>
<style scoped>
div {margin-left:312px;border:1px solid black;height: 947px;width: 1608px;}
textarea {height: 930px;width: 1600px;resize:none;}
</style>
