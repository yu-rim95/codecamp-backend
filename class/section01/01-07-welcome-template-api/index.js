
function checkEmail(email){
    if(email === undefined || email.includes("@") === false){
        console.error("email을 제대로 입력해주세요")
        return false
    }else {
        return true
    }
}

function getWelcomTemplate({ name, age, school, createdAt }){
    const myTemplate = `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다!</h1>
                <hr/>
                <div>이름: ${name}</div>
                <div>나이: ${age}</div>
                <div>학교: ${school}</div>
                <div>가입일: ${createdAt}</div>
            </body>
        </html>
    `
    return myTemplate
}

function sendTemplateToEmail(myemail, result){
    console.log(myemail + "이메일로 가입환영 템플릿 "+ result + "전송했습니다")
}

function createUser({ name, age, school, email, createdAt }){
    // 1.이메일이 정상인지 확인(1-존재여부, 2-"@"포함여부)
    const isValid = checkEmail(email)
    if(isValid === false) return

    // 2.가입환영 템플릿 만들기
    const myTemplate = getWelcomTemplate({ name, age, school, createdAt })

    // 3.이메일에 가입환영 템플릿 전송하기
    sendTemplateToEmail(email, myTemplate)
}

const name = "철수"
const age = 8
const school = "다람쥐초등학교"
const email = "a@a.com"
const createdAt = "2023-10-05"
createUser({ name, age, school, email, createdAt })