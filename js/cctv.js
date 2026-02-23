(function(){
    var y = document.getElementById('year');
    if(y){
    var now = new Date();
    if (parseInt(y.textContent,10) < now.getFullYear()) y.textContent = now.getFullYear();
    }
})();

(function() {
    const originalLog = console.log;
    console.log = function(...args) {
        if (typeof args[0] === 'string' && args[0].includes('DPlayer v') && args[0].includes('https://dplayer.diygod.dev')) { return; }
        originalLog.apply(console, args);
    };
})();

const Version = "4.7.15";
console.clear();
console.log("%c 逆熵™量子之海媒体引擎 %c v" + Version + " " + (typeof buildDate !== 'undefined' ? buildDate : '[build date unknown]'),
    "padding: 2px 6px; border-radius: 3px 0 0 3px; color: #fff; background: #1a5f9e;",
    "padding: 2px 6px; border-radius: 0 3px 3px 0; color: #fff; background: #2b78c4;"
);
console.log(String.raw`%c
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣦⡀
⠀⠀⠀⠀⠀⢀⣠⣤⣾⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⣿⣿⣿⣦⡀⠀⠀⠀⠀     _    _   _ _____ ___      _____ _   _ _____ ____   ___  ______   __
⠀⠀⠀⣠⣾⣿⣿⣿⡛⢿⡈⢦⠀⠀⠀⠀⠀⠀⠀⢀⣠⣶⣿⣿⣿⣿⣿⣿⣄⠀⠀⠀    / \  | \ | |_   _|_ _|    | ____| \ | |_   _|  _ \ / _ \|  _ \ \ / /
⠀⠀⣼⡿⠛⠉⠙⠻⢿⣷⡄⠀⢳⡀⠀⠀⠀⠀⠀⠁⠀⠀⠈⠉⠛⢿⣿⣿⣿⡆⠀⠀   / _ \ |  \| | | |  | |_____|  _| |  \| | | | | |_) | | | | |_) \ V /
⠀⢸⡟⠀⠀⠀⠀⠀⠀⠻⣿⣆⠀⢻⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⢿⣿⣿⡀⠀  / ___ \| |\  | | |  | |_____| |___| |\  | | | |  _ <| |_| |  __/ | |
⠀⢸⣷⠀⠀⠀⠀⠀⠀⠀⠈⢿⣆⠀⢻⣷⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⡇⠀ /_/   \_\_| \_| |_| |___|    |_____|_| \_| |_| |_| \_\\___/|_|    |_|
⠀⠈⣿⣷⣄⣀⣀⡀⠀⠀⠀⠀⠹⣆⠀⠻⣿⣦⡀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣿⣿⠃
⠀⠀⠸⣿⣿⡟⠉⠀⠀⠀⠀⠀⠀⠙⣆⠀⡙⢿⣿⣦⣄⣀⠀⠀⠀⣀⣴⣿⣿⠏⠀
⠀⠀⠀⠘⠿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⢆⠸⣶⣍⣛⣿⣿⣿⣿⣿⣿⣿⠿⠃⠀⠀⠀                                  Release 逆熵科技™ Quantum Media Engine
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣿⣿⣿⠿⠿⠿⠛⠋⠁⠀⠀⠀⠀⠀                                      Powered by @DIYgod/Dplayer@1.27.1
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉
`, "color: #0099ff; font-weight: bold; font-family: Cascadia Mono, monospace;")

function shouldAlwaysShowLogo() {
    var logoMark = document.getElementById('logoMark');
    var dplayer = document.getElementById('dplayer');
    if (!logoMark || !dplayer) return false;
    var logoImg = logoMark.querySelector('img');
    var logoRect = logoMark.getBoundingClientRect();
    var logoHeight = (logoImg && logoImg.height) ? logoImg.height : logoRect.height;

    var container = document.querySelector('.container');
    var playerRect = dplayer.getBoundingClientRect();
    var containerRect = container.getBoundingClientRect();
    var gap = playerRect.top - containerRect.top;
    return gap > logoHeight;
}

function updateLogoVisibility(forceShow = false) {
    var logoMark = document.getElementById('logoMark');
    if (!logoMark) return;
    if (forceShow || shouldAlwaysShowLogo()) {
        logoMark.style.display = "block";
    } else {
        logoMark.style.display = "none";
    }
}
function showLogo() { updateLogoVisibility(true); }
function hideLogo() { updateLogoVisibility(false); }
window.addEventListener('resize', function(){ updateLogoVisibility(false); });

