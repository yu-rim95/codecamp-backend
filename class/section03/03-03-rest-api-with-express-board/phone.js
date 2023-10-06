export function checkPhone(phonnum){
    if(phonnum.length < 10 || phonnum.length > 11){
        console.error("핸드폰번호를 제대로 입력해주세요");
        return false
    } else {
        return true
    }
}
export function getToken(){
    const result = String(Math.floor(Math.random() * 1000000)).padStart(6,"0");
    console.log(result)
    return result
}
export function sendTokenToSMS(phonnum, result){
    console.log(phonnum + "번호로 "+ result + "전송했습니다")
}
