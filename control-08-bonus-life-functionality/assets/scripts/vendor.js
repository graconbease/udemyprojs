const monsterHealthBar = document.getElementById('monster-health');
const playerHealthBar = document.getElementById('player-health');
const bonusLifeEl = document.getElementById('bonus-life');
const endingMsg = document.getElementById('end-message');
const endingWin = document.getElementById('won');
const endingLoss = document.getElementById('lost');
const endingDraw = document.getElementById('draw');

const attackBtn = document.getElementById('attack-btn');
const strongAttackBtn = document.getElementById('strong-attack-btn');
const healBtn = document.getElementById('heal-btn');
const logBtn = document.getElementById('log-btn');
const resetBtn = document.getElementById('reset-btn');

function adjustHealthBars(monsterLife, playerLife) {
  monsterHealthBar.max = monsterLife;
  monsterHealthBar.value = monsterLife;
  playerHealthBar.max = playerLife;
  playerHealthBar.value = playerLife;
}

function dealMonsterDamage(damage) {
  const dealtDamage = Math.random() * damage;
  monsterHealthBar.value = monsterHealthBar.value - dealtDamage;
  return dealtDamage;
}

function dealPlayerDamage(damage) {
  const dealtDamage = Math.random() * damage;
  playerHealthBar.value = playerHealthBar.value - dealtDamage;
  return dealtDamage;
}

function increasePlayerHealth(healValue) {
  playerHealthBar.value = +playerHealthBar.value + healValue;
}

function endMessageShow(verdict) {
  endingMsg.style.display = "block";
  attackBtn.style.display = "none";
  strongAttackBtn.style.display = "none";
  healBtn.style.display = "none";
  
  if (verdict === 'W') {
    endingWin.style.display = "block";
  } else if (verdict === 'L') {
    endingLoss.style.display = "block";
  } else if (verdict === 'D') {
    endingDraw.style.display = "block";
  }
}

function endMessageHide(verdict) {
  endingMsg.style.display = "none";
  endingWin.style.display = "none";
  endingLoss.style.display = "none";
  endingDraw.style.display = "none";
  attackBtn.style.display = "block";
  strongAttackBtn.style.display = "block";
  healBtn.style.display = "block";
}

function resetGame(value) {
  playerHealthBar.value = value;
  monsterHealthBar.value = value;
}

function removeBonusLife() {
  bonusLifeEl.hidden = true;
}

function restoreBonusLife () {
  bonusLifeEl.hidden = false;
}

function setPlayerHealth(health) {
  playerHealthBar.value = health;
}