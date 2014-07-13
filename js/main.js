$(document).ready(function(){
	var i;
	var numpics = 10;
	$.get("http://casacraft.homeip.net:8080/pilapse/data/pi2/latestPic.php", function(latestPic){

		for (i=0; i<numpics; i++){
			var picId = latestPic-(((numpics-1)-i)*100);

			$("#previews").append("<a href='javascript:loadPic("+picId+");'><img id='pic"+i+"' class='thumbnail' src=''></a>");
			$("#pic"+i).attr("src", "http://casacraft.homeip.net:8080/pilapse/data/pi2/thumb/"+picId+".jpg");
		}
	});

});


function loadPic(picId) {
	var url = "http://casacraft.homeip.net:8080/pilapse/data/pi2/small/"+picId+".jpg";
	$("#largePicture").attr("src", url);
}

window.animationPlaying = false;

function playAnim() {
	$("#playAnim").hide();
	$("#pauseAnim").show();

	window.animationPlaying = true;
	setTimeout(incrementFrame, 0);
}

function incrementFrame() {
	var oldUrl = $("#largePicture").attr("src");
	var picId = parseInt(oldUrl.substring(56, oldUrl.indexOf('.jpg'))) || 0;
	var url = "http://casacraft.homeip.net:8080/pilapse/data/pi2/small/"+(picId+1)+".jpg";
	$("#largePicture").attr("src", url);
	if (window.animationPlaying == true) {
		setTimeout(incrementFrame, 100);
	}
}

function pauseAnim() {
	$("#playAnim").show();
	$("#pauseAnim").hide();

	window.animationPlaying = false;
	console.log
}