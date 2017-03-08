function lisa(event){
	//console.log(event);
	if (event.keyCode==13){
		r=parseInt(Math.random()*256);
		g=parseInt(Math.random()*256);
		b=parseInt(Math.random()*256);
		code = "rgb("+r+","+g+","+b+")"
		document.body.parentNode.style.backgroundColor = code;
		document.getElementById('colour_name').innerHTML=code + " ";
	} else if (49<=event.charCode<=122) {
		chara = String.fromCharCode(event.charCode);
		document.getElementById('colour_name').innerHTML+=chara;
	}
}

window.onload=function(){
	document.body.addEventListener('keypress',lisa,false)
}