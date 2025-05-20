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
// 读取必要信息
function loadCredentials() {
    const sfacgData = JSON.parse($persistentStore.read("sfacg_data"));
    log($persistentStore.read("sfacg_data"));
    const headers = {
        "apptoken": `${sfacgData.apptoken}`,
		"Host": "91.jh.plus"
		"Content-Type": "application/json"
    };
	log("读取必要信息 apptoken:" + apptoken);
    return headers;
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

// 准备签到请求函数
function prepareRequest(){
    //const body = getSignDate();
    const headers = loadCredentials();

    return {
        url: "https://91.jh.plus/lixin/api/sign-already",
        headers: headers,
        body: '{"uid":"","ds":"2025-05"}'’,
        method: "POST"
    };
}

// 签到
function getCoupon(callback){
    try{
        log("开始签到", "getCoupon");
        const sfacgData = JSON.parse($persistentStore.read("sfacg_data"));

        //log("读取到数据: " + $persistentStore.read("sfacg_data").substring(0, 50) + "...");

        const headers = {
            "apptoken": `${sfacgData.apptoken}`,
			"Host": "91.jh.plus"
			"Content-Type": "application/json"
        };
		log("签到 apptoken:" + apptoken);	
        log("构建请求头");

        const request = {
            url: "https://91.jh.plus/lixin/api/sign-already",
            headers: headers,
			body: '{"uid":"","ds":"2025-05"}'’,
            method: "POST"
        };

        log("开始发送HTTP请求");

        $httpClient.POST(request, function(error, response, data){
            try{
                if (error) {
                    log(`获取火券数量请求失败 Error:${error}`);
                    callback("获取失败");
                    return;
                }

                log("收到HTTP请求");

                //添加响应数据的检查
                if(!data){
                    log("响应数据为空");
                    callback("空数据");
                    return;
                }

                log(`响应数据: ${data.substring(0,50)}...`);

                const result = JSON.parse(data).data;

                if(!result || !Array.isArray(result)){
                    log(`解析结果异常: ${JSON.stringify(result)}`);
                    callback("数据异常");
                    return;
                }

                let coupons = 0;
                let expirationDate = "";
                let expireCoupons = 0;
                for (let i = 0; i < result.length; i++) {
                    const coupon = result[i];
                    if(coupon.usedCoupon === coupon.coupon){
                        break;
                    }
                    coupons += (coupon.coupon - coupon.usedCoupon);
                    expirationDate = coupon.expireDate.replace("T", " ");
                    expireCoupons = (coupon.coupon - coupon.usedCoupon);
                }


                log(`剩余有效代券: ${coupons}`);
                log(`最近的代券过期日期: ${expirationDate}`);
                log("结束", "getCoupon")
                callback({
                    coupons: coupons,
                    expDate: expirationDate.split(" ")[0],
                    expTime: expirationDate.split(" ")[1],
                    today: getSignDate().signDate,
                    expCoupons: expireCoupons
                });
                
            }catch(e){
                log(`代券回调处理出错: ${e.message}`);
                log("结束", "getCoupon")
                callback("处理出错");
            }
        });
    }catch(e){
        log(`代券函数执行出错 ${e.message}`);
        log("结束", "getCoupon")
        callback("函数错误");
    }
    
}

// 处理结果函数
function handleSignResult(error, response, data) {
    if (error) {
        log(`签到请求失败: ${error}`);
        notify("签到请求失败", error);
        $done({});
        return;
    }

    // log(`error:${error}`);
    // log(`response: ${JSON.stringify(response)}`);
    // log(`data:${data}`);

    log(`签到响应: ${data}`);

    try{
        const result = JSON.parse(data);

        // 状态判断
        if (result.status && result.status.httpCode === 200) {
            const rewards = result.data;
            let rewardText = "";

            if (rewards && rewards.length > 0) {
                rewards.forEach(reward => {
                    rewardText += `${reward.num}${reward.name}`
                });
                getCoupon(function(result){
                    log(`getCoupon回调函数执行，结果: ${result.coupons}`, "getCoupon");
                    if(result.expDate === result.today){
                        log(`过期日期:${result.expDate}，今日日期:${result.today}`);
                        log(`result:${JSON.stringify(result)}`);
                        notify(`签到成功,获得奖励:${rewardText}`, `剩余有效代券:${result.coupons}\n⚠️⚠️⚠️今日${result.expTime}过期:${result.expCoupons}代券`);
                    }else{
                        log(`过期日期:${result.expDate}，今日日期:${result.today}`);
                        log(`result:${JSON.stringify(result)}`);
                        notify(`签到成功,获得奖励:${rewardText}`, `剩余有效代券:${result.coupons}\n最近过期:${result.expCoupons}代券(Date:${result.expDate})`);
                    }

                    $done({});

                });

                return;
            }else{
                log("签到成功，无奖励");
                notify("签到成功", "无奖励");
                $done({});
            }

        }else if(result.status && result.status.httpCode === 400){
            const errorMsg = result.status ? result.status.msg : "未知错误";
            if(new Date().getHours() <1){
                log(`签到系统维护， Info:${result.status.msg}`);
                notify(`签到系统很可能在维护`,`Info:${errorMsg}`);
                $done({});
            }

            log(`准备调用getCoupon函数查询代券`);
            getCoupon(function(result){
                log(`getCoupon回调函数执行，结果: ${result.coupons}`, "getCoupon");
                if(result.expDate === result.today){
                    log(`过期日期:${result.expDate}，今日日期:${result.today}`);
                    log(`result:${JSON.stringify(result)}`);
                    notify(`今日已经签到过了，剩余有效代券:${result.coupons}`,`⚠️⚠️⚠️今日${result.expTime}过期:${result.expCoupons}代券`);
                }else{
                    log(`过期日期:${result.expDate}，今日日期:${result.today}`);
                    log(`result:${JSON.stringify(result)}`);
                    notify(`今日已经签到过了，剩余有效代券:${result.coupons}`,`最近过期:${result.expCoupons}代券(Date:${result.expDate})`);
                }
                $done({});
            });

            return;
        }else{
            const errorMsg = result.status ? result.status.msg : "未知错误";
            notify("签到失败", errorMsg);
            log(`签到失败 ${errorMsg}`);

            $done({});
        }
        
    
    }catch (e) {
        log(`解析响应出错: ${e}`);
        notify("处理签到响应出错", e.message);
        $done({});
    }

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
    $httpClient.POST(request, handleSignResult);
}

// Run
main();

