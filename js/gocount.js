$(function(){
	//点击结算订单页面显示
	$(".count").click(function(){
		$("#order_post").slideDown();
					
	});
	
	$(".online").mouseover(function(){
		$(".online img").attr("src","images/sever_over.png");
	});
	$(".online").mouseout(function(){
		$(".online img").attr("src","images/sever_out.png");
	});
	
	$(".look_order").click(function(){
		$(".order_post_detail").slideToggle("slow");
	});
	
	/*点击修改显示修改页面*/
	$(".change").click(function(){
		$(".addr_box,.addr_box_body").fadeIn("slow");
	})
	
	/*收货地址那里修改*/
	$(".have").mouseover(function(){
		$(".addr_detail .change").css("display","block");
		$(".have").css("border","1px solid #ccc");
	});$(".have").mouseout(function(){
		$(".addr_detail .change").css("display","none");
		$(".have").css("border","1px solid #f0f0f0");
	});
	/*收货地址那里添加*/
	$(".no").mouseover(function(){
		$(".no .add_newaddr").css("background","#ccc");
		$(".no").css("border","1px solid #ccc");
	});$(".no").mouseout(function(){
		$(".no .add_newaddr").css("background","#f0f0f0");
		$(".no").css("border","1px solid #f0f0f0");
	});
	/*添加那里点击*/
	$(".no").click(function(){
		$(".addr_box,.addr_box_body").fadeIn("slow");
	})
	
	/*修改地址取消*/
	$(".addr_cancel").click(function(){
		$(".addr_box,.addr_box_body").fadeOut("slow");
	});
	/*省市县级联*/
	$("#city_4").citySelect({
    	prov:"湖南", 
    	city:"衡阳",
		dist:"珠晖区",
		nodata:"none"
	});
	
	
})
				