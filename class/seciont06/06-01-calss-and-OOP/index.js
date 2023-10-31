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

const mymonster1 = new Monster(20); //설명서로 만들어낸 사물(객체) 또는 인스턴스
mymonster1.attack();
mymonster1.run();

const mymonster2 = new Monster(50); //몬스터1과는 차별된느 새거
mymonster2.attack();
mymonster2.run();
