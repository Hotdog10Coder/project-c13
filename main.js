function preload(){
    img = loadImage('https://www.industrialempathy.com/posts/image-optimizations/');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide()
}

function draw()
{
    fill(255,0,0)
    stroke(255,0,0)
    circle(50,50,80)
    circle(50,430,80)
    circle(590,50,80)
    circle(590,430,80)
    
    fill(0,255,0)
    stroke(0,255,0)
    rectangle(90,40,460,20)
    rectangle(90,420,460,20)
    rectangle(40,90,20,300)
    rectangle(580,90,20,300)
}