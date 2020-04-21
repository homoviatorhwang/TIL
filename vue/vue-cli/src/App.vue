<template>
  <!-- html 태그는 하나만 잇어야 함 -->
  <!-- 밑에 div를 또 넣으려고 하면 에러가 날거임 -->
  <div>
   <app-header></app-header>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
// 컴포넌트의 내용을 정의하고 변수로 정의
// var AppHeader = {
//   template: '<header><h1>Header</h1></header>'
// } 라는 뜻임
export default {
  data: function(){
    return {
      str: 'hi'
    }
  },
  components:{
    'app-header':AppHeader
  }
}
</script>

<style>

</style>