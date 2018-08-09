var canvas = document.getElementById('can');
var context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = (window.innerHeight/4)*3;

var ball = {
    x: 50,
    y: 200,
    radius: 30,
    color: '#E91E63',
    draw: function(){
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.closePath();
        
        context.fillStyle= this.color;
        context.fill();        
    }
}

ball.draw();
