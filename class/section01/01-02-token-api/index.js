// 핸드폰 인증번호 api 실습
// 안좋은 예 
// function creatrTokenOfPhone(phonnum){ //phonnum는 매개변수(parameter)
//     //1.휴대폰번호 자릿수 맞는지 확인하기 (10~11 자리)
//     if(phonnum.length >= 10){
//         if(phonnum.length <= 11){
//             //2. 인증번호6자리 = 핸드폰 토큰6자리 만들기
//             const result = String(Math.floor(Math.random() * 1000000)).padStart(6,"0");
//             console.log(result);
//             //3. 핸드폰번호에 토큰 전송하기
//             console.log(phonnum + "번호로 "+ result + "전송했습니다")
//         }else{
//             console.error("핸드폰번호 제대로알려주세요");
//         }
//     }else{
//         console.error("핸드폰번호가 10자보다 작다");
//     }
// }


function creatrTokenOfPhone(phonnum){
    //조건문은 부정문 먼저 적어주기 에러인경우먼저 찾아서 에러띄워주기
    if(phonnum.length < 10 || phonnum.length > 11){
        console.error("핸드폰번호를 제대로 입력해주세요");
        return //리턴으로 함수 종료 이런방법을 early-exit 얼리엨트패턴이라함 
    } const result = String(Math.floor(Math.random() * 1000000)).padStart(6,"0");
        console.log(result);
        console.log(phonnum + "번호로 "+ result + "전송했습니다")
}


creatrTokenOfPhone("01012345678") //01012345678는 인자(argument)