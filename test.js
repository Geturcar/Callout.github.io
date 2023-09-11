const callOut = ["Opposite", "Outside", "Middle", "Dump"]
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
    console.log(Switch);
}
async function TTS(){
    while(Switch){
        let randNum = Math.floor(Math.random() * 4 );
        let Call = callOut[randNum];
        console.log(randNum);
        speech.text = Call;
        window.speechSynthesis.speak("1 2  " + speech);
        await sleep(5000);
        }
    }
