const validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 
var form = document.getElementById('form');
var user = form[0];
var email = form[1];
var message = form[2];
var button = document.getElementById('button');

function validation() {
	if (email.value.match(validateEmail)) {
		var params = { from_name: user.value, from_email: email.value, from_message: message.value }
		emailjs.send('service_ellnze8', 'template_vg1m6jx', params)
		.then(function(res) {
			console.log('success', res.status);
		})

		button.textContent = 'Sended';
		button.onclick = '';
	} else {
		button.textContent = 'Type correct mail';
	}
}
