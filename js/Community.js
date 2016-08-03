// JavaScript Document
var photo_index=1;
var photo_total=0;
var photo_time;
var i=1;
var next;
var photo_change_time=2000;
$(function(){
	//获得所有li标签个数
	photo_total=$('.xm_slider_photo li').length;
	photo_time=window.setInterval('showPic()',photo_change_time);
	
	
	//图片编号切换图片
	$('.xm_slider_page li').bind({
		mouseover:function(){
			clearInterval(photo_time);
			i=$(this).text();
			changePic($(this).text());			
		},
		mouseout:function(){
			photo_time=window.setInterval('showPic()',photo_change_time);
		}	
	});
	
	
	//图片左移
	$('.prev').click(function() {
		clearInterval(photo_time);
		showPic(1);
		photo_time=window.setInterval('showPic()',photo_change_time);
	});
	//图片右移
	$('.next').click(function() { 
		clearInterval(photo_time);
		showPic(2);
		photo_time=window.setInterval('showPic()',photo_change_time);
	});
});
 //图片轮转
function showPic(next){
	//arguments像数组(并不是真的数组，是一个Arguments对象， 再次强调)一样，有length属性，可以代表传给函数的参数的个数。
	if(arguments.length>0){
		console.info(next);
		if(next%2==0){
			photo_index+=1;
			if(photo_index>4){
				photo_index-=4;
			}
		}else{
			photo_index-=1;
			if(photo_index<0){
				photo_index+=4;
			}
		}
	}else{
		photo_index=i%photo_total;
	}
	$('.xm_slider_photo li').css('display','none');
	$('.xm_slider_page li').attr('class','page_out');//恢复所有的编号样式
	$('.xm_slider_photo li').eq(photo_index-1).css('display','block');
	//js中的eq和get:都是:取得其中一个匹配的元素。 index表示取得第几个匹配的元素;eq(index)返回的是jquery对象，get(index)返回的是纯DOM对象。
	$('.xm_slider_page li').eq(photo_index-1).attr('class','page_over');//当前显示图片数字编号的
	i++
}
//点击切换图片
function changePic(index) {
	$('.xm_slider_photo li').css('display','none');
	$('.xm_slider_page li').attr('class','page_out');//恢复所有的编号样式
	$('.xm_slider_photo li').eq(index-1).css('display','block');
	//js中的eq和get:都是:取得其中一个匹配的元素。 index表示取得第几个匹配的元素;eq(index)返回的是jquery对象，get(index)返回的是纯DOM对象。
	$('.xm_slider_page li').eq(index-1).attr('class','page_over');//当前显示图片数字编号的样式
}