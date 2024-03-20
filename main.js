//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)
const pic= document.querySelector('.buddha')
 
function getFetch(){
  const url = `https://api.adviceslip.com/advice`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
       
       pic.classList.toggle('hidden')
        document.querySelector('h3').innerText=data.slip.advice
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

