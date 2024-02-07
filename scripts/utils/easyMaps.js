import { TILE_TYPES, ROTATIONS, createCell } from './mapHelper.js';

const maps = [
  // 1
  [
    [
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.MOUNTAIN, ROTATIONS.EAST),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.OASIS),
    ],
    [
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.BRIDGE),
      createCell(TILE_TYPES.OASIS),
    ],
    [
      createCell(TILE_TYPES.BRIDGE),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.MOUNTAIN, ROTATIONS.SOUTH),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.EMPTY),
    ],
    [
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.OASIS),
      createCell(TILE_TYPES.EMPTY),
    ],
    [
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.MOUNTAIN, ROTATIONS.WEST),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.EMPTY),
    ],
  ],
  // 2
  [
    [
      createCell(TILE_TYPES.OASIS),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.BRIDGE, ROTATIONS.EAST),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.EMPTY),
    ],
    [
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.MOUNTAIN, ROTATIONS.SOUTH),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.MOUNTAIN, ROTATIONS.SOUTH),
    ],
    [
      createCell(TILE_TYPES.BRIDGE),
      createCell(TILE_TYPES.OASIS),
      createCell(TILE_TYPES.MOUNTAIN, ROTATIONS.WEST),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.EMPTY),
    ],
    [
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.OASIS),
      createCell(TILE_TYPES.EMPTY),
    ],
    [
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.EMPTY),
    ],
  ],
  // 3
  [
    [
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.BRIDGE, ROTATIONS.EAST),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.EMPTY),
    ],
    [
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.BRIDGE),
    ],
    [
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.MOUNTAIN, ROTATIONS.SOUTH),
      createCell(TILE_TYPES.BRIDGE),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.EMPTY),
    ],
    [
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.OASIS),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.EMPTY),
    ],
    [
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.BRIDGE, ROTATIONS.EAST),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.MOUNTAIN, ROTATIONS.SOUTH),
    ],
  ],
  // 4
  [
    [
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.BRIDGE, ROTATIONS.EAST),
      createCell(TILE_TYPES.EMPTY),
    ],
    [
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.EMPTY),
    ],
    [
      createCell(TILE_TYPES.BRIDGE),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.MOUNTAIN, ROTATIONS.EAST),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.MOUNTAIN, ROTATIONS.EAST),
    ],
    [
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.EMPTY),
    ],
    [
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.OASIS),
      createCell(TILE_TYPES.MOUNTAIN, ROTATIONS.WEST),
      createCell(TILE_TYPES.EMPTY),
    ],
  ],
  // 5
  [
    [
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.BRIDGE, ROTATIONS.EAST),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.EMPTY),
    ],
    [
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.MOUNTAIN),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.EMPTY),
    ],
    [
      createCell(TILE_TYPES.BRIDGE),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.MOUNTAIN, ROTATIONS.WEST),
      createCell(TILE_TYPES.EMPTY),
    ],
    [
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.BRIDGE),
      createCell(TILE_TYPES.OASIS),
      createCell(TILE_TYPES.EMPTY),
    ],
    [
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.MOUNTAIN, ROTATIONS.SOUTH),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.EMPTY),
      createCell(TILE_TYPES.EMPTY),
    ],
  ],
];

export default { maps };
