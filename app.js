var txtInput = document.querySelector("#txt-input");
var btnTranslator = document.querySelector("#btn-translator");
var output = document.querySelector("#output");
var url = "https://api.funtranslations.com/translate/ferb-latin.json";

function getTranslationURL(text){
    return url+"?"+"text= "+text;
}
function errorHandler(error){
    console.log("Error occured: "+error);
}
function btnOnClick(){
    var input = txtInput.value;
    fetch(getTranslationURL(input))
    .then(response => response.json())
    .then(json => {
        var tanslatedText = json.contents.translated;
        output.innerText = tanslatedText;
    })
    .catch(errorHandler);
};
btnTranslator.addEventListener("click", btnOnClick);