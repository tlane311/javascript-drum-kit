// we grab some dom elements a priori so that we aren't constantly querying the dom

const keys = [...document.getElementsByClassName('key')];
const audios = [...document.getElementsByTagName('audio')];

window.addEventListener('keydown', activateAndPlay);

keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition)
});

function removeTransition(e){
    if (e.propertyName !== 'transform') return;
    e.target.classList.toggle('playing',false);
}

function activateAndPlay(e){
    let keyCode = e.code;

    keys.forEach( key => {
        if (key.dataset.key===keyCode){
            key.classList.toggle("playing");
            const audio = audios.find(audio => audio.dataset.key===keyCode);
            if (audio){
                audio.currentTime=0;
                audio.play();
            }

        }
    })
}