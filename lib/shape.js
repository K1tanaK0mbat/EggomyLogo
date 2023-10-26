class Shape {
    constructor(color,text,textCol) {
       
        this.color=color;
        this.text=text;
        this.textCol=textCol;
    }
    render() {
        return `
        <fill="${this.color}"/>
        <text-anchor="middle" fill="${this.textCol}">${this.text}</text>
        `
    }
}

    class Circle extends Shape {
        constructor(color,text,textCol, parameters,font) {
            super(color,text,textCol);
            parameters= 'circle cx="150" cy="100" r="85"';
            font='text x="148" y="115" font-size="40"';
        }
        render() {
            return `
            <${parameters} fill="${this.color}"/>
            <${font} text-anchor="middle" fill="${this.textCol}">${this.text}</text>
            `
        }
    }

    
    class Triangle extends Shape {
        constructor(color,text,textCol, parameters,font) {
            super(color,text,textCol);
            parameters= 'polygon points="20 160, 140 20, 270 160"';
            font='text x="150" y="125" font-size="40"';
        }
        render() {
            return `
            <${parameters} fill="${this.color}"/>
            <${font} text-anchor="middle" fill="${this.textCol}">${this.text}</text>
            `
        }
    }

    
    class Square extends Shape {
        constructor(color,text,textCol, parameters,font) {
            super(color,text,textCol);
            parameters= 'rect x="60" y="30" width="150" height="150"';
            font='text x="135" y="115" font-size="40"';
        }
        render() {
            return `
            <${parameters} fill="${this.color}"/>
            <${font} text-anchor="middle" fill="${this.textCol}">${this.text}</text>
            `
        }
    }


module.exports = {Shape, Circle, Triangle, Square};




