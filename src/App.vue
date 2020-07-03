<template>
  <div  id="app" >
    <Header msg="四川省师德师风失范教师信息查询系统"/>

    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--    <div class="index-content">-->

<!--    </div>-->

    <!--<Student msg="师德师风失范查询"/>-->
    <router-view></router-view>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
/*import Student from './components/Student.vue'*/
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
   /* Student,*/
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
.index-content {
  display: flex;
  background-image: url("/assets/web_bg_img.png");
  background-size: 100% 100%;
  flex: 1 1 auto;
  height: 1px;
/*//height: 100%;*/
  overflow: auto;
  justify-content: center;
}
.index-frame {
  position: relative;
  width: 1200px;
  box-sizing: border-box;

}
</style>
