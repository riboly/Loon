// ==UserScript==
// @name         91短视频隐藏弹
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  隐藏页面中的弹窗（.van-dialog.notice）和遮罩层（.van-overlay）
// @author       YourName
// @match        *://pwa1.lxmebhpm.xyz/*
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    // 目标元素选择器
    const dialogSelector = ".van-dialog.notice";
    const overlaySelector = ".van-overlay";

    // 统一隐藏函数
    const hideElements = () => {
        // 隐藏主弹窗
        const dialog = document.querySelector(dialogSelector);
        if (dialog) {
            dialog.style.display = 'none';
            console.log("主弹窗已隐藏");
        }

        // 隐藏所有遮罩层
        const overlays = document.querySelectorAll(overlaySelector);
        overlays.forEach(overlay => {
            overlay.style.display = 'none';
        });
        if (overlays.length > 0) console.log(`已隐藏 ${overlays.length} 个遮罩层`);
    };

    // 初始执行隐藏
    hideElements();

    // 监听DOM变化，处理动态加载的弹窗
    const observer = new MutationObserver(hideElements);
    observer.observe(document.body, {
        childList: true,   // 监控子节点变化
        subtree: true,     // 监控所有后代节点
        attributes: true   // 监控属性变化（防止z-index重置）
    });
})();