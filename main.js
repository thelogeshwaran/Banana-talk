
var  btntranslate = document.querySelector("#button");
var  txtInput = document.querySelector("#txt-area")
var outputDiv = document.querySelector(".output")

 var serverUrl ="https://api.funtranslations.com/translate/minion.json" 

/** var serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json" */

function getTransUrl(input){
    var url =  serverUrl + "?text"+ input 
    return url

}

function errorHandler(error){
    alert("There is something wrong in the server! Try again sometime")
}

function clickEventHandler() {

    var txtvalue = txtInput.value

    fetch(getTransUrl(txtvalue))
        .then(response => response.json())
        .then(json =>{
            var output = json.contents.translated
            outputDiv.innerText= output})
        .catch(errorHandler)
    
}

btntranslate.addEventListener("click",clickEventHandler)