<template>
  <!-- html 태그는 하나만 잇어야 함 -->
  <!-- 밑에 div를 또 넣으려고 하면 에러가 날거임 -->
  <div>
   <!-- <app-header v-bind:프롭스 속성 이름="상위 컴포넌트의 데이터 이름"></app-header> -->
   <app-header v-bind:propsdata="str" v-on:renew="renewStr"></app-header>
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
      str: 'Header'
    }
  },
  components:{
    'app-header':AppHeader
  },
  methods:{
    renewStr: function(){
      this.str = 'hi';
    }
  }
}
</script>

<style>

</style>