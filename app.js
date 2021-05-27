const translateBtn = document.querySelector("#btn-translate");
const textBox = document.querySelector("#inpBox");
const outputDiv = document.querySelector("#output");

var url ="https://api.funtranslations.com/translate/minion.json";

const getTranslationURL = (text) => {
return url + "?text=" + text;

}

translateBtn.addEventListener("click",() => {

  fetch(getTranslationURL(textBox.value))
  .then(response => response.json())
  .then(result => outputDiv.innerText= result.contents.translated ).catch(err => console.log("error occured", err));
})