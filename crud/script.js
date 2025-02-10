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
const postForm = document.getElementById('postForm')
const titleInput = document.getElementById('titleInput')
const bodyInput = document.getElementById('bodyInput')
const postList = document.querySelector('#postList')
let posts = []; 

async function getData() { 
    try { 
        const response = await fetch(api) 
        console.log(response) 
        if (!response.ok) { 
           throw new Error('Помилка статусу : ', response.status) 
        } 
posts = response.json() 
console.log(posts) 
    } catch(err) { 
        console.log(err) 
    } 
} 
getData()

function showData() {
    postList.innerHTML = "";
    posts.forEach((post)=> {
const li = document.createElement('li');
li.dataset.id = post.id;
    }) 
}

postForm.addEventListener('submit', async ()=> {
    const inputTitle = titleInput.value
    const inputBody = bodyInput.value
    try {
        const response = await fetch(api, {
           method:"POST",
            headers:{"Content-Type":"application/json"}
        })
        let newPost = await response.json()
        posts = [newPost,...posts]
} catch(err) { 
    console.log(err) 
} 
})