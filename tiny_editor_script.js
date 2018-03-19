function dgsHideDIV() {
var divToHide=document.getElementById("dgsDIV");
divToHide.style.visibility="hidden";
};

function createDGSNotediv() {
	var winW,
	winH;
	if (document.body && document.body.offsetWidth) {
		winW = document.body.offsetWidth;
		winH = document.body.offsetHeight;
	}
	if (document.compatMode === 'CSS1Compat' && document.documentElement && document.documentElement.offsetWidth) {
		winW = document.documentElement.offsetWidth;
		winH = document.documentElement.offsetHeight;
	}
	if (window.innerWidth && window.innerHeight) {
		winW = window.innerWidth;
		winH = window.innerHeight;
	}
	var pl = winW - 750;
	var ph = winH - 10;
	var dgsDIV = document.createElement("div");
	dgsDIV.setAttribute("id", "dgsDIV");
	dgsDIV.style.position = 'fixed';
	dgsDIV.style.top = '10px';
	dgsDIV.style.left = pl + 'px';
	dgsDIV.style.width = '475px';
	dgsDIV.style.zIndex = '10000000';
	dgsDIV.style.visibility = "visible";
	dgsDIV.innerHTML = '<div style="position:relative; width:475px; height:20px;background-color:#E8EEF7;top:0px;padding:0px;border-bottom:1px solid #CCC;">'
	 + '<div style="position:relative;float:right;margin-right:10px;font-size:14px; font-color:#000; cursor:pointer; width:17px; height:17px; z-index:100000000;" tabindex="0" onclick="dgsHideDIV()">'
	 + '<img src="https://dl.dropboxusercontent.com/u/12619073/images/bookmarklet_close.png" height="16" width="16" /></div>'
	 + '<div style="position:relative;height:98%;margin:0px;">'
	 + '<iframe src="https://dl.dropboxusercontent.com/u/12619073/tiny_editor.html" height="' + ph + '" frameborder="0" width="475"></iframe>'
	 + '" width="100%" height="98%" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe></div></div>';
	document.body.insertBefore(dgsDIV, document.body.firstChild);
};
createDGSNotediv();

/*
javascript:function addDGSNotescript(){var head=document.getElementsByTagName("head")[0];if(!head){return;} var linkElem=document.createElement("script");linkElem.setAttribute("src","https://dl.dropboxusercontent.com/u/12619073/tiny_editor_script.js");linkElem.setAttribute("type","text/javascript");head.appendChild(linkElem);};addDGSNotescript();
*/