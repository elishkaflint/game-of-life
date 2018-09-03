describe("Game Feature Tests", function() {

  var inputGrid;
  var outputGrid;

  beforeEach(function() {
    inputGrid = [
      [true, true, false, true, true],
      [true, false, true, false, true],
      [false, true, false, true, false],
      [true, true, false, true, true],
      [true, true, true, true, true]
    ]
    outputGrid = [
      [true, true, true, true, true],
      [true, false, false, false, true],
      [false, false, false, false, false],
      [false, false, false, false, false],
      [true, false, false, false, true]
    ]
  })

  describe("tick", function() {

    it('a whole game mutates correctly based on the game rules', function() {
      var output = tick(inputGrid)
      expect(output).toEqual(outputGrid)
    });

  })

})
