import View from './View.js';
import { formatTime } from '../utils/time.js';

class gameView extends View {
  _parentElement = document.querySelector('.game');
  _playerInfo = document.querySelector('.player-info');
  _playerName = document.querySelector('.player-name');
  _elapsedTime = document.querySelector('.elapsed-time');

  _duringGameInfo = document.querySelector('.during-game--info');
  _winScreenInfo = document.querySelector('.win-screen--info');
  _winnerName = document.querySelector('.winner-name');
  _winnerTime = document.querySelector('.winner-time');

  startGame(data) {
    this._playerName.textContent = data.userName;
    this._elapsedTime.textContent = formatTime(data.elapsedSeconds);
  }

  updateTimer(elapsedSeconds) {
    this._elapsedTime.textContent = formatTime(elapsedSeconds);
  }
  showWinScreen(elapsedSeconds) {
    this._duringGameInfo.classList.add('hidden');
    this._winScreenInfo.classList.remove('hidden');

    this._winnerName.textContent = this._playerName.textContent;
    this._winnerTime.textContent = formatTime(elapsedSeconds);
  }

  addHandlerBackToMainMenu(handler) {
    document.querySelector('.btn-backToMain').addEventListener('click', () => {
      this._resetPlayerInfoHTML();
      handler();
    });
  }
  _resetPlayerInfoHTML() {
    this._duringGameInfo.classList.remove('hidden');
    this._winScreenInfo.classList.add('hidden');
  }
}

export default new gameView();
