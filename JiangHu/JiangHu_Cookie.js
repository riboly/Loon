/**
 * 脚本名称: 江湖获取Cookie
 * 脚本作者: riboly
 * 更新日期: 2025-05-20 12:16:16
 * 脚本功能: 江湖自动抓取Cookie
 * 触发方式: http-request ^https?:\/\/91\.jh\.plus\/lixin\/api\/sign-already script-path=https://raw.githubusercontent.com/riboly/Loon/refs/heads/main/JiangHu/JiangHu_Cookie.js
 * 抓包入口：“我的”界面，点右上角日历，即可抓到数据包
 * 
 */

// 获取时间函数
function getCurrentTime(){
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();

    return `${year}-${month}-${day} ${hours}:${minutes}`;
}

// 日志函数
function log(message) {
    console.log(`[日志] ${message}\n`);
}

// 通知函数
function notify(title, message) {
    $notification.post("[江湖]", title, message);
}

// 主函数
function getCookie() {
    log(`请求信息 ${JSON.stringify($request)}`);
    log("执行中...");
    

    // 检查是否为HTTP请求
    if (!$request) {
        log("request对象不存在");
        $done({});
    }

    log(`检测到请求 ${$request.url}`);

    // 获取请求头
    const headers = $request.headers;
    if(!headers) {
        log("请求头不存在");
        $done({});
        return;
    }

    log(`请求头: ${JSON.stringify(headers)}`);
    
    const sfacgData = {
        "apptoken": headers.apptoken,
    };
    let updated = 0;

    for (const key in sfacgData) {
        if (sfacgData[key] && sfacgData[key] !== "") {
            updated++;
            log(`${key}:${sfacgData[key]}`);
        }else{
            log(`${key}不存在`)
        }
    }

    $persistentStore.write(JSON.stringify(sfacgData), "sfacg_data");
    log(`保存到sfacgdata:${JSON.stringify(sfacgData)}\n`);

    if (updated === 1) {
        notify("✅江湖获取Cookie成功", `日期: ${getCurrentTime()}`);
        log(`获取成功，时间 ${getCurrentTime()}`)
        $done({});
    }else{
        notify("❌江湖获取Cookie失败", `日期: ${getCurrentTime()}`);
        log(`获取失败，时间 ${getCurrentTime()}`)
        $done({});
    }
}

// 执行主函数
getCookie();
