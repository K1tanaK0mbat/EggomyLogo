class Circle {
    constructor(shape,color,text,textCol) {
        this.shape=shape;
        this.color=color;
        this.text=text;
        this.textCol=textCol;
    }
    render() {
        return `
        <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <rect width="100%" height="100%" fill="white" />

<circle cx="150" cy="100" r="85" fill="${this.color}"/>

  <text x="148" y="115" font-size="40" text-anchor="middle" fill="${this.textCol}">${this.text}</text>

</svg>
`
;
    }
}

module.exports = Circle;