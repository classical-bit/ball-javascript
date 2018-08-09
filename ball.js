var canvas = document.getElementById('can');
var context = canvas.getContext('2d');
var raf;
var isBallMoving = false;

canvas.width = window.innerWidth;
// canvas.height = (window.innerHeight/4)*3;

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

function clear(){
    context.fillStyle = 'rgba( 0, 0, 0, 0.3)';
    context.fillRect(0, 0, canvas.width, canvas.height);
}
var update = function(){
    // context.clearRect(0, 0, canvas.width, canvas.height);

    //Trailing Effect
    clear();
    
    ball.draw()

    // PUTS BALL IN LINEAR MOTION
    ball.x += ball.vx;
    ball.y += ball.vy;

    // SIMULATE ACCELARATION
    ball.vy *= 0.99;
    ball.vy += 0.30;
    
    // KEEPS THE BALL IN BOUNDARY
    if(ball.x + ball.vx + ball.radius > canvas.width || ball.x + ball.vx - ball.radius < 0)
        ball.vx = -ball.vx;
    if(ball.y + ball.vy + ball.radius > canvas.height || ball.y + ball.vy - ball.radius < 0)
        ball.vy = -ball.vy;

    
    raf = window.requestAnimationFrame(update);
}

canvas.addEventListener('mousemove', function(e){
    if(!isBallMoving){
        // if(ball.x > e.clientX){
        //     if(ball.vx > 0)
        //         ball.vx = -ball.vx;
        // }else{
        //     if(ball.vx < 0)
        //         ball.vx = -ball.vx;
        // }
        ball.x = e.clientX;
        ball.y = e.clientY;
        
        clear();
        ball.draw();
    }
});

canvas.addEventListener('click', function(e){
    if(!isBallMoving){
        raf = window.requestAnimationFrame(update);
        isBallMoving = true;
    }
});

canvas.addEventListener('mouseout', function(e){
    window.cancelAnimationFrame(raf);
    isBallMoving = false;
});