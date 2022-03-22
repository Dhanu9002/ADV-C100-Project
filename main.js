var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    setTimeout(function(){
        img_id= "selfie1";
        take_snapshot();
    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

},5000  );

}

function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    setTimeout(function(){
        img_id= "selfie2";
        take_snapshot();
    speak_data1 = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data1);
    synth.speak(utterThis);

},10000  );
   
}

function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    setTimeout(function(){
        img_id= "selfie3";
        take_snapshot();
    speak_data2 = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data2);
    synth.speak(utterThis);

},15000  );
   
}

take_snapshot()
{

    console.log(img_id);

    webcam.snap(function(data_uri) {

        if(img_id=="selfie"){
            document.getElementById("result1").innerHTML = '<img id = "selfie" src="'+data_uri+'"/>';
        }

        if(img_id=="selfie1"){
            document.getElementById("result2").innerHTML = '<img id = "selfie1" src="'+data_uri+'"/>';
        }

        if(img_id=="selfie2"){
            document.getElementById("result3").innerHTML = '<img id = "selfie2" src="'+data_uri+'"/>';
        }
    });
}
