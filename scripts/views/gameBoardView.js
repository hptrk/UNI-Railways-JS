import { getCellImage } from '../utils/mapHelper.js';
import View from './View.js';

class gameView extends View {
  _parentElement = document.querySelector('.game-board');
  _cells;
  _currentlyClickedCell;

  addHandlerClick(handler) {
    this._cells = document.querySelectorAll('.grid-cell');
    this._cells.forEach((cell) =>
      cell.addEventListener('click', () => {
        this._currentlyClickedCell = cell;
        const row = parseInt(cell.dataset.row);
        const col = parseInt(cell.dataset.col);
        handler(row, col);
      })
    );
  }

  addHandlerRightClick(handler) {
    this._cells = document.querySelectorAll('.grid-cell');
    this._cells.forEach((cell) =>
      cell.addEventListener('contextmenu', (e) => {
        e.preventDefault(); // Prevent context menu
        this._currentlyClickedCell = cell;
        const row = parseInt(cell.dataset.row);
        const col = parseInt(cell.dataset.col);
        handler(row, col);
      })
    );
  }

  updateCell(cell) {
    const row = this._currentlyClickedCell.dataset.row;
    const col = this._currentlyClickedCell.dataset.col;
    const cellElement = document.querySelector(
      `[data-row="${row}"][data-col="${col}"]`
    );
    cellElement.src = getCellImage(cell);
    cellElement.style.transform = `rotate(${cell.rotation}deg)`;
  }

  _generateMarkup() {
    const size = this._data.difficulty === 'easy' ? 5 : 7;
    this._parentElement.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    return this._data.map
      .flat()
      .map((cell, index) => {
        const row = Math.floor(index / size);
        const col = index % size;

        return `<img 
        class="grid-cell img-fluid" 
        data-row="${row}" 
        data-col="${col}" 
        src="${getCellImage(cell)}" 
        style="transform: rotate(${cell.rotation}deg);"
      />`;
      })
      .join('');
  }
}

export default new gameView();
