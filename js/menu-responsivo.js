document.querySelector('.open-menu').onclick = function(){
	document.documentElement.classList.add('menu-on');
}

document.querySelector('.close-menu').onclick = function(){
	document.documentElement.classList.remove('menu-on');
}

function fechaMenu(){
	document.documentElement.classList.remove('menu-on');
}

document.documentElement.onclick = function(event){
	if(event.target === document.documentElement){
		document.documentElement.classList.remove('menu-on');
	}
}