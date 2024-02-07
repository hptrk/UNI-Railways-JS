export const TILE_TYPES = {
  EMPTY: 'empty',
  MOUNTAIN: 'mountain',
  MOUNTAIN_RAIL: 'mountain_rail',
  BRIDGE: 'bridge',
  BRIDGE_RAIL: 'bridge_rail',
  OASIS: 'oasis',
  RAIL_STRAIGHT: 'rail_straight',
  RAIL_CURVE: 'rail_curve',
};

const canConnect = {
  up: [
    {
      type: 'rail_straight',
      rotations: [0, 180],
    },
    {
      type: 'rail_curve',
      rotations: [180, 270],
    },
    {
      type: 'mountain_rail',
      rotations: [180, 270],
    },
    {
      type: 'bridge_rail',
      rotations: [0],
    },
  ],
  right: [
    {
      type: 'rail_straight',
      rotations: [90, 270],
    },
    {
      type: 'rail_curve',
      rotations: [0, 270],
    },
    {
      type: 'mountain_rail',
      rotations: [0, 270],
    },
    {
      type: 'bridge_rail',
      rotations: [90],
    },
  ],
  down: [
    {
      type: 'rail_straight',
      rotations: [0, 180],
    },
    {
      type: 'rail_curve',
      rotations: [0, 90],
    },
    {
      type: 'mountain_rail',
      rotations: [0, 90],
    },
    {
      type: 'bridge_rail',
      rotations: [0],
    },
  ],
  left: [
    {
      type: 'rail_straight',
      rotations: [90, 270],
    },
    {
      type: 'rail_curve',
      rotations: [90, 180],
    },
    {
      type: 'mountain_rail',
      rotations: [90, 180],
    },
    {
      type: 'bridge_rail',
      rotations: [90],
    },
  ],
};

export const ROTATIONS = {
  NORTH: 0,
  EAST: 90,
  SOUTH: 180,
  WEST: 270,
};

// Cell structure for storing both tile type and rotation
export const createCell = (type, rotation = 0, hasRail = false) => ({
  type,
  rotation,
  hasRail,
});

// Helper function to get image filename based on cell state
export const getCellImage = (cell) => {
  let img = '';
  switch (cell.type) {
    case TILE_TYPES.EMPTY:
      img = 'empty';
      break;
    case TILE_TYPES.RAIL_STRAIGHT:
      img = 'straight_rail';
      break;
    case TILE_TYPES.RAIL_CURVE:
      img = 'curve_rail';
      break;
    case TILE_TYPES.OASIS:
      img = 'oasis';
      break;
    case TILE_TYPES.BRIDGE:
      img = 'bridge';
      break;
    case TILE_TYPES.BRIDGE_RAIL:
      img = 'bridge_rail';
      break;
    case TILE_TYPES.MOUNTAIN:
      img = 'mountain';
      break;
    case TILE_TYPES.MOUNTAIN_RAIL:
      img = 'mountain_rail';
      break;
    default:
      break;
  }

  return `assets/tiles/${img}.png`;
};

// Helper function to check if rail placement is valid
export const isValidCell = (cell) => {
  return cell.type !== TILE_TYPES.OASIS;
};

// Helper function to place rail on cell
export const placeRail = function (cell) {
  switch (cell.type) {
    case 'empty':
      cell.type = 'rail_straight';
      break;
    case 'bridge':
      cell.type = 'bridge_rail';
      break;
    case 'mountain':
      cell.type = 'mountain_rail';
      break;
  }
  cell.hasRail = true;
};

// Helper function to rotate rail on cell
export const rotateRail = function (cell) {
  switch (cell.type) {
    case 'rail_straight':
      cell.type = 'rail_curve';
      break;
    case 'rail_curve':
      cell.type = 'rail_straight';
      cell.rotation += 90;
      cell.rotation %= 360;
      break;
  }
};

export const deleteRail = function (cell) {
  switch (cell.type) {
    case 'rail_straight':
    case 'rail_curve':
      cell.type = 'empty';
      break;
    case 'bridge_rail':
      cell.type = 'bridge';
      break;
    case 'mountain_rail':
      cell.type = 'mountain';
      break;
  }
  cell.hasRail = false;
  if (cell.type === 'empty') cell.rotation = 0;
};

export const countRails = function (map) {
  return map.flat().filter((cell) => cell.hasRail).length;
};

export const railsNeeded = function (map) {
  return map.flat().filter((cell) => cell.type !== 'oasis').length;
};

export const allRailsConnected = function (map) {
  for (let row = 0; row < map.length; row++) {
    for (let col = 0; col < map[row].length; col++) {
      const cell = map[row][col];
      if (cell.hasRail && !isRailConnected(map, row, col)) return false;
    }
  }
  return true;
};
const isRailConnected = function (map, row, col) {
  const cell = map[row][col];

  switch (cell.type) {
    case 'rail_straight':
    case 'bridge_rail':
      return isRailConnectedStraight(map, row, col);
    case 'rail_curve':
    case 'mountain_rail':
      return isRailConnectedCurved(map, row, col);
  }
};

const isRailConnectedStraight = function (map, row, col) {
  const cell = map[row][col];
  const neighbors = getNeighbors(map, row, col);

  if (neighbors.length === 0) return false;
  switch (cell.rotation) {
    case 0:
    case 180:
      // if the upper neighbor can connect down, and the below neighbor can connect up
      return (
        canConnectDirection(neighbors.up, 'down') &&
        canConnectDirection(neighbors.down, 'up')
      );

    case 90:
    case 270:
      return (
        canConnectDirection(neighbors.left, 'right') &&
        canConnectDirection(neighbors.right, 'left')
      );
  }
  return false;
};

const isRailConnectedCurved = function (map, row, col) {
  const cell = map[row][col];
  const neighbors = getNeighbors(map, row, col);
  console.log(cell);

  if (neighbors.length === 0) return false;
  switch (cell.rotation) {
    case 0:
      return (
        canConnectDirection(neighbors.down, 'up') &&
        canConnectDirection(neighbors.right, 'left')
      );
    case 90:
      return (
        canConnectDirection(neighbors.left, 'right') &&
        canConnectDirection(neighbors.down, 'up')
      );
    case 180:
      return (
        canConnectDirection(neighbors.up, 'down') &&
        canConnectDirection(neighbors.left, 'right')
      );
    case 270:
      return (
        canConnectDirection(neighbors.up, 'down') &&
        canConnectDirection(neighbors.right, 'left')
      );
  }
  return false;
};

const getNeighbors = function (map, row, col) {
  const neighbors = { up: {}, down: {}, left: {}, right: {} };
  // Above
  if (row > 0) neighbors.up = map[row - 1][col];
  // Left
  if (col > 0) neighbors.left = map[row][col - 1];
  // Below
  if (row < map.length - 1) neighbors.down = map[row + 1][col];
  // Right
  if (col < map[row].length - 1) neighbors.right = map[row][col + 1];

  for (const key in neighbors) {
    const neighbor = neighbors[key];

    neighbors[key] = neighbor.hasRail ? neighbor : {};
  }
  return neighbors;
};

const canConnectDirection = function (neighbor, direction) {
  console.log(neighbor);
  console.log(direction);
  console.log('----');
  return canConnect[direction].some(
    (cellType) =>
      cellType.type === neighbor.type &&
      cellType.rotations.includes(neighbor.rotation)
  );
};
