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
const api = `https://jsonplaceholder.typicode.com/posts?_limit=3`;
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
        posts = await response.json() 
        console.log(posts) 
        showData() 
    } catch (err) { 
        console.log(err) 
    } 
} 
getData() 
 
function showData() { 
    postList.innerHTML = ""; 
    posts.forEach((post) => { 
        const li = document.createElement('li'); 
        li.dataset.id = post.id; 
        li.innerHTML = ` 
    <h3>${post.title}</h3> 
    <p>${post.body}</p> 
    <button class="editBtn">Edit</button> 
    <button class="deleteBtn">Delete</button> 
    `; 
        postList.appendChild(li) 
    }) 
} 
 
postForm.addEventListener('submit', async (e) => { 
    e.preventDefault() 
    const inputValues = { 
        title: titleInput.value, 
        body: bodyInput.value 
    }  
    try { 
        const response = await fetch(api, { 
            method: "POST", 
            headers: { "Content-Type": "application/json" }, 
            body: JSON.stringify(inputValues) 
        }) 
        let newPost = await response.json() 
        posts = [newPost, ...posts] 
        showData() 
    } catch (err) { 
        console.log(err) 
    } 
     
}) 
postList.addEventListener('click', (event) => { 
const postId = event.target.closest('li')?.dataset.id
if(event.target.classList.contains('editBtn')) {
    editButton(postId)
}
}) 

function editButton(){ 
    console.log('edit');
}
