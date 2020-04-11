## this
- this는 해당 오브젝트를 바라봄

```java
var vm = new Vue = {
    el : '',
    data : {
        num:10
    },
    methods: {
        getNumber : function(){
            this.num // 10임
        }
    }
}
```

