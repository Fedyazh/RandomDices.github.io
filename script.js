
var arr1 = [];
var arr2 = [];

function addCubeFace(btn,input,ul,arr){
	
	$(btn).click(function(){
		if($(input).val() != ''){
			var inputtext = $(input).val()
			$(ul).append('<li>'+inputtext+'</li>');
			arr.push(inputtext);
			console.log(arr);
		}
	});
	
}


function RandomCube(btn,fArr,sArr,face1,face2){
	
	$(btn).click(function(){
		
	if((fArr.lenght != 0 ) && (sArr.lenght != 0) ){
		
		$(face1).html(randomArrElement(fArr));
		$(face2).html(randomArrElement(sArr));
	}
	
	});
}

function randomArrElement(arr){
	
	var rand = Math.floor(Math.random() * arr.length);
	return(arr[rand]);
}

addCubeFace('#btn','#tex','#foo',arr1);
addCubeFace('#btn2','#tex2','#foo2',arr2);
RandomCube('#randomButton',arr1,arr2,'#randomCube1','#randomCube2')