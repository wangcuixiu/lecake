
showForm();
function showForm(){
	let spans=$("#form-top").children();
	for(let i=0;i<spans.length;i++){
		$(spans[i]).click(function(){
			for(let j=0;j<spans.length;j++){
				$(spans[j]).css("color","#000");
			}
			if(i==0){
				$("#form-main2").css("display","none");
				$("#form-main1").css("display","block");
			}
			if(i==1){
				$("#form-main1").css("display","none");
				$("#form-main2").css("display","block");
			}
			$(this).css("color","red");
		});
	}
}

//点击换一张是的效果
$("#yanzhenma").html(createVerifyCode());
$("#yanzhenma").click(function(){
	$("#yanzhenma").html(createVerifyCode());
});
function createVerifyCode() {
	var sSeeds = 'abcdefghijklmnopqrstuvwxyz';

	var sVerify = '';
	for(var i = 0; i < 4; i++) {
		var iIndex = Math.floor(Math.random() * sSeeds.length);
		sVerify += sSeeds[iIndex];
	}

	return sVerify;
}

