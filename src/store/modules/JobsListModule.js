import * as types from '../mutation-types'
import API from "../../service/api";

export const JobsModule = {

      //state
      state: {
        jobsInfo:[],
        searchCategories:[]
      },
      //getters
      getters: {
        getJobs(state){
          return state.jobsInfo
        },
        getSearchCategories(state){
          return [...new Set(state.searchCategories)]
        }
      },

      //mutations
      mutations: {
        [types.GET_ALL_JOBS](state,payload){
           state.jobsInfo = payload
        },
        [types.ADD_FILTER](state,payload){ 
          if(!state.searchCategories.includes(payload)) state.searchCategories.push(payload)
       },
       [types.DELETE_FILTER](state,payload){
       if (state.searchCategories.includes(payload)) {
        state.searchCategories.splice(state.searchCategories.indexOf(payload),1)
       }
      },
      [types.CLEAR_ALL_FILTERS](state){
        if (state.searchCategories.length > 0) {
         state.searchCategories = []
         console.log("clear");
         
        }
       }
     },

      //actions
      actions: {
         getAllJobs({ commit }){
             API.getAllJobs().then(res => {
                 commit('GET_ALL_JOBS',res.data)
             })
         },
         addFilter({ commit },name){
          commit('ADD_FILTER',name)
         },
         deleteFilter({ commit},name){
          commit('DELETE_FILTER',name)
         },
         clearAllFilters({ commit }){
          commit('CLEAR_ALL_FILTERS')
         }
      }
}