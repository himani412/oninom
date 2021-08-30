img= "";
status="";
objects=[];
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
    objects=results;

}
function draw(){
    image(img,0,0,640,420);

    if(status != ""){
for(i = 0 ; i < objects.length ; i++){
document.getElementById("status").innerHTML=" Status : Objects Detected";
fill("#0000FF");
percent = floor(objects[i].confidence*100);
text(objects[i].label+" " + percent + "%" , objects[i].x,objects[i].y);
noFill();
stroke("#0000FF");
rect(objects[i].x,objects[i].y,objects[i].width , objects[i].height );
}
    }
    
    

}    
