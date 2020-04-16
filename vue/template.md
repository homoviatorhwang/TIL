## Template
- 뷰로 화면을 조작하는 방법
- 데이터 바인딩과 디렉티브로 나뉨

### Data Binding
- 뷰 인스턴스에서 정의한 속성들을 화면에 표시하는 방법
- 가장 기본적인 데이터 바인딩 방식은 콧수염 괄호(Mustache Tag)
- {{}}

```html
<div>{{ message }}</div>
```

``` javascript
new Vue({
    data: {
        message: 'Hello Vue.js'
    }
})
```

### 디렉티브
- v- 라고 붙는 속성들을 모두 디렉티브라고 함

```html
<div>
    Hello <span v-if="show">Vue.js</span>
</div>
```

```javascript
new Vue({
    data: {
        show: false
    }
})
```
