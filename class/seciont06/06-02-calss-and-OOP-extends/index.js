// class Date {
//   qqq = 3;
//   getFullYear() {}

//   getMonth() {}
// }

const date = new Date();
console.log(date.getFullYear());
console.log(date.getMonth() + 1);

class Monster {
  //설명서
  power = 10;
  constructor(qqq) {
    //생성자 - 생성되면서 실행되는 함수
    this.power = qqq;
  }

  attack = () => {
    console.log("공격하자!");
    console.log("내 공격력은!" + this.power + "야!!");
  };

  run = () => {
    console.log("도망가자!");
  };
}

class 공중몬스터 extends Monster {
  constructor(aaa) {
    super(aaa + 1);
  }

  //Monster 이걸 상속받을거임
  run = () => {
    // 여기서다시 run을 해버리면 부모의 있는 런은 무시 =  오버라이딩했다 (부모의 run을 덮어씀)
    console.log("날라서 도망가자!");
  };
}

class 지상몬스터 extends Monster {
  constructor(bbb) {
    super(bbb);
  }

  //Monster 이걸 상속받을거임
  // 오버라이딩했다 (부모의 run을 덮어씀)
  run = () => {
    console.log("뛰어서 도망가자");
  };
}

const mymonster1 = new 공중몬스터(20); //설명서로 만들어낸 사물(객체) 또는 인스턴스
mymonster1.attack();
mymonster1.run();

const mymonster2 = new 지상몬스터(50); //몬스터1과는 차별된느 새거
mymonster2.attack();
mymonster2.run();
