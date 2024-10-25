//Hent ut all "card" fra HTML
let allImageCards = document.querySelectorAll(".card");

//for hver av kortene, legg til en favoritt funksjon
for (const imageCard of allImageCards) {
  //Hent ut favoritt knappen
  let favorittButton = imageCard.querySelector("button");

  //Så legger vi til egen funksjon, arrow funksjon "() => ()"
  favorittButton.addEventListener("click", () => {
    toggleFavorited(imageCard);
  });
}

/**
 //Favoritt funksjonen
 * 
 * @param {Element} card 
 */
function toggleFavorited(card) {
  console.log(card);
  //hent ut bilde url og bilde navn
  let image = card.querySelector("img");
  //lag bilde objekt
  let imageObject = {
    url: image.src,
    name: image.alt,
  };

  let favoritt = loadFavoritt();

  //Anta at vi ikke har lagt den til i favoritt enda

  favoritt.push(imageObject);

  //lagre den oppdaterte listen i local storage
  let updatedFavorittString = JSON.stringify(favoritt);
  localStorage.setItem("favoritt", updatedFavorittString);
}

function loadFavoritt() {
  //last inn favoritt listen fra local storage
  let favorittString = localStorage.getItem("favoritt");

  let favoritt;
  if (favorittString === null) {
    // hvis første gang på siden, lag et nytt array (liste)
    favoritt = [];
  } else {
    //hvis vi har vert her før, konverter fra tekst streng til et array (liste)
    favoritt = JSON.parse(favorittString);
  }

  return favoritt;
}
