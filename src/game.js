module.exports = {

  tick: function (inputGrid) {
    var outputGrid = []
    for(var i = 0; i < inputGrid.length; i++) {
      var row = inputGrid[i]
      var outputRow = []
      for(var j = 0; j < row.length; j++) {
        var newCell = _mutate(inputGrid, i, j)
        outputRow.push(newCell)
      }
      outputGrid.push(outputRow)
    }
    return outputGrid;
  }

}

const directions = [
  [-1, 0],  // N
  [-1, 1],  // NE
  [0, 1],   // E
  [1, 1],   // SE
  [1, 0],   // S
  [1, -1],  // SW
  [0, -1],  // W
  [-1, -1]  // NW
]

function tick(inputGrid) {
  var outputGrid = []
  for(var i = 0; i < inputGrid.length; i++) {
    var row = inputGrid[i]
    var outputRow = []
    for(var j = 0; j < row.length; j++) {
      var newCell = _mutate(inputGrid, i, j)
      outputRow.push(newCell)
    }
    outputGrid.push(outputRow)
  }
  return outputGrid;
}

function _mutate(grid, x, y) {
  var count = _countLiveNeighbours(grid, x, y)
  var alive = _isAlive(grid, x, y)
  if(alive && _isOvercrowded(count)){ return _kill() }
  if(alive && _isUnderpopulated(count)){ return _kill() }
  if(!alive && _isSurrounded(count)){ return _ressurrect() }
  else { return grid[x][y] }
}

function _isAlive(grid, x, y) {
  return grid[x][y] === true
}

function _isOvercrowded(n) {
  return n > 3
}

function _isUnderpopulated(n) {
  return n < 2
}

function _kill() {
  return false
}

function _isSurrounded(n) {
  return n === 3
}

function _ressurrect() {
  return true
}

function _countLiveNeighbours(grid, x, y) {
  var count = 0
  for (var i = 0; i < directions.length; i++) {
    if (_isWithinBorder(grid, x, y, i) && _isAlive(grid, x + _verticalMove(i), y + _horizontalMove(i))){
     count += 1
    }
  }
  return count
}

function _isWithinBorder(grid, x, y, n) {

  var borders = {
    bottom: 0,
    left: 0,
    top: _height(grid),
    right: _width(grid),
  }

  return !(
    x + _verticalMove(n) < borders.bottom ||
    x + _verticalMove(n) > borders.top ||
    y + _horizontalMove(n) < borders.left ||
    y + _horizontalMove(n) > borders.right
  )
}

function _height(grid) {
  return grid.length -1
}

function _width(grid) {
  return grid[0].length -1
}

function _verticalMove(n) {
  return directions[n][0]
}

function _horizontalMove(n) {
  return directions[n][1]
}
