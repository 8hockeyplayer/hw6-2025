var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1")
	video.autoplay = false;
	console.log('auto play is set to ' + video.autoplay)
	video.loop = false
	console.log('loop is set to ' + video.loop)
});
const volume = document.getElementById('volume')
const volslider = document.getElementById('slider')
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play()
	volume.innerHTML = volslider.value + '%'
	console.log('yes')
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
})

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9
	console.log(video.playbackRate);

})

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9
	console.log(video.playbackRate);

})

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 10 >= video.duration){
		video.currentTime = 0
		// video.pause()
	}
	else{
		video.currentTime = video.currentTime + 10
	}
	console.log(video.currentTime)

})
const muteButton = document.getElementById('mute')
document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted === false){
		video.muted = true
		muteButton.innerHTML = 'Unmute'
		// volume.innerHTML = 0 + '%'
		}
	else{
		video.muted = false
		muteButton.innerHTML = 'Mute'
		// volume.innerHTML = volslider.value + '%'

	}
})

volslider.addEventListener("input", function(){
	video.volume = volslider.value * .01
	volume.innerHTML = volslider.value +'%'
})

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add('oldSchool')

})

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool')

})