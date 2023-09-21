song1 = "";
song2 = "";
function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("PoseNet is Initialised");
}
function draw(){
    image(video,0,0,600,500);
}
function gotPoses(){
    if(results.length > 0){
        console.log(results);
        LeftWristX = results[0].pose.leftWrist.x;
        LeftWristY = results[0].pose.leftWrist.y;
        console.log("LeftWrist X = "+LeftWristX+" LeftWrist Y = "+LeftWristY);
    
        RightWristX = results[0].pose.rightWrist.x;
        RightWristY = results[0].pose.rightWrist.y;
        console.log("RightWrist X = "+RightWristX+" RightWrist Y = "+RightWristY);
    }
}