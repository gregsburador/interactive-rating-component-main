const submit = document.getElementById("submit")
const card = document.getElementById("flip-card-inner")
const ratingResult = document.getElementById("ratingResult")
const ratings = document.querySelectorAll('.ratings > li')


let selectedRate = 0
let prevSelected


for(let i = 0; i < ratings.length; i++){
     ratings[i].addEventListener("click", (e) => {
          
          if(prevSelected !== undefined){
               let prev = document.getElementById(prevSelected)
               prev.classList.remove("active")
          }

          ratings[i].classList.add("active")
          prevSelected = e.target.id
          selectedRate = ratings[i].innerText

          if(selectedRate != 0) {
               submit.classList.add("submitHover")
               submit.addEventListener('click', () => {
                    card.classList.add("animated")
                    ratingResult.innerHTML = selectedRate
               })
          }
     })
}




