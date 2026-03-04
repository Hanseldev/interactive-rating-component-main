import './style.css'

const ratings = document.querySelectorAll("ul li")
const error = document.querySelector('.error')
const submit = document.querySelector('button')
const rateModal = document.querySelector('.rate')
const thanksModal = document.querySelector('.thanks')
const selectedRating = document.querySelector('.selected-rating')
let rating;

ratings.forEach((item) => {
    item.addEventListener('click', () => {
        rating = item.dataset.value

        ratings.forEach((item) => {
            item.classList.replace( 'bg-white', 'bg-grey-850')
            item.setAttribute('aria-checked', 'false')
        })
        
        item.setAttribute('aria-checked', 'true')
        item.classList.replace('bg-grey-850', 'bg-white')
    })

    item.addEventListener('keydown', e => {
        rating = item.dataset.value

        ratings.forEach((item) => {
            item.setAttribute('aria-checked', 'false')
        })
        item.setAttribute('aria-checked', 'true')
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            handleRating()
        }
    })
    
})

function handleRating() {
    if(!rating) {
        error.classList.remove('hidden')
    } else {
        selectedRating.textContent = rating;
        rateModal.classList.add('hidden')
        thanksModal.classList.remove('hidden')
    }
}

submit.addEventListener('click', handleRating)
