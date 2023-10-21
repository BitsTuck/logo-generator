
const LogoGen = require('./generateLogo');


describe('LogoGen', () => {
  describe('circle', () => {
    it('should create a logo in the shape of a circle', () => {
      const shape = new Circle;
      expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red"/>');
    });
  });
});

describe('LogoGen', () => {
  describe('square', () => {
    it('should create a logo in the shape of a square with white text', () => {
      const shape = new Square;
      shape.textColor('white')
      expect(shape.render()).toEqual('<rect width="300" height="200" fill=${this.color} /> <text x="150" y="125" font-size="60" text-anchor="middle" fill="white"}>')
    });
  });


describe('LogoGen', () => {
  describe('circle', () => {
    it('should create a logo in the shape of a triangle with the background color blue', () => {
      const shape = new Triangle();
      shape.shapeColor('blue');
      expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />')
    });
  });
});
})