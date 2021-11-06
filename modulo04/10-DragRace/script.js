const inputName = document.querySelector('input');
const startBtn = document.querySelector('button[name="startBtn"]');
const stopBtn = document.querySelector('button[name="stopBtn"]');
const ul = document.querySelector('ul');
let bestTime;

const _CLASS_ACTIVE = '--is-active';

const activeButton = (button) => {
  button.classList.add(_CLASS_ACTIVE);
  button.removeAttribute('disabled','disabled');
};

const deactiveButton = (button) => {
  button.classList.remove(_CLASS_ACTIVE);
  button.setAttribute('disabled', 'disabled');
};

const createPLayer = () => {
  player = [{
    name: String,
    time: Number
  }]
  player.name = inputName.value;
  getStartTime();
  return player;
};

const savePlayer = (player) => {
  getStopTime();
  getPlayerTime(start, end, player);
  sessionStorage.setItem(player.name, player.time);
  createListOfPlayers(player)
};

const getBestPlayer = (time, player) => {
  if (isNaN(time)) {
    localStorage.clear();
    time = player.time;
    localStorage.setItem(player.name, player.time);
  }; 
  if ( player.time < time) {
    time = player.time;
    localStorage.clear();
    localStorage.setItem(player.name, player.time);
  }
  return bestTime = time;
}

const createListOfPlayers = (player) => {
  playerName = player.name
  const createLi = document.createElement('li');
  ul.appendChild(createLi);
  const li = ul.lastElementChild
  li.innerText = `Player: ${player.name} ==> ${player.time}`
};

const getStartTime = () => { return start = performance.now()};
const getStopTime = () => { return end = performance.now()};
const getPlayerTime = (startTime, stopTime, player) => {
  const start = startTime;
  const stop = stopTime;
  const getTime = (stop - start) / 1000;
  player.time = getTime;
  return player
}

startBtn.onclick = function () {
  activeButton(stopBtn);
  deactiveButton(startBtn);
  createPLayer();
};

stopBtn.onclick = function () {
  activeButton(startBtn);
  deactiveButton(stopBtn);
  savePlayer(player);
  getBestPlayer(bestTime, player);
  inputName.value = "";
};

