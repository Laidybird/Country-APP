/**
 * Declare the searchBtn and CountryInp variables
 */
let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
/**
 * Creat the event listener
 */

searchBtn.addEventListener("click", () => {
    let countryName = countryInp.value;
    let finalURL =`https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalURL);
    fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data[0]);
        console.log(data[0].capital[0]);
        console.log(data[0].flags.svg);
        console.log(data[0].name.common);
        console.log(data[0].continents[0]);
        console.log(Object.keys(data[0].currencies)[0]);
        console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
        console.log(Object.values(data[0].languages).toString().split(",").join(","));
        console.log(data[0].timezones[0])
        console.log(Object.values(data[0].borders).toString().split(",").join(","));
        results.innerHTML = `
        <img src="${data[0].flags.svg}" class="flag-img">
        <h2>${data[0].name.common}</h2>
        <div class="wrapper">
           <div class="data-wrapper">
              <h4>Capital:</h4>
              <span>${data[0].capital[0]}</span>
            </div>
        </div>
        <div class="wrapper">
           <div class="data-wrapper">
              <h4>Continent:</h4>
              <span>${data[0].continents[0]}</span>
            </div>
        </div>
        <div class="wrapper">
           <div class="data-wrapper">
              <h4>Population:</h4>
              <span>${data[0].population}</span>
            </div>
        </div>
        <div class="wrapper">
           <div class="data-wrapper">
              <h4>Currencies:</h4>
              <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</span>
            </div>
        </div>
        <div class="wrapper">
           <div class="data-wrapper">
              <h4>Common Languages:</h4>
              <span>${Object.values(data[0].languages)
                .toString()
                .split(",")
                .join(",")}</span>
            </div>
        </div>
        <div class="wrapper">
           <div class="data-wrapper">
              <h4>Timezone:</h4>
              <span>${data[0].timezones[0]}</span>
            </div>
        </div>
        <div class="wrapper">
           <div class="data-wrapper">
              <h4>Borders:</h4>
              <span>${Object.values(data[0].borders)
                .toString()
                .split(",")
                .join(",")}</span>
            </div>
        </div>
        `;
        
       

        
        
    })
/***
 * Creat a statement to specify what to do in case of an error
 */
    .catch(() => {
        if (countryName.length == 0){
            results.innerHTML = `<h3>The input field cannot be empty</h3>`;
        }
        else {
            results.innerHTML = `<h3>Please enter a valid country name.</h3>`;
        }
    })
});