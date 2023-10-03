// JavaScript Document
var knopje = document.getElementsByClassName("knopje");
var i;


/* eerst wordt de class .knopje geselecteerd door de eerste regel. De addEventListener
zorgt ervoor dat er een actie uitgevoerd word zodra er op geklikt wordt. De toggle 
active zorgt ervoor dat er een class wordt toegevoegd als deze er nog niet is. 
Bij de var panel wor dhet volgende onderdeel opgeslagen in de var.panel.
Hier wordt gecontroleerd of het panel momenteel zichtbaar is 
(display block). Als dat het geval is, wordt de volgende regel uitgevoerd om het panel 
te verbergen. Anders wordt het panel weergegeven.
 display none, zorgt ervoor dat het verborgen wordt. display block betkent dat de 
 waardes zihctbaar zijn.*/

for(i=0;i<knopje.length; i++){
    knopje[i].addEventListener('click', function(){
        this.classList.toggle("active");

        var panel = this.nextElementSibling;
        if(panel.style.display === "block"){
            panel.style.display = "none";
        } else{
            panel.style.display = "block";
        }
    })
}

/*
document.addEventListener('DOMContentLoaded', function() {
    const myForm = document.getElementById('myForm');
    const resultaatDiv = document.getElementById('resultaat');

    myForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        /*Dit stukje code zorgt ervoor dat de gegevens opgehaald worden */
        const naam = document.getElementById('naam').value;
        const email = document.getElementById('email').value;

        /*Deze code zorgt ervoor dat de gegevens verstuurt worden. In dit
        geval naar de div genaamd resultaat *//*
        resultaatDiv.innerHTML = `Naam: ${naam}<br>E-mail: ${email}`;
    });
});
*/

document.addEventListener('DOMContentLoaded', function() {
    const myForm = document.getElementById('myForm');
    const resultaatDiv = document.getElementById('resultaat');

    myForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Activeer de loader bij het indienen van het formulier
        const loader = document.querySelector('.loader');
        loader.style.opacity = '1';

        /* Simuleer een vertraging (bijv. 2 seconden) om de gebruiker de loader te laten zien */
        setTimeout(function() {
            const naam = document.getElementById('naam').value;
            const email = document.getElementById('email').value;

            /* Deze code zorgt ervoor dat de gegevens naar de div genaamd resultaat worden verzonden */
            resultaatDiv.innerHTML = `Naam: ${naam}<br>E-mail: ${email}`;

            // Herstel de loader
            loader.style.opacity = '0';
        }, 2000); // 2000 milliseconden = 2 seconden (aanpassen aan je behoeften)
    });
});




var icon = document.getElementById("icon");

/*Deze code  */
icon.onclick = function(){
    /*Dit zorgt ervoor dat de class dark-theme word toegevoegd */
    document.body.classList.toggle("dark-theme");

    /* dit controleert de status, in dit geval dus of de dark mode actief is of niet.
    als de de dark-modus actief is word de img een zon */
    if(document.body.classList.contains ("dark-theme")){
        icon.src = "images/zon.png";
    }

    /*Als de dark modus niet actief is de maan img weer word gegeven */
    else{
        icon.src = "images/maan.png";
    }
}


const headerImage = document.getElementById('headerImage');
const changeImageButton = document.getElementById('changeImageButton');
const imageSources = ['images/o.png', 'images/1.png', 'images/2.png', 'images/3.png'];

/*deze variable houdt bij welke afbeelding op dat moment word weergegeven. */
let currentImageIndex = 0;

/*als deze functie word de image gewijzig*/
function changeImage() {

    /*de image index word met 1 verhoogd, met de lengte van de afbeelding.
    de image source zorgt ervoor dat de afbeelding past */
    currentImageIndex = (currentImageIndex + 1) % imageSources.length;

    /*Hier worden de nieuwe afbeeldingen opgehaald */
    const newImageSrc = imageSources[currentImageIndex];

    /*Hierdoor wordt de afbeelding ook daadwerkelijk gewijzigd */
    headerImage.src = newImageSrc;
}
/*dit zorgt ervoor dat de afbeeldingen gewijzigd worden bij het klikken van de buttons */
changeImageButton.addEventListener('click', changeImage);
