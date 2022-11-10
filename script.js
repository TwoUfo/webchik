var a=document.getElementById("img");

var iter = 0;

function changeImg() {
	iter++;
	if(iter == 0) a.src="images.jfif";
	else if(iter == 1) a.src="images1.jfif";
	else if(iter == 2) a.src="images2.jfif";
	else if(iter == 3) a.src="images3.jfif";
	else if(iter == 4) a.src="images4.jfif";

	if(iter == 4) iter = -1;
}