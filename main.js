var SpeechRecognition = window.webKitSpeechRecognition;
var recognition= new SpeechRecognition();

function start(){
document.getElementById("textbox").innerHTML= "";
recognition.start();
}

recognition.onresult= function run(event){

var Content= event.results[0][0].transcript;

document.getElementById("textbox").innerHTML= Content;
}