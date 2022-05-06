noseX = 0;
noseY = 0;
RightWristX = 0;
LeftWristX = 0;
difference = 0;
function setup(){
video = createCapture(VIDEO);
video.size(550,500);
canvas = createCanvas(300,300);
canvas.position(560,150);
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses)
}
function gotPoses(results){
if (results.length > 0){
console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
RightWristX = results[0].pose.rightWrist.x;
LeftWristX = results[0].pose.leftWrist.x;
difference = floor(LeftWristX-RightWristX);
}
}
function modelLoaded(){
console.log("Model Loaded!");
}
function draw(){
background("#73C1E0");
document.getElementById("font_size").innerHTML = "Font Size of the text will be: " + difference + " px";
textSize(difference);
fill("#000000")
text("Matt", 50,400);
}