$wnd.com_esofthead_mycollab_widgetset_MyCollabWidgetSet.runAsyncCallback9("function EDb(a){return a.g}\nfunction GDb(a,b){MCb(a,b);--a.i}\nfunction yed(){Tb.call(this)}\nfunction RKd(){Jc.call(this);this.G=nXe}\nfunction Dw(a){return (Vt(),Ut).Ne(a,'col')}\nfunction Ypc(a,b){_0b(a.a,new hyc(new xyc(rjb),'openPopup'),OK(KK(Qmb,1),mve,1,3,[(rYd(),b?qYd:pYd)]))}\nfunction FDb(a,b){if(b<0){throw new lYd('Cannot access a row with a negative index: '+b)}if(b>=a.i){throw new lYd(EAe+b+FAe+a.i)}}\nfunction IDb(a,b){if(a.i==b){return}if(b<0){throw new lYd('Cannot set number of rows to '+b)}if(a.i<b){KDb((Qwb(),a.G),b-a.i,a.g);a.i=b}else{while(a.i>b){GDb(a,a.i-1)}}}\nfunction JDb(a,b){uCb();TCb.call(this);NCb(this,new nDb(this));QCb(this,new xEb(this));OCb(this,new lEb(this));HDb(this,b);IDb(this,a)}\nfunction kEb(a,b,c){var d,e;b=b>1?b:1;e=a.a.childNodes.length;if(e<b){for(d=e;d<b;d++){Ks(a.a,Dw($doc))}}else if(!c&&e>b){for(d=e;d>b;d--){Ts(a.a,a.a.lastChild)}}}\nfunction KDb(a,b,c){var d=$doc.createElement('td');d.innerHTML=rDe;var e=$doc.createElement('tr');for(var f=0;f<c;f++){var g=d.cloneNode(true);e.appendChild(g)}a.appendChild(e);for(var h=1;h<b;h++){a.appendChild(e.cloneNode(true))}}\nfunction xed(a){if((!a.U&&(a.U=bb(a)),VK(VK(a.U,6),214)).c&&((!a.U&&(a.U=bb(a)),VK(VK(a.U,6),214)).v==null||P$d('',(!a.U&&(a.U=bb(a)),VK(VK(a.U,6),214)).v))){return (!a.U&&(a.U=bb(a)),VK(VK(a.U,6),214)).a}return (!a.U&&(a.U=bb(a)),VK(VK(a.U,6),214)).v}\nfunction HDb(a,b){var c,d,e,f;if(a.g==b){return}if(b<0){throw new lYd('Cannot set number of columns to '+b)}if(a.g>b){for(c=0;c<a.i;c++){for(d=a.g-1;d>=b;d--){wCb(a,c,d);e=yCb(a,c,d,false);f=tEb(a.G,c);f.removeChild(e)}}}else{for(c=0;c<a.i;c++){for(d=a.g;d<b;d++){ICb(a,c,d)}}}a.g=b;kEb(a.I,b,false)}\nvar yWe={48:1,7:1,13:1,27:1,31:1,33:1,32:1,30:1,3:1},zWe='com.vaadin.client.ui.colorpicker',AWe='background',kXe='showDefaultCaption',lXe='setColor',mXe='setOpen',nXe='v-colorpicker',vXe='v-default-caption-width';Tsb(1,null,{});_.gC=function U(){return this.cZ};Tsb(120,9,Mve);_.me=function Ej(a){return Bd(this,a,(ZD(),ZD(),YD))};Tsb(802,25,GAe);_.me=function UCb(a){return Bd(this,a,(ZD(),ZD(),YD))};Tsb(250,44,IAe);_.me=function ADb(a){return Bd(this,a,(ZD(),ZD(),YD))};Tsb(637,802,GAe,JDb);_.Jg=function LDb(){var a;a=(Qwb(),dx($doc));Dt(a,rDe);return a};_.Kg=function MDb(a){return EDb(this)};_.Lg=function NDb(){return this.i};_.Mg=function ODb(a,b){FDb(this,a);if(b<0){throw new lYd('Cannot access a column with a negative index: '+b)}if(b>=this.g){throw new lYd(CAe+b+DAe+this.g)}};_.Ng=function PDb(a){FDb(this,a)};_.g=0;_.i=0;var SS=dZd(Uue,'Grid',637);Tsb(101,583,JAe);_.me=function VDb(a){return Bd(this,a,(ZD(),ZD(),YD))};Tsb(373,9,UAe);_.me=function VEb(a){return Cd(this,a,(ZD(),ZD(),YD))};Tsb(790,33,yWe);_.wc=function zed(){return false};_.zc=function Aed(){return !this.U&&(this.U=bb(this)),VK(VK(this.U,6),214)};_.lc=function Bed(){return !this.U&&(this.U=bb(this)),VK(VK(this.U,6),214)};_.nc=function Ced(){ZK(this.Bc(),49)&&VK(this.Bc(),49).me(this)};_.pc=function Ded(a){Mb(this,a);if(a.Mi(gDe)){this.Cl();(!this.U&&(this.U=bb(this)),VK(VK(this.U,6),214)).c&&((!this.U&&(this.U=bb(this)),VK(VK(this.U,6),214)).v==null||P$d('',(!this.U&&(this.U=bb(this)),VK(VK(this.U,6),214)).v))&&this.Dl((!this.U&&(this.U=bb(this)),VK(VK(this.U,6),214)).a)}if(a.Mi(tCe)||a.Mi(cLe)||a.Mi(kXe)){this.Dl(xed(this));(!this.U&&(this.U=bb(this)),VK(VK(this.U,6),214)).c&&((!this.U&&(this.U=bb(this)),VK(VK(this.U,6),214)).v==null||!(!this.U&&(this.U=bb(this)),VK(VK(this.U,6),214)).v.length)&&!(!this.U&&(this.U=bb(this)),VK(VK(this.U,6),214)).J.length?Oc(this.Bc(),vXe):Wc(this.Bc(),vXe)}};var adb=dZd(zWe,'AbstractColorPickerConnector',790);Tsb(214,6,{6:1,38:1,214:1,3:1},RKd);_.a=null;_.b=false;_.c=false;var sjb=dZd(USe,'ColorPickerState',214);due(Rq)(9);\n//# sourceURL=com.esofthead.mycollab.widgetset.MyCollabWidgetSet-9.js\n")
