
document.querySelector('button').addEventListener('click', getCoordinates)

function getCoordinates(){

  let longitude = document.querySelector('.longitude').value

  let latitude = document.querySelector('.latitude').value

  fetch(`https://api.sunrise-sunset.org/json?lat=${latitude}&lng=${longitude}`)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data.results)
    document.querySelector(".sunrise").innerText = "Sunrise is: " + data.results.sunrise + " UTC"
    document.querySelector(".sunset").innerText = "Sunset is: " + data.results.sunset + " UTC"
  //   document.querySelector("img").src = data.drinks[0].strDrinkThumb
  //   document.querySelector("h3").innerText = data.drinks[0].strInstructions
  })
  .catch(err => {
      console.log(`error ${err}`)
  });


}

//lat=36.720160036 &lng=-4.4203400


// fetch(`https://api.sunrise-sunset.org/json?lat=${longitude}&lng=${latitude}`)
// .then(res => res.json()) // parse response as JSON
// .then(data => {
//   console.log(data.results)
//   document.querySelector(".sunrise").innerText = "Sunrise is: " + data.results.sunrise
//   document.querySelector(".sunset").innerText = "Sunset is: " + data.results.sunset
//   document.querySelector("img").src = data.drinks[0].strDrinkThumb
//   document.querySelector("h3").innerText = data.drinks[0].strInstructions

// })
// .catch(err => {
//     console.log(`error ${err}`)
// });
