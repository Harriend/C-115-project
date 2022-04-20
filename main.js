noseX = 0;
noseY = 0;

function preload(){
    moustache = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup(){
    canvas = createCanvas(500,250);
    canvas.position(500,200);
    video = createCapture(VIDEO);
    video.size(300,200);
    video.hide();
    poseNet = ml5.poseNet(video,modelloaded)
    poseNet.on('pose',gotPoses)
    
}

function modelloaded(){
    console.log("posenet Start")
}

function gotPoses(results){

    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x +90;
        noseY = results[0].pose.nose.y +20;
        console.log("nose x coords = " + results[0].pose.nose.x);
        console.log("nose y coords = " + results[0].pose.nose.y);
    }
}

function take_snapshot(){
save('moustache_filter_photo.jpg')
}

function draw(){
    image(video,100,0,300,250);
    image(moustache , noseX , noseY , 30 , 30);
    
}