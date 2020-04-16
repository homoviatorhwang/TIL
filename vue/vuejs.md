### vue란 무엇인가
- mvvm 패턴의 viewmodel 레이어에 해당하는 화면단 library
- view -> dom
    - 화면
    - html들이 요소
    - dom을 이용해서 js 조작 가능
- view model(dom listeners, data bindings)
    - view에서의 input에 대해서 event를 dom listeners에서 청취하고 js에서 특정 로직 수행
- model(plain js objects)


### Reativity
- 반응성
- 값이 변했을 때 이를 감지하고 곧바로 반응함

### (예습) Vue  Instance
- Vue Instance는 html 태그가 Reactivity를 제공할 수 있도록 도와줌

## 1
```html 
    <div id="app">
      {{ message }}                         
    </div>
```
- div 태그에 vue instance 부착

## 2
```js
    <script>
      new Vue({
        el: '#app',                         
        data: {
          message: 'Hello Vue.js!'
        }
      })
    </script>
```
- div 태그는 vue의 data에 괄호를 통해서 접근 가능

- 화면 상에는 hello vue.js!가 출력되고 메시지를 바꾸는 즉시 값이 변경되는 것을 확인 할 수 있음
- vue는 데이터 바인딩을 통해 reactivity를 제공함

 ## 3
 ```js
new Vue({
  el : "인스턴스와 연결할 HTML 태그",
  data : "뷰의 반응성이 반영될 데이터" ,
  methods : "화면의 동작과 이벤트를 정의하는 메소드",
  created : "뷰의 라이프 사이클과 관련된 속성들", (뷰 생성 시 실행되는 함수)
  computed : "data 값이 변화되었을 때 수행할 메소드 정의"
})
 ```