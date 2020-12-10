let subPages = document.querySelectorAll("main section");

// Bruges til navigationsknapper; viser en given side og sætter knappen til at være den aktive
function buttonClick(pageID, button) {
  showPage(pageID);
  let butt = document.querySelector(".active-tab");

  butt.classList.remove("active-tab");
  button.classList.add("active-tab");
}

// Viser en underside med et givent ID, og skjuler de andre
// Hvis det givne ID er ugyldigt, vis forsiden
function showPage(pageID) {
  let target;

  if (validID(pageID) === true) {
    target = document.querySelector(pageID);
  } else {
    target = document.querySelector("#forside");
  }

  for (let page of subPages) {
    hideElement(page);
  }

  // Nulstil scrollbaren for at hver underside vises fra starten
  window.scrollTo(0, 0);
  showElement(target);
}

// Skjuler et givent element
function hideElement(element) {
  element.style.display = "none";
}

// Viser et tidligere skjult element
function showElement(element) {
  element.style.display = "initial";
}

// Tjekker om et givent ID faktisk eksisterer blandt undersiderne; returnerer false hvis ikke
function validID(pageID) {
  let bool = false;
  for (let page of subPages) {
    if (("#" + page.id) === pageID) {
      bool = true;
      break;
    }
  }

  return bool;
}

// Indsætter nyheder i nyhedsfeed
function appendNews(newsList) {
  for (let news of newsList) {
    let newElement = document.createElement("li");
    newElement.innerHTML = `<a href='${news.link}'>${news.title}</a>`;

    document.querySelector(".newsfeed ul").appendChild(newElement);
  }
}

// Henter nyheder fra JSON filen
fetch('json/news.json')
.then(function(response) {
  return response.json();
})
.then(json => {
  appendNews(json.news);
});
