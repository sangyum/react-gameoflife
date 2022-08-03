const { willILive } = require("./rules");

describe("Game of Life Rules", () => {
  it("should be true", () => {
    expect(true).toEqual(true);
  });

  describe("live cell", () => {
    const currentState = true;

    it("Live cell with one neighbor dies", () => {
      const numberOfLiveNeighbors = 1;

      expect(willILive(currentState, numberOfLiveNeighbors)).toEqual(false);
    });

    it("Any live cell with two live neighbours lives on to the next generation", () => {
      const numberOfLiveNeighbors = 2;

      const actual = willILive(currentState, numberOfLiveNeighbors);

      expect(actual).toEqual(true);
    });
    it("Any live cell with three live neighbours lives on to the next generation", () => {
      const numberOfLiveNeighbors = 3;

      const actual = willILive(currentState, numberOfLiveNeighbors);

      expect(actual).toEqual(true);
    });

    it("Any live cell with more than three live neighbours dies", () => {
      const numberOfLiveNeighbors = 4;

      const actual = willILive(currentState, numberOfLiveNeighbors);

      expect(actual).toEqual(false);
    });
  });
  describe("dead cell", () => {
    const currentState = false;

    it("Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.", () => {
      const numberOfLiveNeighbors = 3;

      expect(willILive(currentState, numberOfLiveNeighbors)).toEqual(true);
    });

    it("Any dead cell with less than three live neighbors should sty dead", () => {
      const numberOfLiveNeighbors = 2;

      expect(willILive(currentState, numberOfLiveNeighbors)).toEqual(false);
    });
    it("Any dead cell with more than three live neighbors should sty dead", () => {
        const numberOfLiveNeighbors = 4;
  
        expect(willILive(currentState, numberOfLiveNeighbors)).toEqual(false);
      });
  });
});
