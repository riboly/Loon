// ==UserScript==
// @name         91短视频弹窗及横幅隐藏器
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  隐藏弹窗、遮罩层和视频详情横幅
// @author       YourName
// @match        *://pwa1.lxmebhpm.xyz/*
// @match        *://pwa1.*/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    // 目标元素选择器
    const SELECTORS = {
        dialog: ".van-dialog.notice",        // 主弹窗
        overlay: ".van-overlay",             // 遮罩层
        banner: ".video-detail-banner",      // 新添加的横幅
    };

    // 统一隐藏函数
    const hideElements = () => {
        // 隐藏主弹窗
        const dialog = document.querySelector(SELECTORS.dialog);
        if (dialog) {
            dialog.style.display = 'none';
            console.log("主弹窗已隐藏");
        }

        // 隐藏所有遮罩层
        const overlays = document.querySelectorAll(SELECTORS.overlay);
        overlays.forEach(overlay => {
            overlay.style.display = 'none';
        });
        if (overlays.length > 0) console.log(`已隐藏 ${overlays.length} 个遮罩层`);

        // 隐藏横幅（优先使用class选择器）
        const banners = [
            ...document.querySelectorAll(SELECTORS.banner)
        ];

        // 去重处理
        const uniqueBanners = [...new Set(banners)];

        uniqueBanners.forEach(banner => {
            banner.style.display = 'none';
        });

        if (uniqueBanners.length > 0) {
            console.log(`已隐藏 ${uniqueBanners.length} 个视频详情横幅`);
        }
    };

    // 初始执行隐藏
    hideElements();

    // 监听DOM变化
    const observer = new MutationObserver(hideElements);
    observer.observe(document.body, {
        childList: true,   // 监控子节点变化
        subtree: true,     // 监控所有后代节点
        attributes: true   // 监控属性变化
    });

    // 增强：页面跳转后重新监听（适用于SPA网站）
    window.addEventListener('hashchange', hideElements);
    window.addEventListener('popstate', hideElements);
})();