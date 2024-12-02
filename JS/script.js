// Images du carrousel
const slides = [
	{
		"image":"slide1.jpg",
	},
	{
		"image":"slide2.jpg",
	},
	{
		"image":"slide3.jpg",
	},
	{
		"image":"slide4.jpg",
	},
    {
		"image":"slide5.jpg",
	},
    {
		"image":"slide6.jpg",
	},
    {
		"image":"slide7.jpg",
	},
    {
		"image":"slide8.jpg",
	},
    {
		"image":"slide9.jpg",
	}
]


// Variables pour l'état actuel
let index = 0 // Index de l'image actuelle
const bannerImage = document.querySelector(".banner-img") // Sélection de l'image du carrousel


// Création des dots
const dotsContainer = document.querySelector(".dots")

function switch_dot(){
	dotsContainer.innerHTML = "" //Réinitialisation des dots
	for (let image_slide = 0; image_slide < slides.length; image_slide++){
		const dot = document.createElement("div")
		dot.classList.add("dot")
		dotsContainer.appendChild(dot)
		if (image_slide === index){
			dot.classList.add("dot_selected")
		}
		// Événement de clic sur le dot
		dot.addEventListener('click', () => {
			index = image_slide; // Met à jour l'index sur clic
			updateBanner(); // Met à jour la bannière
		});
	}
}
switch_dot()


// Fonction pour mettre à jour l'image et le texte de la bannière
function updateBanner() {
	bannerImage.src = `./images/slides/${slides[index].image}` // Met à jour l'image
	
	// Met à jour les dots
	const dots = document.querySelectorAll('.dot')
	dots.forEach(dot => dot.classList.remove('dot_selected')) // Réinitialise les classes
	dots[index].classList.add('dot_selected') // Ajoute la classe active au dot courant

	// Vérifie l'image et le texte
	console.log(`Image source: ${bannerImage.src}`) 
}

// Initialisation du carrousel
switch_dot(); // Appel initial pour créer les dots
updateBanner(); // Appel initial pour mettre à jour la bannière avec la première image
console.log("Initialisation du carrousel")
