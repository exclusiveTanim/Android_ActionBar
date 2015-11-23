var actionBarHelper;

function doopen(e){
	// we set the library only when the activity is available
	actionBarHelper=require('com.alcoapps.actionbarhelper')($.index);
	actionBarHelper.reloadMenu(); // this forces the actionbar to show menu options from XML
	actionBarHelper.setTitle('Title');
}

/*function changeTitle(){
	actionBarHelper.setTitle('This is the new title');
	
}*/
function onsearchclick(e){
	alert('Clicked Search');
}

function onsaveclick(e){
	alert('Clicked save');
}

function onshareclick(e){
	alert('Clicked Share');
}

function onaboutclick(e){
	alert('Clicked about');
}

function oncreditsclick(e){
	alert('Clicked credits');
}
function ondebitsclick(e){
	alert('Clicked Debits');
}
$.index.open();
