import { formatTime } from '../utils/time.js';
import View from './View.js';

class mainMenuView extends View {
  _parentElement = document.querySelector('.main-menu');
  _descriptionButton = document.querySelector('.btn-description');
  _startGameButton = document.querySelector('.btn-start-game');
  _nameInput = document.querySelector('.input-name');
  _easyButton = document.querySelector('.btn-difficulty--easy');

  constructor() {
    super();
    this._enableGameStartButton();
  }

  addHandlerRenderDescription(handler) {
    this._descriptionButton.addEventListener('click', handler);
  }
  addHandlerRenderGame(handler) {
    this._startGameButton.addEventListener('click', handler);
  }
  getNameInputValue() {
    return this._nameInput.value;
  }
  getDifficulty() {
    return this._easyButton.checked ? 'easy' : 'hard';
  }
  updateTopList(topList) {
    const topListElement = document.querySelector('.player-toplist');
    if (topList.length === 0) {
      topListElement.insertAdjacentHTML(
        'beforeend',
        `
      <li>
        - Nincs még nyertes -
      </li>
    `
      );
      return;
    }
    topListElement.innerHTML = '';
    topList.forEach((player, i) => {
      topListElement.insertAdjacentHTML(
        'beforeend',
        `
        <li>
          <p class="text-uppercase m-0">${i + 1} - ${player.name}</p>
          <p class="m-0">(${formatTime(player.time)} ${
          player.difficulty === 'easy' ? 'könnyű' : 'nehéz'
        })</p>
          <hr class="m-1" />
        </li>
      `
      );
    });
  }

  _enableGameStartButton() {
    this._nameInput.addEventListener('input', () => {
      if (this._nameInput.value.length > 0) {
        this._startGameButton.classList.remove('disabled');
      } else {
        this._startGameButton.classList.add('disabled');
      }
    });
  }
}

export default new mainMenuView();
