// const express = require('express') //옛날방식 => comonjs 방식

import express from "express"; //요즘방식 => mmodule 방식
import { CashService } from "./cash";
import { ProductService } from "./product";

const app = express();

// 상품 구매하기 API
app.post("/products/buy", (req, res) => {
  // 1. 가지고있는 돈 검증하는 코드 (대략 10줄정도 코딩이 2줄로 줄어듬)
  const cashService = new CashService();
  cashService.checkValue();
  // 2. 판매여부 검증하는 코드 (대략10줄 정도)
  // ......
  // ......
  // ......
  // ......
  // ......
  // 3. 상품 구매 하는 코드
  // if(돈있음 && !판매완료){
  //   res.send("구매완료")
  // }
});

// 상품 환불하기 API
app.post("/products/refund", (req, res) => {
  // 1. 판매여부 검증하는 코드 (대략10줄 정도)
  const productService = new ProductService();
  productService.checkSoldout();
  // 2. 상품 환불하는 코드
  // if (판매완료) {
  //   res.send("환불완료");
  // }
});

app.listen(3000);
