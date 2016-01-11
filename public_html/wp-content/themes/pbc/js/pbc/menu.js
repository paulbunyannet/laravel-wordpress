//----------DHTML Menu Created using AllWebMenus PRO ver 5.3-#940---------------
//E:\websites\pbt\menu2.awm
awmRelativeCorner=5;
var awmMenuName='menu';
var awmLibraryBuild=940;
var awmLibraryPath='/awmdata';
var awmImagesPath='/awmdata';
var awmSupported=(navigator.appName + navigator.appVersion.substring(0,1)=="Netscape5" || document.all || document.layers || navigator.userAgent.indexOf('Opera')>-1 || navigator.userAgent.indexOf('Konqueror')>-1)?1:0;
if (awmSupported){
var nua=navigator.userAgent,scriptNo=(nua.indexOf('Chrome')>-1||nua.indexOf('Safari')>-1||nua.indexOf('Gecko')>-1||nua.indexOf('Opera')>-1||nua.indexOf('Lumia')>-1||nua.indexOf('WPDesktop')>-1)?2:1;
var mpi=document.location,xt="";
var mpa=mpi.protocol+"//"+mpi.host;
var mpi=mpi.protocol+"//"+mpi.host+mpi.pathname;
if(scriptNo==1){oBC=document.all.tags("BASE");if(oBC && oBC.length) if(oBC[0].href) mpi=oBC[0].href;}
while (mpi.search(/\\/)>-1) mpi=mpi.replace("\\","/");
mpi=mpi.substring(0,mpi.lastIndexOf("/")+1);
var mpin=mpi;
var e=document.getElementsByTagName("SCRIPT");
for (var i=0;i<e.length;i++){if (e[i].src){if (e[i].src.indexOf(awmMenuName+".js")!=-1){xt=e[i].src.split("/");if (xt[xt.length-1]==awmMenuName+".js"){xt=e[i].src.substring(0,e[i].src.length-awmMenuName.length-3);if (e[i].src.indexOf("://")!=-1){mpi=xt;}else{if(xt.substring(0,1)=="/")mpi=mpa+xt; else mpi+=xt;}}}}}
while (mpi.search(/\/\.\//)>-1) {mpi=mpi.replace("/./","/");}
var awmMenuPath=mpi.substring(0,mpi.length-1);
while (awmMenuPath.search("'")>-1) {awmMenuPath=awmMenuPath.replace("'","%27");}
document.write("<SCRIPT SRC='"+(awmMenuPath+awmLibraryPath).replace(/\/$/,"")+"/awmlib"+scriptNo+".js'><\/SCRIPT>");
var n=null;
awmzindex=1000;
}

var awmImageName='';
var awmPosID='';
var awmPosClass='';
var awmSubmenusFrame='';
var awmSubmenusFrameOffset;
var awmOptimize=1;
var awmHash='AYKCHKIOWXZCJGTKSOUSGR';
var awmComboFix=1;
var awmNoMenuPrint=1;
var awmUseTrs=0;
var awmSepr=["0","","",""];
var awmMarg=[0,0,0,0];
function awmBuildMenu(){
if (awmSupported){
awmImagesColl=["telephone.gif",90,25,"telephoneO.gif",90,25,"sub-button2-tile.gif",1,25,"sub-button2Over-tile.gif",1,25,"sub-button2-left.gif",3,25,"sub-button2Over-left.gif",3,25,"sub-button2-right.gif",3,25,"sub-button2Over-right.gif",4,25,"television.gif",90,25,"televisionO.gif",90,25,"internet.gif",90,25,"internetO.gif",90,25,"business.gif",90,25,"businessO.gif",90,25,"smarthome.gif",90,25,"smarthomeO.gif",90,25,"cooperative.gif",90,25,"cooperativeO.gif",90,25];
awmCreateCSS(0,1,0,n,n,n,n,n,'none','0','#000000','0px 0px 0px 0',0,'0px / 0px',n);
awmCreateCSS(1,2,1,'#E5F2FF',n,2,'bold 10px Verdana, Arial, Helvetica, sans-serif',n,'none','0','#000000','0px 6px 0px 6',1,'0px / 0px',n);
awmCreateCSS(0,2,1,'#FFFFFF',n,3,'bold 10px Verdana, Arial, Helvetica, sans-serif',n,'none','0','#000000','0px 6px 0px 6',1,'0px / 0px',n);
awmCreateCSS(1,2,0,'#E5F2FF',n,2,'bold 11px Verdana, Arial, Helvetica, sans-serif',n,'none','0','#000000','0px 10px 2px 10',1,'0px / 0px',n);
awmCreateCSS(0,2,0,'#FFFFFF',n,3,'bold 11px Verdana, Arial, Helvetica, sans-serif',n,'none','0','#000000','0px 10px 2px 10',1,'0px / 0px',n);
var s0=awmCreateMenu(0,0,0,0,1,0,0,0,5,0,0,0,1,0,0,0,1,n,n,100,1,0,0,0,750,-1,1,200,200,0,0,0,"0,0,0",n,n,n,n,n,n,n,n,0,0,0,0,0,0,0,0,1,0,0,1,n,n,'',n,0,[],0,"");
it=s0.addItemWithImages(1,2,n,"","","","",0,1,1,3,3,3,n,n,n,"telephone/index.html",n,n,n,"telephone/index.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,0,n);
var s1=it.addSubmenu(0,0,0,0,0,0,0,0,0,1,0,"awmhidediv();","awmshowdiv();",90,0,1,0,-1,1,200,200,0,0,"0,0,0",0,"0",1,0,"");
it=s1.addItemWithImages(3,4,n,"Complete Service Packages",n,"","",n,n,n,3,3,3,n,n,n,"completepackages/index.html",n,n,n,"completepackages/index.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,1,n);
it=s1.addItemWithImages(3,4,n,"Local Service",n,"","",n,n,n,3,3,3,n,n,n,"telephone/localservice/index.html",n,n,n,"telephone/localservice/index.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,2,n);
it=s1.addItemWithImages(3,4,n,"Paul Bunyan Long Distance",n,"","",n,n,n,3,3,3,n,n,n,"telephone/pbld/index.html",n,n,n,"telephone/pbld/index.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,3,n);
it=s1.addItemWithImages(3,4,n,"Phone Services &amp; Instructions",n,"","",n,n,n,3,3,3,n,n,n,"telephone/services/index.html",n,n,n,"telephone/services/index.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,4,n);
it=s1.addItemWithImages(3,4,n,"Fax to E-mail",n,"","",n,n,n,3,3,3,n,n,n,"telephone/services/faxtoemail.html",n,n,n,"telephone/services/faxtoemail.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,5,n);
it=s1.addItemWithImages(3,4,n,"Voice Mail to E-mail",n,"","",n,n,n,3,3,3,n,n,n,"telephone/services/voicemail.html",n,n,n,"telephone/services/voicemail.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,6,n);
it=s1.addItemWithImages(3,4,n,"MN Gold Telephone Directory",n,"","",n,n,n,3,3,3,n,n,n,"telephone/mngold.html",n,n,n,"telephone/mngold.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,7,n);
it=s1.addItemWithImages(3,4,n,"Additional Resources",n,"","",n,n,n,3,3,3,n,n,n,"telephone/additional/index.html",n,n,n,"telephone/additional/index.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,8,n);
it=s1.addItemWithImages(3,4,n,"Universal Service Fund (USF) FAQ<br>",n,"","",n,n,n,3,3,3,n,n,n,"telephone/usf-faq.html",n,n,n,"telephone/usf-faq.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,52,n);
it=s1.addItemWithImages(3,4,n,"Call Completion FAQ<br>",n,"","",n,n,n,3,3,3,n,n,n,"telephone/call-completion-faq.html",n,n,n,"telephone/call-completion-faq.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,55,n);
it=s0.addItemWithImages(1,2,n,"","","","",8,9,9,3,3,3,n,n,n,"television/index.html",n,n,n,"television/index.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,9,n);
var s1=it.addSubmenu(0,0,0,0,0,0,0,0,0,1,0,"awmhidediv();","awmshowdiv();",90,0,2,0,-1,1,200,200,0,0,"0,0,0",0,"0",1,0,"");
it=s1.addItemWithImages(3,4,n,"Complete Service Packages",n,"","",n,n,n,3,3,3,n,n,n,"completepackages/index.html",n,n,n,"completepackages/index.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,10,n);
it=s1.addItemWithImages(3,4,n,"PBTV HD",n,"","",n,n,n,3,3,3,n,n,n,"television/channels/pbtvhd.html",n,n,n,"television/channels/pbtvhd.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,11,n);
it=s1.addItemWithImages(3,4,n,"PBTV Whole-Home DVR",n,"","",n,n,n,3,3,3,n,n,n,"television/dvr/index.html",n,n,n,"television/dvr/index.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,12,n);
it=s1.addItemWithImages(3,4,n,"PBTV On Demand",n,"","",n,n,n,3,3,3,n,n,n,"television/ondemand/index.html",n,n,n,"television/ondemand/index.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,13,n);
it=s1.addItemWithImages(3,4,n,"PBTV Everywhere",n,"","",n,n,n,3,3,3,n,n,n,"/television/pbtveverywhere/index.html",n,n,n,"/television/pbtveverywhere/index.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,15,n);
it=s1.addItemWithImages(3,4,n,"PBTV Guide &amp; Channel Lineup",n,"","",n,n,n,3,3,3,n,n,n,"television/channels/lineup.html",n,n,n,"television/channels/lineup.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,53,n);
it=s1.addItemWithImages(3,4,n,"Additional Channel Packages",n,"","",n,n,n,3,3,3,n,n,n,"television/channels/index.html",n,n,n,"television/channels/index.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,51,n);
it=s1.addItemWithImages(3,4,n,"Advertise on PBTV",n,"","",n,n,n,3,3,3,n,n,n,"television/advertise.html",n,n,n,"television/advertise.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,16,n);
it=s1.addItemWithImages(3,4,n,"Help with Your PBTV",n,"","",n,n,n,3,3,3,n,n,n,"television/help/index.html",n,n,n,"television/help/index.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,17,n);
it=s1.addItemWithImages(3,4,n,"Broadcast Network Retransmission Consent FAQ",n,"","",n,n,n,3,3,3,n,n,n,"television/bac-faq.html",n,n,n,"television/bac-faq.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,18,n);
it=s0.addItemWithImages(1,2,n,"","","","",10,11,11,3,3,3,n,n,n,"internet/index.html",n,n,n,"internet/index.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,19,n);
var s1=it.addSubmenu(0,0,0,0,0,0,0,0,0,1,0,"awmhidediv();","awmshowdiv();",90,0,6,0,-1,1,200,200,0,0,"0,0,0",0,"0",1,0,"");
it=s1.addItemWithImages(3,4,n,"Complete Service Packages",n,"","",n,n,n,3,3,3,n,n,n,"completepackages/index.html",n,n,n,"completepackages/index.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,20,n);
it=s1.addItemWithImages(3,4,n,"Broadband Service",n,"","",n,n,n,3,3,3,n,n,n,"internet/broadband.html",n,n,n,"internet/broadband.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,21,n);
it=s1.addItemWithImages(3,4,n,"GigaZone",n,"","",n,n,n,3,3,3,n,n,n,"gigazone/",n,n,n,"gigazone/",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,37,n);
it=s1.addItemWithImages(3,4,n,"PBTV Everywhere",n,"","",n,n,n,3,3,3,n,n,n,"/television/pbtveverywhere/index.html",n,n,n,"/television/pbtveverywhere/index.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,54,n);
it=s1.addItemWithImages(3,4,n,"Fax to E-mail",n,"","",n,n,n,3,3,3,n,n,n,"telephone/services/faxtoemail.html",n,n,n,"telephone/services/faxtoemail.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,22,n);
it=s1.addItemWithImages(3,4,n,"Voice Mail to E-mail",n,"","",n,n,n,3,3,3,n,n,n,"telephone/services/voicemail.html",n,n,n,"telephone/services/voicemail.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,23,n);
it=s1.addItemWithImages(3,4,n,"Dial Up Service",n,"","",n,n,n,3,3,3,n,n,n,"internet/dialup.html",n,n,n,"internet/dialup.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,24,n);
it=s1.addItemWithImages(3,4,n,"Web Hosting",n,"","",n,n,n,3,3,3,n,n,n,"internet/webhosting/",n,n,n,"internet/webhosting/",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,25,n);
it=s1.addItemWithImages(3,4,n,"Technical Support",n,"","",n,n,n,3,3,3,n,n,n,"internet/support/index.html",n,n,n,"internet/support/index.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,26,n);
it=s1.addItemWithImages(3,4,n,"Search the Web",n,"","",n,n,n,3,3,3,n,n,n,"internet/searchtheweb.html",n,n,n,"internet/searchtheweb.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,27,n);
it=s1.addItemWithImages(3,4,n,"Local Websites",n,"","",n,n,n,3,3,3,n,n,n,"internet/localwebsites.html",n,n,n,"internet/localwebsites.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,28,n);
it=s1.addItemWithImages(3,4,n,"Webmail - Check Your E-mail",n,"","",n,n,n,3,3,3,n,n,n,"http://webmail.paulbunyan.net/",n,n,n,"http://webmail.paulbunyan.net/",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,29,n);
it=s0.addItemWithImages(1,2,n,"","","","",12,13,13,3,3,3,n,n,n,"business/index.html",n,n,n,"business/index.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,30,n);
var s1=it.addSubmenu(0,0,0,0,0,0,0,0,0,1,0,"awmhidediv();","awmshowdiv();",90,0,5,0,-1,1,200,200,0,0,"0,0,0",0,"0",1,0,"");
it=s1.addItemWithImages(3,4,n,"Business Voice Services",n,"","",n,n,n,3,3,3,n,n,n,"/business/businessvoice.html",n,n,n,"/business/businessvoice.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,31,n);
it=s1.addItemWithImages(3,4,n,"Business Voice Support",n,"","",n,n,n,3,3,3,n,n,n,"/business/voicesupport.html",n,n,n,"/business/voicesupport.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,32,n);
it=s1.addItemWithImages(3,4,n,"Business Internet &amp; Data Services",n,"","",n,n,n,3,3,3,n,n,n,"business/ipservices.html",n,n,n,"business/ipservices.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,33,n);
it=s1.addItemWithImages(3,4,n,"Business IT Services",n,"","",n,n,n,3,3,3,n,n,n,"business/itservices.html",n,n,n,"business/itservices.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,56,n);
it=s1.addItemWithImages(3,4,n,"PBC Data Center",n,"","",n,n,n,3,3,3,n,n,n,"datacenter/",n,n,n,"datacenter/",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,36,n);
it=s1.addItemWithImages(3,4,n,"Long Distance &amp; 800 Service",n,"","",n,n,n,3,3,3,n,n,n,"business/longdistance.html",n,n,n,"business/longdistance.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,34,n);
it=s1.addItemWithImages(3,4,n,"Account Executives",n,"","",n,n,n,3,3,3,n,n,n,"business/accountreps.html",n,n,n,"business/accountreps.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,35,n);
it=s1.addItemWithImages(3,4,n,"Advertise on PBTV",n,"","",n,n,n,3,3,3,n,n,n,"television/advertise.html",n,n,n,"television/advertise.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,38,n);
it=s1.addItemWithImages(3,4,n,"MN Gold Yellow Page Advertising",n,"","",n,n,n,3,3,3,n,n,n,"business/mngold.html",n,n,n,"business/mngold.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,39,n);
it=s0.addItemWithImages(1,2,n,"","","","",14,15,15,3,3,3,n,n,n,"smarthome/index.html",n,n,n,"smarthome/index.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,74,n);
it=s0.addItemWithImages(1,2,n,"","","","",16,17,17,3,3,3,n,n,n,"cooperative/index.html",n,n,n,"cooperative/index.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,40,n);
var s1=it.addSubmenu(0,0,0,0,0,0,0,0,0,1,0,"awmhidediv();","awmshowdiv();",90,0,4,0,-1,1,200,200,0,0,"0,0,0",0,"0",1,0,"");
it=s1.addItemWithImages(3,4,n,"News &amp; Events",n,"","",n,n,n,3,3,3,n,n,n,"cooperative/news/index.html",n,n,n,"cooperative/news/index.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,41,n);
it=s1.addItemWithImages(3,4,n,"In the Community",n,"","",n,n,n,3,3,3,n,n,n,"cooperative/community.html",n,n,n,"cooperative/community.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,42,n);
it=s1.addItemWithImages(3,4,n,"Expansion Projects",n,"","",n,n,n,3,3,3,n,n,n,"cooperative/expansion.html",n,n,n,"cooperative/expansion.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,43,n);
it=s1.addItemWithImages(3,4,n,"Our History",n,"","",n,n,n,3,3,3,n,n,n,"cooperative/history.html",n,n,n,"cooperative/history.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,44,n);
it=s1.addItemWithImages(3,4,n,"Newsletter",n,"","",n,n,n,3,3,3,n,n,n,"cooperative/newsletter.html",n,n,n,"cooperative/newsletter.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,45,n);
it=s1.addItemWithImages(3,4,n,"E-mail Update",n,"","",n,n,n,3,3,3,n,n,n,"cooperative/emailupdates.html",n,n,n,"cooperative/emailupdates.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,14,n);
it=s1.addItemWithImages(3,4,n,"Annual Report",n,"","",n,n,n,3,3,3,n,n,n,"cooperative/annualreport.html",n,n,n,"cooperative/annualreport.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,46,n);
it=s1.addItemWithImages(3,4,n,"Board of Directors",n,"","",n,n,n,3,3,3,n,n,n,"cooperative/board.html",n,n,n,"cooperative/board.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,47,n);
it=s1.addItemWithImages(3,4,n,"District Map",n,"","",n,n,n,3,3,3,n,n,n,"cooperative/districtmap.html",n,n,n,"cooperative/districtmap.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,48,n);
it=s1.addItemWithImages(3,4,n,"Expectations of a Director",n,"","",n,n,n,3,3,3,n,n,n,"cooperative/qualifications.html",n,n,n,"cooperative/qualifications.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,49,n);
it=s1.addItemWithImages(3,4,n,"Articles of Incorporation &amp; Bylaws",n,"","",n,n,n,3,3,3,n,n,n,"cooperative/articles.html",n,n,n,"cooperative/articles.html",n,0,0,2,4,5,5,6,7,7,1,1,1,0,0,n,n,n,0,0,0,50,n);
s0.pm.buildMenu();
}}