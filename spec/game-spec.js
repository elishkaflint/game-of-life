describe("Game Unit Tests", function() {

  var grid;

  beforeEach(function() {
    grid = [
      [true, true, false, true, true],
      [true, false, true, false, true],
      [false, true, false, true, false],
      [true, true, false, true, true],
      [true, true, true, true, true]
    ]
  })

  describe("isAlive", function() {
    it('a cell knows if it is alive', function() {
      expect(_isAlive(grid, 0, 4)).toBe(true)
    })
  })

  describe("isOvercrowded", function() {
    it('a cell knows if it is surrounded', function() {
      expect(_isOvercrowded(4)).toBe(true)
      expect(_isOvercrowded(3)).toBe(false)
    })
  })

  describe("isUnderpopulated", function() {
    it('a cell knows if it is underpopulated', function() {
      expect(_isUnderpopulated(1)).toBe(true)
      expect(_isUnderpopulated(3)).toBe(false)
    })
  })

  describe("isSurrounded", function() {
    it('a cell knows if it is surrounded', function() {
      expect(_isSurrounded(3)).toBe(true)
      expect(_isSurrounded(4)).toBe(false)
    })
  })

  describe("countLiveNeighbours", function() {
    it('top left corner cell knows how many live neighbours it has', function() {
      expect(_countLiveNeighbours(grid,0,0)).toEqual(2)
    })
    it('top right corner cell knows how many live neighbours it has', function() {
      expect(_countLiveNeighbours(grid,0,4)).toEqual(2)
    })
    it('bottom left corner cell knows how many live neighbours it has', function() {
      expect(_countLiveNeighbours(grid,4,0)).toEqual(3)
    })
    it('bottom right corner cell knows how many live neighbours it has', function() {
      expect(_countLiveNeighbours(grid,4,4)).toEqual(3)
    })
    it('border cell knows how many live neighbours it has', function() {
      expect(_countLiveNeighbours(grid,2,0)).toEqual(4)
    })
  })

  describe("mutate", function() {
    describe("based on the game of life rules", function() {
      it('a dead cell resurrects', function() {
        expect(_mutate(grid, 0, 3)).toEqual(true)
      })
      it('a live cell dies', function() {
        expect(_mutate(grid, 1, 2)).toEqual(false)
      })
      it('a live cell stays alive', function() {
        expect(_mutate(grid, 1, 4)).toEqual(true)
      })
      it('a dead cell stays dead', function() {
        expect(_mutate(grid, 1, 1)).toEqual(false)
      })
    })
  })

})