/* 地址栏参数控制 */
const globalPath = window.location.pathname.replace(/^\//, '');
const urlParams = new URLSearchParams(window.location.search);
const videoTimestamp = urlParams.get('t');

let videoPath = '';
if (globalPath && globalPath !== '') {
    const dataParam = urlParams.get('data'); 
    if (dataParam && dataParam.startsWith('@') && !dataParam.includes('/')) {
        videoPath = `${dataParam}/${globalPath}`; 
        console.log("[Index Mode 2]: " + videoPath);
    } else {
        videoPath = globalPath;
        console.log("[Index Mode 1]: " + videoPath);
    }
} else if (urlParams.has('data')) {
    videoPath = urlParams.get('data'); 
    console.log("[Index Mode 3]: " + videoPath);
}

function getModel(path) {
    let model = 'media';
    let file = path;
    if (typeof path === 'string' && path.startsWith('@')) {
        let m = path.match(/^@([^\/]+)\/(.+)$/);
        if (m) {
            model = m[1];
            file = m[2];
        }
    }
    return {model, file};
}

function getExtName(path) {
    if (!path) return '';
    const idx = path.lastIndexOf('.');
    if (idx < 0) return '';
    return path.slice(idx + 1).toLowerCase();
}

function buildModelscopeUrl(path) {
    const base_path = `https://cdn.anti-entropy.org.cn/`
    const {model, file} = getModel(path);
    if (file.startsWith('/')) {
        return `${base_path}${model}${file}`
    }
    return `${base_path}${model}/${file}`;
}

function buildDownloadM3u8Info(path) {
    let {model, file} = getModel(path);
    let m3u8url, outname;
    if (!getExtName(file)) {
        let segments = file.replace(/\/$/, '').split('/');
        let folder = segments[segments.length - 1];
        m3u8url = buildModelscopeUrl(path.replace(/\/$/, '') + "/index.m3u8");
        outname = folder + ".mp4";
    } else if (getExtName(file) === 'm3u8') {
        m3u8url = buildModelscopeUrl(path);
        let m3u8file = file.split('/').pop();
        outname = m3u8file.replace(/\.m3u8$/, ".mp4");
    } else {
        m3u8url = "";
        outname = "output.mp4";
    }
    return { m3u8url, outname };
}

function showError(msg) {
    var dplayer = document.getElementById('dplayer');
    var errorDiv = document.getElementById('404');
    dplayer.style.display = 'none';
    errorDiv.innerHTML = msg;
    errorDiv.style.color = "#fff";
    errorDiv.style.textShadow = "0 1px 6px #22284555";
    showLogo();
    console.error(msg);
}
function fetchHead(url) { return fetch(url, { method: "HEAD" }).then(res => res.ok).catch(() => false); }
function showDownloadDialog(ffmpegCmd, mp4name) {
    const dialog = document.getElementById('downloadDialog');
    dialog.innerHTML = `
        <div class="dialog-mask">
            <div class="dialog-box" onclick="event.stopPropagation();">
                <h3>HLS 媒体</h3>
                <div class="tip">若您安装了 ffmpeg, 可使用此命令将媒体克隆为 <b>${mp4name}</b>：</div>
                <div class="cmd-wrap-block">
                    <div class="cmd-wrap" id="ffmpegCmd">${ffmpegCmd}</div>
                    <div class="cmd-copy-icon" id="copyIcon" title="复制命令">
                        <svg viewBox="0 0 20 20"><rect x="6" y="2" width="9" height="14" rx="2"></rect><rect x="3" y="5" width="9" height="14" rx="2" fill="none" stroke="#a5bfee" stroke-width="1"></rect></svg>
                    </div>
                </div>
                <div class="dialog-btn-row">
                    <button class="close-btn" id="closeBtn">关闭</button>
                </div>
            </div>
        </div>
    `;
    dialog.style.display = "block";
    setTimeout(()=>{
        document.getElementById('copyIcon').onclick = function(){
            let txt = document.getElementById('ffmpegCmd').textContent;
            navigator.clipboard && navigator.clipboard.writeText ? navigator.clipboard.writeText(txt).then(()=> {
                this.classList.add('copied');
                this.title='已复制！';
                setTimeout(()=> {
                    this.title='复制命令';
                    this.classList.remove('copied');
                }, 1200);
            }) : document.execCommand('copy');
        };
        document.getElementById('closeBtn').onclick = function(){
            dialog.style.display="none";
        };
    },0);
}

window.__qhls = { };
(async function main() {
    const dplayerContainer = document.getElementById('dplayer');
    const t0 = performance.now();
    function ts() { return ((performance.now() - t0) / 1000).toFixed(3) + "s"; }
    function log(...args) { console.log(`[QHLS ${ts()}]`, ...args); }
    function warn(...args) { console.warn(`[QHLS ${ts()}]`, ...args); }
    function err(...args) { console.error(`[QHLS ${ts()}]`, ...args); }

    function loadScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.async = true;
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
        });
    }

    log("player boot (DPlayer version)");
    log("userAgent:", navigator.userAgent);
    log("videoPath (data=):", videoPath);

    showLogo();

    if (!videoPath) {
        showError('没有媒体信号输入');
        return;
    }

    await Promise.all([
        loadScript('https://cdn.jsdelivr.net/npm/dplayer/dist/DPlayer.min.js')
    ]);

    let finalUrl = buildModelscopeUrl(videoPath), format = '';
    const ext = getExtName(videoPath);
    if (!ext) {
        finalUrl = buildModelscopeUrl(videoPath.replace(/\/$/, '') + '/index.m3u8');
        format = 'hls';
        log("No extension, assume HLS:", finalUrl);
    } else if (ext === 'm3u8') {
        format = 'hls';
    } else {
        format = ext;
    }
    log('Detect final url:', finalUrl, 'format:', format);

    // 🔥 后台异步检查，不阻塞
    fetchHead(finalUrl).then(resourceExists => {
        if (!resourceExists) {
            if (dplayerContainer && dplayerContainer.dp) {
                try { dplayerContainer.dp.destroy(); } catch(e) {}
                dplayerContainer.dp = null;
            }
            showError('媒体文件不存在: ' + videoPath);
        }
    });

    function media_download() {
        if (format !== 'hls') {
            const filename = finalUrl.split('/').pop();
            const a = document.createElement('a');
            a.href = finalUrl;
            a.download = filename;
            a.style.display = 'none';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            warn('已自动发起下载：' + filename);
        } else {
            let info = buildDownloadM3u8Info(videoPath);
            const ffmpeg_cmd =
                `ffmpeg -i "${info.m3u8url}" -c copy -copyts -fps_mode passthrough -output_ts_offset 0 -muxdelay 0 -muxpreload 0 -movflags +faststart+empty_moov+default_base_moof -f mp4 - | ` +
                `ffmpeg -f mp4 -i - -c copy -movflags +faststart "${info.outname}"`;
            showDownloadDialog(ffmpeg_cmd, info.outname);
        }
    }

    function isAudio(ext) {
        return ['mp3', 'wav', 'ogg', 'flac', 'aac', 'm4a', 'opus'].includes(ext);
    }

    // DPlayer实例
    let dplayerInstance = null;
    // destroy old
    if (dplayerContainer && dplayerContainer.dp) {
        try { dplayerContainer.dp.destroy(); } catch(e){}
        dplayerContainer.innerHTML = '';
    }

    const dpOptions = {
        container: dplayerContainer,
        autoplay: true,
        chromecast: true,
        airplay: true,
        theme: '#ff2626',
        loop: false,
        lang: 'zh-cn',
        screenshot: true,
        hotkey: false,
        video: {
            pic: isAudio(ext) ? './assets/soundonly.png' : '',
            quality: [
                {
                    url: finalUrl,
                    type: format === 'hls' ? 'hls' : 'auto',
                    name: '自动'
                }
            ],
            defaultQuality: 0,
        },
        contextmenu: [
            {
                text: '复制视频地址（精准空降）',
                click: () => {
                    let clipboardUrl = new URL(window.location.href);
                    if (dplayerContainer && dplayerContainer.dp) {
                        clipboardUrl.searchParams.set('t', dplayerContainer.dp.video.currentTime);
                    }
                    navigator.clipboard && navigator.clipboard.writeText ? navigator.clipboard.writeText(clipboardUrl.toString()) : document.execCommand('copy');
                },
            },
            {
                text: '存储媒体文件',
                click: () => {
                    media_download();
                },
            },
        ],
        preload: 'metadata',
        volume: 1.0
    };

    
    dplayerInstance = new DPlayer(dpOptions);
    dplayerContainer.style.display = 'block';
    dplayerContainer.dp = dplayerInstance;
    dplayerContainer.dp.volume(1.0, false, true);
    if (urlParams.has('t')) {
        dplayerContainer.dp.seek(urlParams.get('t'));
    }

    const dplayerLabel = dplayerContainer.querySelector('.dplayer-setting-loop .dplayer-label');
    dplayerLabel.textContent = '循环播放';
    
    const dplayerLabelFps = dplayerContainer.querySelector('.dplayer-info-panel-item-fps');
    dplayerLabelFps.style.display = 'none';
    
    const dplayerFullInIcon = dplayerContainer.querySelector('.dplayer-full-in-icon');
    dplayerFullInIcon.style.display = 'none';

    const aboutAuthorItem = document.querySelector('.dplayer-menu-item a[href="https://diygod.me"]');
    aboutAuthorItem.closest('.dplayer-menu-item').remove();

    const aboutPlayerItem = document.querySelector('.dplayer-menu-item a[href="https://github.com/MoePlayer/DPlayer"]');
    aboutPlayerItem.textContent = 'Powered by DPalyer';

    const speedList = [10, 5, 3, 2, 1.5, 1.25, 1, 0.75, 0.5, 0.25];
    const dplayerSpeedLabel = dplayerContainer.querySelector('.dplayer-setting-speed .dplayer-label');
    const speedPanel = dplayerContainer.querySelector('.dplayer-setting-speed-panel');
    if (speedPanel) {
        dplayerSpeedLabel.textContent = '倍速';
        speedPanel.innerHTML = '';
        speedList.forEach((speed) => {
            const item = document.createElement('div');
            item.className = 'dplayer-setting-speed-item';
            item.setAttribute('data-speed', speed);
            const label = document.createElement('span');
            label.className = 'dplayer-label';
            label.textContent = (speed === 1) ? '正常' : (Number.isInteger(speed) ? speed.toFixed(1) : speed) + 'x';
            item.appendChild(label);
            item.onclick = function () {
                dplayerInstance.speed(speed); // 切换倍速
                speedPanel.querySelectorAll('.dplayer-setting-speed-item').forEach(i => i.classList.remove('dplayer-setting-speed-item-active'));
                item.classList.add('dplayer-setting-speed-item-active');
            };
            if (dplayerInstance.video.playbackRate === speed) {
                item.classList.add('dplayer-setting-speed-item-active');
            }
            speedPanel.appendChild(item);
        });
    }

    const video = dplayerContainer.dp.video;
    video.addEventListener('loadedmetadata', function() {
        const width = video.videoWidth;
        const height = video.videoHeight;
        let newName = (width * height === 0) ? '自动' : `${width}x${height}`;
        let evalWidth = width;
        let evalHeight = height;
        if (width < height) {
            evalWidth = height;
            evalHeight = width;
        }
        
        if (evalWidth > 14000 && evalHeight > 6000) {
            newName = `16K 超高清`;
        } else if (evalWidth > 7000 && evalHeight > 4000) {
            newName = `8K 超高清`;
        } else if (evalWidth > 4000 && evalHeight > 3000) {
            newName = `4K 超高清`;
        } else if (evalWidth > 2000 && evalHeight > 1500) {
            newName = `2K 超清`;
        } else if (evalWidth > 1000 && evalHeight > 750) {
            newName = `1080P 高清`;
        } else if (evalWidth > 500 && evalHeight > 375) {
            newName = `720P 准高清`;
        } else if (evalWidth > 500 && evalHeight > 500) {
            newName = `480P 标清`;
        } else if (evalWidth > 300 && evalHeight > 300) {
            newName = `360P 流畅`;
        }

        const qualityBtn = dplayerContainer.querySelector('.dplayer-quality-icon');
        const qualityItem = dplayerContainer.querySelector('.dplayer-quality-item');
        if (qualityBtn) {
            qualityBtn.textContent = newName;
        }
        
        if (qualityItem) {
            qualityItem.textContent = newName; 
        }
        hideLogo();
    });

    /* 以下是一些小补丁 */
    function enableGlobalKeys(dp) {
        if (window.__AE_GLOBAL_KEYS_BOUND__) return;
        window.__AE_GLOBAL_KEYS_BOUND__ = true;

        const HOLD_THRESHOLD_MS = 240;   // 判定“长按”的时间阈值
        const FAST_RATE = 2.0;
        const NORMAL_RATE = 1.0;

        let rightHoldTimer = null;
        let rightIsHolding = false;
        let rightDidHold = false; // 新增：本次 ArrowRight 是否触发过长按(2x)

        function setRate(rate) {
            if (!dp || !dp.video) return;
            dp.video.playbackRate = rate;
        }

        function resetRightHold() {
            if (rightHoldTimer) {
                clearTimeout(rightHoldTimer);
                rightHoldTimer = null;
            }
            if (rightIsHolding) {
                rightIsHolding = false;
                setRate(NORMAL_RATE);
                // 可选提示：松开不提示也行
                dp.notice(`倍速: ${NORMAL_RATE}x`, 3000);
            }
        }

        // 失焦/切后台兜底恢复
        window.addEventListener('blur', resetRightHold);
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) resetRightHold();
        });

        window.addEventListener('keydown', function (e) {
            if (!dp || !dp.video) return;
            if (e.ctrlKey || e.metaKey || e.altKey) return;

            const v = dp.video;

            if (e.key === ' ') {
                e.preventDefault();
                dp.toggle();
                dp.notice(v.paused ? "已暂停" : "播放中", 3000);
                return;
            }

            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                v.currentTime = Math.max(0, v.currentTime - 5);
                dp.notice(`倒退 5 秒`, 3000);
                return;
            }

            if (e.key === 'ArrowRight') {
                e.preventDefault();
                if (e.repeat) return;
                rightDidHold = false;
                if (!rightHoldTimer && !rightIsHolding) {
                    rightHoldTimer = setTimeout(() => {
                        rightHoldTimer = null;
                        rightIsHolding = true;
                        rightDidHold = true; // 标记：本次确实进入过长按
                        setRate(FAST_RATE);
                        dp.notice(`▶▶▶ 2x 倍速播放中`, 99999999999999);
                    }, HOLD_THRESHOLD_MS);
                }
                return;
            }

            if (e.key === 'ArrowUp') {
                e.preventDefault();
                const step = 0.05;
                const next = Math.min(1, (typeof dp.volume === 'function' ? dp.volume() : v.volume) + step);
                if (typeof dp.volume === 'function') dp.volume(next, true, true);
                else v.volume = next;
                dp.notice(`音量: ${Math.round(next * 100)}%`, 3000);
                return;
            }

            if (e.key === 'ArrowDown') {
                e.preventDefault();
                const step = 0.05;
                const next = Math.max(0, (typeof dp.volume === 'function' ? dp.volume() : v.volume) - step);
                if (typeof dp.volume === 'function') dp.volume(next, true, true);
                else v.volume = next;
                dp.notice(`音量: ${Math.round(next * 100)}%`, 3000);
                return;
            }
        }, { capture: true, passive: false });

        window.addEventListener('keyup', function (e) {
            if (!dp || !dp.video) return;

            if (e.key === 'ArrowRight') {
                e.preventDefault();

                if (rightHoldTimer) {
                    clearTimeout(rightHoldTimer);
                    rightHoldTimer = null;
                }

                // 如果进入过长按，只恢复倍速，不快进
                if (rightDidHold || rightIsHolding) {
                    rightDidHold = false;
                    resetRightHold(); // 恢复 1x
                    return;
                }

                // 否则是短按，在 keyup 执行快进 5 秒
                const v = dp.video;
                v.currentTime = Math.min(v.duration || Infinity, v.currentTime + 5);
                dp.notice(`前进 5 秒`, 3000);
                return;
            }
        }, { capture: true, passive: false });
    }
    function disableDPlayerNoticeQueue(dp, containerEl) {
        if (!dp || dp.__noticeQueueDisabled) return;
        dp.__noticeQueueDisabled = true;
        const root = containerEl || dp.container || document.getElementById('dplayer');
        function clearNotices() {
            const list = root && root.querySelector ? root.querySelector('.dplayer-notice-list') : null;
            if (list) list.innerHTML = '';
        }

        if (typeof dp.notice === 'function') {
            const originalNotice = dp.notice.bind(dp);
            dp.notice = function (...args) {
                clearNotices();

                // 检查是否是快进/倒退提示
                const msg = args[0];
                if (typeof msg === 'string') {
                    // 匹配 "快进 xx 秒" 或 "倒退 xx 秒"
                    const match = msg.match(/(快进|快退)\s+(\d+)\s+秒/);
                    if (match) {
                        const direction = match[1]; // 快进 / 倒退
                        const seconds = parseInt(match[2], 10);

                        // 格式化时间
                        let formattedTime = formatSeconds(seconds);
                        const newMsg = `${direction} ${formattedTime}`;

                        // 调用原始 notice 显示新消息
                        return originalNotice(newMsg, ...args.slice(1));
                    }
                }

                // 其他消息直接原样显示
                return originalNotice(...args);
            };
        }
    }

    // 时间格式化函数
    function formatSeconds(seconds) {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        if (hours > 0) {
            return `${hours} 小时 ${minutes} 分钟 ${secs} 秒`;
        } else if (minutes > 0) {
            return `${minutes} 分钟 ${secs} 秒`;
        } else {
            return `${secs} 秒`;
        }
    }
    disableDPlayerNoticeQueue(dplayerInstance, dplayerContainer);
    enableGlobalKeys(dplayerInstance)
})();