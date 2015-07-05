function assert(a,b){
	 createAssert(a,b);
}
function assertEqual(a,b){
	 createAssert(a,b,true);
}


function createAssert(a,b,flag){
	var testerdiv = document.getElementById("jstester");
	var isPass;
	var msg = ["a"," and ", "b", " are "];
	if( flag ){		
		isPass = (a===b)?'pass':'fail';
		msg.push(" Identical!");
	}
	else {
		isPass = (a==b)?'pass':'fail';
		msg.push(" Equal!");
	}
	

	testerdiv.innerHTML += "<div class='"+isPass+"'>"+msg.join("")+"</div>";
}