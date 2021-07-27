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