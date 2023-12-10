let parentBlock = document.querySelector(".main-cards")
let input = document.querySelector("#input-one")

input.addEventListener("input", (e)=>{
	let value = e.target.value.trim()
	let newArray = DATA.filter(i => i.name.match(value))
	parentBlock.innerHTML = ""
	render(newArray)
})

function render(array) {
	array.forEach(e => {
		let block = document.createElement("DIV");
		block.classList.add("main-cards__block")
		block.innerHTML = `
			<img src="${e.image}" alt="photo none">
			<div class="main-cards_about">
				<h2 class="main-cards_name">${e.name}</h2>
				<p class="main-cards_actor">Actor: ${e.actor}</p>
				<p class="main-cards_gender">Gender: ${e.gender}</p>
				<p class="main-cards_house">House: ${e.house}</p>
				<p class="main-cards_core">Wand core: ${e.core}</p>
				<p class="main-cards_alive">Alive: ${e.alive}</p>
			</div>
			`
	parentBlock.append(block)
});
}
render(DATA)
