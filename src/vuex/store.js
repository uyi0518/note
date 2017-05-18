import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        note:[],
        activenote:{}
    },
    mutations:{
        add (state) {
        var newnote={txt:"new note",favorite:false}
        state.note.push(newnote)
        state.activenote=newnote
        }
    },
    actions:{
        ADD ({commit}){
            commit ('add')
        }
    }
})