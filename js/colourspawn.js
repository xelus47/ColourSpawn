// courtesy of http://snipplr.com/view/37973/

function rgb2hex(r,g,b) {
  var rgb = [r.toString(16),g.toString(16),b.toString(16)]
  for (var i=0;i<3;i++) {
    if (rgb[i].length==1) rgb[i]=rgb[i]+rgb[i];
  }
  if(rgb[0][0]==rgb[0][1] && rgb[1][0]==rgb[1][1] && rgb[2][0]==rgb[2][1])
    return '#'+rgb[0][0]+rgb[1][0]+rgb[2][0];
  return '#'+rgb[0]+rgb[1]+rgb[2];
}


function lisa(event){
	//console.log(event);
	if (event.keyCode==13){
		r=parseInt(Math.random()*256);
		g=parseInt(Math.random()*256);
		b=parseInt(Math.random()*256);
		code = "rgb("+r+","+g+","+b+")"
		hex = rgb2hex(r,g,b)
		document.body.parentNode.style.backgroundColor = code;
		document.getElementById('colour_name').innerHTML=code + "<br />" + hex + " ";
	} else if (49<=event.charCode<=122) {
		chara = String.fromCharCode(event.charCode);
		document.getElementById('colour_name').innerHTML+=chara;
	}
}

window.onload=function(){
	document.body.addEventListener('keypress',lisa,false)
}