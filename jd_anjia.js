/*
组队分豆-安佳 [jd_anjia.js]

————————————————
入口：[组队分豆-安佳]
IOS等用户直接用NobyDa的jd cookie
============Quantumultx===============
[task_local]
#组队分豆-安佳
49 13 * * * https://raw.githubusercontent.com/KingRan/KR/main/jd_anjia.js, tag=组队分豆-安佳, enabled=true
================Loon==============
[Script]
cron "49 13 * * *" script-path=https://raw.githubusercontent.com/KingRan/KR/main/jd_anjia.js,tag=组队分豆-安佳
===============Surge=================
组队分豆-安佳 = type=cron,cronexp="49 13 * * *",wake-system=1,timeout=3600,script-path=https://raw.githubusercontent.com/KingRan/KR/main/jd_anjia.js
============小火箭=========
组队分豆-安佳 = type=cron,script-path=https://raw.githubusercontent.com/KingRan/KR/main/jd_anjia.js, cronexpr="49 13 * * *", timeout=3600, enable=true
*/
const $ = new Env("安佳组队分豆-加密");
var _0xodk = 'jsjiami.com.v6', _0xodk_ = ['_0xodk'],
    _0x2553 = [_0xodk, '\x69\x73\x4e\x6f\x64\x65', '\x2e\x2f\x6a\x64\x43\x6f\x6f\x6b\x69\x65\x2e\x6a\x73', '\x2e\x2f\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79', '\x6b\x65\x79\x73', '\x66\x6f\x72\x45\x61\x63\x68', '\x70\x75\x73\x68', '\x65\x6e\x76', '\x4a\x44\x5f\x44\x45\x42\x55\x47', '\x66\x61\x6c\x73\x65', '\x6c\x6f\x67', '\x67\x65\x74\x64\x61\x74\x61', '\x43\x6f\x6f\x6b\x69\x65\x73\x4a\x44', '\x70\x61\x72\x73\x65', '\x6d\x61\x70', '\x63\x6f\x6f\x6b\x69\x65', '\x72\x65\x76\x65\x72\x73\x65', '\x43\x6f\x6f\x6b\x69\x65\x4a\x44\x32', '\x43\x6f\x6f\x6b\x69\x65\x4a\x44', '\x66\x69\x6c\x74\x65\x72', '\x6d\x73\x67', '\x6e\x61\x6d\x65', '\u3010\u63d0\u793a\u3011\u8bf7\u5148\u83b7\u53d6\u4eac\u4e1c\u8d26\u53f7\u4e00\x63\x6f\x6f\x6b\x69\x65\x0a\u76f4\u63a5\u4f7f\u7528\x4e\x6f\x62\x79\x44\x61\u7684\u4eac\u4e1c\u7b7e\u5230\u83b7\u53d6', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x62\x65\x61\x6e\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x62\x65\x61\x6e\x2f\x73\x69\x67\x6e\x49\x6e\x64\x65\x78\x2e\x61\x63\x74\x69\x6f\x6e', '\x0a\u6b64\u6d3b\u52a8\u9700\u8981\u65b0\u52a0\u5165\u4f1a\u5458\u5e97\u94fa\u624d\u80fd\u52a0\u5165\u961f\u4f0d\uff0c\x0a\u82e5\u5df2\u7ecf\u5165\u4f1a\u8fc7\uff0c\u5219\u65e0\u6cd5\u91cd\u590d\u5165\u961f\uff0c\x0a\u74dc\u5206\u9650\u5236\x32\x30\u7ec4\uff0c\u8bf7\u81ea\u884c\u6362\u53f7\u8fd0\u884c\u3002\x0a\u74dc\u5206\u5165\u53e3\x3a\x0a\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6c\x7a\x6b\x6a\x64\x7a\x2d\x69\x73\x76\x2e\x69\x73\x76\x6a\x63\x6c\x6f\x75\x64\x2e\x63\x6f\x6d\x2f\x70\x6f\x6f\x6c\x2f\x63\x61\x70\x74\x61\x69\x6e\x2f\x34\x34\x37\x31\x32\x36\x36\x3f\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3d\x34\x31\x66\x62\x66\x64\x63\x64\x35\x35\x65\x30\x34\x36\x32\x33\x39\x61\x65\x64\x65\x64\x36\x33\x38\x61\x32\x61\x30\x65\x64\x30\x26\x73\x69\x67\x6e\x55\x75\x69\x64\x3d\x38\x34\x62\x33\x34\x36\x33\x32\x34\x38\x34\x65\x34\x36\x66\x33\x39\x61\x62\x39\x31\x32\x34\x31\x34\x65\x37\x37\x39\x31\x36\x36', '\x6c\x65\x6e\x67\x74\x68', '\x55\x73\x65\x72\x4e\x61\x6d\x65', '\x6d\x61\x74\x63\x68', '\x69\x6e\x64\x65\x78', '\x69\x73\x4c\x6f\x67\x69\x6e', '\x6e\x69\x63\x6b\x4e\x61\x6d\x65', '\x0a\x2a\x2a\x2a\x2a\x2a\x2a\u5f00\u59cb\u3010\u4eac\u4e1c\u8d26\u53f7', '\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x2a\x0a', '\u3010\u63d0\u793a\u3011\x63\x6f\x6f\x6b\x69\x65\u5df2\u5931\u6548', '\u4eac\u4e1c\u8d26\u53f7', '\x0a\u8bf7\u91cd\u65b0\u767b\u5f55\u83b7\u53d6\x0a\x68\x74\x74\x70\x73\x3a\x2f\x2f\x62\x65\x61\x6e\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x62\x65\x61\x6e\x2f\x73\x69\x67\x6e\x49\x6e\x64\x65\x78\x2e\x61\x63\x74\x69\x6f\x6e', '\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79', '\x63\x6f\x6f\x6b\x69\x65\u5df2\u5931\u6548\x20\x2d\x20', '\x0a\u8bf7\u91cd\u65b0\u767b\u5f55\u83b7\u53d6\x63\x6f\x6f\x6b\x69\x65', '\x38\x34\x62\x33\x34\x36\x33\x32\x34\x38\x34\x65\x34\x36\x66\x33\x39\x61\x62\x39\x31\x32\x34\x31\x34\x65\x37\x37\x39\x31\x36\x36', '\x66\x35\x61\x64\x66\x37\x62\x62\x31\x35\x61\x62\x34\x31\x63\x32\x62\x36\x65\x64\x65\x64\x32\x63\x36\x30\x38\x37\x36\x64\x65\x61', '\x41\x44\x49\x44', '\x78\x78\x78\x78\x78\x78\x78\x78\x2d\x78\x78\x78\x78\x2d\x78\x78\x78\x78\x2d\x78\x78\x78\x78\x2d\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78', '\x55\x55\x49\x44', '\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78\x78', '\x61\x75\x74\x68\x6f\x72\x43\x6f\x64\x65', '\x61\x75\x74\x68\x6f\x72\x4e\x75\x6d', '\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64', '\x34\x31\x66\x62\x66\x64\x63\x64\x35\x35\x65\x30\x34\x36\x32\x33\x39\x61\x65\x64\x65\x64\x36\x33\x38\x61\x32\x61\x30\x65\x64\x30', '\x61\x63\x74\x69\x76\x69\x74\x79\x53\x68\x6f\x70\x49\x64', '\x31\x30\x30\x30\x30\x31\x34\x34\x38\x36', '\x61\x63\x74\x69\x76\x69\x74\x79\x55\x72\x6c', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6c\x7a\x6b\x6a\x64\x7a\x2d\x69\x73\x76\x2e\x69\x73\x76\x6a\x63\x6c\x6f\x75\x64\x2e\x63\x6f\x6d\x2f\x70\x6f\x6f\x6c\x2f\x63\x61\x70\x74\x61\x69\x6e\x2f', '\x3f\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3d', '\x26\x73\x69\x67\x6e\x55\x75\x69\x64\x3d', '\x26\x61\x64\x73\x6f\x75\x72\x63\x65\x3d\x6e\x75\x6c\x6c\x26\x73\x68\x61\x72\x65\x75\x73\x65\x72\x69\x64\x34\x6d\x69\x6e\x69\x70\x67\x3d\x6e\x75\x6c\x6c\x26\x73\x68\x6f\x70\x69\x64\x3d', '\x26\x6c\x6e\x67\x3d\x30\x30\x2e\x30\x30\x30\x30\x30\x30\x26\x6c\x61\x74\x3d\x30\x30\x2e\x30\x30\x30\x30\x30\x30\x26\x73\x69\x64\x3d\x26\x75\x6e\x5f\x61\x72\x65\x61\x3d', '\x77\x61\x69\x74', '\u6709\u70b9\u513f\u6536\u83b7', '\x63\x61\x74\x63\x68', '\x2c\x20\u5931\u8d25\x21\x20\u539f\u56e0\x3a\x20', '\x66\x69\x6e\x61\x6c\x6c\x79', '\x64\x6f\x6e\x65', '\x74\x6f\x6b\x65\x6e', '\x73\x65\x63\x72\x65\x74\x50\x69\x6e', '\x6f\x70\x65\x6e\x43\x61\x72\x64\x41\x63\x74\x69\x76\x69\x74\x79\x49\x64', '\x63\x75\x73\x74\x6f\x6d\x65\x72\x2f\x67\x65\x74\x53\x69\x6d\x70\x6c\x65\x41\x63\x74\x49\x6e\x66\x6f\x56\x6f', '\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3d', '\u52a0\u5165\u961f\u4f0d\uff1a', '\x63\x6f\x6d\x6d\x6f\x6e\x2f\x61\x63\x63\x65\x73\x73\x4c\x6f\x67\x57\x69\x74\x68\x41\x44', '\x76\x65\x6e\x64\x65\x72\x49\x64\x3d', '\x26\x63\x6f\x64\x65\x3d\x34\x36\x26\x70\x69\x6e\x3d', '\x26\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3d', '\x26\x70\x61\x67\x65\x55\x72\x6c\x3d', '\x26\x73\x75\x62\x54\x79\x70\x65\x3d\x61\x70\x70\x26\x61\x64\x53\x6f\x75\x72\x63\x65\x3d\x6e\x75\x6c\x6c', '\x61\x63\x74\x69\x76\x69\x74\x79\x43\x6f\x6e\x74\x65\x6e\x74', '\x26\x70\x69\x6e\x3d', '\x63\x61\x6e\x4a\x6f\x69\x6e', '\u52a0\u5165\u961f\u4f0d\u6210\u529f\uff0c\u8bf7\u7b49\u5f85\u961f\u957f\u74dc\u5206\u4eac\u8c46', '\x73\x61\x76\x65\x43\x61\x6e\x64\x69\x64\x61\x74\x65', '\x26\x70\x69\x6e\x49\x6d\x67\x3d', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x69\x6d\x67\x31\x30\x2e\x33\x36\x30\x62\x75\x79\x69\x6d\x67\x2e\x63\x6f\x6d\x2f\x69\x6d\x67\x7a\x6f\x6e\x65\x2f\x6a\x66\x73\x2f\x74\x31\x2f\x32\x31\x33\x38\x33\x2f\x32\x2f\x36\x36\x33\x33\x2f\x33\x38\x37\x39\x2f\x35\x63\x35\x31\x33\x38\x64\x38\x45\x30\x39\x36\x37\x63\x63\x66\x32\x2f\x39\x31\x64\x61\x35\x37\x63\x35\x65\x32\x31\x36\x36\x30\x30\x35\x2e\x6a\x70\x67', '\u52a0\u5165\u4f1a\u5458', '\x65\x72\x72\x6f\x72\x4a\x6f\x69\x6e\x53\x68\x6f\x70', '\x69\x6e\x64\x65\x78\x4f\x66', '\u6d3b\u52a8\u592a\u706b\u7206\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5', '\u5c1d\u8bd5\u7b2c\u4e00\u6b21\x20\u91cd\u65b0\u5f00\u5361', '\u5c1d\u8bd5\u7b2c\u4e8c\u6b21\x20\u91cd\u65b0\u5f00\u5361', '\u5c1d\u8bd5\u7b2c\u4e09\u6b21\x20\u91cd\u65b0\u5f00\u5361', '\u62b1\u6b49\uff0c\u5f00\u5361\u4e0d\u6210\u529f\x20\uff0c\u8bf7\u91cd\u65b0\u8fd0\u884c\u811a\u672c', '\u3010\u8d26\u53f7', '\u62b1\u6b49\uff0c\u5f00\u5361\u4e0d\u6210\u529f\x20\uff0c\u8bf7\u91cd\u65b0\u8fd0\u884c\u811a\u672c\x0a', '\x63\x61\x6e\x43\x72\x65\x61\x74\x65', '\u521b\u5efa\u961f\u4f0d', '\x73\x61\x76\x65\x43\x61\x70\x74\x61\x69\x6e', '\x73\x69\x67\x6e\x55\x75\x69\x64', '\u961f\u4f0d\x49\x44\uff1a', '\u4f60\u5df2\u7ecf\u662f\u5e97\u94fa\u4f1a\u5458\u4e86\uff0c\u65e0\u6cd5\u52a0\u5165\u961f\u4f0d\uff01', '\u6ca1\u6709\u6210\u529f\u83b7\u53d6\u5230\u7528\u6237\u4fe1\u606f', '\u6ca1\u6709\u6210\u529f\u83b7\u53d6\u5230\u7528\u6237\u9274\u6743\u4fe1\u606f', '\x70\x6f\x73\x74', '\x72\x65\x73\x75\x6c\x74', '\x64\x61\x74\x61', '\u521b\u5efa\u961f\u4f0d\u6210\u529f', '\x64\x7a\x2f\x63\x6f\x6d\x6d\x6f\x6e\x2f\x67\x65\x74\x53\x69\x6d\x70\x6c\x65\x41\x63\x74\x49\x6e\x66\x6f\x56\x6f', '\x6a\x64\x41\x63\x74\x69\x76\x69\x74\x79\x49\x64', '\x76\x65\x6e\x64\x65\x72\x49\x64', '\x77\x78\x41\x63\x74\x69\x6f\x6e\x43\x6f\x6d\x6d\x6f\x6e\x2f\x67\x65\x74\x55\x73\x65\x72\x49\x6e\x66\x6f', '\x6e\x69\x63\x6b\x6e\x61\x6d\x65', '\x70\x69\x6e\x49\x6d\x67', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x69\x6d\x67\x31\x30\x2e\x33\x36\x30\x62\x75\x79\x69\x6d\x67\x2e\x63\x6f\x6d\x2f\x69\x6d\x67\x7a\x6f\x6e\x65\x2f\x6a\x66\x73\x2f\x74\x31\x2f\x37\x30\x32\x30\x2f\x32\x37\x2f\x31\x33\x35\x31\x31\x2f\x36\x31\x34\x32\x2f\x35\x63\x35\x31\x33\x38\x64\x38\x45\x34\x64\x66\x32\x65\x37\x36\x34\x2f\x35\x61\x31\x32\x31\x36\x61\x33\x61\x35\x30\x34\x33\x63\x35\x64\x2e\x70\x6e\x67', '\x6f\x70\x65\x6e\x43\x61\x72\x64', '\x75\x70\x64\x61\x74\x65\x43\x61\x70\x74\x61\x69\x6e', '\x73\x74\x72\x69\x6e\x67\x69\x66\x79', '\x68\x65\x61\x64\x65\x72\x73', '\x73\x65\x74\x2d\x63\x6f\x6f\x6b\x69\x65', '\x73\x70\x6c\x69\x74', '\x73\x75\x62\x73\x74\x72', '\x7b\x0a\x09\x09\x09\x20\x20\x22\x76\x65\x6e\x64\x65\x72\x49\x64\x22\x3a\x22\x31\x30\x30\x30\x30\x31\x34\x34\x38\x36\x22\x2c\x0a\x09\x09\x09\x20\x20\x22\x73\x68\x6f\x70\x49\x64\x22\x3a\x22\x31\x30\x30\x30\x30\x31\x34\x34\x38\x36\x22\x2c\x0a\x09\x09\x09\x20\x20\x22\x62\x69\x6e\x64\x42\x79\x56\x65\x72\x69\x66\x79\x43\x6f\x64\x65\x46\x6c\x61\x67\x22\x3a\x31\x2c\x0a\x09\x09\x09\x20\x20\x22\x72\x65\x67\x69\x73\x74\x65\x72\x45\x78\x74\x65\x6e\x64\x22\x3a\x7b\x7d\x2c\x0a\x09\x09\x09\x20\x20\x22\x77\x72\x69\x74\x65\x43\x68\x69\x6c\x64\x46\x6c\x61\x67\x22\x3a\x30\x2c\x0a\x09\x09\x09\x20\x20\x22\x63\x68\x61\x6e\x6e\x65\x6c\x22\x3a\x34\x30\x31\x0a\x09\x09\x09\x20\x20\x7d', '\x32\x30\x32\x32\x30\x34\x31\x32\x31\x36\x34\x36\x33\x34\x33\x30\x36\x25\x33\x42\x66\x35\x32\x39\x39\x33\x39\x32\x61\x32\x30\x30\x64\x36\x64\x39\x66\x66\x63\x65\x64\x39\x39\x37\x65\x35\x37\x39\x30\x64\x63\x63\x25\x33\x42\x31\x36\x39\x66\x31\x25\x33\x42\x74\x6b\x30\x32\x77\x63\x30\x66\x39\x31\x63\x38\x61\x31\x38\x6e\x76\x57\x56\x4d\x47\x72\x51\x4f\x31\x69\x46\x6c\x70\x51\x72\x65\x32\x53\x68\x32\x6d\x47\x74\x4e\x72\x6f\x31\x6c\x30\x55\x70\x5a\x71\x47\x4c\x52\x62\x48\x69\x79\x71\x66\x61\x55\x51\x61\x50\x79\x36\x34\x57\x54\x37\x75\x7a\x37\x45\x25\x32\x46\x67\x75\x6a\x47\x41\x42\x35\x30\x6b\x79\x4f\x37\x68\x77\x42\x79\x57\x4b\x25\x33\x42\x37\x37\x63\x38\x61\x30\x35\x65\x36\x61\x36\x36\x66\x61\x65\x65\x64\x30\x30\x65\x34\x65\x32\x38\x30\x61\x64\x38\x63\x34\x30\x66\x61\x62\x36\x30\x37\x32\x33\x62\x35\x62\x35\x36\x31\x32\x33\x30\x33\x38\x30\x65\x62\x34\x30\x37\x65\x31\x39\x33\x35\x34\x66\x37\x25\x33\x42\x33\x2e\x30\x25\x33\x42\x31\x36\x34\x39\x37\x35\x33\x31\x39\x34\x33\x30\x36', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x63\x6c\x69\x65\x6e\x74\x2e\x61\x63\x74\x69\x6f\x6e\x3f\x61\x70\x70\x69\x64\x3d\x6a\x64\x5f\x73\x68\x6f\x70\x5f\x6d\x65\x6d\x62\x65\x72\x26\x66\x75\x6e\x63\x74\x69\x6f\x6e\x49\x64\x3d\x62\x69\x6e\x64\x57\x69\x74\x68\x56\x65\x6e\x64\x65\x72\x26\x62\x6f\x64\x79\x3d', '\x26\x63\x6c\x69\x65\x6e\x74\x56\x65\x72\x73\x69\x6f\x6e\x3d\x39\x2e\x32\x2e\x30\x26\x63\x6c\x69\x65\x6e\x74\x3d\x48\x35\x26\x75\x75\x69\x64\x3d\x38\x38\x38\x38\x38\x26\x68\x35\x73\x74\x3d', '\x74\x65\x78\x74\x2f\x70\x6c\x61\x69\x6e\x3b\x20\x43\x68\x61\x72\x73\x65\x74\x3d\x55\x54\x46\x2d\x38', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d', '\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d', '\x2a\x2f\x2a', '\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x78\x2d\x77\x77\x77\x2d\x66\x6f\x72\x6d\x2d\x75\x72\x6c\x65\x6e\x63\x6f\x64\x65\x64', '\x67\x65\x74', '\x74\x6f\x4f\x62\x6a', '\x6f\x62\x6a\x65\x63\x74', '\x73\x75\x63\x63\x65\x73\x73', '\x6d\x65\x73\x73\x61\x67\x65', '\x67\x69\x66\x74\x49\x6e\x66\x6f', '\x67\x69\x66\x74\x4c\x69\x73\x74', '\u5165\u4f1a\u83b7\u5f97\x3a', '\x64\x69\x73\x63\x6f\x75\x6e\x74\x53\x74\x72\x69\x6e\x67', '\x70\x72\x69\x7a\x65\x4e\x61\x6d\x65', '\x73\x65\x63\x6f\x6e\x64\x4c\x69\x6e\x65\x44\x65\x73\x63', '\x6c\x6f\x67\x45\x72\x72', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x63\x6c\x69\x65\x6e\x74\x2e\x61\x63\x74\x69\x6f\x6e\x3f\x61\x70\x70\x69\x64\x3d\x6a\x64\x5f\x73\x68\x6f\x70\x5f\x6d\x65\x6d\x62\x65\x72\x26\x66\x75\x6e\x63\x74\x69\x6f\x6e\x49\x64\x3d\x67\x65\x74\x53\x68\x6f\x70\x4f\x70\x65\x6e\x43\x61\x72\x64\x49\x6e\x66\x6f\x26\x62\x6f\x64\x79\x3d\x25\x37\x42\x25\x32\x32\x76\x65\x6e\x64\x65\x72\x49\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32', '\x25\x32\x32\x25\x32\x43\x25\x32\x32\x63\x68\x61\x6e\x6e\x65\x6c\x25\x32\x32\x25\x33\x41\x34\x30\x31\x25\x37\x44\x26\x63\x6c\x69\x65\x6e\x74\x3d\x48\x35\x26\x63\x6c\x69\x65\x6e\x74\x56\x65\x72\x73\x69\x6f\x6e\x3d\x39\x2e\x32\x2e\x30\x26\x75\x75\x69\x64\x3d\x38\x38\x38\x38\x38', '\u5165\u4f1a\u5e97\u94fa\u540d\x3a', '\x73\x68\x6f\x70\x4d\x65\x6d\x62\x65\x72\x43\x61\x72\x64\x49\x6e\x66\x6f', '\x76\x65\x6e\x64\x65\x72\x43\x61\x72\x64\x4e\x61\x6d\x65', '\x69\x6e\x74\x65\x72\x65\x73\x74\x73\x52\x75\x6c\x65\x4c\x69\x73\x74', '\x69\x6e\x74\x65\x72\x65\x73\x74\x73\x49\x6e\x66\x6f', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6c\x7a\x6b\x6a\x64\x7a\x2d\x69\x73\x76\x2e\x69\x73\x76\x6a\x63\x6c\x6f\x75\x64\x2e\x63\x6f\x6d\x2f', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6c\x7a\x6b\x6a\x64\x7a\x2d\x69\x73\x76\x2e\x69\x73\x76\x6a\x63\x6c\x6f\x75\x64\x2e\x63\x6f\x6d\x2f\x70\x6f\x6f\x6c\x2f', '\x6c\x7a\x6b\x6a\x64\x7a\x2d\x69\x73\x76\x2e\x69\x73\x76\x6a\x63\x6c\x6f\x75\x64\x2e\x63\x6f\x6d', '\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x6a\x73\x6f\x6e', '\x58\x4d\x4c\x48\x74\x74\x70\x52\x65\x71\x75\x65\x73\x74', '\x7a\x68\x2d\x63\x6e', '\x67\x7a\x69\x70\x2c\x20\x64\x65\x66\x6c\x61\x74\x65\x2c\x20\x62\x72', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6c\x7a\x6b\x6a\x64\x7a\x2d\x69\x73\x76\x2e\x69\x73\x76\x6a\x63\x6c\x6f\x75\x64\x2e\x63\x6f\x6d\x6d', '\x6a\x64\x61\x70\x70\x3b\x69\x50\x68\x6f\x6e\x65\x3b\x39\x2e\x35\x2e\x34\x3b\x31\x33\x2e\x36\x3b', '\x3b\x6e\x65\x74\x77\x6f\x72\x6b\x2f\x77\x69\x66\x69\x3b\x41\x44\x49\x44\x2f', '\x3b\x6d\x6f\x64\x65\x6c\x2f\x69\x50\x68\x6f\x6e\x65\x31\x30\x2c\x33\x3b\x61\x64\x64\x72\x65\x73\x73\x69\x64\x2f\x30\x3b\x61\x70\x70\x42\x75\x69\x6c\x64\x2f\x31\x36\x37\x36\x36\x38\x3b\x6a\x64\x53\x75\x70\x70\x6f\x72\x74\x44\x61\x72\x6b\x4d\x6f\x64\x65\x2f\x30\x3b\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x69\x50\x68\x6f\x6e\x65\x3b\x20\x43\x50\x55\x20\x69\x50\x68\x6f\x6e\x65\x20\x4f\x53\x20\x31\x33\x5f\x36\x20\x6c\x69\x6b\x65\x20\x4d\x61\x63\x20\x4f\x53\x20\x58\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x36\x30\x35\x2e\x31\x2e\x31\x35\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x4d\x6f\x62\x69\x6c\x65\x2f\x31\x35\x45\x31\x34\x38\x3b\x73\x75\x70\x70\x6f\x72\x74\x4a\x44\x53\x48\x57\x4b\x2f\x31', '\x6b\x65\x65\x70\x2d\x61\x6c\x69\x76\x65', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6c\x7a\x6b\x6a\x64\x7a\x2d\x69\x73\x76\x2e\x69\x73\x76\x6a\x63\x6c\x6f\x75\x64\x2e\x63\x6f\x6d\x2f\x63\x75\x73\x74\x6f\x6d\x65\x72\x2f\x67\x65\x74\x4d\x79\x50\x69\x6e\x67', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6c\x7a\x6b\x6a\x64\x7a\x2d\x69\x73\x76\x2e\x69\x73\x76\x6a\x63\x6c\x6f\x75\x64\x2e\x63\x6f\x6d', '\x75\x73\x65\x72\x49\x64\x3d', '\x26\x74\x6f\x6b\x65\x6e\x3d', '\x26\x66\x72\x6f\x6d\x54\x79\x70\x65\x3d\x41\x50\x50\x26\x72\x69\x73\x6b\x54\x79\x70\x65\x3d\x31', '\x53\x65\x74\x2d\x43\x6f\x6f\x6b\x69\x65', '\u7528\u6237\u540d\uff1a', '\x70\x69\x6e', '\x3b\x41\x55\x54\x48\x5f\x43\x5f\x55\x53\x45\x52\x3d', '\x65\x72\x72\x6f\x72\x4d\x65\x73\x73\x61\x67\x65', '\u4eac\u4e1c\u8fd4\u56de\u4e86\u7a7a\u6570\u636e', '\x4a\x44\x5f\x55\x53\x45\x52\x5f\x41\x47\x45\x4e\x54', '\x2e\x2f\x55\x53\x45\x52\x5f\x41\x47\x45\x4e\x54\x53', '\x55\x53\x45\x52\x5f\x41\x47\x45\x4e\x54', '\x4a\x44\x55\x41', '\x6a\x64\x61\x70\x70\x3b\x69\x50\x68\x6f\x6e\x65\x3b\x39\x2e\x34\x2e\x34\x3b\x31\x34\x2e\x33\x3b\x6e\x65\x74\x77\x6f\x72\x6b\x2f\x34\x67\x3b\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x69\x50\x68\x6f\x6e\x65\x3b\x20\x43\x50\x55\x20\x69\x50\x68\x6f\x6e\x65\x20\x4f\x53\x20\x31\x34\x5f\x33\x20\x6c\x69\x6b\x65\x20\x4d\x61\x63\x20\x4f\x53\x20\x58\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x36\x30\x35\x2e\x31\x2e\x31\x35\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x4d\x6f\x62\x69\x6c\x65\x2f\x31\x35\x45\x31\x34\x38\x3b\x73\x75\x70\x70\x6f\x72\x74\x4a\x44\x53\x48\x57\x4b\x2f\x31', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x63\x6c\x69\x65\x6e\x74\x2e\x61\x63\x74\x69\x6f\x6e\x3f\x66\x75\x6e\x63\x74\x69\x6f\x6e\x49\x64\x3d\x69\x73\x76\x4f\x62\x66\x75\x73\x63\x61\x74\x6f\x72', '\x4a\x44\x34\x69\x50\x68\x6f\x6e\x65\x2f\x31\x36\x37\x36\x35\x30\x20\x28\x69\x50\x68\x6f\x6e\x65\x3b\x20\x69\x4f\x53\x20\x31\x33\x2e\x37\x3b\x20\x53\x63\x61\x6c\x65\x2f\x33\x2e\x30\x30\x29', '\x7a\x68\x2d\x48\x61\x6e\x73\x2d\x43\x4e\x3b\x71\x3d\x31', '\x62\x6f\x64\x79\x3d\x25\x37\x42\x25\x32\x32\x75\x72\x6c\x25\x32\x32\x25\x33\x41\x25\x32\x30\x25\x32\x32\x68\x74\x74\x70\x73\x25\x33\x41\x2f\x2f\x6c\x7a\x64\x7a\x31\x2d\x69\x73\x76\x2e\x69\x73\x76\x6a\x63\x6c\x6f\x75\x64\x2e\x63\x6f\x6d\x25\x32\x32\x25\x32\x43\x25\x32\x30\x25\x32\x32\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x30\x25\x32\x32\x25\x32\x32\x25\x37\x44\x26\x75\x75\x69\x64\x3d\x37\x32\x31\x32\x34\x32\x36\x35\x32\x31\x37\x64\x34\x38\x62\x37\x39\x35\x35\x37\x38\x31\x30\x32\x34\x64\x36\x35\x62\x62\x63\x34\x26\x63\x6c\x69\x65\x6e\x74\x3d\x61\x70\x70\x6c\x65\x26\x63\x6c\x69\x65\x6e\x74\x56\x65\x72\x73\x69\x6f\x6e\x3d\x39\x2e\x34\x2e\x30\x26\x73\x74\x3d\x31\x36\x32\x31\x37\x39\x36\x37\x30\x32\x30\x30\x30\x26\x73\x76\x3d\x31\x32\x30\x26\x73\x69\x67\x6e\x3d\x31\x34\x66\x37\x66\x61\x61\x33\x31\x33\x35\x36\x63\x37\x34\x65\x39\x66\x34\x32\x38\x39\x39\x37\x32\x64\x62\x34\x62\x39\x38\x38', '\x63\x6f\x64\x65', '\x66\x6c\x6f\x6f\x72', '\x72\x61\x6e\x64\x6f\x6d', '\x72\x65\x70\x6c\x61\x63\x65', '\x74\x6f\x53\x74\x72\x69\x6e\x67', '\x74\x6f\x55\x70\x70\x65\x72\x43\x61\x73\x65', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x6d\x65\x2d\x61\x70\x69\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x75\x73\x65\x72\x5f\x6e\x65\x77\x2f\x69\x6e\x66\x6f\x2f\x47\x65\x74\x4a\x44\x55\x73\x65\x72\x49\x6e\x66\x6f\x55\x6e\x69\x6f\x6e', '\x6d\x65\x2d\x61\x70\x69\x2e\x6a\x64\x2e\x63\x6f\x6d', '\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x69\x50\x68\x6f\x6e\x65\x3b\x20\x43\x50\x55\x20\x69\x50\x68\x6f\x6e\x65\x20\x4f\x53\x20\x31\x34\x5f\x33\x20\x6c\x69\x6b\x65\x20\x4d\x61\x63\x20\x4f\x53\x20\x58\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x36\x30\x35\x2e\x31\x2e\x31\x35\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x31\x34\x2e\x30\x2e\x32\x20\x4d\x6f\x62\x69\x6c\x65\x2f\x31\x35\x45\x31\x34\x38\x20\x53\x61\x66\x61\x72\x69\x2f\x36\x30\x34\x2e\x31', '\x68\x74\x74\x70\x73\x3a\x2f\x2f\x68\x6f\x6d\x65\x2e\x6d\x2e\x6a\x64\x2e\x63\x6f\x6d\x2f\x6d\x79\x4a\x64\x2f\x6e\x65\x77\x68\x6f\x6d\x65\x2e\x61\x63\x74\x69\x6f\x6e\x3f\x73\x63\x65\x6e\x65\x76\x61\x6c\x3d\x32\x26\x75\x66\x63\x3d\x26', '\x72\x65\x74\x63\x6f\x64\x65', '\x31\x30\x30\x31', '\x68\x61\x73\x4f\x77\x6e\x50\x72\x6f\x70\x65\x72\x74\x79', '\x75\x73\x65\x72\x49\x6e\x66\x6f', '\x62\x61\x73\x65\x49\x6e\x66\x6f', '\x6a\x64\x61\x70\x70\x3b\x69\x50\x68\x6f\x6e\x65\x3b\x31\x30\x2e\x31\x2e\x34\x3b\x31\x33\x2e\x31\x2e\x32\x3b', '\x3b\x6e\x65\x74\x77\x6f\x72\x6b\x2f\x77\x69\x66\x69\x3b\x6d\x6f\x64\x65\x6c\x2f\x69\x50\x68\x6f\x6e\x65\x38\x2c\x31\x3b\x61\x64\x64\x72\x65\x73\x73\x69\x64\x2f\x32\x33\x30\x38\x34\x36\x30\x36\x31\x31\x3b\x61\x70\x70\x42\x75\x69\x6c\x64\x2f\x31\x36\x37\x38\x31\x34\x3b\x6a\x64\x53\x75\x70\x70\x6f\x72\x74\x44\x61\x72\x6b\x4d\x6f\x64\x65\x2f\x30\x3b\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x69\x50\x68\x6f\x6e\x65\x3b\x20\x43\x50\x55\x20\x69\x50\x68\x6f\x6e\x65\x20\x4f\x53\x20\x31\x33\x5f\x31\x5f\x32\x20\x6c\x69\x6b\x65\x20\x4d\x61\x63\x20\x4f\x53\x20\x58\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x36\x30\x35\x2e\x31\x2e\x31\x35\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x4d\x6f\x62\x69\x6c\x65\x2f\x31\x35\x45\x31\x34\x38\x3b\x73\x75\x70\x70\x6f\x72\x74\x4a\x44\x53\x48\x57\x4b\x2f\x31', '\x61\x62\x63\x64\x65\x66\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39', '\x63\x68\x61\x72\x41\x74', '\x58\x6a\x73\x79\x64\x6a\x69\x61\x74\x6e\x6d\x5a\x69\x46\x45\x48\x2e\x78\x62\x6b\x63\x6f\x6d\x64\x2e\x76\x6e\x75\x36\x3d\x3d'];

