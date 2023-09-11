const callOut = ["Opposite", "Outside", "Middle", "Dump"]
const first = "1, 2, 3";
let speech = new SpeechSynthesisUtterance();
let Switch = false

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function Off(){
    if (Switch == true){
    Switch = false;
    }
    else{
        Switch = true;
    }
    TTS()
}
async function TTS(){
    while(Switch){
        await sleep(5000);
        let randNum = Math.floor(Math.random() * 4 );
        let Call = callOut[randNum];
        let text = first+Call;
        speech.text = text;
        window.speechSynthesis.speak(speech);
        await sleep(5000);
        }
    }
