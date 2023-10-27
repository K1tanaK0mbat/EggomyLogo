const { Circle, Triangle, Square } = require('../lib/shape.js');

function matchSVG(svg) {
    return svg.replace(/\s+/g, ' ').trim();
  }

describe('Circle', () => {
  it('should return the SVG code for rendering Circle', () => {
    const circle = new Circle('blue', 'NJD', 'white');
    const result = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="white" />
      <circle cx="150" cy="100" r="85" fill="blue" />
      <text x="148" y="115" font-size="40" text-anchor="middle" fill="white">NJD</text>
    </svg>
    `;

    expect(matchSVG(circle.render())).toEqual(matchSVG(result));
  });
});

describe('Triangle', () => {
  it('should return the SVG code for rendering Triangle', () => {
    const triangle = new Triangle('Purple', 'Eye', 'Green');
    const result = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="white" />
      <polygon points="20 160, 140 20, 270 160" fill="Purple" />
      <text x="150" y="125" font-size="40" text-anchor="middle" fill="Green">Eye</text>
    </svg>
    `;

    expect(matchSVG(triangle.render())).toEqual(matchSVG(result));
});
});

describe('Square', () => {
  it('should return the SVG code for rendering Square', () => {
    const square = new Square('Red', 'LUV', 'Black');
    const result = `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="white" />
      <rect x="60" y="30" width="150" height="150" fill="Red" />
      <text x="135" y="115" font-size="40" text-anchor="middle" fill="Black">LUV</text>
    </svg>
    `;

    expect(matchSVG(square.render())).toEqual(matchSVG(result));
});
});

