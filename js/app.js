const condition = document.getElementById('condition')
const city = document.getElementById('city')
const country = document.getElementById('country')
const mainText = document.getElementById('main')
const description = document.getElementById('description')
const temp = document.getElementById('temp')
const pressure = document.getElementById('pressure')
const humidity = document.getElementById('humidity')

const cityInput = document.getElementById('city-input')
const historyElement = document.getElementById('history')
const masterHistory = document.getElementById('master-history')

const API_KEY = 'b2884273684eedbb0aa887dd54262ae2'

const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`

const ICON_URL = 'https://openweathermap.org/img/w/'

const DEFAULT_CITY  = 'rajshahi, bd'

window.onload = function () {
  navigator.geolocation.getCurrentPosition(success => {
    getWeatherData(null, success.coords)
  }, err => {
    getWeatherData()
  })
}

function getWeatherData(city = DEFAULT_CITY, coords) {
  let url = BASE_URL
  city === null ? url = `${url}&lat=${coords.latitude}&lon=${coords.longitude}` : url = `${url}&q=${city}`
  console.log(url)

  axios.get(url)
    .then(res => {
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })

}