function _0x2d95(_0x13a79b, _0x556561) {
    _0x13a79b = ~~'0x'['concat'](_0x13a79b['slice'](0x0));
    var _0xd470f3 = _0x2553[_0x13a79b];
    return _0xd470f3;
};(function (_0x514b24, _0x4f40e7) {
    var _0x56a88c = 0x0;
    for (_0x4f40e7 = _0x514b24['shift'](_0x56a88c >> 0x2); _0x4f40e7 && _0x4f40e7 !== (_0x514b24['pop'](_0x56a88c >> 0x3) + '')['replace'](/[XydtnZFEHxbkdnu=]/g, ''); _0x56a88c++) {
        _0x56a88c = _0x56a88c ^ 0xe3375;
    }
}(_0x2553, _0x2d95));
const jdCookieNode = $[_0x2d95('0')]() ? require(_0x2d95('1')) : '';
const notify = $[_0x2d95('0')]() ? require(_0x2d95('2')) : '';
let cookiesArr = [], cookie = '', message = '';
let ownCode = null;
if ($[_0x2d95('0')]()) {
    Object[_0x2d95('3')](jdCookieNode)[_0x2d95('4')](_0x4b085c => {
        cookiesArr[_0x2d95('5')](jdCookieNode[_0x4b085c]);
    });
    if (process[_0x2d95('6')][_0x2d95('7')] && process[_0x2d95('6')][_0x2d95('7')] === _0x2d95('8')) console[_0x2d95('9')] = () => {
    };
} else {
    let cookiesData = $[_0x2d95('a')](_0x2d95('b')) || '\x5b\x5d';
    cookiesData = JSON[_0x2d95('c')](cookiesData);
    cookiesArr = cookiesData[_0x2d95('d')](_0x2d5628 => _0x2d5628[_0x2d95('e')]);
    cookiesArr[_0x2d95('f')]();
    cookiesArr[_0x2d95('5')](...[$[_0x2d95('a')](_0x2d95('10')), $[_0x2d95('a')](_0x2d95('11'))]);
    cookiesArr[_0x2d95('f')]();
    cookiesArr = cookiesArr[_0x2d95('12')](_0x3e240d => !!_0x3e240d);
}
!(async () => {
    if (!cookiesArr[0x0]) {
        $[_0x2d95('13')]($[_0x2d95('14')], _0x2d95('15'), _0x2d95('16'), {'open-url': _0x2d95('16')});
        return;
    }
    console[_0x2d95('9')](_0x2d95('17'));
    for (let _0x4f16d1 = 0x0; _0x4f16d1 < cookiesArr[_0x2d95('18')]; _0x4f16d1++) {
        if (cookiesArr[_0x4f16d1]) {
            cookie = cookiesArr[_0x4f16d1];
            originCookie = cookiesArr[_0x4f16d1];
            newCookie = '';
            $[_0x2d95('19')] = decodeURIComponent(cookie[_0x2d95('1a')](/pt_pin=(.+?);/) && cookie[_0x2d95('1a')](/pt_pin=(.+?);/)[0x1]);
            $[_0x2d95('1b')] = _0x4f16d1 + 0x1;
            $[_0x2d95('1c')] = !![];
            $[_0x2d95('1d')] = '';
            await checkCookie();
            console[_0x2d95('9')](_0x2d95('1e') + $[_0x2d95('1b')] + '\u3011' + ($[_0x2d95('1d')] || $[_0x2d95('19')]) + _0x2d95('1f'));
            if (!$[_0x2d95('1c')]) {
                $[_0x2d95('13')]($[_0x2d95('14')], _0x2d95('20'), _0x2d95('21') + $[_0x2d95('1b')] + '\x20' + ($[_0x2d95('1d')] || $[_0x2d95('19')]) + _0x2d95('22'), {'open-url': _0x2d95('16')});
                if ($[_0x2d95('0')]()) {
                    await notify[_0x2d95('23')]($[_0x2d95('14')] + _0x2d95('24') + $[_0x2d95('19')], _0x2d95('21') + $[_0x2d95('1b')] + '\x20' + $[_0x2d95('19')] + _0x2d95('25'));
                }
                continue;
            }
            authorCodeList = [_0x2d95('26'), _0x2d95('27')];
            $[_0x2d95('28')] = getUUID(_0x2d95('29'), 0x1);
            $[_0x2d95('2a')] = getUUID(_0x2d95('2b'));
            $[_0x2d95('2c')] = 'a21c6f20ea144310ab7a55ddfb178363';
            $[_0x2d95('2d')] = '' + random(0xf4240, 0x98967f);
            $[_0x2d95('2e')] = _0x2d95('2f');
            $[_0x2d95('30')] = _0x2d95('31');
            $[_0x2d95('32')] = _0x2d95('33') + $[_0x2d95('2d')] + _0x2d95('34') + $[_0x2d95('2e')] + _0x2d95('35') + encodeURIComponent($[_0x2d95('2c')]) + _0x2d95('36') + $[_0x2d95('30')] + _0x2d95('37');
            await getUA();
            await aj();
            await $[_0x2d95('38')](0xbb8);
        }
    }
    if (message !== '') {
        if ($[_0x2d95('0')]()) {
            await notify[_0x2d95('23')]($[_0x2d95('14')], message, '', '\x0a');
        } else {
            $[_0x2d95('13')]($[_0x2d95('14')], _0x2d95('39'), message);
        }
    }
})()[_0x2d95('3a')](_0x182d3e => {
    $[_0x2d95('9')]('', '\u274c\x20' + $[_0x2d95('14')] + _0x2d95('3b') + _0x182d3e + '\x21', '');
})[_0x2d95('3c')](() => {
    $[_0x2d95('3d')]();
});

