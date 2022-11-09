function playSound(event){
    if (event.key.length > 1) return;
    let keyCode = event.key.toUpperCase().charCodeAt(0);
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    if (!audio) return;

    audio.currentTime = 0;
    audio.play();

    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    key.classList.add('playing');
}

function removeTransition(event){
    if (event.propertyName != 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
document.addEventListener('keydown', playSound);

