// const express = require('express') //옛날방식 => comonjs 방식

import express from "express"; //요즘방식 => mmodule 방식
import { CashService } from "./cash";
import { ProductService } from "./product";

const app = express();

// 상품 구매하기 API
app.post("/products/buy", (req, res) => {
  // 1. 가지고있는 돈 검증하는 코드 (대략 10줄정도 코딩이 2줄로 줄어듬)
  const cashService = new CashService();
  const hasMoney = cashService.checkValue(); // 일반적으로 변수명이 is또는has이렇게 되어있으면 트루인지 펄스가있는지 나타낼때

  // 2. 판매여부 검증하는 코드 (대략10줄 정도)
  const productService = new ProductService();
  const isSoldout = productService.checkSoldout();

  // 3. 상품 구매 하는 코드
  if (hasMoney && !isSoldout) {
    res.send("구매완료");
  }
});

// 상품 환불하기 API
app.post("/products/refund", (req, res) => {
  // 1. 판매여부 검증하는 코드 (대략10줄 정도)
  const productService = new ProductService();
  const isSoldout = productService.checkSoldout();

  // 2. 상품 환불하는 코드
  if (isSoldout) {
    res.send("환불완료");
  }
});

app.listen(3000);
