const callOut = ["Opposite ", "Outside ", "Middle ", "Dump "]
const first = "3, 2, 1";
const button = document.getElementById("Switch");
let speech = new SpeechSynthesisUtterance();
let Switch = false

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function Off(){
    if (Switch == true){
    Switch = false;
    button.innerHTML="OFF";
    }
    else{
        Switch = true;
        button.innerHTML="ON";
    }
    TTS()
}
async function TTS(){
    while(Switch){
        await sleep(5000);
        let randNum = Math.floor(Math.random() * 4 );
        let Call = callOut[randNum];
        let text = Call+first;
        speech.text = text;
        window.speechSynthesis.speak(speech);
        await sleep(5000);
        }
    }
