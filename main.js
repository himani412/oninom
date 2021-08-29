img= "";
status="";
function preload(){
    img = loadImage('dog_cat.jpg');
}
function setup(){
    canvas= createCanvas(640,420);
    canvas.center();
    objectDetecter = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects ";

}
function modelLoaded(){
    console.log("ModelLoaded!");
    status= true;
    objectDetecter.detect(img,gotresult);
}
function gotresult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);

}
function draw(){
    image(img,0,0,640,420);
    fill("#ff6700");
     text("Dog ", 45 ,75);
    noFill();
    stroke("#17684f");
    rect(30,60,450,350);

    fill("#0000FF");
    text("Cat", 355,78);
    noFill();
    stroke("#0000FF");
    rect(300,90,270,320);

     
}