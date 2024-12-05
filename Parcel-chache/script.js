const quotes = https://jsonplaceholder.typicode.com/todos/9

const update = {
    quote: 'This is a test quote',
    author: 'goIteens',
    category: 'test'
}

fetch(quotes, {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
        // 'X-Api-Key': '+N8VDmi3IPpD6ygKcZzhoA==cD7b1gv1GcElTiR6',
    },
    
    body: JSON.stringify(update)
})
.then((response) => response.json())
.then((quotes) => console.log(quotes))
.catch((error) => console.log(error))
