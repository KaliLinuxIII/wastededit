/**
 * @type HTMLAudioElement
 */
const wastedEditAudio = document.getElementById('wasted-edit-audio');
/**
 * @type HTMLButtonElement
 */
const playBtn = document.querySelector('.play-btn');
/**
 * @type HTMLParagraphElement
 */
const editTextDisplay = document.querySelector('.edit-text-display');
/**
 * HTMLDivElement
 */
const editDisplay = document.querySelector('.edit-display');

const step1 = () => {
  editTextDisplay.textContent = 'hold up';
  editDisplay.classList.add('step1');
};
const step2 = () => {
  editTextDisplay.textContent = 'let';
  editDisplay.classList.add('step2');
};
const step3 = () => {
  editTextDisplay.textContent = 'me';
};
const step4 = () => {
  editTextDisplay.textContent = 'be';
};
const step5 = () => {
  editTextDisplay.textContent = 'honest';
};
const step6 = () => {
  editTextDisplay.textContent = 'I';
};
const step7 = () => {
  editTextDisplay.textContent = 'know';
};
const step8 = () => {
  editTextDisplay.textContent = 'I';
};
const step9 = () => {
  editTextDisplay.textContent = 'saw';
};
const step10 = () => {
  editTextDisplay.textContent = 'her';
};
const step11 = () => {
  editTextDisplay.textContent = 'put';
};
const step12= () => {
  editTextDisplay.textContent = 'the';
};
const step13 = () => {
  editTextDisplay.textContent = 'perks';
};
const step14 = () => {
  editTextDisplay.textContent = 'in';
};
const step15 = () => {
  editTextDisplay.textContent = 'my';
};
const step16 = () => {
  editTextDisplay.textContent = 'chronic';
  editDisplay.classList.add('step3');
};
const step17 = () => {
  editTextDisplay.textContent = 'smokin';
};
const step18 = () => {
  editTextDisplay.textContent = 'till';
};
const step19 = () => {
  editTextDisplay.textContent = 'my';
};
const step20 = () => {
  editTextDisplay.textContent = 'eyes';
};
const step21 = () => {
  editTextDisplay.textContent = 'roll';
  editDisplay.classList.add('step21');
};
const step22 = () => {
  editTextDisplay.textContent = 'back';
};
const step23= () => {
  editTextDisplay.textContent = 'like';
};
const step24 = () => {
  editTextDisplay.textContent = 'the';
};
const step25 = () => {
  editTextDisplay.textContent = 'old';
};
const step26 = () => {
  editTextDisplay.textContent = 'man';
};
const step27 = () => {
  editTextDisplay.textContent = 'just';
};
const step28 = () => {
  editTextDisplay.textContent = 'another';
};
const step29 = () => {
  editTextDisplay.textContent = 'funeral';
};
const step30 = () => {
  editTextDisplay.textContent = 'for';
};
const step31 = () => {
  editTextDisplay.textContent = 'her';
};
const step32 = () => {
  editTextDisplay.textContent = 'godamn';
};
const step33 = () => {
  editTextDisplay.textContent = 'wasted';
};

function playWastedEditAudio() {
  wastedEditAudio.play();
  setTimeout(step1, 2780);
  setTimeout(step2, 4087);
  setTimeout(step3, 4347);
  setTimeout(step4, 4573);
  setTimeout(step5, 4913);
  setTimeout(step6, 5975);
  setTimeout(step7, 6261);
  setTimeout(step8, 6485);
  setTimeout(step9, 6669);
  setTimeout(step10, 6771);
  setTimeout(step11, 7199);
  setTimeout(step12, 7423);
  setTimeout(step13, 7790);
  setTimeout(step14, 8158);
  setTimeout(step15, 8300);
  setTimeout(step16, 8545);
  setTimeout(step17, 9422);
  setTimeout(step18, 9810);
  setTimeout(step19, 10034);
  setTimeout(step20, 10401);
  setTimeout(step21, 10768);
  setTimeout(step22, 11196);
  setTimeout(step23, 11849);
  setTimeout(step24, 11961);
  setTimeout(step25, 12237);
  setTimeout(step26, 12644);
  setTimeout(step27, 13114);
  setTimeout(step28, 13501);
  setTimeout(step29, 14031);
  setTimeout(step30, 14725);
  setTimeout(step31, 15051);
  setTimeout(step32, 15908);
  setTimeout(step33, 16663);

  playBtn.disabled = true;
  playBtn.style.opacity = 0;
};

playBtn.addEventListener('click', playWastedEditAudio);
