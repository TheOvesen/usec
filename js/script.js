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
