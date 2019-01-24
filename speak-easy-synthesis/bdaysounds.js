var synth = window.speechSynthesis;
var document_body = document.getElementById('bdaytext');
/*var inputForm = document.querySelector('form');
var inputTxt = document.querySelector('.txt');
var voiceSelect = document.querySelector('select');

var pitch = document.querySelector('#pitch');
var pitchValue = document.querySelector('.pitch-value');
var rate = document.querySelector('#rate');
var rateValue = document.querySelector('.rate-value');
var Hvar = document.querySelector('#H');
*/
var voices = [];

function populateVoiceList() {
  voices = synth.getVoices().sort(function (a, b) {
      const aname = a.name.toUpperCase(), bname = b.name.toUpperCase();
      if ( aname < bname ) return -1;
      else if ( aname == bname ) return 0;
      else return +1;
  });
 /* var selectedIndex = voiceSelect.selectedIndex < 0 ? 0 : voiceSelect.selectedIndex;
  voiceSelect.innerHTML = '';
  for(i = 0; i < voices.length ; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
    
    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    voiceSelect.appendChild(option);
  }
  voiceSelect.selectedIndex = selectedIndex;*/
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

//function speak(){
/*    if (synth.speaking) {
        console.error('speechSynthesis.speaking');
        return;
    }
    if (inputTxt.value !== '') {
    var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    utterThis.onend = function (event) {
        console.log('SpeechSynthesisUtterance.onend');
    }
    utterThis.onerror = function (event) {
        console.error('SpeechSynthesisUtterance.onerror');
    }
    var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for(i = 0; i < voices.length ; i++) {
      if(voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    utterThis.pitch = pitch.value;
    utterThis.rate = rate.value;
    synth.speak(utterThis);*/
//  }
//}
/*function create_char_element(chartext)
{
    var node = document.createElement('H1');
    var nodeText= document.createTextNode(chartext);
    
    node.appendChild(nodeText);
    node.addEventListener('click', function(){
    speak_text(chartext);
    });
    document.getElementById("bdaytext").appendChild(node);​
    }*/


function speak_text(inputtext){
    if (synth.speaking) {
        console.error('speechSynthesis.speaking');
        return;
    }
    if (inputtext !== '') {
    var utterThis = new SpeechSynthesisUtterance(inputtext);
    utterThis.onend = function (event) {
        console.log('SpeechSynthesisUtterance.onend');
    }
    utterThis.onerror = function (event) {
        console.error('SpeechSynthesisUtterance.onerror');
    }
	//var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
	var selectedOption = 'en-GB';
    for(i = 0; i < voices.length ; i++) {
      if(voices[i].lang === selectedOption) {
        utterThis.voice = voices[i];
      }
     }
    //utterThis.voice = 
	utterThis.pitch =1;// pitch.value;
	utterThis.rate = 1;//rate.value;
	synth.speak(utterThis);
	console.log('Saying '+inputtext);
  }
}
function anotherFunction(a){
	var node = document.createElement("span");
    var textnode = document.createTextNode(a);
    if(a!=' '){
    node.addEventListener('click', function(){
	speak_text(a);
    });}
    
    node.appendChild(textnode); 
    document.getElementById("bdaytext").appendChild(node);
}
function meh(a)
{
var node = document.createElement("H2");
    var textnode = document.createTextNode(a); 
    
    
    node.appendChild(textnode); 
    document.body.append(node);
}

var text_to_display='H A P P Y '; 
var text_to_display2='B I R T H D A Y';
for(var i=0; i<text_to_display.length; i++){
    //if (text_to_display[i] != ' '){
	//create_char_element(text_to_display[i]);
    anotherFunction(text_to_display[i]);
    
    //}
}


//speak_text('Hi');
/*inputForm.onsubmit = function(event) {
  event.preventDefault();

  speak();

  inputTxt.blur();
}

pitch.onchange = function() {
  pitchValue.textContent = pitch.value;
}

rate.onchange = function() {
  rateValue.textContent = rate.value;
}

voiceSelect.onchange = function(){
  speak();
}
*/
function myFunction() {
    //document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
    speak_text("You clicked me");
}
