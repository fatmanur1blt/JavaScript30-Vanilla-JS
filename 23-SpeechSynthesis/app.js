const msg =new SpeechSynthesisUtterance();
//text is converted to audio becouse of the SpeechSynthesisUtterance();

let voices = [];
const voicesEl = document.querySelector('[name="voice"]');
const optionsEl = document.querySelectorAll('[type="range"], [name="text"]');
const startBtn = document.querySelector('#start-btn');
const stopBtn = document.querySelector('#stop-btn');
msg.text=document.querySelector('[name="text"]').value;

function populateVoices() {
    voices = this.getVoices();
    voicesEl.innerHTML = voices
      .filter(voice => voice.lang.includes('en'))
      .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
      .join('');
  }

  function setVoice() {
    msg.voice = voices.find(voice => voice.name === this.value);
    toggle();
  }

  function toggle(startOver = true) {
    speechSynthesis.cancel();
    if (startOver) {
      speechSynthesis.speak(msg);
    }
  }

  function setOption() {
    msg[this.name] = this.value;
    toggle();
  }

  speechSynthesis.addEventListener('voiceschanged', populateVoices);
  voicesEl.addEventListener('change', setVoice);
  optionsEl.forEach(option => option.addEventListener('change', setOption));
  startBtn.addEventListener('click', toggle);
  stopBtn.addEventListener('click', () => toggle(false));