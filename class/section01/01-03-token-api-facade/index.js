// 퍼사드패턴을 활용해서 리팩토링 

function checkPhone(phonnum){
    if(phonnum.length < 10 || phonnum.length > 11){
        console.error("핸드폰번호를 제대로 입력해주세요");
        return false
    } else {
        return true
    }
}
function getToken(){
    const result = String(Math.floor(Math.random() * 1000000)).padStart(6,"0");
    console.log(result)
    return result
}
function sendTokenToSMS(phonnum, result){
    console.log(phonnum + "번호로 "+ result + "전송했습니다")
}



function creatrTokenOfPhone(phonnum){
    // 1.휴대폰 자릿수 맞는지 확인하기
    const isVaild = checkPhone(phonnum)
    if(isVaild === false) return

    const mytoken = getToken()
    
    sendTokenToSMS(phonnum, mytoken)
}




creatrTokenOfPhone("01012345678") //01012345678는 인자(argument)