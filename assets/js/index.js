import '../scss/_main.scss'

const spinner = document.querySelector('.spinner')
const homeScore = document.querySelector('.home-score')
const awayScore = document.querySelector('.away-score')

const startSpinner = () => {
	if(!spinner.classList.contains('spinning')) {
		homeScore.textContent = randomnumber(0,5)
		awayScore.textContent = randomnumber(0,5)
	}
	
	spinner.classList.toggle('spinning')
}

spinner.addEventListener('click', startSpinner)

const randomnumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min