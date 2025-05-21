/**
 * 脚本名称: 江湖自动签到
 * 脚本作者: riboly
 * 更新日期: 2025-5-20 17:36:26
 * 脚本功能: 江湖轻自动签到
 * 触发方式: cron "30 9/11 * * *" script-path=./JiangHu_Sign.js
 * 
 * 
 */

// 日志函数
function log(message, title) {
    console.log(`[${title ? title : "日志"}] ${message}\n`);
}
// 通知函数
function notify(title, message) {
    $notification.post("江湖签到", title, message);
}
// 获取日期
function getSignDate(){
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    const signDate = {
        signDate: `${year}-${month}-${day}`
    };

    return signDate;
}
// 构造协议头 headers
function loadCredentials() {
    //const sfacgData = JSON.parse($persistentStore.read("sfacg_data"));
    //log($persistentStore.read("sfacg_data"));
    const headers = {
         		"Host": "91.jh.plus",
	                "Content-Type": "application/json",
	                "Cookie": "wolfking.jeeplus.session.id=ccedb9da-c089-44b9-a9cc-0d2af72eb968",
	                "User-Agent": "MallTalk/1.1 (iPhone; iOS 17.5.1; Scale/3.00)",
	                "apptoken": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiI3MjBlYmU1NTVlMjE0NDA4OTVkNjI0N2JjZDYzZWFlNSIsImV4cCI6MTc0ODMyNzk2OH0.HGoAn6nzfSDRz2SYOAwDt8l7sO-VgMgCiUXHPsv03hM"
	            
    };

    return headers;
}


// 构造params
function prepareRequest(){
	const headers = loadCredentials();
	return {
        url: "https://91.jh.plus/lixin/api/sign-already",
	timeout: 5000,
        headers: headers,
        body: '{"uid":"","ds":"2025-05"}',
	alpn:"h2"
    };
	
}

// 处理结果函数
function handleSignResult(error, response, data) {
	//log("江湖签到返回${data}","江湖签到返回");
	//log("江湖签到返回${response}","江湖签到返回");
	if (error) {
	        log(`签到请求失败: ${error}`);
	        notify("签到请求失败", error);
	        $done({});
	        return;
	    }
	log(`签到响应: ${data}`);
	
	return
}
// 主要请求函数
function main(){
    log("开始执行签到脚本");

    // 信息判断
    if(!$persistentStore.read("sfacg_data")) {
        notify("签到失败", "缺少必要的信息，请先获取Cookie");
        log(`缺少必要信息 sfacg_data:${$persistentStore.read("sfacg_data")} ,请先获取Cookie`)
        $done({});
        return;
    }

    const request = prepareRequest();
    //$httpClient.POST(request, handleSignResult);
	$httpClient.post(request, handleSignResult)
}

// Run
main();

