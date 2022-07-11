const $btn = document.getElementById('dice-btn')
const $title = document.getElementById('advice-generator-title')
const $advice = document.getElementById('advice-generator-text')

async function generateAdvice () {
	const data = await fetch('https://api.adviceslip.com/advice')
	const dataJSON = await data.json()
	const randomPhrase = dataJSON.slip

	$title.textContent = `Advice #${randomPhrase.id}`
	$advice.textContent = `“${randomPhrase.advice}”`
}

document.addEventListener('DOMContentLoaded', () => generateAdvice());

document.addEventListener('click', (e) => {
	if (e.target === $btn) generateAdvice()
});
