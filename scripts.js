  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //Off-switch for the function if there  is no audio.
    audio.currentTime = 0; //Auto-rewind
    audio.play();
    key.classList.add('playing');
  }
  function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);

