function myFunction(x){
	var par1=document.querySelector(x);
	var checkBox=document.querySelector("#check");
    var taille=document.querySelector("#taille");
    var font=document.querySelector("#font");
    var commentaire=document.querySelector("#commentaire");
    if (checkBox.checked == true){
   par1.style.fontFamily=font.value;
   par1.style.fontSize=taille.value+"px";
   par1.style.backgroundColor="red";
}

}
function myFn(){
	alert("vous etes sur de quitter cette page?");
}
function myfun(){
	var left=document.getElementById('left');
	var body=document.querySelector('body');
	var right=document.getElementById('right');
	var center=document.getElementById('center');
	if (left.checked == true ){
		body.style.textAlign="left";
	}
    	if (right.checked == true ){
		body.style.textAlign="right";
	}
			if (center.checked == true ){
		body.style.textAlign="center";
    }
}