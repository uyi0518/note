<template>
  <div>
<textarea :value="onnote.txt" @input="editnote"></textarea>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'
export default {
  name:"edit",
  computed:{
   /* notetxt(){
      return this.$store.state.activenote.txt
    }, */
      ...mapState({
          Notes:'note',
          onnote:'activenote'
      })
  },
  methods:{
    ...mapActions({
      editnote:'EDIT'
    })
  }
}
</script>
<style scoped>
div {margin-left:312px;border:1px solid black;height: 947px;width: 1608px;}
textarea {height: 930px;width: 1600px;resize:none;}
</style>
