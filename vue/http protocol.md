## HTTP 프로토콜이란?
- HTTP(Hypertext Transfer Protocol)
- Protocol : 특정 기기 간 데이터를 주고받기 위해 정의된 규칙
- 웹에서는 브라우저와 서버 간 데이터를 주고 받기 위해 사용
- 데이터를 주고 받기 위한 각각의 데이터 요청이 서로 독립적으로 관리됨
- 세션과 같은 별도의 추가 정보를 관리하지 않아도 되고, 다수의 요청 처리 및 서버의 부하를 줄일 수 있는 성능 상의 이점을 가짐
- TCP/IP 통신 위에서 동작, 기본 포트는 80번

### HTTP 요청 메서드
1) GET : 존재하는 자원에 대한 요청
2) POST : 새로운 자원을 생성
3) PUT : 존재하는 자원에 대한 변경
4) DELETE : 존재하는 자원에 대한 삭제

### HTTP 상태 코드
1) 2XX : 성공
2) 3XX : 리다이렉션
3) 4XX : 클라이언트 에러
- 400 : Bad Request, 잘못된 요청
- 404 : 요청한 자원이 서버에 없다는 의미
4) 5XX : 서버 에러


### URL
- URL(Uniform Resource Locators)
- 서버에 자원을 요청하기 위해 입력하는 영문 주소

