webpackJsonp([21],{167:function(e,t,n){function r(e){n(405)}var i=n(4)(n(353),n(434),r,null,null);e.exports=i.exports},268:function(e,t,r){var i,o;(function(){function r(e){return!!e.exifdata}function a(e,t){t=t||e.match(/^data\:([^\;]+)\;base64,/im)[1]||"",e=e.replace(/^data\:([^\;]+)\;base64,/gim,"");for(var n=atob(e),r=n.length,i=new ArrayBuffer(r),o=new Uint8Array(i),a=0;a<r;a++)o[a]=n.charCodeAt(a);return i}function s(e,t){var n=new XMLHttpRequest;n.open("GET",e,!0),n.responseType="blob",n.onload=function(e){200!=this.status&&0!==this.status||t(this.response)},n.send()}function l(e,t){function n(n){var r=c(n),i=d(n),o=w(n);e.exifdata=r||{},e.iptcdata=i||{},e.xmpdata=o||{},t&&t.call(e)}if(e.src)if(/^data\:/i.test(e.src)){var r=a(e.src);n(r)}else if(/^blob\:/i.test(e.src)){var i=new FileReader;i.onload=function(e){n(e.target.result)},s(e.src,function(e){i.readAsArrayBuffer(e)})}else{var o=new XMLHttpRequest;o.onload=function(){if(200!=this.status&&0!==this.status)throw"Could not load image";n(o.response),o=null},o.open("GET",e.src,!0),o.responseType="arraybuffer",o.send(null)}else if(self.FileReader&&(e instanceof self.Blob||e instanceof self.File)){var i=new FileReader;i.onload=function(e){C&&console.log("Got file of length "+e.target.result.byteLength),n(e.target.result)},i.readAsArrayBuffer(e)}}function c(e){var t=new DataView(e);if(C&&console.log("Got file of length "+e.byteLength),255!=t.getUint8(0)||216!=t.getUint8(1))return C&&console.log("Not a valid JPEG"),!1;for(var n,r=2,i=e.byteLength;r<i;){if(255!=t.getUint8(r))return C&&console.log("Not a valid marker at offset "+r+", found: "+t.getUint8(r)),!1;if(n=t.getUint8(r+1),C&&console.log(n),225==n)return C&&console.log("Found 0xFFE1 marker"),S(t,r+4,t.getUint16(r+2));r+=2+t.getUint16(r+2)}}function d(e){var t=new DataView(e);if(C&&console.log("Got file of length "+e.byteLength),255!=t.getUint8(0)||216!=t.getUint8(1))return C&&console.log("Not a valid JPEG"),!1;for(var n=2,r=e.byteLength;n<r;){if(function(e,t){return 56===e.getUint8(t)&&66===e.getUint8(t+1)&&73===e.getUint8(t+2)&&77===e.getUint8(t+3)&&4===e.getUint8(t+4)&&4===e.getUint8(t+5)}(t,n)){var i=t.getUint8(n+7);i%2!=0&&(i+=1),0===i&&(i=4);return u(e,n+8+i,t.getUint16(n+6+i))}n++}}function u(e,t,n){for(var r,i,o,a,s=new DataView(e),l={},c=t;c<t+n;)28===s.getUint8(c)&&2===s.getUint8(c+1)&&(a=s.getUint8(c+2))in F&&(o=s.getInt16(c+3),o+5,i=F[a],r=p(s,c+5,o),l.hasOwnProperty(i)?l[i]instanceof Array?l[i].push(r):l[i]=[l[i],r]:l[i]=r),c++;return l}function g(e,t,n,r,i){var o,a,s,l=e.getUint16(n,!i),c={};for(s=0;s<l;s++)o=n+12*s+2,a=r[e.getUint16(o,!i)],!a&&C&&console.log("Unknown tag: "+e.getUint16(o,!i)),c[a]=f(e,o,t,n,i);return c}function f(e,t,n,r,i){var o,a,s,l,c,d,u=e.getUint16(t+2,!i),g=e.getUint32(t+4,!i),f=e.getUint32(t+8,!i)+n;switch(u){case 1:case 7:if(1==g)return e.getUint8(t+8,!i);for(o=g>4?f:t+8,a=[],l=0;l<g;l++)a[l]=e.getUint8(o+l);return a;case 2:return o=g>4?f:t+8,p(e,o,g-1);case 3:if(1==g)return e.getUint16(t+8,!i);for(o=g>2?f:t+8,a=[],l=0;l<g;l++)a[l]=e.getUint16(o+2*l,!i);return a;case 4:if(1==g)return e.getUint32(t+8,!i);for(a=[],l=0;l<g;l++)a[l]=e.getUint32(f+4*l,!i);return a;case 5:if(1==g)return c=e.getUint32(f,!i),d=e.getUint32(f+4,!i),s=new Number(c/d),s.numerator=c,s.denominator=d,s;for(a=[],l=0;l<g;l++)c=e.getUint32(f+8*l,!i),d=e.getUint32(f+4+8*l,!i),a[l]=new Number(c/d),a[l].numerator=c,a[l].denominator=d;return a;case 9:if(1==g)return e.getInt32(t+8,!i);for(a=[],l=0;l<g;l++)a[l]=e.getInt32(f+4*l,!i);return a;case 10:if(1==g)return e.getInt32(f,!i)/e.getInt32(f+4,!i);for(a=[],l=0;l<g;l++)a[l]=e.getInt32(f+8*l,!i)/e.getInt32(f+4+8*l,!i);return a}}function h(e,t,n){var r=e.getUint16(t,!n);return e.getUint32(t+2+12*r,!n)}function m(e,t,n,r){var i=h(e,t+n,r);if(!i)return{};if(i>e.byteLength)return{};var o=g(e,t,t+i,A,r);if(o.Compression)switch(o.Compression){case 6:if(o.JpegIFOffset&&o.JpegIFByteCount){var a=t+o.JpegIFOffset,s=o.JpegIFByteCount;o.blob=new Blob([new Uint8Array(e.buffer,a,s)],{type:"image/jpeg"})}break;case 1:console.log("Thumbnail image format is TIFF, which is not implemented.");break;default:console.log("Unknown thumbnail image format '%s'",o.Compression)}else 2==o.PhotometricInterpretation&&console.log("Thumbnail image format is RGB, which is not implemented.");return o}function p(e,t,r){var i="";for(n=t;n<t+r;n++)i+=String.fromCharCode(e.getUint8(n));return i}function S(e,t){if("Exif"!=p(e,t,4))return C&&console.log("Not valid EXIF data! "+p(e,t,4)),!1;var n,r,i,o,a,s=t+6;if(18761==e.getUint16(s))n=!1;else{if(19789!=e.getUint16(s))return C&&console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)"),!1;n=!0}if(42!=e.getUint16(s+2,!n))return C&&console.log("Not valid TIFF data! (no 0x002A)"),!1;var l=e.getUint32(s+4,!n);if(l<8)return C&&console.log("Not valid TIFF data! (First offset less than 8)",e.getUint32(s+4,!n)),!1;if(r=g(e,s,s+l,b,n),r.ExifIFDPointer){o=g(e,s,s+r.ExifIFDPointer,P,n);for(i in o){switch(i){case"LightSource":case"Flash":case"MeteringMode":case"ExposureProgram":case"SensingMethod":case"SceneCaptureType":case"SceneType":case"CustomRendered":case"WhiteBalance":case"GainControl":case"Contrast":case"Saturation":case"Sharpness":case"SubjectDistanceRange":case"FileSource":o[i]=y[i][o[i]];break;case"ExifVersion":case"FlashpixVersion":o[i]=String.fromCharCode(o[i][0],o[i][1],o[i][2],o[i][3]);break;case"ComponentsConfiguration":o[i]=y.Components[o[i][0]]+y.Components[o[i][1]]+y.Components[o[i][2]]+y.Components[o[i][3]]}r[i]=o[i]}}if(r.GPSInfoIFDPointer){a=g(e,s,s+r.GPSInfoIFDPointer,I,n);for(i in a){switch(i){case"GPSVersionID":a[i]=a[i][0]+"."+a[i][1]+"."+a[i][2]+"."+a[i][3]}r[i]=a[i]}}return r.thumbnail=m(e,s,l,n),r}function w(e){if("DOMParser"in self){var t=new DataView(e);if(C&&console.log("Got file of length "+e.byteLength),255!=t.getUint8(0)||216!=t.getUint8(1))return C&&console.log("Not a valid JPEG"),!1;for(var n=2,r=e.byteLength,i=new DOMParser;n<r-4;){if("http"==p(t,n,4)){var o=n-1,a=t.getUint16(n-2)-1,s=p(t,o,a),l=s.indexOf("xmpmeta>")+8;s=s.substring(s.indexOf("<x:xmpmeta"),l);var c=s.indexOf("x:xmpmeta")+10;s=s.slice(0,c)+'xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:tiff="http://ns.adobe.com/tiff/1.0/" xmlns:plus="http://schemas.android.com/apk/lib/com.google.android.gms.plus" xmlns:ext="http://www.gettyimages.com/xsltExtension/1.0" xmlns:exif="http://ns.adobe.com/exif/1.0/" xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#" xmlns:stRef="http://ns.adobe.com/xap/1.0/sType/ResourceRef#" xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/" xmlns:xapGImg="http://ns.adobe.com/xap/1.0/g/img/" xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" '+s.slice(c);return v(i.parseFromString(s,"text/xml"))}n++}}}function v(e){try{var t={};if(e.children.length>0)for(var n=0;n<e.children.length;n++){var r=e.children.item(n),i=r.attributes;for(var o in i){var a=i[o],s=a.nodeName,l=a.nodeValue;void 0!==s&&(t[s]=l)}var c=r.nodeName;if(void 0===t[c])t[c]=xml2json(r);else{if(void 0===t[c].push){var d=t[c];t[c]=[],t[c].push(d)}t[c].push(xml2json(r))}}else t=e.textContent;return t}catch(e){console.log(e.message)}}var C=!1,x=function(e){return e instanceof x?e:this instanceof x?void(this.EXIFwrapped=e):new x(e)};void 0!==e&&e.exports&&(t=e.exports=x),t.EXIF=x;var P=x.Tags={36864:"ExifVersion",40960:"FlashpixVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",37500:"MakerNote",37510:"UserComment",40964:"RelatedSoundFile",36867:"DateTimeOriginal",36868:"DateTimeDigitized",37520:"SubsecTime",37521:"SubsecTimeOriginal",37522:"SubsecTimeDigitized",33434:"ExposureTime",33437:"FNumber",34850:"ExposureProgram",34852:"SpectralSensitivity",34855:"ISOSpeedRatings",34856:"OECF",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBias",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37396:"SubjectArea",37386:"FocalLength",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41492:"SubjectLocation",41493:"ExposureIndex",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRation",41989:"FocalLengthIn35mmFilm",41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",40965:"InteroperabilityIFDPointer",42016:"ImageUniqueID"},b=x.TiffTags={256:"ImageWidth",257:"ImageHeight",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer",40965:"InteroperabilityIFDPointer",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",274:"Orientation",277:"SamplesPerPixel",284:"PlanarConfiguration",530:"YCbCrSubSampling",531:"YCbCrPositioning",282:"XResolution",283:"YResolution",296:"ResolutionUnit",273:"StripOffsets",278:"RowsPerStrip",279:"StripByteCounts",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",301:"TransferFunction",318:"WhitePoint",319:"PrimaryChromaticities",529:"YCbCrCoefficients",532:"ReferenceBlackWhite",306:"DateTime",270:"ImageDescription",271:"Make",272:"Model",305:"Software",315:"Artist",33432:"Copyright"},I=x.GPSTags={0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",30:"GPSDifferential"},A=x.IFD1Tags={256:"ImageWidth",257:"ImageHeight",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",273:"StripOffsets",274:"Orientation",277:"SamplesPerPixel",278:"RowsPerStrip",279:"StripByteCounts",282:"XResolution",283:"YResolution",284:"PlanarConfiguration",296:"ResolutionUnit",513:"JpegIFOffset",514:"JpegIFByteCount",529:"YCbCrCoefficients",530:"YCbCrSubSampling",531:"YCbCrPositioning",532:"ReferenceBlackWhite"},y=x.StringValues={ExposureProgram:{0:"Not defined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},SensingMethod:{1:"Not defined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},SceneType:{1:"Directly photographed"},CustomRendered:{0:"Normal process",1:"Custom process"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},GainControl:{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},SubjectDistanceRange:{0:"Unknown",1:"Macro",2:"Close view",3:"Distant view"},FileSource:{3:"DSC"},Components:{0:"",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"}},F={120:"caption",110:"credit",25:"keywords",55:"dateCreated",80:"byline",85:"bylineTitle",122:"captionWriter",105:"headline",116:"copyright",15:"category"};x.getData=function(e,t){return!(self.Image&&e instanceof self.Image||self.HTMLImageElement&&e instanceof self.HTMLImageElement&&!e.complete)&&(r(e)?t&&t.call(e):l(e,t),!0)},x.getTag=function(e,t){if(r(e))return e.exifdata[t]},x.getIptcTag=function(e,t){if(r(e))return e.iptcdata[t]},x.getAllTags=function(e){if(!r(e))return{};var t,n=e.exifdata,i={};for(t in n)n.hasOwnProperty(t)&&(i[t]=n[t]);return i},x.getAllIptcTags=function(e){if(!r(e))return{};var t,n=e.iptcdata,i={};for(t in n)n.hasOwnProperty(t)&&(i[t]=n[t]);return i},x.pretty=function(e){if(!r(e))return"";var t,n=e.exifdata,i="";for(t in n)n.hasOwnProperty(t)&&("object"==typeof n[t]?n[t]instanceof Number?i+=t+" : "+n[t]+" ["+n[t].numerator+"/"+n[t].denominator+"]\r\n":i+=t+" : ["+n[t].length+" values]\r\n":i+=t+" : "+n[t]+"\r\n");return i},x.readFromBinaryFile=function(e){return c(e)},i=[],void 0!==(o=function(){return x}.apply(t,i))&&(e.exports=o)}).call(this)},353:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(268),i=n.n(r);t.default={data:function(){return{headerImage:"",picValue:""}},mounted:function(){},methods:{upload:function(e){var t=e.target.files||e.dataTransfer.files;t.length&&(this.picValue=t[0],this.imgPreview(this.picValue))},imgPreview:function(e){var t=this,n=void 0;if(i.a.getData(e,function(){n=i.a.getTag(this,"Orientation")}),e&&window.FileReader&&/^image/.test(e.type)){var r=new FileReader;r.readAsDataURL(e),r.onloadend=function(){var e=this.result,r=new Image;r.src=e,this.result.length<=102400?(t.headerImage=this.result,t.postImg()):r.onload=function(){var e=t.compress(r,n);t.headerImage=e,t.postImg()}}}},postImg:function(){},rotateImg:function(e,t,n){if(null!=e){var r=e.height,i=e.width,o=2;null==o&&(o=0),"right"==t?++o>3&&(o=0):--o<0&&(o=3);var a=90*o*Math.PI/180,s=n.getContext("2d");switch(o){case 0:n.width=i,n.height=r,s.drawImage(e,0,0);break;case 1:n.width=r,n.height=i,s.rotate(a),s.drawImage(e,0,-r);break;case 2:n.width=i,n.height=r,s.rotate(a),s.drawImage(e,-i,-r);break;case 3:n.width=r,n.height=i,s.rotate(a),s.drawImage(e,-i,0)}}},compress:function(e,t){var n=document.createElement("canvas"),r=n.getContext("2d"),i=document.createElement("canvas"),o=i.getContext("2d"),a=e.src.length,s=e.width,l=e.height,c=void 0;(c=s*l/4e6)>1?(console.log("大于400万像素"),c=Math.sqrt(c),s/=c,l/=c):c=1,n.width=s,n.height=l,r.fillStyle="#fff",r.fillRect(0,0,n.width,n.height);var d=void 0;if((d=s*l/1e6)>1){console.log("超过100W像素"),d=~~(Math.sqrt(d)+1);var u=~~(s/d),g=~~(l/d);i.width=u,i.height=g;for(var f=0;f<d;f++)for(var h=0;h<d;h++)o.drawImage(e,f*u*c,h*g*c,u*c,g*c,0,0,u,g),r.drawImage(i,f*u,h*g,u,g)}else r.drawImage(e,0,0,s,l);if(""!=t&&1!=t)switch(t){case 6:this.rotateImg(e,"left",n);break;case 8:this.rotateImg(e,"right",n);break;case 3:this.rotateImg(e,"right",n),this.rotateImg(e,"right",n)}var m=n.toDataURL("image/jpeg",.1);return console.log("压缩前："+a),console.log("压缩后："+m.length),console.log("压缩率："+~~(100*(a-m.length)/a)+"%"),console.log(this.headerImage),console.log(this.picValue),i.width=i.height=n.width=n.height=0,m}}}},376:function(e,t,n){t=e.exports=n(165)(!0),t.push([e.i,"*{margin:0;padding:0}.show{width:100px;height:100px;position:relative;border-radius:50%;border:1px solid #d5d5d5}.picture,.show{overflow:hidden}.picture{width:100%;height:100%;background-position:50%;background-repeat:no-repeat;background-size:cover}","",{version:3,sources:["C:/wamp/www/jun/weixin/my-wx/src/components/imgTest.vue"],names:[],mappings:"AACA,EACE,SAAU,AACV,SAAW,CACZ,AACD,MACE,YAAa,AACb,aAAc,AAEd,kBAAmB,AACnB,kBAAmB,AACnB,wBAA0B,CAC3B,AACD,eALE,eAAiB,CAYlB,AAPD,SACE,WAAY,AACZ,YAAa,AAEb,wBAAmC,AACnC,4BAA6B,AAC7B,qBAAuB,CACxB",file:"imgTest.vue",sourcesContent:["\n* {\n  margin: 0;\n  padding: 0;\n}\n.show {\n  width: 100px;\n  height: 100px;\n  overflow: hidden;\n  position: relative;\n  border-radius: 50%;\n  border: 1px solid #d5d5d5;\n}\n.picture {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n"],sourceRoot:""}])},405:function(e,t,n){var r=n(376);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(166)("50203d40",r,!0)},434:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticStyle:{padding:"20px"}},[n("div",{staticClass:"show"},[n("div",{staticClass:"picture",style:"backgroundImage:url("+e.headerImage+")"})]),e._v(" "),n("div",{staticStyle:{"margin-top":"20px"}},[n("input",{attrs:{type:"file",id:"upload",multiple:"",accept:"image"},on:{change:e.upload}}),e._v(" "),n("label",{attrs:{for:"upload"}})])])])},staticRenderFns:[]}}});
//# sourceMappingURL=21.9664f7bba9f82eb830f0.js.map