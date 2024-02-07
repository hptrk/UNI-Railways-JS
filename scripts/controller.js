import * as model from './model.js';
import mainMenuView from './views/mainMenuView.js';
import descriptionView from './views/descriptionView.js';
import gameView from './views/gameView.js';
import gameBoardView from './views/gameBoardView.js';
import { callEverySecond } from './utils/time.js';

const controlStarterState = function () {
  model.loadTopListFromLocalStorage();
  mainMenuView.showView();
  mainMenuView.updateTopList(model.state.topList);
};

const controlRenderDescription = function () {
  descriptionView.showView();
};

const controlRenderMainMenu = function () {
  mainMenuView.showView();
  mainMenuView.updateTopList(model.state.topList);
};

const controlRenderGame = function () {
  // Loading values from the view
  model.state.userName = mainMenuView.getNameInputValue();
  model.loadMap(mainMenuView.getDifficulty());

  // Timer
  model.startTimer();
  callEverySecond(() => gameView.updateTimer(model.state.elapsedSeconds)); // update UI

  // Initialize game
  gameView.startGame(model.state);
  gameBoardView.render(model.state);
  gameView.showView();

  // Actual game controllers
  gameBoardView.addHandlerClick(controlRails);
  gameBoardView.addHandlerRightClick(controlDeleteRails);
};

const controlRails = function (row, col) {
  // Handle rail placement
  // if can be placed or rotated, only then update the view with the new cell
  if (model.state.won) return;
  if (model.handleRail(row, col)) {
    gameBoardView.updateCell(model.state.map[row][col]);

    // Check if the player has won
    if (model.hasWon()) {
      model.stopTimer();
      model.updateTopList();
      gameView.showWinScreen(model.state.elapsedSeconds);
      gameView.addHandlerBackToMainMenu(controlBackToMainMenu);
    }
  }
};

const controlDeleteRails = function (row, col) {
  // Handle rail deletion
  model.handleDeleteRail(row, col);
  gameBoardView.updateCell(model.state.map[row][col]);
};

const controlBackToMainMenu = function () {
  controlRenderMainMenu();
};

const init = function () {
  controlStarterState();
  mainMenuView.addHandlerRenderDescription(controlRenderDescription);
  mainMenuView.addHandlerRenderGame(controlRenderGame);
  descriptionView.addHandlerRenderMainMenu(controlRenderMainMenu);
};
init();
