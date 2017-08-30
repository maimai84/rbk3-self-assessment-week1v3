// function extene(array){
// // your code here
//  var this.array=[];
//  this.first=first;
//  this.last=last;
//  this.length=0;
 Array.prototyp.first=function(){ 
	if (this.length>0){
	return this[0];
}
else {
	return undefined;
}
}
 Array.prototyp.last=function(){
	if(this.length>0){
		return this[this.length-1]
	}
	return undefined;
}
}