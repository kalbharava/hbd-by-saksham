// script.js — handles candle toggle, simple music play, and accessibility
document.addEventListener('DOMContentLoaded', function(){
  const candle = document.getElementById('candle');
  const toggleBtn = document.getElementById('toggleBtn');
  const audio = document.getElementById('bdayAudio');
  const playBtn = document.getElementById('playMusic');
  const stopBtn = document.getElementById('stopMusic');

  function toggleCandle() {
    candle.classList.toggle('out');
    // aria label update
    const state = candle.classList.contains('out') ? 'out' : 'lit';
    candle.setAttribute('aria-pressed', state === 'out' ? 'true' : 'false');
    toggleBtn.innerText = state === 'out' ? 'Light Candle' : 'Blow Candle';
  }

  // click on candle toggles flame
  candle.addEventListener('click', toggleCandle);
  toggleBtn.addEventListener('click', toggleCandle);

  // Keyboard support: Enter or Space on candle
  candle.setAttribute('tabindex', 0);
  candle.addEventListener('keydown', function(e){
    if(e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleCandle();
    }
  });

  // Audio controls
  playBtn.addEventListener('click', function(){
    if(!audio) return;
    audio.play().catch(()=>{ /* autoplay may be blocked; user-initiated works */ });
  });
  stopBtn.addEventListener('click', function(){
    if(!audio) return;
    audio.pause();
    audio.currentTime = 0;
  });

  // progressive enhancement: ensure clickable area large on small screens
  candle.style.cursor = 'pointer';
});
