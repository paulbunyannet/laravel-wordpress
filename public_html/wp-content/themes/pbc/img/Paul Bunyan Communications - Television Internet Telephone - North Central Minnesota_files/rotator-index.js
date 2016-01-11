var indexImage = new Array()
//specify random images below. You can have as many as you wish
indexImage[0] = '/images/banners/index-380/Business-Mitel.jpg'
indexImage[1] = '/images/banners/index-380/PBTV-Everywhere2.jpg'
indexImage[2] = '/images/banners/index-380/Smart-Home-PBC.jpg'
indexImage[3] = '/images/banners/index-380/HBOGO-PBC.jpg'

//specify corresponding links below
var indexLinks = new Array()
indexLinks[0] = "/business/businessvoice.html"
indexLinks[1] = "/television/pbtveverywhere/index.html"
indexLinks[2] = "/smarthome/index.html"
indexLinks[3] = "/television/pbtveverywhere/hbo-max.html"

var p = indexImage.length;
var preBuffer = new Array()
for (i = 0; i < p; i++) {
    preBuffer[i] = new Image()
    preBuffer[i].src = indexImage[i]
}

var ry = Math.round(Math.random() * (p - 1));

if (ry == 0)
    ry = 0

function showImage() {
    document.write('<a href=' + '"' + indexLinks[ry] + '"' + '><img src="' + indexImage[ry] + '" border=0></a>')
}