console.log('start')
// then() () 안에는 매개변수라 response 굳이 안써도 된다.
fetch('https://jsonplaceholder.typicode.com/todos/3')
.then( (item) => item.text())
.then((result) => {console.log(result)})

console.log('end')