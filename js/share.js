
(function(){
	
var share_list=document.querySelectorAll('#demo .list_content .share_list');
for(var i=0;i<share_list.length;i++){
	// console.log(share_list[0]);
	var share_con=share_list[i].getElementsByTagName('a');
	
	for(var j=0;j<share_con.length;j++){
		share_con[1].onclick=function(){
			shareQqzone('图片轮播','真好',123,456);
		}
	}

	// console.log(share_con[1]);
}
function shareQqzone(title,desc,url,site){
	var str="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?&title="+title+"&url="+url+"&site="+site+"";
	window.open(str,'height=400,width=400,top=100,left=100');
}
})();
