/******************************

脚本功能：Varlens 微单相机+解锁VIP
下载地址：https://is.gd/tgiP0L
软件版本：4.12（推荐使用4.15.4）
脚本作者：彭于晏
更新时间：2022-9-29
问题反馈：QQ+89996462
QQ会员群：779392027
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
⚠️⚠️⚠️【完美适配的版本有】：4.12、4.14.5、4.15.4     |  4.15.5也可以使用，但需要覆盖安装，没必要。再高的版本就无法使用了
各个可用版本ipa文件已保存到Lee阿里云盘密码箱内
*******************************

[rewrite_local]

^https:\/\/mid\.zineapi\.com\/@varlens\/api\/user\/info\/ url script-response-body https://raw.githubusercontent.com/riboly/Loon/refs/heads/main/Varlens/Varlens.js

[mitm] 

hostname = mid.zineapi.com

*******************************/



var _0x51a1=['BMO5XhPDgwvDig==','w7pSwqTDlgI=','V8OuD8K7b1rCmcK7wqXCisK6dXbCnsKFwqXCpsOLwrEyKwgrKQ==','wpPCrMOu','GMKCPcKQwrvCgmwbwqg=','w6/CqyDCscOVMsO6BcOyRkhDwoxbXShYw6fDgTDDsTnDmMKI','A8KYWTQHw6/DhMKywpPCvTl5bMOJw4ZRwr/ClMKWTmjCvgI2','RlPDvxM='];(function(_0x156662,_0x51a11e){var _0x4cd12b=function(_0x1decb8){while(--_0x1decb8){_0x156662['push'](_0x156662['shift']());}};_0x4cd12b(++_0x51a11e);}(_0x51a1,0x69));var _0x4cd1=function(_0x156662,_0x51a11e){_0x156662=_0x156662-0x0;var _0x4cd12b=_0x51a1[_0x156662];if(_0x4cd1['ZTGmAl']===undefined){(function(){var _0x172be1=function(){var _0x2a4941;try{_0x2a4941=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x20298c){_0x2a4941=window;}return _0x2a4941;};var _0x3fa419=_0x172be1();var _0x56e84a='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x3fa419['atob']||(_0x3fa419['atob']=function(_0x58a11b){var _0x46b8e6=String(_0x58a11b)['replace'](/=+$/,'');var _0x232a76='';for(var _0x114fa5=0x0,_0x5cfbb2,_0x5ac6d5,_0x43c06c=0x0;_0x5ac6d5=_0x46b8e6['charAt'](_0x43c06c++);~_0x5ac6d5&&(_0x5cfbb2=_0x114fa5%0x4?_0x5cfbb2*0x40+_0x5ac6d5:_0x5ac6d5,_0x114fa5++%0x4)?_0x232a76+=String['fromCharCode'](0xff&_0x5cfbb2>>(-0x2*_0x114fa5&0x6)):0x0){_0x5ac6d5=_0x56e84a['indexOf'](_0x5ac6d5);}return _0x232a76;});}());var _0x4a54d1=function(_0x1aa8e0,_0x2f9302){var _0x3e6be6=[],_0x17d879=0x0,_0x3b508d,_0x17e50c='',_0x1753fc='';_0x1aa8e0=atob(_0x1aa8e0);for(var _0x1d70cb=0x0,_0x349521=_0x1aa8e0['length'];_0x1d70cb<_0x349521;_0x1d70cb++){_0x1753fc+='%'+('00'+_0x1aa8e0['charCodeAt'](_0x1d70cb)['toString'](0x10))['slice'](-0x2);}_0x1aa8e0=decodeURIComponent(_0x1753fc);var _0x17576c;for(_0x17576c=0x0;_0x17576c<0x100;_0x17576c++){_0x3e6be6[_0x17576c]=_0x17576c;}for(_0x17576c=0x0;_0x17576c<0x100;_0x17576c++){_0x17d879=(_0x17d879+_0x3e6be6[_0x17576c]+_0x2f9302['charCodeAt'](_0x17576c%_0x2f9302['length']))%0x100;_0x3b508d=_0x3e6be6[_0x17576c];_0x3e6be6[_0x17576c]=_0x3e6be6[_0x17d879];_0x3e6be6[_0x17d879]=_0x3b508d;}_0x17576c=0x0;_0x17d879=0x0;for(var _0x4cf27f=0x0;_0x4cf27f<_0x1aa8e0['length'];_0x4cf27f++){_0x17576c=(_0x17576c+0x1)%0x100;_0x17d879=(_0x17d879+_0x3e6be6[_0x17576c])%0x100;_0x3b508d=_0x3e6be6[_0x17576c];_0x3e6be6[_0x17576c]=_0x3e6be6[_0x17d879];_0x3e6be6[_0x17d879]=_0x3b508d;_0x17e50c+=String['fromCharCode'](_0x1aa8e0['charCodeAt'](_0x4cf27f)^_0x3e6be6[(_0x3e6be6[_0x17576c]+_0x3e6be6[_0x17d879])%0x100]);}return _0x17e50c;};_0x4cd1['RDoxwa']=_0x4a54d1;_0x4cd1['PePXze']={};_0x4cd1['ZTGmAl']=!![];}var _0x1decb8=_0x4cd1['PePXze'][_0x156662];if(_0x1decb8===undefined){if(_0x4cd1['Kjpdrc']===undefined){_0x4cd1['Kjpdrc']=!![];}_0x4cd12b=_0x4cd1['RDoxwa'](_0x4cd12b,_0x51a11e);_0x4cd1['PePXze'][_0x156662]=_0x4cd12b;}else{_0x4cd12b=_0x1decb8;}return _0x4cd12b;};var objc=JSON[_0x4cd1('0x0','gIQ9')]($response[_0x4cd1('0x6','!C[]')]);objc={'success':!![],'data':{'username':'彭于晏解锁','app_name':_0x4cd1('0x7','TBZI'),'nick':null,'email':'','uid':'glp16atl84','status':0x0,'is_guest':![],'is_staff':![],'is_admin':![],'preferences':null,'membership':{'role_name':_0x4cd1('0x2','kkKg'),'begin_time':_0x4cd1('0x1','Q!Y8'),'end_time':'9999-10-01T15:24:51Z','begin_time_ms':0x18384b36efd,'end_time_ms':0xe675ec3422f7},'social_apple_id':null,'created_datetime':_0x4cd1('0x4','M1$)'),'created_datetime_ms':0x18384b13315,'last_login_datetime':_0x4cd1('0x5','jZOx'),'last_login_datetime_ms':0x18384b1332c}};$done({'body':JSON[_0x4cd1('0x3','zoA1')](objc)});
