// JavaScript Document
/***********************************************
* Ultimate Fade-In Slideshow: © Dynamic Drive (http://www.dynamicdrive.com)
* This notice MUST stay intact for legal use
* Visit http://www.dynamicdrive.com/ for this script and 100s more.
***********************************************/

var fader1=new Array()
	fader1[0]=["/images/banners/fader/combine_and_save1108_1.jpg", "/completepackages/index.html", ""] //"image path", "link", "target"
 	fader1[1]=["/images/banners/fader/somethings2.jpg", "/completepackages/index.html", ""]
 	fader1[2]=["/images/banners/fader/combineandsave.jpg", "/completepackages/index.html", ""]
 	fader1[3]=["/images/banners/fader/combineandsave2.jpg", "/completepackages/index.html", ""]
 	fader1[4]=["/images/banners/fader/movie_night_pbc.jpg", "/television/channels/movie.html", ""]
 	fader1[5]=["/images/banners/fader/pbt_extra.jpg", "/television/channels/extra.html", ""]
	fader1[6]=["/images/banners/fader/pbt_sports.jpg", "/television/channels/sports.html", ""]
	fader1[7]=["/images/banners/fader/4PBT-fax_vm_pbc.jpg", "/telephone/services/faxtoemail.html", ""]
	fader1[8]=["/images/banners/fader/4PBT-vm_em_pbc.jpg", "/telephone/services/voicemail.html", ""]
	fader1[9]=["/images/banners/fader/email-update_pbc.jpg", "/cooperative/emailupdates.html", ""]
	fader1[10]=["/images/banners/fader/movies/Focus.jpg", "http://tvinfo.paulbunyan.net/vod/details.php?id=220382", ""]
	fader1[11]=["/images/banners/fader/movies/Jupiter-Ascending.jpg", "http://tvinfo.paulbunyan.net/vod/details.php?id=220285", ""]
	fader1[12]=["/images/banners/fader/movies/The-Spongebob-Movie.jpg", "http://tvinfo.paulbunyan.net/vod/details.php?id=220293", ""]
	fader1[13]=["/images/banners/fader/movies/The-Duff.jpg", "http://tvinfo.paulbunyan.net/vod/details.php?id=221080", ""]
	fader1[14]=["/images/banners/fader/movies/Kingsman-The-Secret-Service.jpg", "http://tvinfo.paulbunyan.net/vod/details.php?id=221086", ""]
	fader1[15]=["/images/banners/fader/movies/Project-Almanac.jpg", "http://tvinfo.paulbunyan.net/vod/details.php?id=221100", ""]
	fader1[16]=["/images/banners/fader/movies/Still-Alice.jpg", "http://tvinfo.paulbunyan.net/vod/details.php?id=220957", ""]
	fader1[17]=["/images/banners/fader/movies/American-Sniper.jpg", "http://tvinfo.paulbunyan.net/vod/details.php?id=219185", ""]
 	fader1[18]=["/images/banners/fader/movies/Strange-Magic.jpg", "http://tvinfo.paulbunyan.net/vod/details.php?id=219042", ""]
 	fader1[19]=["/images/banners/fader/movies/Seventh-Son.jpg", "http://tvinfo.paulbunyan.net/vod/details.php?id=219167", ""]
	fader1[20]=["/images/banners/fader/movies/Black-or-White.jpg", "http://tvinfo.paulbunyan.net/vod/details.php?id=218450", ""]
	fader1[21]=["/images/banners/fader/movies/Blackhat.jpg", "http://tvinfo.paulbunyan.net/vod/details.php?id=218450", ""]
	fader1[22]=["/images/banners/fader/movies/Mr-Turner.jpg", "http://tvinfo.paulbunyan.net/vod/details.php?id=220457", ""]
	fader1[23]=["/images/banners/fader/movies/Selma.jpg", "http://tvinfo.paulbunyan.net/vod/details.php?id=218480", ""]
	fader1[24]=["/images/banners/fader/movies/Fifty-Shades-of-Grey.jpg", "http://tvinfo.paulbunyan.net/vod/details.php?id=218738", ""]
	fader1[25]=["/images/banners/fader/movies/Mortdecai.jpg", "http://tvinfo.paulbunyan.net/vod/details.php?id=218723", ""]
		
var fadebgcolor="white"

var fadearray=new Array() //array to cache fadeshow instances
var fadeclear=new Array() //array to cache corresponding clearinterval pointers
 
var dom=(document.getElementById) //modern dom browsers
var iebrowser=document.all
 
