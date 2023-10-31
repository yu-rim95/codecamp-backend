// 타입추론
let aaa = "안녕하세요";
aaa = 3;

// 타입명시
let bbb: string = "반갑습니다";
bbb = 10;

// 타입명시가 필요한 상황
let ccc: number | string = 1000;
ccc = "1000원";

// 숫자타입
let ddd: number = 20;
ddd = "철수";

// 불린타입
let eee: boolean = true;
eee = false;
eee = "false"; //true로 작동함

//배열타입
let fff: number[] = [1, 2, 3, 4, 5, "안녕하세요"];
let ggg: string[] = ["철수", "영희", "훈이", 10];
let hhh: (string | number)[] = ["철수", "영희", "훈이", 10];

// 객체타입
interface IProfile {
  name: string;
  age: number | string;
  school: string;
  hobby?: string; // ? 물음표는 나중에 있어도 되고 없어도되고, 나중에 추가가 된다
}

const proflie: IProfile = {
  name: "철수",
  age: 8,
  school: "다람쥐초등학교",
};

proflie.name = "훈이"; //타입 추론으로는 이것만 가능
proflie.age = "8살";
proflie.hobby = "수영";

// 함수타입 => 어디서 몇번이든 호출 가능하므로, 타입추록 할 수 없음 (반드시, 타입명시 피요)
function add(num1: number, num2: number, nuit: string): string {
  return num1 + num2 + nuit;
}

const result = add(1000, 2000, "원"); // 결과의 리턴 타입도 예측 가능!

// 화살표함수
const add2 = (num1: number, num2: number, nuit: string): string => {
  return num1 + num2 + nuit;
};

const result2 = add2(1000, 2000, "원");

// any 타입 -> 가극적 자용하지않는다
let qqq: any = "철수";
qqq = 123;
qqq = true;
