var status1=""
var object=[]

function preload(){
    img=loadImage("monitor.jpg")
}

function setup(){
    canvas=createCanvas(600, 400)
    canvas.center()

    objectdetect=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("apple").innerHTML="Detecting Objects";
}

function modelLoaded(){
    console.log("Model is Loaded");
    objectdetect.detect(img, gotResults);
    status1=true;
}

function gotResults(error, results){
    if (error){
        console.log("Error");
    }
    console.log(results);
    object=results;
}