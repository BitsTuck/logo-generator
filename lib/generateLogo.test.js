
const LogoGen = require('./generateLogo');
const { Circle, Square, Triangle } = require('./generateLogo');


describe('LogoGen', () => {
  describe('circle', () => {
    it('should create a logo in the shape of a circle', () => {
      const shape = new Circle ("blt", "white", "black");
      expect(shape.newShape()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="100" r="80" fill="black" /> <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">blt</text></svg>`);
    });
  });
});

describe('LogoGen', () => {
  describe('square', () => {
    it('should create a logo in the shape of a square with white text', () => {
      const shape = new Square;
      shape.textColor('white')
      expect(shape.newShape()).toEqual('<rect width="300" height="200" fill=${this.color} /> <text x="150" y="125" font-size="60" text-anchor="middle" fill="white"}>')
    });
  });


describe('LogoGen', () => {
  describe('circle', () => {
    it('should create a logo in the shape of a triangle with the background color blue', () => {
      const shape = new Triangle();
      shape.color('blue');
      expect(shape.newShape()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />')
    });
  });
});
})