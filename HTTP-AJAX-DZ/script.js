const getInput = document.querySelector('input');
const getDataContainer = document.querySelector('.data-container');
console.log(getInput);
console.log(getDataContainer);



// import { fetchData } from './fetchCountries' 
// console.log(fetchData);


const countriesApi = 'https://restcountries.com/v3.1/all?fields=name,capital,population,languages,flags';
async function fetchData(search) {
    // console.log('hi', countriesApi) 
    try {
        const getData = await fetch(countriesApi)
        console.log(getData)
        if (!getData.ok) {
            throw new Error(`could not fetch data ${search}`)
        }
        return getData.json()
    } catch (err) {
        console.log(err)
    }
}
fetchData()

//script.js

async function showCountriesData() {
    const getFetchData = await fetchData()
    const inputValue = getInput.value.toLowerCase()
    if (getFetchData) {
        const filterCountries = getFetchData.find(country => country.name.official.toLowerCase().includes(inputValue))
    }

}
showCountriesData()
function renderCountries(country) {
const { name, flags, capital, population, languages } = country;
        const officialName = name.official
        const countryFlags = flags.png
        const countryLanguages = Object.values(languages).join(', ')
        const alt = 'Прапор не знайдено'
        getDataContainer.innerHTML = `
        <p>${officialName}</p>
        <p>${capital}</p>
        <p>${population}</p>
        <img alt='${alt}' src='${countryFlags}'>
        <p>${countryLanguages}</p>
    `
}
// const { name, flags, capital, population, languages } = filterCountries;
//         const officialName = name.official
//         const countryFlags = flags.png
//         const countryLanguages = Object.values(languages).join(', ')
//         getDataContainer.innerHTML = `
//         <p>${officialName}</p>
//         <p>${capital}</p>
//         <p>${population}</p>

//         `