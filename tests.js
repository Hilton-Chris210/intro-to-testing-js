describe('helloWorld', function() {
    it('should be a defined function', function() {
        expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
        expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function (){
    it('should be a defined function', function (){
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function(){
        expect(typeof sayHello()).toBe('string');
    });
    it('should return the string "Hello, Jane!" when executed', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function (){
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    })
    it('should return the string "Hello, Pat!" when executed', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when called', function () {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when true', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when false', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    });
})

describe("isFive", function (){
    it('should be a defined function', function () {
        expect(typeof isFive).toBe("function");
    });
    it('should breturn a boolean no matter what', function () {
        expect(typeof isFive).toBe('Boolean')
    });
    it('should return true if passed the number 5', function () {
        expect(isFive(5)).toBe(true)
    });
    it('should return true if passed the string 5', function () {
        expect(isFive('5')).toBe(true)
    });
})
describe('isEven', function (){
    it('should breturn a boolean no matter what', function () {
        expect(typeof isEven).toBe(Boolean)
    });
    it('should be a defined function', function () {
        expect(typeof isEven).toBe("function")
    });
    it('should return true when passed 2', function () {
        expect(isEven(2)).toBe(true)
    });
    it('should return true when passed -4', function () {
        expect(isEven(-4)).toBe(true)
    });
    it('should return false when passed 3', function () {
        expect(isEven(3)).toBe(false)
    });
    it('should return false when passed "bannana"', function () {
        expect(isEven("bannana")).toBe(false)
    });
    it('should return true when passed "8"', function () {
        expect(isEven("8")).toBe(true)
    });
    it('should return true when passed infinity', function () {
        expect(isEven(Infinity)).toBe(false)
    });
    it('should return false when passed a boolean input', function () {
        expect(isEven(true || false)).toBe(false)
    });
    it('should return false when called without an argument', function () {
        expect(isEven()).toBe(false)
    });
});
describe("isVowel", function (){
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe("function");
    });
    it('should be a return true if passed an "a"', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('should return a boolean no matter what', function () {
        expect(typeof isVowel).toBe(Boolean)
    });
    it('should be a return true if passed an "A"', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('should be a return false if passed an "y"', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('should be a return false if passed an 4', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should be a return false if passed a boolean', function () {
        expect(isVowel(Boolean)).toBe(false);
    });
    it('should be a return flase if passed an "bannana"', function () {
        expect(isVowel("bannana")).toBe(false);
    });
    it('should be a return flase if passed an empty argument', function () {
        expect(isVowel()).toBe(false);
    });
})

describe("add", function (){
    it('should be a defined function', function () {
        expect(typeof add).toBe("function");
    });
    it('should return 5 when input (2, 3)', function () {
        expect(add(2,3)).toBe(5);
    });
    it('should return -12 when input (-3, -9)', function () {
        expect(add(2,3)).toBe(5);
    });
    it('should return 11 when input ("5", 6)', function () {
        expect(add("5", 6)).toBe(11);
    });
    it('should return 6 when input ("-4", "10")', function () {
        expect(add("-4", "10")).toBe(6);
    });
    it('should return NaN when input ("bannana", "split")', function () {
        expect(add("bannana", 'split')).toBe(NaN);
    });
    it('should return NaN when input add()', function () {
        expect(add()).toBe(NaN);
    });
});