## Component
- 화면의 영역을 구분하여 개발할 수 있는 뷰의 기능
- 영역별로 관리하면 코드의 **재사용성**이 올라가고 **빠르게 화면을 제작**할 수 있음

### 선언방법
- **Vue.componenet**('컴포넌트 이름', 컴포넌트 내용); 
- 컴포넌트 등록하는 방법, 전역 컴포넌트로 등록
- ex)

``` java
Vue.componenet('app-header',{
    template : '<h4>hello</h4>';
});

<app-header></app-header> // 로 사용
```

### 전역 컴포넌트와 지역 컴포넌트이 차이점
- **지역**은 하단에 어떤게 등록되어 있는지 알 수 있음
- 특정 컴포넌트 하단에 어떤 컴포넌트들이 등록되어 잇는지 알 수 있음
- 전역은 플러그인이나 라이브러리로 사용할 거임
- 일반적으로는 components로 등록함

