const API = 'https://pokeapi.co/api/v2/'
const species = 'pokemon/'
let number = '1/'

let c = number.match(/.*[^/]/)
console.log(parseInt(c))

function addNumber() {
  let a = number.match(/.*[^/]/)
  a = parseInt(a) + 1
  number = number.replace(/.*[^/]/, a)
  console.log(number)
}

function subtractNumber() {
  let a = number.match(/.*[^/]/)
  console.log(typeof parseInt(a), parseInt(a))
  a = parseInt(a) - 1
  number = number.replace(/.*[^/]/, a)
  console.log(number)
}

function showPokemon() {
  const pokeContainer = document.getElementById('container')
  if (number.match(/.*[^/]/) == 0) {
    return pokeContainer.innerHTML = `<h1>No existe el pokemon N.° ${number.match(/.*[^/]/)}</h1>`
  }

  if (number.match(/.*[^/]/) < 0) {
    return pokeContainer.innerHTML = `<h1>No existe el pokemon N.° ${number.match(/.*[^/]/)}</h1>`
  }


  pokeContainer.innerHTML = ''
  const xhr = new XMLHttpRequest()
  xhr.open('GET', API+species+number, true)

  xhr.onload = function () {
    if(xhr.status === 200) {
      let pokemons = JSON.parse(xhr.response)
      
      const pokeCard = document.createElement('div')
      const pokeImg = document.createElement('img')
      const pokeTypes = document.createElement('div')
      pokeImg.src = pokemons.sprites.other.dream_world.front_default
      pokeCard.innerHTML = `N.°00${pokemons.id} <br />${pokemons.name}` 
      pokeTypes.innerHTML = "Tipo/s de Pokemon: <br />"
      pokeContainer.appendChild(pokeImg)
      pokeContainer.appendChild(pokeCard)
      pokeContainer.appendChild(pokeTypes)
      
      pokemons.types.forEach(e => {
        pokeTypes.insertAdjacentHTML('beforeEnd', `${e.type.name}<br />`)
      })
    }
  }
  xhr.send()
}

function nextPokemon() {
  addNumber()
  showPokemon()
}

function previousPokemon() {
  subtractNumber()
  showPokemon()
}