async function aj() {
    $[_0x2d95('3e')] = null;
    $[_0x2d95('3f')] = null;
    $[_0x2d95('40')] = null;
    lz_cookie = {};
    await getFirstLZCK();
    await getToken();
    await task(_0x2d95('41'), _0x2d95('42') + $[_0x2d95('2e')], 0x1);
    await $[_0x2d95('38')](0x7d0);
    if ($[_0x2d95('3e')]) {
        await getMyPing();
        if ($[_0x2d95('3f')]) {
            console[_0x2d95('9')](_0x2d95('43') + $[_0x2d95('2c')]);
            await taskaccessLog(_0x2d95('44'), _0x2d95('45') + $[_0x2d95('30')] + _0x2d95('46') + encodeURIComponent($[_0x2d95('3f')]) + _0x2d95('47') + $[_0x2d95('2e')] + _0x2d95('48') + $[_0x2d95('32')] + _0x2d95('49'), 0x1);
            await $[_0x2d95('38')](0x7d0);
            await task(_0x2d95('4a'), _0x2d95('42') + $[_0x2d95('2e')] + _0x2d95('4b') + encodeURIComponent($[_0x2d95('3f')]) + _0x2d95('35') + encodeURIComponent($[_0x2d95('2c')]));
            if ($[_0x2d95('4a')]) {
                if ($[_0x2d95('4a')][_0x2d95('4c')]) {
                    $[_0x2d95('9')](_0x2d95('4d'));
                    await $[_0x2d95('38')](0x7d0);
                    await task(_0x2d95('4e'), _0x2d95('42') + $[_0x2d95('2e')] + _0x2d95('4b') + encodeURIComponent($[_0x2d95('3f')]) + _0x2d95('35') + encodeURIComponent($[_0x2d95('2c')]) + _0x2d95('4f') + encodeURIComponent(_0x2d95('50')));
                    $[_0x2d95('9')](_0x2d95('51'));
                    $[_0x2d95('52')] = '';
                    await joinShop();
                    if ($[_0x2d95('52')][_0x2d95('53')](_0x2d95('54')) > -0x1) {
                        console[_0x2d95('9')](_0x2d95('55'));
                        await $[_0x2d95('38')](0x1f4);
                        await joinShop();
                    }
                    if ($[_0x2d95('52')][_0x2d95('53')](_0x2d95('54')) > -0x1) {
                        console[_0x2d95('9')](_0x2d95('56'));
                        await $[_0x2d95('38')](0x1f4);
                        await joinShop();
                    }
                    if ($[_0x2d95('52')][_0x2d95('53')](_0x2d95('54')) > -0x1) {
                        console[_0x2d95('9')](_0x2d95('57'));
                        await $[_0x2d95('38')](0x1f4);
                        await joinShop();
                    }
                    if ($[_0x2d95('52')][_0x2d95('53')](_0x2d95('54')) > -0x1) {
                        console[_0x2d95('9')](_0x2d95('58'));
                        allMessage += _0x2d95('59') + $[_0x2d95('1b')] + '\u3011' + $[_0x2d95('19')] + _0x2d95('5a');
                    }
                    await $[_0x2d95('38')](0x7d0);
                    await task(_0x2d95('4a'), _0x2d95('42') + $[_0x2d95('2e')] + _0x2d95('4b') + encodeURIComponent($[_0x2d95('3f')]) + _0x2d95('35') + encodeURIComponent($[_0x2d95('2c')]), 0x0, 0x1);
                    await $[_0x2d95('38')](0x7d0);
                    if ($[_0x2d95('1b')] === 0x1) {
                        if ($[_0x2d95('4a')][_0x2d95('5b')]) {
                            $[_0x2d95('9')](_0x2d95('5c'));
                            await $[_0x2d95('38')](0x7d0);
                            await task(_0x2d95('5d'), _0x2d95('42') + $[_0x2d95('2e')] + _0x2d95('4b') + encodeURIComponent($[_0x2d95('3f')]) + _0x2d95('4f') + encodeURIComponent(_0x2d95('50')));
                        }
                    }
                } else {
                    if ($[_0x2d95('1b')] === 0x1) {
                        $[_0x2d95('9')](_0x2d95('5c'));
                        if ($[_0x2d95('4a')][_0x2d95('5b')]) {
                            await $[_0x2d95('38')](0x7d0);
                            await task(_0x2d95('5d'), _0x2d95('42') + $[_0x2d95('2e')] + _0x2d95('4b') + encodeURIComponent($[_0x2d95('3f')]) + _0x2d95('4f') + encodeURIComponent(_0x2d95('50')));
                        } else {
                            ownCode = $[_0x2d95('4a')][_0x2d95('5e')];
                            console[_0x2d95('9')](_0x2d95('5f') + ownCode);
                        }
                    } else {
                        $[_0x2d95('9')](_0x2d95('60'));
                    }
                }
            }
        } else {
            $[_0x2d95('9')](_0x2d95('61'));
        }
    } else {
        $[_0x2d95('9')](_0x2d95('62'));
    }
}

