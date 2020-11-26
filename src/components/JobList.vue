<template>
  <div class="job-list">
    <div :class="{'is-featured':jobData.featured}" class="job">
      <div class="company-logo">
         <img alt="bg-header" :src="jobData.logo">
         <div class="company-info">
          <p>{{jobData.company}}  <span v-show="jobData.new">NEW</span> <span v-show="jobData.featured">FEATURED</span></p>
          <h3>{{jobData.position}}</h3>
          <p><span>{{jobData.postedAt}} - </span> <span>{{jobData.contract}} - </span> <span>{{jobData.location}}</span></p>
         </div>
      </div>
       <div class="language-options">
         <button class="lang" @click="addSearchCategory(jobData.role)">{{jobData.role}}</button>
         <button class="lang" @click="addSearchCategory(jobData.position)">{{jobData.position}}</button>
         <span v-for="(lang,index) in jobData.languages" :key="index"><button class="lang" @click="addSearchCategory(lang)">{{lang}}</button></span>
      </div>
    </div>
  </div> 
</template>

<script>

import { mapActions,mapGetters } from 'vuex'

export default {
  name: 'HelloWorld',
   data(){
    return{
     
    }
  },
  props: {
    jobData: {
        type: Object,
        required: true
    }
  },
  methods:{
    ...mapActions(['addFilter']),
     addSearchCategory(name){
         this.addFilter(name)
     }
  },
  computed:{
    ...mapGetters(['getSearchCategories']),
  }
}
</script>

<style lang="scss" scoped>

@import '../sass/mixins.scss';
@import '../sass/variables.scss';
hr{
  display: none;
}
.job-list{
  width: 100%;
  margin: 30px auto;
  display: flex;
  justify-content: center;
}
.job{
  width: 75%;
  border-radius: 7px;
  display: flex;
  flex-flow: wrap;
  position: relative;
  @include shadow(3px,3px,8px,$background-darker);
}
.company-logo{
  display: flex;
  flex-grow: 1;
  align-items: center;
   img{
      margin-left: 10px;
   }
}
.company-info{
 margin-left: 20px;
  p:first-child{
    color: $background-darker;
    font-family: $font-family;
    span:first-child{
      font-family: $font-family;
      margin-left: 7px;
      padding: 5px;
      @include buttons($background-darker,$background-lighter,10px)
    }
    span:last-child{
      font-family: $font-family;
      margin-left: 7px;
      padding: 5px;
       @include buttons($dark,$background-lighter,10px)
    }
  }
  p:last-child{
      font-family: $font-family;
      color: $gray;
    }
  h3{
    color: $dark;
    font-family: $font-family;
    margin: 10px 0px 10px 0px;
    &:hover{
      color:$background-darker;
      cursor: pointer;
    }
  }  
}
.language-options{
  min-width:200px;
  height: 100px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content:flex-end;
  flex-wrap: wrap;
}

.lang{
  margin-left: 4px;
  color: $background-darker;
  border:none;
  padding: 5px;
  font-family: $font-family;
  &:hover{
    color:white;
    background-color: $background-darker;
    cursor: pointer;
  }
  &:focus{
    outline: 0;
  }
  @include buttons($color,$background-darker,5px);
}
.is-featured{
   &::before{
     content: "";
     position: absolute;
     width: 3px;
     height: 100%;
     background-color: $background-darker;
     border-radius: 7px 0px 0px 7px;
   }
}

@media screen  and (max-width: 576px){

  .job-list{
   width: 100%;
   margin-top: 50px;
  }
  .job{
  flex-direction: row;
  width: 90%;
  position: relative;
}
.language-options{  
    justify-content: flex-start; 
    border-top: 1px solid $gray;
}
.company-info{
  margin-top: 35px;
  margin-bottom: 8px;
}
  .company-logo{
   img{
     position: absolute;
      margin-bottom: 120px;
      width: 50px;
      height: 50px;
   }
}
}
</style>