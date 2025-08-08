// ==UserScript==
// @name         91短视频去广告+vip播放
// @namespace    http://tampermonkey.net/
// @version      3.0
// @description  支持白名单过滤的智能重定向脚本 + 弹窗/横幅隐藏功能
// @author       活雷锋
// @match        *://pwa1.lxmebhpm.xyz/*
// @match        *://pwa1.*/#/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    /******************** 视频协议重定向模块 ********************/
    const WHITELIST_DOMAINS = ['example.com', 'safe-site.net'];
    const VIDEO_PATTERN = /^https?(:\/\/10play)\.(.+)\.m3u8\?/i;

    // 白名单检测函数
    const isWhitelisted = (host) => {
        return WHITELIST_DOMAINS.some(domain => host.includes(domain));
    };

    // 重写Fetch API
    const originalFetch = window.fetch;
    window.fetch = async function(input, init) {
        let url = typeof input === 'string' ? input : input.url;
        if (VIDEO_PATTERN.test(url) && !isWhitelisted(url)) {
            url = url.replace(/10play/i, 'long');
            console.log(`[${new Date().toISOString()}] 重定向请求: ${url}`);
            input = typeof input === 'string' ? url : { ...input, url };
        }
        return originalFetch(input, init);
    };

    // 重写XMLHttpRequest
    const originalOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url) {
        if (VIDEO_PATTERN.test(url) && !isWhitelisted(url)) {
            url = url.replace(/10play/i, 'long');
            console.log(`[${new Date().toISOString()}] 重定向XHR: ${url}`);
            arguments[1] = url;
        }
        originalOpen.apply(this, arguments);
    };

    /******************** 弹窗隐藏模块 ********************/
    const SELECTORS = {
        DIALOG: ".van-dialog.notice",        // 主弹窗
        OVERLAY: ".van-overlay",             // 遮罩层
        BANNER: ".video-detail-banner"       // 视频详情横幅
    };

    // 统一隐藏函数
    const hideUIElements = () => {
        // 隐藏主弹窗
        const dialog = document.querySelector(SELECTORS.DIALOG);
        if (dialog) {
            dialog.style.display = 'none';
            console.log("主弹窗已隐藏");
        }

        // 隐藏所有遮罩层
        const overlays = document.querySelectorAll(SELECTORS.OVERLAY);
        overlays.forEach(overlay => {
            overlay.style.display = 'none';
        });
        console.log(`已隐藏 ${overlays.length} 个遮罩层`);

        // 隐藏横幅（去重处理）
        const banners = Array.from(document.querySelectorAll(SELECTORS.BANNER))
            .filter((v, i, a) => a.indexOf(v) === i);

        banners.forEach(banner => {
            banner.style.display = 'none';
        });
        console.log(`已隐藏 ${banners.length} 个视频详情横幅`);
    };

    // 初始执行隐藏
    hideUIElements();

    // 动态DOM监听
    const observer = new MutationObserver(hideUIElements);
    observer.observe(document.body, {
        childList: true,   // 监控子节点变化
        subtree: true,     // 监控所有后代节点
        attributes: true   // 监控属性变化
    });

    // 页面导航监听
    const handleNavigation = () => {
        hideUIElements();
        observer.disconnect();
        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true
        });
    };

    window.addEventListener('hashchange', handleNavigation);
    window.addEventListener('popstate', handleNavigation);
})();