function task(_0x192d1f, _0x4e239a, _0x5d5fba = 0x0) {
    return new Promise(_0x5bec38 => {
        $[_0x2d95('63')](taskUrl(_0x192d1f, _0x4e239a, _0x5d5fba), async (_0xeabca4, _0x439e79, _0x32ac64) => {
            try {
                if (_0xeabca4) {
                    $[_0x2d95('9')](_0xeabca4);
                } else {
                    if (_0x32ac64) {
                        _0x32ac64 = JSON[_0x2d95('c')](_0x32ac64);
                        if (_0x32ac64[_0x2d95('64')]) {
                            switch (_0x192d1f) {
                                case _0x2d95('5d'):
                                    if (_0x32ac64[_0x2d95('65')][_0x2d95('5e')]) {
                                        $[_0x2d95('9')](_0x2d95('66'));
                                        if ($[_0x2d95('1b')] === 0x1) {
                                            ownCode = _0x32ac64[_0x2d95('65')][_0x2d95('5e')];
                                        }
                                    }
                                    break;
                                case _0x2d95('67'):
                                    $[_0x2d95('68')] = _0x32ac64[_0x2d95('65')][_0x2d95('68')];
                                    $[_0x2d95('69')] = _0x32ac64[_0x2d95('65')][_0x2d95('69')];
                                    break;
                                case _0x2d95('6a'):
                                    $[_0x2d95('6b')] = _0x32ac64[_0x2d95('65')][_0x2d95('6b')];
                                    $[_0x2d95('6c')] = _0x2d95('6d');
                                    break;
                                case _0x2d95('4a'):
                                    $[_0x2d95('4a')] = _0x32ac64[_0x2d95('65')];
                                    $[_0x2d95('6e')] = _0x32ac64[_0x2d95('65')][_0x2d95('6e')];
                                    if ($[_0x2d95('1b')] === 0x1) {
                                        ownCode = _0x32ac64[_0x2d95('65')][_0x2d95('5e')];
                                    }
                                    break;
                                case _0x2d95('6f'):
                                    console[_0x2d95('9')](_0x32ac64[_0x2d95('65')]);
                                    break;
                                default:
                                    break;
                            }
                        } else {
                            $[_0x2d95('9')](JSON[_0x2d95('70')](_0x32ac64));
                        }
                    } else {
                    }
                }
            } catch (_0x9ae05) {
                $[_0x2d95('9')](_0x9ae05);
            } finally {
                _0x5bec38();
            }
        });
    });
}

