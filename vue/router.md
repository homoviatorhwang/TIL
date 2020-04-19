## Router
- 페이지를 이동할 때 뷰 공식 라이브러리
- 페이지 이동과 관련된 기능을 router를 이용해 구현할 수 있음
- cdn 방식, npm 방식이 있음

```java
// 라우터 인스턴스 생성
var router = new VueRouter({
    // 라우터 옵션
})

// 인스턴스에 라우터 인스턴스를 등록
new Vue({
    router: router // 라우터 속성 / 라우터 변수
})
```

```javascript
new VueRouter({
    mode : 'history' // mode에 history 넣으면 #을 안 써도 됌, 좀 더 깔끔한 url
    routes: [
        {path: '/login', component: LoginComponent},
        {path: '/home', component: HomeComponent}
    ]
});
```

### router-view
- url이 변경되었을 때 변경 url에 따라 컴포넌트가 뿌려지는 영역


### router-link
- 페이지 이동을 할 때 사용자는 url을 다 쳐서 이동하지 않음
- to 라는 속성까지 사용 하면 a 태그처럼 사용 가능

```java
<div>
    <router-link to="/Login"></router-link>
</div>
```

## navigation-guards
https://joshua1988.github.io/web-development/vuejs/vue-router-navigation-guards/