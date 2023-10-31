import { CashService } from "./services/cash.services.js";
import { ProductService } from "./services/product.service.js";

export class ProductController {
  buyProduct = (req, res) => {
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
  };

  refundProduct = (req, res) => {
    // 1. 판매여부 검증하는 코드 (대략10줄 정도)
    const productService = new ProductService();
    const isSoldout = productService.checkSoldout();

    // 2. 상품 환불하는 코드
    if (isSoldout) {
      res.send("환불완료");
    }
  };
}