function taskaccessLog(_0x1fe576, _0x2ec22f, _0x1af9e6 = 0x0) {
    return new Promise(_0x2149e9 => {
        $[_0x2d95('63')](taskUrl(_0x1fe576, _0x2ec22f, _0x1af9e6), async (_0x1937d2, _0x5f0665, _0x25479f) => {
            try {
                if (_0x1937d2) {
                    $[_0x2d95('9')](_0x1937d2);
                } else {
                    if (_0x5f0665[_0x2d95('71')][_0x2d95('72')]) {
                        cookie = originCookie + '\x3b';
                        for (let _0x25bc6f of _0x5f0665[_0x2d95('71')][_0x2d95('72')]) {
                            lz_cookie[_0x25bc6f[_0x2d95('73')]('\x3b')[0x0][_0x2d95('74')](0x0, _0x25bc6f[_0x2d95('73')]('\x3b')[0x0][_0x2d95('53')]('\x3d'))] = _0x25bc6f[_0x2d95('73')]('\x3b')[0x0][_0x2d95('74')](_0x25bc6f[_0x2d95('73')]('\x3b')[0x0][_0x2d95('53')]('\x3d') + 0x1);
                        }
                        for (const _0x24c799 of Object[_0x2d95('3')](lz_cookie)) {
                            cookie += _0x24c799 + '\x3d' + lz_cookie[_0x24c799] + '\x3b';
                        }
                    }
                }
            } catch (_0x4ca086) {
                console[_0x2d95('9')](_0x4ca086);
            } finally {
                _0x2149e9();
            }
        });
    });
}

