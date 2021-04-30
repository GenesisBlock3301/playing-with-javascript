const canvas = document.createElement('canvas')
console.log(canvas)
canvas.width = 500;
canvas.height = 250;
var ctx = canvas.getContext('2d')
console.log(ctx)
ctx.font = '30px Cursive';
ctx.fillText("Hello world!", 50, 50);
document.body.appendChild(canvas);


//
let image = new Image();
image.src = "https://i.ytimg.com/vi/zecueq-mo4M/maxresdefault.jpg";
image.style.width = "200px";
image.style.height = "200px";
document.body.appendChild(image);