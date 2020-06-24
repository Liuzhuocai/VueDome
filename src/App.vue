<template>
  <div  id="app" >
    <Header msg="四川省师德师风失范教师信息查询系统"/>

    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <Student msg="师德师风失范查询"/>
    <i class="ico ico">12111111</i>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import Student from './components/Student.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
    Student
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
  .ico-aaa{

  }
</style>