function joinShop() {
    return new Promise(async _0x4f4e00 => {
        let _0x5ca8cf = _0x2d95('75');
        $[_0x2d95('52')] = '';
        await getshopactivityId();
        let _0x55ba0f = '';
        let _0x2084cf = _0x2d95('76');
        const _0x3f2d1e = {
            '\x75\x72\x6c': _0x2d95('77') + _0x5ca8cf + _0x2d95('78') + _0x2084cf,
            '\x68\x65\x61\x64\x65\x72\x73': {
                'Content-Type': _0x2d95('79'),
                'Origin': _0x2d95('7a'),
                'Host': _0x2d95('7b'),
                'accept': _0x2d95('7c'),
                'User-Agent': $['\x55\x41'],
                'content-type': _0x2d95('7d'),
                'Cookie': cookie
            }
        };
        $[_0x2d95('7e')](_0x3f2d1e, async (_0x4c4a2c, _0x485c4d, _0x4022f4) => {
            try {
                let _0x44252d = $[_0x2d95('7f')](_0x4022f4, _0x4022f4);
                if (typeof _0x44252d == _0x2d95('80')) {
                    if (_0x44252d[_0x2d95('81')] === !![]) {
                        console[_0x2d95('9')](_0x44252d[_0x2d95('82')]);
                        $[_0x2d95('52')] = _0x44252d[_0x2d95('82')];
                        if (_0x44252d[_0x2d95('64')] && _0x44252d[_0x2d95('64')][_0x2d95('83')]) {
                            for (let _0x1f2bf7 of _0x44252d[_0x2d95('64')][_0x2d95('83')][_0x2d95('84')]) {
                                console[_0x2d95('9')](_0x2d95('85') + _0x1f2bf7[_0x2d95('86')] + _0x1f2bf7[_0x2d95('87')] + _0x1f2bf7[_0x2d95('88')]);
                            }
                        }
                    } else if (typeof _0x44252d == _0x2d95('80') && _0x44252d[_0x2d95('82')]) {
                        $[_0x2d95('52')] = _0x44252d[_0x2d95('82')];
                        console[_0x2d95('9')]('' + (_0x44252d[_0x2d95('82')] || ''));
                    } else {
                        console[_0x2d95('9')](_0x4022f4);
                    }
                } else {
                    console[_0x2d95('9')](_0x4022f4);
                }
            } catch (_0x332df2) {
                $[_0x2d95('89')](_0x332df2, _0x485c4d);
            } finally {
                _0x4f4e00();
            }
        });
    });
}

function getshopactivityId() {
    return new Promise(_0x2e03d3 => {
        const _0xf97693 = {
            '\x75\x72\x6c': _0x2d95('8a') + $[_0x2d95('30')] + _0x2d95('8b'),
            '\x68\x65\x61\x64\x65\x72\x73': {
                'Content-Type': _0x2d95('79'),
                'Origin': _0x2d95('7a'),
                'Host': _0x2d95('7b'),
                'accept': _0x2d95('7c'),
                'User-Agent': $['\x55\x41'],
                'content-type': _0x2d95('7d'),
                'Cookie': cookie
            }
        };
        $[_0x2d95('7e')](_0xf97693, async (_0x24a42d, _0x213705, _0x3b5773) => {
            try {
                let _0x493665 = $[_0x2d95('7f')](_0x3b5773, _0x3b5773);
                if (typeof _0x493665 == _0x2d95('80')) {
                    if (_0x493665[_0x2d95('81')] == !![]) {
                        console[_0x2d95('9')](_0x2d95('8c') + (_0x493665[_0x2d95('64')][_0x2d95('8d')][_0x2d95('8e')] || ''));
                        if (_0x493665[_0x2d95('64')][_0x2d95('8f')]) {
                            $[_0x2d95('40')] = _0x493665[_0x2d95('64')][_0x2d95('8f')][0x0][_0x2d95('90')][_0x2d95('2e')];
                        }
                    }
                } else {
                    console[_0x2d95('9')](_0x3b5773);
                }
            } catch (_0x2faafc) {
                $[_0x2d95('89')](_0x2faafc, _0x213705);
            } finally {
                _0x2e03d3();
            }
        });
    });
}

function taskUrl(_0x1749a5, _0x28d23f, _0xd75220) {
    return {
        '\x75\x72\x6c': _0xd75220 ? _0x2d95('91') + _0x1749a5 : _0x2d95('92') + _0x1749a5,
        '\x68\x65\x61\x64\x65\x72\x73': {
            '\x48\x6f\x73\x74': _0x2d95('93'),
            '\x41\x63\x63\x65\x70\x74': _0x2d95('94'),
            'X-Requested-With': _0x2d95('95'),
            'Accept-Language': _0x2d95('96'),
            'Accept-Encoding': _0x2d95('97'),
            'Content-Type': _0x2d95('7d'),
            '\x4f\x72\x69\x67\x69\x6e': _0x2d95('98'),
            'User-Agent': _0x2d95('99') + $[_0x2d95('2a')] + _0x2d95('9a') + $[_0x2d95('28')] + _0x2d95('9b'),
            '\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e': _0x2d95('9c'),
            '\x52\x65\x66\x65\x72\x65\x72': $[_0x2d95('32')],
            '\x43\x6f\x6f\x6b\x69\x65': cookie
        },
        '\x62\x6f\x64\x79': _0x28d23f
    };
}

