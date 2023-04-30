const blocksAway = function(directions) {
  const destination = {east: 0, north: 0};
  let west = false;
  let south = false;
  let north, east;

  // first move
  if (directions[0] === 'right') {
    east = true;
    north = false;
  } else {
    east = false;
    north = true;
  }

  for (let i = 1; i < directions.length; i++) {
    if (directions[i] === 'right') {
      if (east) {
        east = false;
        south = true;
      } else if (west) {
        west = false;
        north = true;
      } else if (north) {
        north = false;
        east = true;
      } else {
        south = false;
        west = true;
      }
    } else if (directions[i] === 'left') {
      if (east) {
        east = false;
        north = true;
      } else if (west) {
        west = false;
        south = true;
      } else if (north) {
        north = false;
        west = true;
      } else if (south) {
        south = false;
        east = true;
      }
    } else {
      if (east) {
        destination.east += directions[i];
      } else if (west) {
        destination.east -= directions[i];
      } else if (north) {
        destination.north += directions[i];
      } else {
        destination.north -= directions[i];
      }
    }
  }

  return destination;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));