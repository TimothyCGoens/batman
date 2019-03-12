let movies = document.getElementById('movies')
let batmanMovieList = document.getElementById('batmanMovieList')
let showMeBatmanMovies = document.getElementById('showMeBatmanMovies')
let movieInfo = document.getElementById('movieInfo')

showMeBatmanMovies.addEventListener('click', function(){

  let batmanMovieURL = "http://www.omdbapi.com/?s=batman&apikey=3983b9ed"

  let request = new XMLHttpRequest()

  request.open("GET", batmanMovieURL)
  request.send()

  request.onload = function() {

    if(request.status != 200) {
      console.log("Server Not Found.")
    } else {
      console.log("Response Recieved")
      let moviesResponse = JSON.parse(request.responseText)
      displayBatmanMovies(moviesResponse)
      }
    }
  })

function displayBatmanMovies(movie) {

  let batmanMovies = movie.Search.map(function(stuff){

    return `<div id="firstList"><li class="movieAndTitle" onclick="displayMovieDetails('${stuff.imdbID}')">
            <img src=${stuff.Poster}></li></div>`

  })

  batmanMovieList.innerHTML = batmanMovies.join('')

}


function displayMovieDetails(id) {

  let batmanMovieInfo = "http://www.omdbapi.com/?i="+id+"&apikey=3983b9ed"

  let request = new XMLHttpRequest()

  request.open("GET", batmanMovieInfo)
  request.send()

  request.onload = function() {

  if(request.status != 200) {
    console.log("Server Not Found.")
  } else {
    console.log("Response Recieved")
    let movieInfo = JSON.parse(request.responseText)
    showBatmanMovieInfo(movieInfo)
  }
}}

function showBatmanMovieInfo(id){

  let info =  `<div id="movieInfo">
               <img src="${id.Poster}" id="posterInfo">
               <div id="infoStuffs">
               <li>${id.Title}</li>
               <li>${id.Year}</li>
               <li>${id.Rated}</li>
               <li>${id.Director}</li></div></div>`

  movieInfo.innerHTML = info
}


$('#showMeBatmanMovies').hide().delay(1000).fadeIn(2500)
$('#showMeBatmanMovies').click(function(){
  // $('#showMeBatmanMovies').hide()

  let $newButton = $('<button id="batmobile">To the Batmobile</button>')
  
})
