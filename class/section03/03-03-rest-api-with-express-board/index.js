// const express = require('express') //옛날방식 => comonjs 방식

import express from 'express' //요즘방식 => mmodule 방식
import { checkPhone, getToken, sendTokenToSMS } from "./phone.js"
// import sendTokenToSMS from './phone.js' //express default 가져오기

const app = express()
app.use(express.json()) //use(express.json()) 는 사용한다 적용시킨다는 뜻으로 body로들어오는 json형태를 해석할수있게됨 옛날에는 bodyParser사용

// 조회하기
app.get('/boards', function (req, res) {
  // 1. DB접속후 , 데이터를 조회 => 데이터를 조회했다고 가정하고 실습시작
  const result = [
    { number: 1, writer: "철수", title: "제목입니다~~", contents: "내용이에요!!!" },
    { number: 2, writer: "영희", title: "영희입니다~~", contents: "영희이에요!!!" },
    { number: 3, writer: "훈이", title: "훈이입니다~~", contents: "훈이이에요!!!" },
  ]
  // 2. DB에서 꺼내온 결과를 브라우저에 응답(response)으로 전달하기
  res.send(result);
})

// 등록하기
app.post('/boards', function (req, res) {
 // 1. 브라우저에서 보내준 데이터 확인하기
  console.log(req)
  console.log("======구분선======")
  console.log(req.body)

  // 2. DB에 접속 후, 브라우저에서 받은 정보들을 데이터에 저장 => 지금은 임시로 저장했다고 가정하고 실습 시작

  // 3. DB에 저장된 결과를 브라우저에 응답(response)주기
  res.send("게시물 등록에 성공하였습니다.")
})


// 01-03-token-api-facade폴더에 index.js파일을 api 생성해보기
app.post('/tokens/phone', function (req, res) {
  const phonnum = req.body.phonnum; 

  // 1.휴대폰 자릿수 맞는지 확인하기
  const isVaild = checkPhone(phonnum)
  if(isVaild === false) return
  // 2. 핸드폰 코든 6자리 만들기
  const mytoken = getToken()
  // 3. 핸드폰 번호에 토큰 전송하기
  sendTokenToSMS(phonnum, mytoken)

  res.send("인증완료")
 })



app.listen(3000)