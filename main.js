
var  btntranslate = document.querySelector("#button");
var  txtInput = document.querySelector("#txt-area")

function clickEventHandler() {
    console.log("clicked")
    console.log( txtInput.value)
}

btntranslate.addEventListener("click",clickEventHandler)