
function cast() {
	
}


function main(){
	console.log("Program running.");
	console.log("stuff is happening");

			  var URL = window.URL || window.webkitURL;

			  var displayMessage = function (message, isError) {
			    var element = document.querySelector('#message')
			    element.innerHTML = message
			    element.className = isError ? 'error' : 'info'
			  }

			  var playSelectedFile = function (event) {
			    var file = this.files[0]
			    var name = file.name
			    var type = file.type
			    document.getElementById('title').innerHTML = name;
			    var videoNode = document.querySelector('video')
			    var canPlay = videoNode.canPlayType(type)
			    if (canPlay === '') canPlay = 'no'
			    var message = 'Can play type "' + type + '": ' + canPlay
			    var isError = canPlay === 'no'
			    displayMessage(message, isError)

			    if (isError) {
			      return
			    }

			  var fileURL = URL.createObjectURL(file)
			    videoNode.src = fileURL
			  }

			  var inputNode = document.querySelector('input')
			  inputNode.addEventListener('change', playSelectedFile, false);
}



document.body.onkeyup = function(e){
	var videoPlayer = document.getElementById('player');
    if(e.keyCode == 32){
        if (videoPlayer.paused == false) {
            videoPlayer.pause();
            document.getElementById("title").style.display = 'block';
        } else {
            videoPlayer.play();
            document.getElementById("title").style.display = 'none';
        }
    }
};

window.onload = function(){
		main();
};
