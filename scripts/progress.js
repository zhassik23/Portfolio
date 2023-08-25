// progress bar
var progress = document.getElementById('progress_bar');
var total_height = document.body.scrollHeight - window.innerHeight;

window.onscroll = function() {
	var progress_height = (window.pageYOffset / total_height) * 100;
	progress.style.height = progress_height + '%';
}