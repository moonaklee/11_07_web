fetch('https://jsonplaceholder.typicode.com/todos/3',{
    method:'Delete' 
})
.then((response) => response.text())
.then((result) => {
    console.log(result)
}
)