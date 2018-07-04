window.onload=function(){

	(function(){
		var pic=document.getElementById("pic");
		var oul=pic.getElementsByTagName("ul")[0];
		var oli=oul.getElementsByTagName("li");
		var pre=pic.getElementsByClassName("prev")[0];
		var next=pic.getElementsByClassName("next")[0];
		var tagbtn=pic.getElementsByClassName("tagpic")[0];

		var timer=null;	
		createList(oul);	//先调用
		var num=1; //声明全局变量num
		var iNow=0;
		next.onclick=function(){
			nextPic(function(){
					autoPlay(oul,num,tagbtn);
			});
		}
		
		pre.onclick=function(){
			prePic(function(){
					autoPlay(oul,num,tagbtn);
			});
		}


		//obj滚动的li的父级元素ul  nun=0；全局变量  "left" 滚动的属性
		//tagbtn滚动切换的小圆点父级元素 

		//var timer=null;	
		//createList(oul);	//先调用
		//var num=1; //声明全局变量num
		//var iNow=0;

		function prePic(callback){
			clearInterval(timer);
			Move(oul,-num,"left",60,tagbtn);
			callback&&callback();

		};
		function nextPic(callback){
			clearInterval(timer);
			Move(oul,num,"left",60,tagbtn);
			callback&&callback();
		}; 

		//自动播放
		autoPlay(oul,num,tagbtn);

		function autoPlay(obj,num,tagbtn){
			clearInterval(timer);
			timer=setInterval(function(){
				Move(obj,num,"left",60,tagbtn);
			},3000)
		}


		function Move(obj,num,attr,dir,tagbtn){
			iNow+=num;
			var len=obj.children.length;
			var value=obj.parentNode.offsetWidth;
			obj.style.width=len*value +'px';
			if(iNow>=len){
				obj.style[attr]=0;
				iNow=1;	
			}
			if(iNow<=-1){
				obj.style[attr]=-(len-1)*value+'px';
				iNow=len-2;	
			}
			var target=-iNow*value;
			doMove(obj,target,attr,dir);
			tag(tagbtn, iNow);
		}
		function tag(obj,num){
			var child=obj.children;
			var n=obj.children.length;
			for(var i=0;i<n;i++){
				child[i].index=i;
				child[i].className='';
			}
			child[iNow%n].className='active';
		}
	})();
	

function createList(obj){
	var lastChild=obj.children[0].cloneNode(true);
		obj.appendChild(lastChild);
}

function doMove(obj,target,attr,dir,callback){
		dir=parseInt(getStyle(obj,attr))<target? dir : -dir;	//若当前位置小于目标位置，说明向前移动，dir为正；否则为负
		clearInterval(obj.timer);				//自定义一个属性timer；不用再外面声明了
		obj.timer=setInterval(function(){
			var speed=parseInt(getStyle(obj,attr))+dir;
			if(speed>target&&dir>0||speed<target&&dir<0){
				speed=target;
			}

			obj.style[attr]=speed +"px";
			if(speed==target){
				clearInterval(obj.timer);
				callback&&callback();		//相当于if(callback){callback()};
			}
		},50)
};

function getStyle(obj,attr){
	return obj.currentStyle? obj.currentStyle[attr] : getComputedStyle(obj)[attr];	//为了兼容ie8以下和其他浏览器
};

};