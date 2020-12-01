var btnTranslate = document.querySelector("#button");
var txtInput = document.querySelector("#txt-area");
var outputDiv = document.querySelector("#output");

 /** var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json" **/

var serverURL = "https://api.funtranslations.com/translate/minion.json" 


function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    alert("Something wrong with server! Try again after some time")
}


function clickHandler() {
    var inputText = txtInput.value;

   
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText; 
           })
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)