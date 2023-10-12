let city
const apiKey = '155552e8b3e2d9f475cef7d38b675123'

document.getElementById('button').addEventListener('click',function(e){
    e.preventDefault()
    city = document.querySelector('input').value
    async function getWeatherData(){
        try {
            const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`)
            const data = await response.json()
            document.querySelector('h2').innerHTML = `${city}`
            const lat = data[0].lat
            const lon = data[0].lon

            async function getWeather(){
                try {
                    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
                    const resp = await res.json()
                    const temp = resp.main.temp
                    document.querySelector('h1').innerHTML = `${temp}°C`
                    const humidity = resp.main.humidity
                    document.querySelector('p').innerHTML = `${humidity}%`
                    const wind = resp.wind.speed
                    document.querySelectorAll('p')[2].innerHTML = `${wind} km/h`
                    const weather = resp.weather[0].main
                    document.querySelectorAll('img')[1].setAttribute('src',`/images/${weather}.png`)
                    
                } catch (error) {
                    console.log(error);
                }
            }

            getWeather()

        } catch (error) {
            console.log(error);
        }
    }
    
    getWeatherData()
})