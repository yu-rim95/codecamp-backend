import {getToday} from './utils.js'

export function checkEmail(email){
    if(email === undefined || email.includes("@") === false){
        console.error("email을 제대로 입력해주세요")
        return false
    }else {
        return true
    }
};

export function getWelcomTemplate({ name, age, school }){
    const myTemplate = `
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다!</h1>
                <hr/>
                <div>이름: ${name}</div>
                <div>나이: ${age}</div>
                <div>학교: ${school}</div>
                <div>가입일: ${getToday()}</div>
            </body>
        </html>
    `
    return myTemplate
};

export function sendTemplateToEmail(myemail, result){
    console.log(myemail + "이메일로 가입환영 템플릿 "+ result + "전송했습니다")
};
