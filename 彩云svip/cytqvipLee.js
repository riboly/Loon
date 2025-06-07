/*
脚本功能：彩云天气vip
下载地址：appstore
软件版本：所有
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
适用版本7.35.0
[rewrite_local]

^http[s]?:\/\/biz\.(caiyunapp|cyapi)\/(.*?)(v1|v2)\/user.*$ requires-body=1,script-path=https://raw.githubusercontent.com/riboly/WeiRen0-Scripts/refs/heads/main/cytqvipLee.js

[mitm]
hostname = *.caiyunapp.*,*cyapi*

*/
var body = `{"user":{"id":"66284a941303006b0e4bbbbb", "phone_num":"+86 13030888888", "is_phone_verified":true, "is_visitor":false, "name":"***8888", "avatar":"https://caiyunapp.com/imgs/webtrs/default.png", "created_at":1713916564.560752}, "user_info":{"name":"***8888", "name_status":0, "avatar":"https://caiyunapp.com/imgs/webtrs/default.png", "avatar_status":0, "gender":1, "birthday":"1990-05-03", "city":"肇庆市", "interests":["防过敏", "跑步", "航空", "摄影"], "industry":"IT互联网", "reg_time":"1713916564", "reg_days":402, "completed_percent":100, "show_completed_award":false, "is_under_maintenance":false}, "vip_info":{"vip":{"expires_time":"0", "is_auto_renewal":false}, "svip":{"expires_time":"4083801865", "is_auto_renewal":false}, "upcoming_renewals":[], "show_upcoming_renewal":true, "server_time":"1748582021", "trial_svip":{"expires_time":"1719378575", "received_time":"1719292175", "is_recharge_vip":true, "trial_card_code":"trial_svip_1d"}}}`;
$done({ body });


