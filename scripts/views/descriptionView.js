import View from './View.js';

class descriptionView extends View {
  _parentElement = document.querySelector('.description');
  _backButton = document.querySelector('.btn-back');

  addHandlerRenderMainMenu(handler) {
    this._backButton.addEventListener('click', handler);
  }
}

export default new descriptionView();
