
showEatUl()
function showEatUl(){
	let lis=$("#eatUl").children();
	let divs=$("#eatUl").children().children();
	console.log(divs);
	for(let i=0;i<lis.length;i++){
		$(lis[i]).click(function(){
			//让所有的li移除class名
			for(let j=0;j<lis.length;j++){
				$(lis[j]).removeClass("show");
			}
			//让当前的li添加class名
			$(this).addClass("show");

			//让所有的li的孩子div全部display:none
			for(let x=0;x<divs.length;x++){
				$(divs[x]).css("display","none");
			}

			//让当前li的孩子div显示出来
			$(this).children("div").css("display","block");
		});
	}
}
//组合购的效果
combinationPurchase();
function combinationPurchase(){
	$("#combinationPurchase").toggle(
		function(){
			$(this).html("√");
			$(this).addClass("check");
		},
		function(){
			$(this).html("");
			$(this).removeClass("check");
		},

	);
}
