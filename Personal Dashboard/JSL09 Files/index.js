// Fetching a random background image for my dashboard from Unsplash API
// If the fetch is successful, set the background image and display the author's name
// If there's an error with the fetch, set a default background image and author's name
fetch(
  "https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature"
)
  .then((res) => res.json())
  .then((data) => {
    document.body.style.backgroundImage = `url(${data.urls.regular})`;
    document.getElementById("author").textContent = `By: ${data.user.name}`;
  })
  .catch((err) => {
    document.body.style.backgroundImage = `url("https://images.unsplash.com/photo-1712678486360-b052af40d7b0?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
)`;
    document.getElementById("author").textContent = `By: Wolfgang Hasselmann`;
  });

// Fetching current data on Ethereum cryptocurrency from CoinGecko API
// If the fetch is successful, display the cryptocurrency name, current price, high and low prices in the last 24 hours
// If there's an error with the fetch, log the error in the console
fetch("https://api.coingecko.com/api/v3/coins/ethereum")
  .then((res) => {
    if (!res.ok) {
      throw Error("Something went wrong");
    }
    return res.json();
  }) // checking if the response from the fetch request is successful, and if not, throwing an Error. If the response was successful, it returns a new Promise that resolves to the parsed JSON data.

  .then((data) => {
    document.getElementById("crypto-top").innerHTML = `
        <img src=${data.image.small} /> 
        <span>${data.name}</span>
    `;
    document.getElementById("crypto").innerHTML += `
        <p>🎯: $${data.market_data.current_price.usd}</p>
        <p>👆: $${data.market_data.high_24h.usd}</p>
        <p>👇: $${data.market_data.low_24h.usd}</p>
    `;
  })
  .catch((err) => console.error(err));

// Function to get and display the current time
function getCurrentTime() {
  const date = new Date();
  document.getElementById("time").textContent = date.toLocaleTimeString(
    "en-us",
    { timeStyle: "long" }
  );
}

// Calling the getCurrentTime function every second to update the time
setInterval(getCurrentTime, 1000);

// Fetching weather data from OpenWeatherMap API using the user's current location
// If the fetch is successful, display the weather icon, temperature, and city name
// If there's an error with the fetch, log the error in the console
navigator.geolocation.getCurrentPosition((position) => {
  fetch(
    `https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric`
  )
    .then((res) => {
      if (!res.ok) {
        throw Error("Weather data not available");
      }
      return res.json();
    })
    .then((data) => {
      const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      document.getElementById("weather").innerHTML = `
                <img src=${iconUrl} />
                <p class="weather-temp">${Math.round(data.main.temp)}º</p>
                <p class="weather-city">${data.name}</p>
            `;
    })
    .catch((err) => console.error(err));
});
