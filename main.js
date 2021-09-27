function preload() {

}

function setup() {
    canvas = createCanvas(380, 380)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()
    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/EleioIL6F/model.json", modelLoaded);
}

function draw() {
    image(video, 0, 0, 380, 380);
    classifier.classify(video, Got_Result)
}

function modelLoaded() {
    console.log("model is loaded");
}

function Got_Result(error, result) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(result)
        object_name = result[0].label;
        document.getElementById("result_object_name").innerHTML = object_name;
        document.getElementById("quote").innerHTML = "You are the best teacher i had. I loved learning a whole 100 clases of coding with you. I'm very fortunate to have found such a wonderful mentor in you! Happy birthday to the best teacher ever! I have nothing but gratitude for you and I want to thank you for everything you've done for me!"
    }
}