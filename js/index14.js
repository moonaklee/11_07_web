async function str(){
    // 실행
    try{
        const reponse = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const result = await response.text()
        console.log(result)
    }
    //에러
    catch(error){
        console.log('error입니다.')
    }
    // 마감
    finally{
        console.log('작업이 끝났습니다.')
    }
}
 str();