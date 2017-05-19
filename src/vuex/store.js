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
    },      
        choose(state,item) {
            state.activenote=item;  //此时state.activenote 和item指向同一个内存对象，修改activenote也就会修改note里的item对象
        },
        remove(state) {
          var some=state.note.filter(function(ele){     //方法2： let indice = state.notes.indexOf(state.activeNote);state.notes.splice(indice, 1)
                return ele !=state.activenote           //方法3：state.notes.forEach(function(note,i){ note==state.activeNote && state.notes.splice(i,1);})
            })
            console.log(some)
            state.note=some
            state.activenote=state.note[0]
        },
        favorite(state) {
            state.activenote.favorite=!state.activenote.favorite
        },
        edit (state,e){
            state.activenote.txt=e.target.value
        }
    },
    actions:{
        ADD ({commit}){
            commit ('add')
        },
        CHOOSE({commit},item){
            commit ('choose',item)
        },
        REMOVE({commit}){
            commit ('remove')
        },
        FAVORITE({commit}) {
            commit ('favorite')
        },
        EDIT ({commit},e) {         //e==event,是js事件默认传递的参数
            commit ('edit',e)
        }
    }
})