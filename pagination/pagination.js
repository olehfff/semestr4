const paginationContainer = document.querySelector('.pagination'); 
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
console.log(prevButton, nextButton);
const url = `https://www.anapioficeandfire.com/api/characters`;
let page = 1; 
let carsPerPage = 3; 
let carsData = [];
 
async function getCars(){ 
    try { 
        const getData = await getFetch() 
        if (getData && getData.length > 0) { 
            carsData = getData; 
            console.log(carsData); 
            page = 1 
            unlockButton()
          getDataLayout(getData)   
        }  
    }catch(error){ 
        showError(error.message) 
    } 
     
} 
 
async function getFetch() { 
    try { 
        const fetchResponse = await fetch(url) 
          
        if (!fetchResponse.ok) { 
            throw new Error(`error http, status: ${fetchResponse.status}`) 
        } 
        return fetchResponse.json() 
 
    } catch (error) { 
        console.log(`get fetch error: ${error}`) 
        throw error; 
    } 
 
} 
 
 
 
function getDataLayout(cars) { 
    paginationContainer.innerHTML = '' 
    const start = (page-1)*carsPerPage; 
    const end = start + carsPerPage; 
    const currentPage = cars.slice(start, end) 
    currentPage.forEach((car) => { 
        const dataHTML = `  
    <div>  
        <p>id:${car.url}</p>  
        <p>name:${car.gender}</p>  
    </div>  
    ` 
    paginationContainer.innerHTML += dataHTML; 
    }) 
 
}

function unlockButton() {
    prevButton.disabled = page === 1;
    nextButton.disabled = page === Math.ceil(carsData.length / carsPerPage)
}
 
getCars()

function changeNextPage() {
    if(page < Math.ceil(carsData.length / carsPerPage)) {
        page++;
        unlockButton()
        getDataLayout(carsData)
    }
    console.log('change')
}


function changePreviousPage() {
    if(page > 1) {
        page--;
        unlockButton()
        getDataLayout(carsData)
    }
    console.log('changePrevious')
}
function showError(error) {
    paginationContainer.innerHTML = `<p>Error is ${error}</p>`
}

nextButton.addEventListener('click', changeNextPage)
prevButton.addEventListener('click', changePreviousPage)

