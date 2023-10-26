const Shape=require('./shape.js');
function createSVG (text, textCol, color){
    const Shape = new Shape(text, textCol, color).render();
    return `
    <svg version="1.1"
 width="300" height="200"
 xmlns="http://www.w3.org/2000/svg">

<rect width="100%" height="100%" fill="white" />


</svg>
`
;
}

module.exports = createSVG;