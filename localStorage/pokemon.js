const form = document.getElementById("search-form"); 
const inputPokeId = document.getElementById("pokemon-id"); 
const button = document.getElementById("search-button"); 
const container = document.getElementById("pokemon-container"); 
 
form.addEventListener('submit', getPokemonFetchData) 
 
function getPokemonFetchData(event) { 
  console.log('hi'); 
  event.preventDefault() //Запобігає автоматичному оновленню сторінки 
  const value = inputPokeId.value //отримуємо значення інпуту 
  console.log(value) 
  if(value) { //Якщо в інпуті введено значення  
    try { 
const getDataApiSave = getDataApi(value) 
inputPokeId.value = '' 
    } catch(error) { 
errors(error.message)
    } 
  } 
} 
getPokemonFetchData() 
 
async function getDataApi(name) { 
  const pokeApi = 'https://pokeapi.co/api/v2/pokemon/'; 
  const responseApi = await fetch(pokeApi) 
  if (!responseApi.ok) { 
    throw new Error('Could not fetch data for ${name}:responseApi.statusText'); 
  } 
  return responseApi.json()  
} 
 
function displayPokemonDate(pokemon) { 
  const layout = ` 
    <div> 
        <p>name: ${pokemon.name}</p> 
        <p>height: ${pokemon.height}</p> 
        <p>abilities: ${pokemon.ability.name}</p> 
        <p>type: ${pokemon.type}</p> 
    </div> 
    `; 
    container.innerHTML = layout;
}

function errors(error) {
    container.innerHTML = <p>type: ${error}</p> 
}