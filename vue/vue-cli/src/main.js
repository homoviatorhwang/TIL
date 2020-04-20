import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App), // render는 템플릿을 정의하면 내부에서 render가 실행이됨
}).$mount('#app') // el element 와 동일한 의미임 mount는

