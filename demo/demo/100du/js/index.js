$(document).ready(function(){
	// 搜索切换
	(function(){
		var oInput=$('#search .search-inp input');
		var oLi=$('#search .menu li');
		var oText=[
				'例如：荷棠鱼坊烧鱼 或 樱花日本料理',
				'例如：昌平区育新站龙旗广场2号楼609室',
				'例如：万达影院双人情侣券',
				'例如：东莞出事了，大老虎是谁？',
				'例如：北京初春降雪，天气变幻莫测'
			];

			var iNow=0;
			oLi.each(function(index){
				$(this).click(function(){
					$(this).addClass('active').siblings('li').removeClass('active');
					iNow=index;
					oInput.val(oText[iNow]);
				});
			});
			oInput.focus(function(event) {
				if($(this).val()==oText[iNow]){
					$(this).val('');
				}
			});
			oInput.blur(function(event) {
				if($(this).val()==''){
					$(this).val(oText[iNow]);
				}
			});
	})();

	// update文字滑动
	(function(){
		var oUl=$('#search .update ul');
		var oUp=$('#search .update .triangleU');
		var oDw=$('#search .update .triangleD');
		var oText=[
			{"name":"萱萱","time":4,"title":"那些灿烂华美的瞬间…"},
			{ 'name':'畅畅', 'time':5, 'title':'广东3天抓获涉黄疑犯'},
			{ 'name':'萱萱', 'time':6, 'title':'国台办回应王郁琦'},
			{ 'name':'畅畅', 'time':7, 'title':'那些灿烂华美的瞬间' },
			{ 'name':'萱萱', 'time':8, 'title':'那些灿烂华美的瞬间'},
			{ 'name':'畅畅', 'time':9, 'title':'广东3天抓获涉黄疑犯'},
			{ 'name':'萱萱', 'time':10, 'title':'国台办回应王郁琦'},
			{ 'name':'畅畅', 'time':11, 'title':'那些灿烂华美的瞬间'}
		];
		var str='';
		for (var i=0;i<oText.length;i++) {
			str+=`<li><a href="#"><em>${oText[i].name}</em> <strong>${oText[i].time}分钟前</strong> 写了一篇新文章：${oText[i].title}</a></li>	`
		}
		oUl.html(str);
		var oLi=oUl.find('li');
		var iNow=0;
		var timer=null;
		var oClone=oLi.eq(0).clone();
			oUl.append(oClone);
			var len=oUl.children().length;
			oUp.click(function(){
				doMove(oUl,1);
			})
			oDw.click(function(){
				doMove(oUl,-1);
			});
			oUl.hover(function(){
				clearInterval(timer);
			},autoPlay);
		autoPlay();

		function autoPlay(){
			clearInterval(timer);
			timer=setInterval(function(){
				doMove(oUl,1);
			},3000)
		};
		function doMove(obj,num){
			iNow+=num;
			var H=obj.parent().height();
			if(iNow==len){
				obj.css({top:0});
				iNow=1;	
			}
			if(iNow==-1){
				obj.css({top:-(len-1)*H+'px'});
				iNow=len-2;	
			}
			obj.animate({top:-iNow*H+'px'}, 500);
		}

	})();

	// 焦点图
	(function(){
		var recommend=$('.recommend');
		var img=recommend.find('.img');
		var imgList=recommend.find('.img-list');
		var textList=recommend.find('.list_text');
		var num=1;
		var len=imgList.children().length;
		var timer=null;
		imgList.hover(function(){
			clearInterval(timer);
		},autoPlay);
		tabImg();
		autoPlay();
		function autoPlay(){
			clearInterval(timer);
			timer=setInterval(function(){
				num++;
				tabImg();
			},2000)
		};
		function tabImg(){
			num%=len;
			imgList.children('li').eq(num).addClass('active').siblings('li').removeClass('active');
			textList.children('li').eq(num).addClass('active').siblings('li').removeClass('active');
			img.children('a').eq(num).addClass('active').siblings('a').removeClass('active');
		};
	})();

	// 选项卡
	(function(){
		var oPtions=$('.options');
		var oSubway=$('.subway');
		var oAdvice=$('.advice');
		var oCoupons=$('.coupons');

		tab(oPtions);
		tab(oSubway);
		tab(oAdvice);
		tab(oCoupons);

	function tab(obj){
		var tabNav=obj.find('.nav');
		var tabCon=obj.find('.tab-con');
		var tabList=tabNav.find('li');
		var conList=tabCon.find('.tab-list');
		tabList.each(function(index, el) {
			var num=index;
			$(this).click(function(index){
				$(this).addClass('active').siblings('li').removeClass('active');
				conList.eq(num).addClass('active').siblings('.tab-list').removeClass('active');
			})
		});
	};
	})();


	// BBS
	(function(){
		var oBBS=$('.BBS .bbs_list')
		var oList=oBBS.find('li');
		oList.each(function(index, el) {
			$(this).hover(function(){
				$(this).addClass('active').siblings('li').removeClass('active');
			});
		});
	})();

		

});