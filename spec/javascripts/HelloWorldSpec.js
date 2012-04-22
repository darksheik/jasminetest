
describe("Hello world", function() {
    it("says hello", function() {
        expect(helloWorld()).toEqual("Hello world!");
    });
});

describe("Get two", function() {
    it("sets x to two", function() {
        expect(getTwo()).toEqual(2);
    });
});

describe("Some variable",function() {
  it("should set the global variable y to 14", function() {
        expect(getYFourteen()).toEqual(14);
  });
});

