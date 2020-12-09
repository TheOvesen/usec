let subPages = document.querySelectorAll("main section");
let navButtons = document.querySelectorAll(".header nav div");

function buttonClick(pageID, button) {
  showPage(pageID);
  let butt = document.querySelector(".active-tab");

  butt.classList.remove("active-tab");
  button.classList.add("active-tab");
}

function showPage(pageID) {
  let target;
  if (validID(pageID) == true) {
    for (let page of subPages) {
      hideElement(page);
    }

    target = document.querySelector(pageID);
  } else {
    target = document.querySelector("#forside");
  }

  window.scrollTo(0, 0);
  showElement(target);
}

function hideElement(element) {
  element.style.display = "none";
}

function showElement(element) {
  element.style.display = "initial";
}

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

function appendNews(newsList) {
  for (let news of newsList) {
    let newElement = document.createElement("li");
    newElement.innerHTML = `<a href='${news.link}'>${news.title}</a>`;

    document.querySelector(".newsfeed ul").appendChild(newElement);
  }
}

fetch('json/news.json')
.then(function(response) {
  return response.json();
})
.then(json => {
  appendNews(json.news)
});
