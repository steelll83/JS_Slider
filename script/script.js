var imagesHolder = document.getElementById('imagesHolder');
var img = imagesHolder.getElementsByTagName('img')[0];
var toLeftButton = document.getElementsByClassName('toLeft')[0];
var toRightButton = document.getElementsByClassName('toRight')[0];

toLeftButton.style.display = 'none';
toRightButton.style.display = 'block';
imagesHolder.style.left = '0px';


var goNext = function () {
		imagesHolder.style.left = imagesHolder.offsetLeft - img.width + 'px';
		checkButton(imagesHolder.offsetLeft - img.width);
	}

var goPrev= function () {
		imagesHolder.style.left = imagesHolder.offsetLeft + img.width + 'px';
		checkButton(imagesHolder.offsetLeft + img.width);
	}


var checkButton = function (tst) {

	if (tst == 0) {
		toRightButton.style.display = 'block';
		toLeftButton.style.display = 'none';
	}

	if (tst == -500 || tst == -1500)  {
		toRightButton.style.display = 'block';
		toLeftButton.style.display = 'block';
	}

	if (tst == -2000) {
		toRightButton.style.display = 'none';
		toLeftButton.style.display = 'block';
	}
}

toLeftButton.addEventListener("click", goPrev);
toRightButton.addEventListener("click", goNext);

