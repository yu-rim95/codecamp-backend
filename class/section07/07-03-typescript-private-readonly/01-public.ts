//  public, private, protected, readonly

class Monster2 {
  power = 10;

  constructor(public qqq) {
    this.power = qqq;
  }

  attack1 = () => {
    console.log("공격하자!");
    console.log("내 공격력은" + this.power + "야!!");
  };
}

class 공중몬스터2 extends Monster2 {
  attack2 = () => {
    console.log("공격하자!");
    console.log("내 공격력은" + this.power + "야!!");
  };
}

const mymonster22 = new 공중몬스터2(20);
mymonster22.attack1();
mymonster22.attack2();