function getMyPing() {
    let _0x5836dd = {
        '\x75\x72\x6c': _0x2d95('9d'),
        '\x68\x65\x61\x64\x65\x72\x73': {
            '\x48\x6f\x73\x74': _0x2d95('93'),
            '\x41\x63\x63\x65\x70\x74': _0x2d95('94'),
            'X-Requested-With': _0x2d95('95'),
            'Accept-Language': _0x2d95('96'),
            'Accept-Encoding': _0x2d95('97'),
            'Content-Type': _0x2d95('7d'),
            '\x4f\x72\x69\x67\x69\x6e': _0x2d95('9e'),
            'User-Agent': _0x2d95('99') + $[_0x2d95('2a')] + _0x2d95('9a') + $[_0x2d95('28')] + _0x2d95('9b'),
            '\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e': _0x2d95('9c'),
            '\x52\x65\x66\x65\x72\x65\x72': $[_0x2d95('32')],
            '\x43\x6f\x6f\x6b\x69\x65': cookie
        },
        '\x62\x6f\x64\x79': _0x2d95('9f') + $[_0x2d95('30')] + _0x2d95('a0') + $[_0x2d95('3e')] + _0x2d95('a1')
    };
    return new Promise(_0x4feab1 => {
        $[_0x2d95('63')](_0x5836dd, (_0x2aa1ef, _0x4e34e2, _0x403d7a) => {
            try {
                if (_0x2aa1ef) {
                    $[_0x2d95('9')](_0x2aa1ef);
                } else {
                    if (_0x4e34e2[_0x2d95('71')][_0x2d95('72')]) {
                        cookie = '' + originCookie;
                        if ($[_0x2d95('0')]()) {
                            for (let _0x4b846a of _0x4e34e2[_0x2d95('71')][_0x2d95('72')]) {
                                cookie = '' + cookie + _0x4b846a[_0x2d95('73')]('\x3b')[0x0] + '\x3b';
                            }
                        } else {
                            for (let _0x45876e of _0x4e34e2[_0x2d95('71')][_0x2d95('a2')][_0x2d95('73')]('\x2c')) {
                                cookie = '' + cookie + _0x45876e[_0x2d95('73')]('\x3b')[0x0] + '\x3b';
                            }
                        }
                    }
                    if (_0x4e34e2[_0x2d95('71')][_0x2d95('a2')]) {
                        cookie = '' + originCookie;
                        if ($[_0x2d95('0')]()) {
                            for (let _0x1bfbfd of _0x4e34e2[_0x2d95('71')][_0x2d95('72')]) {
                                cookie = '' + cookie + _0x1bfbfd[_0x2d95('73')]('\x3b')[0x0] + '\x3b';
                            }
                        } else {
                            for (let _0x2e34ba of _0x4e34e2[_0x2d95('71')][_0x2d95('a2')][_0x2d95('73')]('\x2c')) {
                                cookie = '' + cookie + _0x2e34ba[_0x2d95('73')]('\x3b')[0x0] + '\x3b';
                            }
                        }
                    }
                    if (_0x403d7a) {
                        _0x403d7a = JSON[_0x2d95('c')](_0x403d7a);
                        if (_0x403d7a[_0x2d95('64')]) {
                            $[_0x2d95('9')](_0x2d95('a3') + _0x403d7a[_0x2d95('65')][_0x2d95('6b')]);
                            $[_0x2d95('a4')] = _0x403d7a[_0x2d95('65')][_0x2d95('6b')];
                            $[_0x2d95('3f')] = _0x403d7a[_0x2d95('65')][_0x2d95('3f')];
                            cookie = cookie + _0x2d95('a5') + _0x403d7a[_0x2d95('65')][_0x2d95('3f')];
                        } else {
                            $[_0x2d95('9')](_0x403d7a[_0x2d95('a6')]);
                        }
                    } else {
                        $[_0x2d95('9')](_0x2d95('a7'));
                    }
                }
            } catch (_0xcfd9a0) {
                $[_0x2d95('9')](_0xcfd9a0);
            } finally {
                _0x4feab1();
            }
        });
    });
}

function getFirstLZCK() {
    return new Promise(_0x22fe89 => {
        $[_0x2d95('7e')]({
            '\x75\x72\x6c': $[_0x2d95('32')],
            '\x68\x65\x61\x64\x65\x72\x73': {'user-agent': $[_0x2d95('0')]() ? process[_0x2d95('6')][_0x2d95('a8')] ? process[_0x2d95('6')][_0x2d95('a8')] : require(_0x2d95('a9'))[_0x2d95('aa')] : $[_0x2d95('a')](_0x2d95('ab')) ? $[_0x2d95('a')](_0x2d95('ab')) : _0x2d95('ac')}
        }, (_0x457dc1, _0x40c4b3, _0x29b197) => {
            try {
                if (_0x457dc1) {
                    console[_0x2d95('9')](_0x457dc1);
                } else {
                    if (_0x40c4b3[_0x2d95('71')][_0x2d95('72')]) {
                        cookie = '' + originCookie;
                        if ($[_0x2d95('0')]()) {
                            for (let _0x32d1ef of _0x40c4b3[_0x2d95('71')][_0x2d95('72')]) {
                                cookie = '' + cookie + _0x32d1ef[_0x2d95('73')]('\x3b')[0x0] + '\x3b';
                            }
                        } else {
                            for (let _0x15e0e9 of _0x40c4b3[_0x2d95('71')][_0x2d95('a2')][_0x2d95('73')]('\x2c')) {
                                cookie = '' + cookie + _0x15e0e9[_0x2d95('73')]('\x3b')[0x0] + '\x3b';
                            }
                        }
                    }
                    if (_0x40c4b3[_0x2d95('71')][_0x2d95('a2')]) {
                        cookie = '' + originCookie;
                        if ($[_0x2d95('0')]()) {
                            for (let _0x28ee42 of _0x40c4b3[_0x2d95('71')][_0x2d95('72')]) {
                                cookie = '' + cookie + _0x28ee42[_0x2d95('73')]('\x3b')[0x0] + '\x3b';
                            }
                        } else {
                            for (let _0x39e130 of _0x40c4b3[_0x2d95('71')][_0x2d95('a2')][_0x2d95('73')]('\x2c')) {
                                cookie = '' + cookie + _0x39e130[_0x2d95('73')]('\x3b')[0x0] + '\x3b';
                            }
                        }
                    }
                }
            } catch (_0x7a00fc) {
                console[_0x2d95('9')](_0x7a00fc);
            } finally {
                _0x22fe89();
            }
        });
    });
}

function getToken() {
    let _0x30f488 = {
        '\x75\x72\x6c': _0x2d95('ad'),
        '\x68\x65\x61\x64\x65\x72\x73': {
            '\x48\x6f\x73\x74': _0x2d95('7b'),
            'Content-Type': _0x2d95('7d'),
            '\x41\x63\x63\x65\x70\x74': _0x2d95('7c'),
            '\x43\x6f\x6e\x6e\x65\x63\x74\x69\x6f\x6e': _0x2d95('9c'),
            '\x43\x6f\x6f\x6b\x69\x65': cookie,
            'User-Agent': _0x2d95('ae'),
            'Accept-Language': _0x2d95('af'),
            'Accept-Encoding': _0x2d95('97')
        },
        '\x62\x6f\x64\x79': _0x2d95('b0')
    };
    return new Promise(_0x15aa09 => {
        $[_0x2d95('63')](_0x30f488, (_0x51befb, _0x311d54, _0xbcef74) => {
            try {
                if (_0x51befb) {
                    $[_0x2d95('9')](_0x51befb);
                } else {
                    if (_0xbcef74) {
                        _0xbcef74 = JSON[_0x2d95('c')](_0xbcef74);
                        if (_0xbcef74[_0x2d95('b1')] === '\x30') {
                            $[_0x2d95('3e')] = _0xbcef74[_0x2d95('3e')];
                        }
                    } else {
                        $[_0x2d95('9')](_0x2d95('a7'));
                    }
                }
            } catch (_0x21b842) {
                $[_0x2d95('9')](_0x21b842);
            } finally {
                _0x15aa09();
            }
        });
    });
}

function random(_0x378da1, _0x7adba0) {
    return Math[_0x2d95('b2')](Math[_0x2d95('b3')]() * (_0x7adba0 - _0x378da1)) + _0x378da1;
}

function getUUID(_0xca5bcf = _0x2d95('2b'), _0x296706 = 0x0) {
    return _0xca5bcf[_0x2d95('b4')](/[xy]/g, function (_0x18d051) {
        var _0x51997a = Math[_0x2d95('b3')]() * 0x10 | 0x0,
            _0x5283d8 = _0x18d051 == '\x78' ? _0x51997a : _0x51997a & 0x3 | 0x8;
        if (_0x296706) {
            uuid = _0x5283d8[_0x2d95('b5')](0x24)[_0x2d95('b6')]();
        } else {
            uuid = _0x5283d8[_0x2d95('b5')](0x24);
        }
        return uuid;
    });
}

function checkCookie() {
    const _0x56d416 = {
        '\x75\x72\x6c': _0x2d95('b7'),
        '\x68\x65\x61\x64\x65\x72\x73': {
            'Host': _0x2d95('b8'),
            'Accept': _0x2d95('7c'),
            'Connection': _0x2d95('9c'),
            'Cookie': cookie,
            'User-Agent': _0x2d95('b9'),
            'Accept-Language': _0x2d95('96'),
            'Referer': _0x2d95('ba'),
            'Accept-Encoding': _0x2d95('97')
        }
    };
    return new Promise(_0x4a8be3 => {
        $[_0x2d95('7e')](_0x56d416, (_0x22875d, _0x91e718, _0xf70617) => {
            try {
                if (_0x22875d) {
                    $[_0x2d95('89')](_0x22875d);
                } else {
                    if (_0xf70617) {
                        _0xf70617 = JSON[_0x2d95('c')](_0xf70617);
                        if (_0xf70617[_0x2d95('bb')] === _0x2d95('bc')) {
                            $[_0x2d95('1c')] = ![];
                            return;
                        }
                        if (_0xf70617[_0x2d95('bb')] === '\x30' && _0xf70617[_0x2d95('65')][_0x2d95('bd')](_0x2d95('be'))) {
                            $[_0x2d95('1d')] = _0xf70617[_0x2d95('65')][_0x2d95('be')][_0x2d95('bf')][_0x2d95('6b')];
                        }
                    } else {
                        $[_0x2d95('9')](_0x2d95('a7'));
                    }
                }
            } catch (_0x379578) {
                $[_0x2d95('89')](_0x379578);
            } finally {
                _0x4a8be3();
            }
        });
    });
}

async function getUA() {
    $['\x55\x41'] = _0x2d95('c0') + randomString(0x28) + _0x2d95('c1');
}

