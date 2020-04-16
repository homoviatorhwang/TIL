## watch vs computed
- watch는 무거운 로직들
-> 매번 실행되면 부담스러운 로직들, 데이터 요청들
- computed는 단순한 계산
-> 단순한 텍스트 입력에 대한 밸리데이션 계산

However, it is often a better idea to use a computed property rather than an imperative watch callback.