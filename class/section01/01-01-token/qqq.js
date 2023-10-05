console.log("안녕하세요!!");

// 핸드폰 인증번호 토큰
function getTobken(){
    // 인증번호 랜덤6자리
    const result = String(Math.floor(Math.random() * 1000000)).padStart(6,"0");
    console.log(result)
}
getTobken()