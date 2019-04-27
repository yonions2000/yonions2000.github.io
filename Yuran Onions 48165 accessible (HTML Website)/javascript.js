function myResponsMenu() {
    var x = document.getElementById("navigation");
    if (x.className === "navigate") {
        x.className += " responsive";
    } else {
        x.className = "navigate";
    }
}
        



function checkforblank(){
	
	if (document.getElementById('_name').value == "") {
		alert('Please fill in all sections');
		document.getElementById('_name').style.borderColor ="red";
		return false;
	}
	
	if (document.getElementById('_email').value == "") {
		alert('Please fill in all sections');
		document.getElementById('_email').style.borderColor ="red";
		return false;
	}
	
	if (document.getElementById('_subject').value == "") {
		alert('Please fill in all sections');
		document.getElementById('_subject').style.borderColor ="red";
		return false;
	}
	
	if (document.getElementById('_msg').value == "") {
		alert('Please fill in all sections');
		document.getElementById('_msg').style.borderColor ="red";
		return false;
	}
}