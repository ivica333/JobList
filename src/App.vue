<template>
 <div class="main-page">
  <header>
    <img alt="bg-header" src="../public/images/bg-header-desktop.svg">
    <div v-show="numOfSearches > 0" class="search-options">
     <div class="search-items">
         <ul>
           <li v-for="(category,index) in getSearchCategories" :key="index">
             {{category}}<button @click="delFilter(category)">
               <img alt="bg-header" src="../public/images/icon-remove.svg"/>
             </button>
           </li>
         </ul>  
         <span @click="clearAllFilters()" class="clear-search">Clear</span>
     </div>
    </div>
  </header>
  <div v-for="(job,index) in getJobs" :key="index">
    <JobList v-if="displayFilteredJobs(job)" :jobData="job" />
  </div>
 </div>
</template>

<script>

import JobList from './components/JobList.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  data(){
    return{
     
    }
  },
  components: {
    JobList
  },
  computed:{
  ...mapGetters(['getJobs','getSearchCategories']),
  numOfSearches(){
    return this.getSearchCategories.length
  }
},
methods:{
  ...mapActions(['getAllJobs','deleteFilter','updateJobs','clearAllFilters']),
  delFilter(name){
      this.deleteFilter(name)
  },
   displayFilteredJobs(job){
        return this.getSearchCategories.every(lang => job.languages.includes(lang) || lang === job.position || lang === job.role) 
     }
  },
  
  created(){
  
     this.getAllJobs()
     
  }
}
</script>

<style lang="scss">

@import './sass/variables.scss';
@import './sass/mixins.scss';

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  background-color:$background-lighter;
}
header{
  width: 100%;
  background-color: $background-darker;
  min-height: 120px;
  position: relative;
   img{
    width: 100%;
   }
}
.search-options{
  width: 100%;
  position: absolute;
  bottom:-20px;
  display: flex;
  justify-content: center;
}
.search-items{
  background-color: $background-lighter;
  border-radius: 7px;
  width: 75%;
  display: flex;
  padding: 10px;
  @include shadow(3px,3px,8px,$background-darker);
   ul{
     flex: 3;
     list-style-type: none;
     display: flex;
     flex-wrap: wrap;
      li{
        font-family: $font-family;
        padding-right: 8px;
        color:$background-darker;
         button{
           border:none;
           background-color: $background-darker;
            &:hover{
              background-color: $dark;
              cursor: pointer;
            }
         }
        }
    }
}
.clear-search{
  flex: 1;
  text-align: right;
  margin-right: 10px;
  color:$gray;
  font-family: $font-family;
   &:hover{
     color:$background-darker;
     cursor: pointer;
     text-decoration: underline;
   }
}

@media screen  and (max-width: 576px){
  .search-items{
    width: 90%;
    ul li{
      margin-bottom: 10px;
    }
  }
}
</style>
