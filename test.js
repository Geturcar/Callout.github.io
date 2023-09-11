const callOut = ["1, 2, Opposite", "1, 2, Outside", "1, 2, Middle", "1, 2, Dump"]
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
        speech.text = Call;
        window.speechSynthesis.speak(speech);
        }
    }
