function createItemList(){

let listItem = +prompt('Enter list item amount','5');
listArr=[];
for(let i=0; i<listItem; i++){
	listAmount= prompt('Enter list item here', 'whatever');
	listArr[i]=listAmount;
};

const markup=`<div id="list-block">
     ${listArr.map(function(element){
     	return`<p>${element}</p>`}).join('')}
     </div>`;

document.getElementById('container').innerHTML = markup;

let sec =10;
function countDown(){
	if(sec<1){
		document.body.remove()
   }
   else{
   	document.getElementById('timer').innerHTML =sec;
   	setTimeout(countDown, 1000);
   	sec--;
   }
}
countDown();
};
createItemList();
