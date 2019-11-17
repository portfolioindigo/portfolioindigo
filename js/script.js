window.onload=function(){
	menuMobile();

	window.addEventListener("scroll",()=>{
		ghostScript();
		try{
			document.querySelector('.menu').classList.remove('open');
			document.querySelector('.hamburguer').classList.remove('close');
		}catch(e){}
	});
	window.addEventListener("resize",()=>{
		menuMobile();
	});
}


const ghostScript=()=>{
	const oWhoUs=document.querySelectorAll('.o-whous');
	oWhoUs.forEach(a=>{
		if(a.offsetTop <= window.scrollY + 240){
			a.classList.add('show');
		}
	});	
}

const menuMobile=()=>{
	if(window.innerWidth<=580){
		const ul=document.createElement('ul');
		for(let i=0;i<=2;i++){
			let li=document.createElement('li');
			ul.appendChild(li);
		}

		ul.classList.add('hamburguer');

		ul.addEventListener('click',()=>{
			const menu=document.querySelector('.menu');
			menu.classList.toggle('open');
			ul.classList.toggle('close');
		});

		const header=document.querySelector('header');
		if(header){
			header.insertAdjacentElement('afterbegin', ul);
		}

	}
}
