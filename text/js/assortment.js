window.onload = function(){
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

	var k;

    $(function () {
    	

        //小圆形按钮标题  每隔3秒自动滚动
        $("#divs2").slider({ maxWidth: 750, className: "ks_wt_2 myimg", tick: 3000 });
    });


    $(".city ul").hide();
    $(".city span").click(function(){
         if($(".city ul").css("display") == "block"){
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