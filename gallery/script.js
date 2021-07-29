window.onload = () => {
	loaderSvgWrapper = document.querySelector('#loaderSvgWrapper');
	loaderSvgWrapper.style.display = 'none';
};


const menu = document.querySelector('.menu')
const wrapper = document.querySelector('.wrapper');
const container = document.querySelector('.container');
const header = document.querySelector('.header');

function handleClick() {
	if (menu.classList.contains('active')) {
		menu.classList.remove('active');
		wrapper.classList.remove('active');
		container.classList.remove('active');
		setTimeout(function(){
			wrapper.classList.remove('crop');
			wrapper.style.height = 'auto';
		}, 300);
	} else {
		const wHeight = window.innerHeight;
		wrapper.style.height = `${wHeight}px`;
		wrapper.classList.add('crop');
		menu.classList.add('active');
		wrapper.classList.add('active');
		container.classList.add('active');
	}
}

menu.addEventListener('click', handleClick);

var modal = document.querySelector('.modal');
var mImage = document.querySelectorAll('.modal-image');
var image = document.querySelectorAll('.image');
var cross = document.querySelector('.cross');

var i;

for(i = 0; i < image.length; i++) ((i)=> {
	image[i].onclick = () => {
		modal.style.display = 'flex';
		mImage[i].style.display ="block";
		cross.onclick = () => {
			modal.style.display = 'none';
			mImage[i].style.display ="none";
		}
	}
})(i);