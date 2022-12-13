const pianoKeys = document.querySelectorAll('.piano-keys .key');
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheckbox = document.querySelector(".keys-checkbox input");


let allKeys = []
audio =new Audio("tunes/a.wav");//by default audio src is 'a' tume


const playTune = (key) =>{
    audio.src = `tunes/${key}.wav`;
    audio.play();
    console.log(allKeys);

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active")
    setTimeout(()=>{
        clickedKey.classList.remove("active")
    },150)

}
pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key)
    //calling play tune function with passing data-key as an argument
    key.addEventListener('click',()=>{
        return playTune(key.dataset.key)
    })
})

const pressedKey =(e)=>{
    //if the pressed key is in the allkeys array, only call playTune ,ethod
    if(allKeys.includes(e.key)){
        playTune(e.key);
    }
}

const handleVolume = (e)=>{
    audio.volume = e.target.value;//passing the range slider value as an audio volume
}

const showHideKeys =()=>{
    //toggling hide class from each key on the checkbox click
    pianoKeys.forEach(key=>key.classList.toggle('hide'))

}
keysCheckbox.addEventListener('click',showHideKeys)
volumeSlider.addEventListener('input',handleVolume)
document.addEventListener("keydown",pressedKey)

