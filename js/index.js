window.onload=function(){
	// skills
	(function(){
		var skill_list=document.querySelectorAll('#skills ul li>span');
		var ems=document.querySelectorAll('#skills ul li em');
		// console.log(skill_list);
		for(var i=0;i<skill_list.length;i++){
			ems[i].style.width=skill_list[i].innerHTML;
		}
	})();

		// 伸缩菜单
	(function(){
		var demoT=document.querySelectorAll('#demo .demo_list>li h4');
		var demo_con=document.querySelectorAll('#demo .demo_list>li .demo_con');
		var demo_li=document.querySelectorAll('#demo .demo_list>li .demo_con>li');

		var con_list=document.querySelectorAll('#demo .list_content');
		var con_nav=document.querySelectorAll('#demo .list_content .nav');
		var con_ul=document.querySelectorAll('#demo .list_content .wrap>ul');
		var list_con=document.querySelectorAll('#demo .list_content .wrap>ul>li');
		console.log(list_con);
		for(var i=0;i<demoT.length;i++){
			demoT[i].index=i;
			demoT[i].onoff=false;
			demoT[0].onoff=true;
			demoT[i].onclick=function(){	
				for(var j=0;j<demoT.length;j++){
					demoT[j].className='';	
					demo_con[j].style.display='none';
				}
				this.onoff=!this.onoff;
				if(this.onoff){
					this.className='active';
					demo_con[this.index].style.display='block';
					this

				}else{
					this.className='';
					demo_con[this.index].style.display='none';
				}
				
			}
		}
		for(var i=0;i<demo_li.length;i++){
			demo_li[i].index=i;
			demo_li[i].onclick=function(){
				for(var j=0;j<demo_li.length;j++){
					demo_li[j].className='';
					list_con[j].style.display='none';
				}
				this.className='checked';
				list_con[this.index].style.display='block';
				if(getWidth()=="sm"){
					con_list[0].style.transition='transform .2s';
					con_list[0].style.transform='translateX(0)';
					con_list[0].style.width='100vw';
					con_list[0].style.height='100vh';
					con_list[0].style.overflow='hidden';

				}
			}
		}
		con_nav[0].onclick=function(){
			con_list[0].style.transition='transform .2s';
			con_list[0].style.transform='translateX(100vw)';
		}
		if(getWidth()=="sm"){
			con_list[0].style.top=0;
			con_list[0].style.transform='translateX(100vw)';
		}

		var con_wrap=document.querySelectorAll('#demo .list_content>.wrap')[0];
		console.log(con_wrap);
		con_wrap.addEventListener('touchstart', function(e) {
			e.preventDefault();
		});
		mScroll({
			el:con_wrap,
			offBar: false//是否需要滚动条
		})
	})();

	function getWidth(){
		var W=document.documentElement.clientWidth ||document.body.clientWidth;
		console.log(W);
		return W<960? "sm" : "md";
	}

};