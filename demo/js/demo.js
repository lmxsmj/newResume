window.onload=function(){


	var demo=document.querySelector('#demo');
	var ul=demo.getElementsByTagName('ul')[0];
	var li=ul.getElementsByTagName('li')[0];
	var bgc=["yellowgreen","pink","skyblue"];
	var str='';
	for (var i=0;i<li.length;i++){
		li[i].index=i;
		li[i].style.backgroundColor=bgc[this.index%bgc.length];	//取模
		
		li[i].mouseover(function(){
			str=this.style.backgroundColor;
			this.style.backgroundColor="#ccc";
		});
			li[i].mouseout(function(){
			this.style.backgroundColor=str;
		});
	};

};