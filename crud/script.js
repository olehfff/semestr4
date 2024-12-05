// task1
// const quotes = `https://jsonplaceholder.typicode.com/todos/9`

// const update = {
//     quote: 'This is a test quote',
//     author: 'goIteens',
//     category: 'test'
// }

// fetch(quotes, {
//     method: 'PATCH',
//     headers: {
//         'Content-Type': 'application/json',
//     },
    
//     body: JSON.stringify(update)
// })
// .then((response) => response.json())
// .then((quotes) => console.log(quotes))
// .catch((error) => console.log(error))

// fetch(quotes, {
// const deleteId = 1;
const api = 'https://jsonplaceholder.typicode.com/posts?_limit=3'

async function getData() {
    try {
        const response = await fetch(api)
        console.log(response)
        if (!response.ok) {
           throw new Error('Помилка статусу : ', response.status)
        }
let posts = response.json()
console.log(posts)
    } catch(err) {
        console.log(err)
    }
}
getData()