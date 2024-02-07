import {
  isValidCell,
  placeRail,
  rotateRail,
  deleteRail,
  railsNeeded,
  countRails,
  allRailsConnected,
} from './utils/mapHelper.js';
import { MAPS } from './utils/maps.js';

export const state = {
  topList: [],
  difficulty: '',
  userName: '',

  elapsedSeconds: 0,
  timerInterval: null,

  map: null,
  won: false,
};

export const startTimer = function () {
  if (state.timerInterval) return; // Prevent multiple timers
  state.won = false;

  state.elapsedSeconds = 0;
  state.timerInterval = setInterval(() => {
    state.elapsedSeconds++;
  }, 1000);
};

export const stopTimer = function () {
  if (state.timerInterval) {
    state.won = true;
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
};

export const loadMap = function (difficulty) {
  state.difficulty = difficulty;
  const maps = MAPS[difficulty];
  const randomIndex = Math.floor(Math.random() * maps.length);

  // Deep copy initial map state
  state.map = JSON.parse(JSON.stringify(maps[randomIndex]));
};

// if not a valid placement, return false (e.g. placing rail on oasis)
export const handleRail = function (row, col) {
  const cell = state.map[row][col];
  // oasis or rail with mountain or bridge
  if (
    !isValidCell(cell) ||
    (cell.hasRail &&
      (cell.type == 'mountain_rail' || cell.type == 'bridge_rail'))
  )
    return false;

  if (cell.hasRail) rotateRail(cell);

  placeRail(cell);
  return true;
};

export const handleDeleteRail = function (row, col) {
  // if no rail, return
  const cell = state.map[row][col];
  if (!cell.hasRail) return;

  deleteRail(cell);
};

export const hasWon = function () {
  // Check if all rails are placed
  if (countRails(state.map) !== railsNeeded(state.map)) return false;
  if (!allRailsConnected(state.map)) return false;

  return true;
};

export const updateTopList = function () {
  state.topList.push({
    name: state.userName,
    time: state.elapsedSeconds,
    difficulty: state.difficulty,
  });
  state.topList.sort((a, b) => a.time - b.time);
  saveTopListToLocalStorage();
};

const saveTopListToLocalStorage = function () {
  localStorage.setItem('state', JSON.stringify(state));
};

export const loadTopListFromLocalStorage = function () {
  const savedState = localStorage.getItem('state');
  if (savedState) {
    const parsedState = JSON.parse(savedState);
    Object.assign(state, parsedState);
  }
};
