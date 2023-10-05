function qqq(aaa){
    console.log(aaa)
    console.log(aaa.name)
    console.log(aaa.age)
    console.log(aaa.school)
}


const name = "철수"
const age = 12
const school = "다람쥐초등학교"

// const profile = {
//     name: name,
//     age: age,
//     school: school
// }

const porfile = { name, age, school } // 키와 벨류가 같아서 벨류를 생략함 => shorthand-property

qqq(porfile) //1.변수에 담아서 보내주기 
qqq({ name, age, school } ) //2.그냥 통째로 보내주기
//=> 결과는 1번과 2번이 동일함