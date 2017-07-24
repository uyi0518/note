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
div {float: left;border:1px solid black;height: 948px;width: 1500px;}
textarea {height: 948px;width: 1500px;resize:none;}
</style>
