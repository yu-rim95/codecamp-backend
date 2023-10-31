function Controller(aaaaaaa: any) {
  console.log("=================");
  console.log(aaaaaaa);
  console.log("=================");
}

// 데코레이터란 함수고 그아래있는거는 함수의 인자로 들어가는거다. 타입스크트에서 적용 자바스크립트 x
@Controller
class CatsController {}
