<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> 
    <!-- 파스칼 케이스 : 단어가 연결될 때 단어의 앞글자를 대문자로 표현 -->
    <!-- 컴포넌트 태그를 등록한 것과 같음 -->
    <hello-world></hello-world>
    <HelloWorld></HelloWorld>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld // 'hello-world': HelloWorld 라는 뜻임
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
  margin-top: 60px;
}
</style>
