fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())
  .then(data => {
    console.log(data);
    let container = document.getElementById('card-container')
    let newHTML = ''
    for (let i  = 0; i < data.length; i++) {
      const element = data[i];
      newHTML += `
        <div>
          <img src="${element.flags.png}" alt="${element.flags.alt}">
          <div>
              <span>${element.translations.por.common}</span>
              <p>Capital: ${element.capital && element.capital[0] ? element.capital[0] : 'sem capital definida'}</p>
          </div>
        </div>
      `
    }
    container.innerHTML = newHTML
  })