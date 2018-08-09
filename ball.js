var canvas = document.getElementById('can');
var context = canvas.getContext('2d');
var raf;

canvas.width = window.innerWidth;
canvas.height = (window.innerHeight/4)*3;

var ball = {
    x: 50,
    y: 200,
    vx: 5,
    vy: 5,
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

var update = function(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    ball.x += ball.vx;
    ball.y += ball.vy;
    if(ball.x + ball.vx + ball.radius > canvas.width || ball.x + ball.vx - ball.radius < 0)
        ball.vx = -ball.vx;
    if(ball.y + ball.vy + ball.radius > canvas.height || ball.y + ball.vy - ball.radius < 0)
        ball.vy = -ball.vy;
    ball.draw()
    raf = window.requestAnimationFrame(update);
}

canvas.addEventListener('mouseover', function(e){
    raf = window.requestAnimationFrame(update);
});

canvas.addEventListener('mouseout', function(e){
    window.cancelAnimationFrame(raf);
});