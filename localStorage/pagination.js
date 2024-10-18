const paginationContainer = document.querySelector('.pagination');
const prevButton = document.querySelector('.prev')
const nextButton = document.querySelector('.next')
console.log(prevButton, nextButton)
const url = `https://www.anapioficeandfire.com/api/characters`;
let page = 1;
let carsPerPage = 5;
let carsData = []

async function getCars(){
    try {
        const getData = await getFetch()
        if (getData && getData.length > 0) {
            carsData = getData;
            console.log(carsData);
            page = 1
          getDataLayout(getData)  
        } 
    }catch(error){
        console.log(error)
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

getCars()