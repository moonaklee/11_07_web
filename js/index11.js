// error 표시는 then(실행,error)에서
fetch('https://jsonplaceholder.typicod3e.com/posts/1')
.then(
    (response) => response.text())
.then((result) => {
    console.log('welcome')
    console.log(result)
}
)
.catch(() => console.log('error 가 발생되었습니다.')) 
.finally(() => console.log('작업이 끝났습니다.'))



// 일반적인 주소에러
/* fetch('https://jsonplaceholder.typico3de.com/posts/1')
.then((response) => response.text(),(error) => console.log(error))
.then((result) => console.log(result)) */

// async 함수 연결 (비동기)
/* async함수(){   }
asynchronous

async play(){
    선언 이름 = await fetch()
    선언 이름 = await
    실행문
} */
