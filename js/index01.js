// fetch('https://www.google.com')
/* .than((response) =>{return response.text()}) */
// 생략 가능
// .than -> 콜백함수
// .then((response) =>response.text())
// .then((result) => {console.log(result)})

fetch('https://jsonplaceholder.typicode.com/todos/1')
// promise -> pending ->fulfilled ->결과값
.then((response) => response.text())
// 결과값이 response에 담기고 콜백함수로 다시 돌림 pending-fulfilled-결과값
.then((result) => {console.log(result)})
// 콜백함수 pending fulfilled- 결과값(실행 or return)