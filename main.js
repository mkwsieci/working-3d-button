var c = document.querySelector('canvas');
var ctx = c.getContext('2d');
c.width = window.innerWidth;
c.height = window.innerHeight;
//console.log(c);
window.addEventListener('resize', function(){
    c.width = window.innerWidth;
    c.height = window.innerHeight;
});
function color(){
    var color, hex;
    hex = "#";
    for(i=0; i<6; i++){
        color = Math.floor(Math.random()*15);
        switch(color){
            case 10:
                color = "A";
                break;
            case 11:
                color = "B";
                break;
            case 12:
                color = "C";
                break;
            case 13:
                color = "D";
                break;
            case 14:
                color = "E";
                break;
            case 15:
                color = "F";
                break;
        }
        hex += color; 
    }
    return hex;
}
function Circle(x, y, dx, dy, radius, color){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
    this.draw = function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    this.update = function(){
        this.draw();
        this.x += this.dx;
        this.y += this.dy;
        if(this.x + radius >= innerWidth || this.x-radius <= 0){
            this.dx = -this.dx;
        }
        if(this.y + radius >= innerHeight || this.y - radius <= 0)
        {
            this.dy = -this.dy;
        }
    }
}
var circleArray = [];
for(var i = 0; i < 10; i++){
    var x = Math.random() * innerWidth;
    var y = Math.random() * innerHeight;
    var dx = (Math.random() - 0.5) * 5;
    var dy = (Math.random() - 0.5) * 5;
    var radius = (Math.random() * 20) +1;
    var col = color();
    circleArray.push(new Circle(x, y, dx, dy, radius, col));
}
console.log(circleArray);

/* function animation(){
    requestAnimationFrame(animation);
    ctx.clearRect(0, 0, c.width, c.height);
    //circle.update();
}
animation(); */