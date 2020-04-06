####Git 이란
- 분산형 버전 관리 시스템
- source의 변경이력을 쉽게 확인 가능
- 특정 시점으로 되돌아 갈 수 있음

####Git의 저장소
1. 원격 저장소(Remote Repository)
- 파일이 원격 저장소 전용 서버에서 관리
- 여러 사람이 함께 공유하기 위한 공간

2. 로컬 저장소(Local Repository)
- 내 PC에 파일이 저장되는 개인 전용 저장소

-> 로컬 저장소에서 원격 저장소에 업로드 하는 것이 PUSH
-> 원격 저장소에서 로컬 저장소로 다운로드 하는 것이 PULL

####로컬 저장소 만드는 방법
1. 새롭게 만들거나
2. 원격 저장소를 로컬 저장소로 복사하거나

####커밋(COMMIT)
- 추가 및 변경 사항을 저장소에 기록하기위한 명령어(in Local Repository)
- 이력 관리를 위해 특별한 의미가 있는 업데이트를 구분해서 커밋하는 것 추천
- 작업 트리에 있는 변경 내용을 저장소에 바로 기록하는 것이 아니라 그 사이 공간인 인덱스에 파일 상태를 기록하게 되어 있음(stage, 스테이징)
- 기록하고자 하는 모든 변경 사항들이 인덱스에 존재해야 함
- EX) 10개의 파일을 수정했지만 그 중에 7개만 저장소에 공개하고 싶을 때는 7개만 석택하는 작업이 바로 인덱스에 등록 또는 스테이징(stage)
- 인덱스라는 공간이 중간에 있어서 작업 트리 안에 잇는 커밋이 필요 없는 파일들을 커밋에 포함하지 않을 수 있음, 일부 변경 사항만 인덱스에 등록해 커밋할 수 있음

####작업트리(Work tree)와 인덱스(Index)
1. 작업트리
- 폴더
2. 인덱스
- 커밋을 실행하기 전의 저장소와 작업 트리 사이에 존재하는 공간

####Push
- 원격 저장소로 변경된 파일을 업로드 하는 것
- Push를 실행하면 원격 저장소에 내 변경 이력이 업로드되어, 원격 저장소와 로컬 저장소가 동일한 상태가 됨

####Clone
- 원격 저장소를 복제
- 원격 저장소의 내용을 통째로 다운로드
- 복제한 저장소를 PC에서 로컬 저장소로 사용할 수 있음

####Pull
- 원격 저장소에 올려놓은 변경 내용(Push된 내용)을 내 로컬 저장소에도 적용하기 위해 사용
- 즉, 원격 저장소에서 로컬 저장소로 업데이트
- 동일 시점 이후 원격에서도 변경이 생기고(A), 로컬에서도 변경이 생겼을 때(B) 원격과 로컬의 변경이 같지 않다면(A!=B)
양쪽의 변경을 통합할 필요가 있음
-> 충돌이 없다면 자동적으로 병합 커밋이 실행되지만, 충돌이 있다면 충돌난 부분을 수동으로 해결한 다음 직접 COMMIT 해줘야 함

####git lab에 존재하는 프로젝트 소스 올리기
Command line instructions
You can also upload existing files from your computer using the instructions below.


Git global setup
git config --global user.name "황준하"
git config --global user.email "nov93@ildong.com"
-- 사용자 이름과 이메일 주소 설정
git config --list 
-- 설정한 모든 것을 보여주는 명령어
git config <key>
-- 특정 key에 대해 어떤 값을 사용하는지 확인 가능
-ex) git config user.name


Create a new repository
git clone git@172.16.17.86:nov93/ildonghyaltech-mobile.git
-- 로컬 저장소로 원격 저장소 다운로드
cd ildonghyaltech-mobile
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master
-- 원격 저장소에 반영

Push an existing folder
cd existing_folder
git init
git remote add origin git@172.16.17.86:nov93/ildonghyaltech-mobile.git
git add .
git commit -m "Initial commit"
git pull origin master --allow-unrelated-histories
git push -u origin master

Push an existing Git repository
cd existing_repo
git remote rename origin old-origin
git remote add origin git@172.16.17.86:nov93/ildonghyaltech-mobile.git
git push -u origin --all
git push -u origin --tags