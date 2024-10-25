let favoritt = loadFavoritt();
let favotittList = document.querySelector("#favoritt");

for (const image of favoritt) {
  let imageCard = document.createElement("li");
  imageCard.textContent = image.name;

  favotittList.append(imageCard);
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