function fadeshow(theimages, fadewidth, fadeheight, borderwidth, delay, pause, displayorder){
this.pausecheck=pause
this.mouseovercheck=0
this.delay=delay
this.degree=10 //initial opacity degree (10%)
this.curimageindex=0
this.nextimageindex=1
fadearray[fadearray.length]=this
this.slideshowid=fadearray.length-1
this.canvasbase="canvas"+this.slideshowid
this.curcanvas=this.canvasbase+"_0"
if (typeof displayorder!="undefined")
theimages.sort(function() {return 0.5 - Math.random();}) //thanks to Mike (aka Mwinter) :)
this.theimages=theimages
this.imageborder=parseInt(borderwidth)
this.postimages=new Array() //preload images
for (p=0;p<theimages.length;p++){
this.postimages[p]=new Image()
this.postimages[p].src=theimages[p][0]
}
 
var fadewidth=fadewidth+this.imageborder*2
var fadeheight=fadeheight+this.imageborder*2
 
if (iebrowser&&dom||dom) //if IE5+ or modern browsers (ie: Firefox)
document.write('<div id="master'+this.slideshowid+'" style="position:relative;width:'+fadewidth+'px;height:'+fadeheight+'px;overflow:hidden;"><div id="'+this.canvasbase+'_0" style="position:absolute;width:'+fadewidth+'px;height:'+fadeheight+'px;top:0;left:0;filter:progid:DXImageTransform.Microsoft.alpha(opacity=10);opacity:0.1;-moz-opacity:0.1;-khtml-opacity:0.1;background-color:'+fadebgcolor+'"></div><div id="'+this.canvasbase+'_1" style="position:absolute;width:'+fadewidth+'px;height:'+fadeheight+'px;top:0;left:0;filter:progid:DXImageTransform.Microsoft.alpha(opacity=10);opacity:0.1;-moz-opacity:0.1;-khtml-opacity:0.1;background-color:'+fadebgcolor+'"></div></div>')
else
document.write('<div><img name="defaultslide'+this.slideshowid+'" src="'+this.postimages[0].src+'"></div>')
 
if (iebrowser&&dom||dom) //if IE5+ or modern browsers such as Firefox
this.startit()
else{
this.curimageindex++
setInterval("fadearray["+this.slideshowid+"].rotateimage()", this.delay)
}
}

function fadepic(obj){
if (obj.degree<100){
obj.degree+=10
if (obj.tempobj.filters&&obj.tempobj.filters[0]){
if (typeof obj.tempobj.filters[0].opacity=="number") //if IE6+
obj.tempobj.filters[0].opacity=obj.degree
else //else if IE5.5-
obj.tempobj.style.filter="alpha(opacity="+obj.degree+")"
}
else if (obj.tempobj.style.MozOpacity)
obj.tempobj.style.MozOpacity=obj.degree/101
else if (obj.tempobj.style.KhtmlOpacity)
obj.tempobj.style.KhtmlOpacity=obj.degree/100
else if (obj.tempobj.style.opacity&&!obj.tempobj.filters)
obj.tempobj.style.opacity=obj.degree/101
}
else{
clearInterval(fadeclear[obj.slideshowid])
obj.nextcanvas=(obj.curcanvas==obj.canvasbase+"_0")? obj.canvasbase+"_0" : obj.canvasbase+"_1"
obj.tempobj=iebrowser? iebrowser[obj.nextcanvas] : document.getElementById(obj.nextcanvas)
obj.populateslide(obj.tempobj, obj.nextimageindex)
obj.nextimageindex=(obj.nextimageindex<obj.postimages.length-1)? obj.nextimageindex+1 : 0
setTimeout("fadearray["+obj.slideshowid+"].rotateimage()", obj.delay)
}
}
 
fadeshow.prototype.populateslide=function(picobj, picindex){
var slideHTML=""
if (this.theimages[picindex][1]!="") //if associated link exists for image
slideHTML='<a href="'+this.theimages[picindex][1]+'" target="'+this.theimages[picindex][2]+'">'
slideHTML+='<img src="'+this.postimages[picindex].src+'" border="'+this.imageborder+'px">'
if (this.theimages[picindex][1]!="") //if associated link exists for image
slideHTML+='</a>'
picobj.innerHTML=slideHTML
}
 
 
fadeshow.prototype.rotateimage=function(){
if (this.pausecheck==1) //if pause onMouseover enabled, cache object
var cacheobj=this
if (this.mouseovercheck==1)
setTimeout(function(){cacheobj.rotateimage()}, 100)
else if (iebrowser&&dom||dom){
this.resetit()
var crossobj=this.tempobj=iebrowser? iebrowser[this.curcanvas] : document.getElementById(this.curcanvas)
crossobj.style.zIndex++
fadeclear[this.slideshowid]=setInterval("fadepic(fadearray["+this.slideshowid+"])",50)
this.curcanvas=(this.curcanvas==this.canvasbase+"_0")? this.canvasbase+"_1" : this.canvasbase+"_0"
}
else{
var ns4imgobj=document.images['defaultslide'+this.slideshowid]
ns4imgobj.src=this.postimages[this.curimageindex].src
}
this.curimageindex=(this.curimageindex<this.postimages.length-1)? this.curimageindex+1 : 0
}
 
fadeshow.prototype.resetit=function(){
this.degree=10
var crossobj=iebrowser? iebrowser[this.curcanvas] : document.getElementById(this.curcanvas)
if (crossobj.filters&&crossobj.filters[0]){
if (typeof crossobj.filters[0].opacity=="number") //if IE6+
crossobj.filters(0).opacity=this.degree
else //else if IE5.5-
crossobj.style.filter="alpha(opacity="+this.degree+")"
}
else if (crossobj.style.MozOpacity)
crossobj.style.MozOpacity=this.degree/101
else if (crossobj.style.KhtmlOpacity)
crossobj.style.KhtmlOpacity=this.degree/100
else if (crossobj.style.opacity&&!crossobj.filters)
crossobj.style.opacity=this.degree/101
}
 
 
fadeshow.prototype.startit=function(){
var crossobj=iebrowser? iebrowser[this.curcanvas] : document.getElementById(this.curcanvas)
this.populateslide(crossobj, this.curimageindex)
if (this.pausecheck==1){ //IF SLIDESHOW SHOULD PAUSE ONMOUSEOVER
var cacheobj=this
var crossobjcontainer=iebrowser? iebrowser["master"+this.slideshowid] : document.getElementById("master"+this.slideshowid)
crossobjcontainer.onmouseover=function(){cacheobj.mouseovercheck=1}
crossobjcontainer.onmouseout=function(){cacheobj.mouseovercheck=0}
}
this.rotateimage()
}