
video = "" ;



function preload() {

    video = createVideo('video.mp4') ;

    video.hide ;

}


function setup() {

    canvas = createCanvas( 480 , 380 ) ;
    
    canvas.center() ; 

}


function draw() {

    image( video , 0 , 0 , 480 , 380 ) ;

}


function start() {

    objectDetector = ml5.objectDetector( 'cocossd' , modelLoaded );

    document.getElementById( "status" ).innerHTML = " STATUS :-: DETECTING OBJECTS " ;

}


function modelLoaded() {

    console.log(" MODEL - LOADED - SUCCESSFULLY ");

    status = true ;

    video.loop();

    video.speed(1.5);

    video.volume(2);
    
}