function randomString(_0x31f286) {
    _0x31f286 = _0x31f286 || 0x20;
    let _0x102f60 = _0x2d95('c2'), _0x404f44 = _0x102f60[_0x2d95('18')], _0x27c0a4 = '';
    for (i = 0x0; i < _0x31f286; i++) _0x27c0a4 += _0x102f60[_0x2d95('c3')](Math[_0x2d95('b2')](Math[_0x2d95('b3')]() * _0x404f44));
    return _0x27c0a4;
};_0xodk = 'jsjiami.com.v6';

// prettier-ignore
!function (n) {
    "use strict";

    function t(n, t) {
        var r = (65535 & n) + (65535 & t);
        return (n >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r
    }

    function r(n, t) {
        return n << t | n >>> 32 - t
    }

    function e(n, e, o, u, c, f) {
        return t(r(t(t(e, n), t(u, f)), c), o)
    }

    function o(n, t, r, o, u, c, f) {
        return e(t & r | ~t & o, n, t, u, c, f)
    }

    function u(n, t, r, o, u, c, f) {
        return e(t & o | r & ~o, n, t, u, c, f)
    }

    function c(n, t, r, o, u, c, f) {
        return e(t ^ r ^ o, n, t, u, c, f)
    }

    function f(n, t, r, o, u, c, f) {
        return e(r ^ (t | ~o), n, t, u, c, f)
    }

    function i(n, r) {
        n[r >> 5] |= 128 << r % 32, n[14 + (r + 64 >>> 9 << 4)] = r;
        var e, i, a, d, h, l = 1732584193, g = -271733879, v = -1732584194, m = 271733878;
        for (e = 0; e < n.length; e += 16) i = l, a = g, d = v, h = m, g = f(g = f(g = f(g = f(g = c(g = c(g = c(g = c(g = u(g = u(g = u(g = u(g = o(g = o(g = o(g = o(g, v = o(v, m = o(m, l = o(l, g, v, m, n[e], 7, -680876936), g, v, n[e + 1], 12, -389564586), l, g, n[e + 2], 17, 606105819), m, l, n[e + 3], 22, -1044525330), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 4], 7, -176418897), g, v, n[e + 5], 12, 1200080426), l, g, n[e + 6], 17, -1473231341), m, l, n[e + 7], 22, -45705983), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 8], 7, 1770035416), g, v, n[e + 9], 12, -1958414417), l, g, n[e + 10], 17, -42063), m, l, n[e + 11], 22, -1990404162), v = o(v, m = o(m, l = o(l, g, v, m, n[e + 12], 7, 1804603682), g, v, n[e + 13], 12, -40341101), l, g, n[e + 14], 17, -1502002290), m, l, n[e + 15], 22, 1236535329), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 1], 5, -165796510), g, v, n[e + 6], 9, -1069501632), l, g, n[e + 11], 14, 643717713), m, l, n[e], 20, -373897302), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 5], 5, -701558691), g, v, n[e + 10], 9, 38016083), l, g, n[e + 15], 14, -660478335), m, l, n[e + 4], 20, -405537848), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 9], 5, 568446438), g, v, n[e + 14], 9, -1019803690), l, g, n[e + 3], 14, -187363961), m, l, n[e + 8], 20, 1163531501), v = u(v, m = u(m, l = u(l, g, v, m, n[e + 13], 5, -1444681467), g, v, n[e + 2], 9, -51403784), l, g, n[e + 7], 14, 1735328473), m, l, n[e + 12], 20, -1926607734), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 5], 4, -378558), g, v, n[e + 8], 11, -2022574463), l, g, n[e + 11], 16, 1839030562), m, l, n[e + 14], 23, -35309556), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 1], 4, -1530992060), g, v, n[e + 4], 11, 1272893353), l, g, n[e + 7], 16, -155497632), m, l, n[e + 10], 23, -1094730640), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 13], 4, 681279174), g, v, n[e], 11, -358537222), l, g, n[e + 3], 16, -722521979), m, l, n[e + 6], 23, 76029189), v = c(v, m = c(m, l = c(l, g, v, m, n[e + 9], 4, -640364487), g, v, n[e + 12], 11, -421815835), l, g, n[e + 15], 16, 530742520), m, l, n[e + 2], 23, -995338651), v = f(v, m = f(m, l = f(l, g, v, m, n[e], 6, -198630844), g, v, n[e + 7], 10, 1126891415), l, g, n[e + 14], 15, -1416354905), m, l, n[e + 5], 21, -57434055), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 12], 6, 1700485571), g, v, n[e + 3], 10, -1894986606), l, g, n[e + 10], 15, -1051523), m, l, n[e + 1], 21, -2054922799), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 8], 6, 1873313359), g, v, n[e + 15], 10, -30611744), l, g, n[e + 6], 15, -1560198380), m, l, n[e + 13], 21, 1309151649), v = f(v, m = f(m, l = f(l, g, v, m, n[e + 4], 6, -145523070), g, v, n[e + 11], 10, -1120210379), l, g, n[e + 2], 15, 718787259), m, l, n[e + 9], 21, -343485551), l = t(l, i), g = t(g, a), v = t(v, d), m = t(m, h);
        return [l, g, v, m]
    }

    function a(n) {
        var t, r = "", e = 32 * n.length;
        for (t = 0; t < e; t += 8) r += String.fromCharCode(n[t >> 5] >>> t % 32 & 255);
        return r
    }

    function d(n) {
        var t, r = [];
        for (r[(n.length >> 2) - 1] = void 0, t = 0; t < r.length; t += 1) r[t] = 0;
        var e = 8 * n.length;
        for (t = 0; t < e; t += 8) r[t >> 5] |= (255 & n.charCodeAt(t / 8)) << t % 32;
        return r
    }

    function h(n) {
        return a(i(d(n), 8 * n.length))
    }

    function l(n, t) {
        var r, e, o = d(n), u = [], c = [];
        for (u[15] = c[15] = void 0, o.length > 16 && (o = i(o, 8 * n.length)), r = 0; r < 16; r += 1) u[r] = 909522486 ^ o[r], c[r] = 1549556828 ^ o[r];
        return e = i(u.concat(d(t)), 512 + 8 * t.length), a(i(c.concat(e), 640))
    }

    function g(n) {
        var t, r, e = "";
        for (r = 0; r < n.length; r += 1) t = n.charCodeAt(r), e += "0123456789abcdef".charAt(t >>> 4 & 15) + "0123456789abcdef".charAt(15 & t);
        return e
    }

    function v(n) {
        return unescape(encodeURIComponent(n))
    }

    function m(n) {
        return h(v(n))
    }

    function p(n) {
        return g(m(n))
    }

    function s(n, t) {
        return l(v(n), v(t))
    }

    function C(n, t) {
        return g(s(n, t))
    }

    function A(n, t, r) {
        return t ? r ? s(t, n) : C(t, n) : r ? m(n) : p(n)
    }

    $.md5 = A
}(this);

function Env(t, e) {
    "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);

    class s {
        constructor(t) {
            this.env = t
        }

        send(t, e = "GET") {
            t = "string" == typeof t ? {url: t} : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }

        get(t) {
            return this.send.call(this.env, t)
        }

        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }

    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`)
        }

        isNode() {
            return "undefined" != typeof module && !!module.exports
        }

        isQuanX() {
            return "undefined" != typeof $task
        }

        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }

        isLoon() {
            return "undefined" != typeof $loon
        }

        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }

        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }

        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t))
            } catch {
            }
            return s
        }

        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }

        getScript(t) {
            return new Promise(e => {
                this.get({url: t}, (t, s, i) => e(i))
            })
        }

        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), n = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {script_text: t, mock_type: "cron", timeout: r},
                    headers: {"X-Key": o, Accept: "*/*"}
                };
                this.post(n, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }

        loaddata() {
            if (!this.isNode()) return {};
            {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e);
                if (!s && !i) return {};
                {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }

        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }

        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
            return r
        }

        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }

        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, "") : e
                } catch (t) {
                    e = ""
                }
            }
            return e
        }

        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }

        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }

        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }

        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }

        get(t, e = (() => {
        })) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                try {
                    if (t.headers["set-cookie"]) {
                        const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                        s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                    }
                } catch (t) {
                    this.logErr(t)
                }
            }).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => {
                const {message: s, response: i} = t;
                e(s, i, i && i.body)
            }))
        }

        post(t, e = (() => {
        })) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.post(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => e(t)); else if (this.isNode()) {
                this.initGotEnv(t);
                const {url: s, ...i} = t;
                this.got.post(s, i).then(t => {
                    const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                    e(null, {status: s, statusCode: i, headers: r, body: o}, o)
                }, t => {
                    const {message: s, response: i} = t;
                    e(s, i, i && i.body)
                })
            }
        }

        time(t, e = null) {
            const s = e ? new Date(e) : new Date;
            let i = {
                "M+": s.getMonth() + 1,
                "d+": s.getDate(),
                "H+": s.getHours(),
                "m+": s.getMinutes(),
                "s+": s.getSeconds(),
                "q+": Math.floor((s.getMonth() + 3) / 3),
                S: s.getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
            return t
        }

        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {"open-url": t} : this.isSurge() ? {url: t} : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"];
                        return {openUrl: e, mediaUrl: s}
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl;
                        return {"open-url": e, "media-url": s}
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {url: e}
                    }
                }
            };
            if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
                let t = ["", "==============📣系统通知📣=============="];
                t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
            }
        }

        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }

        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t)
        }

        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }

        done(t = {}) {
            const e = (new Date).getTime(), s = (e - this.startTime) / 1e3;
            this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}