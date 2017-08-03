### webpack 버전  
webpack 2사용  

### tasks  

  - npm run dev  
    - 개발 모드, webpack-dev-server 사용(express 서버 아님)  
  - npm run build  
    - 파일 빌드, 필드 파일 위치 수정 필요(webpackConfig.output.path)  
  - npm run start  
    - express이용 한 실행  

### code split 참고파일  

#### index.js  

7~9라인 : 'bundle-loader?lazy!./'

13~15라인 : 버퍼 역활의 컴포넌트 호출부분

#### Bundle.jsx

버퍼 역활의 컴포넌트

#### 참고 사이트

https://github.com/webpack-contrib/bundle-loader  
https://reacttraining.com/react-router/web/guides/philosophy
