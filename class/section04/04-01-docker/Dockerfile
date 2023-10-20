# 1. 운영체제 및 프로그램 설치 (하나하나 입력하는 방싱)
# FROM ubuntu:22.04 
# #  다운로드 완료시 터미널 실행

# RUN sudo apt install nodejs
# RUN sudo npm install -g yarn

# 1. 한번에 운영체제 및 프로그램 설치 (리눅스, node, npm, yarn까지 모두 깔려있는 컴퓨터 다운로드하는 방식)
FROM node:14

# 2. 내 컴퓨터에 있는 폴더나 파일을 도커 컴퓨터 안으로 복사하기
COPY ./index.js /index.js

# 3. 도커안에서 index.js 실행 시키기 명령어 RUN 과 CND 차이 -> 도커는 나만의 내가만든컴퓨터 / 그걸 저장 또는 최적화시켜야함 그걸 build빌드라함 
# 실제로 하나하나실행되고 하나의 최적화된 파일로 저장이되는데 이걸 이미지 = 도커이미지 라고함 이게즉 나만의 컴퓨터 
# 이명령어에는 RUN 도있고 CMD가있는데 이미지 를 실행시키지않고 저장할때 CMD는 빠짐 CMD는 저장완료된 이미지를 실행시킬때 사용 CMD는 마지막에 한번밖에 사용 못함
#  RUN 으로는  켜져있는거는 저장까지 다 들어감
CMD node index.js