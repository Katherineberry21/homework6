var video;
var volume;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play()
	console.log("Play Video");
	console.log(video)
	volume = document.querySelector("#volume");
	console.log(volume)
	volume.innerHTML = (video.volume) * 100 + '%';
} 

function pauseVid() { 
	video.pause()
	console.log("Pause Video");
} 

 function decreaseSpeed() { 
	video.playbackRate -= .2
   	console.log("Speed is "+ video.playbackRate);
 } 

 function increaseSpeed() {
	video.playbackRate += .25
 	console.log("Speed is "+ video.playbackRate);
 } 

 function skipAhead() {
	video.currentTime += 60
	 console.log("Current location is "+ video.currentTime);
	 if (video.onended){
		 video.onended = true;
		 video.currentTime = 0
		 video.playbackRate = 1
	 }
 } 

 function mute() { 
	console.log(video.muted)
	if (video.muted){
	  	video.muted = false;
		console.log("Unmuted");
		var button = (document.querySelector('#mute'))
		button.innerHTML = 'Unmuted'
	  }
  	else{
		video.muted = true;
		console.log("Muted");
		var button = (document.querySelector('#mute'))
		button.innerHTML = 'Muted'
	  }
 }

 function changeVolume() {
	 let slider = document.querySelector('#volumeSlider')
	 console.log(slider.value)
	 video.volume = slider.value/100;
	 console.log("Volume is " + video.volume);
	 volume.innerHTML = (video.volume) * 100 + '%';
 }
       

 function gray() { 
	document.getElementById("myVideo").className = 'grayscale'
	
	
	console.log("In black and white")

 }

 function color() {
	 document.getElementById('myVideo').className -= 'grayscale';
 	console.log("In color") 
 }
