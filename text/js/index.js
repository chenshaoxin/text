window.onload=function(){
	(function (doc, win) {
            var docEl = doc.documentElement,
                resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
                recalc = function () {
                    var clientWidth = docEl.clientWidth;
                    if (!clientWidth) return;
                    if (clientWidth>=750) {
                         // docEl.style.fontSize ='100px';
                    }else{
                        docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
                    } 
                };
            // Abort if browser does not support addEventListener
            if (!doc.addEventListener) return;
            win.addEventListener(resizeEvt, recalc, false);
            doc.addEventListener('DOMContentLoaded', recalc, false);
        })(document, window);

        TouchSlide({ 
        slideCell:"#focus",
        titCell:".hd ul", //开启自动分页 autoPage:true ，此时设置 titCell 为导航元素包裹层
        mainCell:".bd ul", 
        effect:"leftLoop", 
        autoPlay:true,//自动播放
        autoPage:true //自动分页
    });




	// var city_list=document.querySelectorAll(".city li");
 //    for(var k=1;k<city_list.length;k++){
 //                    city_list[k].style.display="none";
 //                }


	// city_list[0].onclick=function(){
 //        for(var i=0;i<city_list.length;i++){
 //        	city_list[i].style.display="block";
 //        	if(i!=0){
 //        	city_list[i].onclick=function(){
 //        		city_list[0].innerHTML=this.innerHTML;
 //        		for(var j=1;j<city_list.length;j++){
 //        			city_list[j].style.display="none";
 //        		}
 //               }
 //        	}
 //        }
	// }
   
    $(".city ul").hide();
    $(".city span").click(function(){
         if($(".city ul").is(":visible")){
            $(".city ul").hide();
        }else{
            $(".city ul").show();
        }
    });
    $(".city li").click(function(){
        var text = $(this).text();     
        $(".city span").text(text);
        $(".city ul").hide();
        
    });



}


