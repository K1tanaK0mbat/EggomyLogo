class Shape {
    constructor(color, text, textCol) {
      this.color = color;
      this.text = text;
      this.textCol = textCol;
    }
  
    render() {
      return `
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="white" />
          ${this.getShapeSVG()}
        </svg>
      `;
    }
  
    getShapeSVG() {
      return '';
    }
  }
  
  class Circle extends Shape {
    getShapeSVG() {
      return `
        <circle cx="150" cy="100" r="85" fill="${this.color}" />
        <text x="148" y="115" font-size="40" text-anchor="middle" fill="${this.textCol}">${this.text}</text>
      `;
    }
  }
  
  class Triangle extends Shape {
    getShapeSVG() {
      return `
        <polygon points="20 160, 140 20, 270 160" fill="${this.color}" />
        <text x="150" y="125" font-size="40" text-anchor="middle" fill="${this.textCol}">${this.text}</text>
      `;
    }
  }
  
  class Square extends Shape {
    getShapeSVG() {
      return `
        <rect x="60" y="30" width="150" height="150" fill="${this.color}" />
        <text x="135" y="115" font-size="40" text-anchor="middle" fill="${this.textCol}">${this.text}</text>
      `;
    }
  }
  
  module.exports = { Shape, Circle, Triangle, Square };
  




