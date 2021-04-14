// 轮播图
$(function(){
	var first=$(".viewbox li").first().clone()
	var last=$(".viewbox li").last().clone()
	$(".viewbox").append(first)
	$(".viewbox").prepend(last)
	var index=1
	var start
	var w
	var len=$(".viewbox li").length
	$(".slider").on("touchstart",function(e){
		start=e.touches[0].pageX
		// console.log(start);
		w=parseInt($(".viewbox li").css("width"))
	})
	$(".slider").on("touchend",function(e){
		var end=e.changedTouches[0].pageX
		// console.log(end);
		if(start-end>w/5){
			index++
			if(index>len-2){
				index=1
				$(".viewbox").css({
					transform:"translateX(0)"
				})
			}
		}else if(start-end<w/5){
			index--
			if(index<1){
				index=len-2
				$(".viewbox").css({
					transform:"translateX("+(-7.5*(len-1))+"rem)"
				})
			}
		}
		$(".viewbox").animate({transform:"translateX("+(-7.5*index)+"rem)"})
		$(".pagination span	").eq(index-1).addClass("active").siblings().removeClass("active")
	})
})
// 导航图标
$(function(){
		var first=$(".show-hot-slider li").first().clone()
		var last=$(".show-hot-slider li").last().clone()
		$(".show-hot-slider").append(first)
		$(".show-hot-slider").prepend(last)
		var index=1
	function fn(){
		var len=$(".show-hot-slider li").length
		index++
		if(index>len-2){
			index=1
			$(".show-hot-slider").css({transform:"translateY(0)"})
		}else if(index<1){
			index=len-2
			$(".show-hot-slider").css({transform:"translateY("+(-.8*len-1)+"rem)"})
		}
		$(".show-hot-slider").animate({transform:"translateY("+(-.8*index)+"rem)"},500)
	}
	setInterval(function(){
		fn()
	},2000)
})
// 渲染
$.get("js/product.json",function(res){
	$.each(res,function(index,item){
		var el=$(`<a href="detail.html?pid=${item.pid}" class="guess-a">
					<div class="guess-img">
						<img src="${item.imgSrc}" >
					</div>
					<div class="guess-text">
						<p>${item.title}</p>
						<h4>￥${item.price}<span>${item.buy}人已购买</span></h4>
					</div>
				</a>`)
				$(".guess").append(el)
	})
})
