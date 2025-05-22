/**
 * 脚本名称: 江湖自动签到
 * 脚本作者: riboly
 * 更新日期: 2025-5-20 17:36:26
 * 脚本功能: 江湖轻自动签到
 * 触发方式: cron "11 8,18 * * *" script-path=./JiangHu_DZ.js
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
    const sfacgData = JSON.parse($persistentStore.read("sfacg_data"));
    log($persistentStore.read("sfacg_data"));
    const headers = {
         		"Host": "91.jh.plus",
	                "Content-Type": "application/json",
	                "User-Agent": "MallTalk/1.1 (iPhone; iOS 17.5.1; Scale/3.00)",
	                "apptoken": `${sfacgData.apptoken}`
	            
    };

    return headers;
}


// 构造数据发送数据包params
function prepareRequest(J_URL,J_body){
	const headers = loadCredentials();
	return {
        url: `${J_URL}`,
	timeout: 5000,
        headers: headers,
        body: `${J_body}`,
	alpn:"h2"
    };
	
}

// 处理网络返回数据包
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
	notify("✬", `响应: ${data}`);
    
    const jsonData = JSON.parse(`${data}`);  // 手动解析
    const id1 = jsonData.data.list[0].id;
    log(`第一个id：` + id1);
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
    const url = "https://91.jh.plus/lixin/api/circle-list"
    const body = '{"uid":"","key":"","search":"2","type":"0","pageSize":"5","pageNo":"1"}'
    const request = prepareRequest(url,body);
    //$httpClient.POST(request, handleSignResult);
	$httpClient.post(request, handleSignResult)
}

// Run
main();

