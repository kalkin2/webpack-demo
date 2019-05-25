2019.5.25

1. react-app 설치 
c:/kalkin

npm install -g create-react-appcreate-react-app scoreboard

(한줄로 가능, 최신상태 creta-react-app 다운로드 )
CMD : npx create-react-app scoreboard 


2. 패키지 관리자 설치

2-1 자동설치 
-의존성관리
yarn -v (npm의 상의 개념)

npm install -g yarn

scoreboard 에서 

dev SERVER실행 
c:\kalkin2\scoreboard\	
npm run start



2-2 쌩으로 설치 하기
폴더 생성 후 npm init
package.json이 생성됨 

lodash

3. webpack설치 

mkdir webpack-demo && cd webpack-demo
# npm 저장소 생성
npm init -y
 
# 의존성 모듈 설치
npm install --save lodash
# 개발 의존성 모듈 설치
npm install webpack webpack-cli --save-dev

package.json에 추가됨.(devDependencies는 운영서버에 올라기자 않음)
 "devDependencies": {
    "webpack": "^4.32.2",
    "webpack-cli": "^3.3.2"
  }
  
  
참고 URL


http://jeonghwan-kim.github.io/lodash/
http://eastflag.co.kr/%EA%B8%80%EB%A1%9C%EB%B2%8C-%ED%99%98%EA%B2%BD%EC%97%90%EC%84%9C-%EB%AA%A8%EB%93%88-%ED%99%98%EA%B2%BD%EC%9C%BC%EB%A1%9C%EC%9D%98-%EB%B3%80%ED%99%94/
https://www.npmjs.com/
https://blueshw.github.io/2017/05/16/ES-require-vs-import/