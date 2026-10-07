/* ==================================================
   LEON PORTFOLIO - JAVASCRIPT
   Mengatur:
   - Bahasa Indonesia / English / Mandarin
   - Saklar Light / Dark Mode (animasi matahari & bulan)
   - Pilihan warna tema
   - Efek mengetik (typewriter) di hero
   - Background aurora + bintang melayang
   - Pizza favorit 🍕
   - Kartu miring 3D (tilt)
   - Scroll progress bar
   - Toast notification + sapaan sesuai jam
   - Pintasan keyboard + panel bantuan
   - Rahasia: ketik "vfx" 👀
   - Scroll Animation, Copy Button, Back To Top
   - Pop-up gambar preview VFX 🖼️ (BARU)
================================================== */


/* ==================================================
   HELPER
================================================== */

/*
   localStorage bisa error di mode private,
   jadi kita bungkus dengan try/catch.
*/

const store = {

    get: function (key, fallback) {
        try {
            const value = localStorage.getItem(key);
            return value === null ? fallback : value;
        } catch (error) {
            return fallback;
        }
    },

    set: function (key, value) {
        try {
            localStorage.setItem(key, value);
        } catch (error) {
            /* Abaikan */
        }
    }
};


/* Apakah pengunjung mematikan animasi di perangkatnya? */

const reduceMotion =
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;


/* Apakah pengunjung memakai mouse (bukan layar sentuh)? */

const finePointer =
    window.matchMedia("(hover: hover) and (pointer: fine)").matches;


/* ==================================================
   TRANSLATIONS
================================================== */

const translations = {

    /* ==================================================
       INDONESIAN
    ================================================== */

    id: {
        headerDesc: "• VFX Artist, Pengembang Roblox & Web Developer Pemula",
        home: "Beranda",
        about: "Tentang Saya",

        welcome: "✦ SELAMAT DATANG DI PORTOFOLIO SAYA",
        heroName: "Saya <span>Leon</span>",
        roles: ["VFX Artist", "Pengembang Roblox", "Pemodel 3D", "Web Developer Pemula"],
        heroDesc: "Saya membuat visual effects, game Roblox, asset 3D, dan website sederhana. Saya masih belajar Web Development dan terus mencoba membuat berbagai project kreatif.",
        viewSkills: "Lihat Kemampuan Saya →",
        aboutButton: "Tentang Saya",

        workTitle: "✦ Yang Saya Kerjakan",
        workDesc: "Beberapa bidang yang saya sukai dan sedang saya pelajari.",
        vfxTitle: "VFX Artist",
        vfxDesc: "Membuat particle, energy effect, trail, dan berbagai visual effect untuk project Roblox.",
        robloxTitle: "Pengembang Roblox",
        robloxDesc: "Membuat game, sistem, gameplay, mekanik permainan, dan pengalaman interaktif di Roblox.",
        blenderTitle: "Pemodelan 3D",
        blenderDesc: "Membuat model 3D sederhana dan berbagai asset menggunakan Blender.",
        webTitle: "Web Development",
        webDesc: "Saya sedang belajar Web Development dan masih pemula. Saya membuat website sederhana menggunakan HTML, CSS, dan JavaScript.",
        copyPrefix: "Salin:",
        previewButton: "🖼️ Pratinjau",
        previewClose: "Tutup",

        learningTitle: "✦ Terus Belajar & Berkembang",
        learningDesc: "Saya masih terus belajar berbagai hal tentang VFX, Roblox Studio, Blender, dan Web Development. Saya ingin terus meningkatkan kemampuan saya dan membuat karya yang semakin baik.",
        learnMore: "Kenali Saya Lebih Jauh →",

        aboutLabel: "✦ TENTANG SAYA",
        aboutTitle: "Halo, saya <span>Leon</span>!",
        aboutIntro: "Saya adalah seorang VFX Artist dan Pengembang Roblox yang juga sedang belajar Web Development.",
        aboutRobloxTitle: "Roblox Studio",
        aboutRobloxDesc: "Saya suka membuat game, sistem, gameplay, dan berbagai mekanik menggunakan Roblox Studio dan Lua.",
        aboutVfxTitle: "VFX",
        aboutVfxDesc: "Saya juga tertarik membuat visual effects seperti particle, energy effect, trail, dan berbagai efek lainnya.",
        aboutBlenderTitle: "Blender",
        aboutBlenderDesc: "Saya menggunakan Blender untuk belajar membuat model 3D dan asset sederhana.",
        aboutWebTitle: "Web Development",
        aboutWebDesc: "Saya masih pemula dalam Web Development dan sedang belajar HTML, CSS, serta JavaScript untuk membuat website.",
        aboutLearningTitle: "✦ Masih Dalam Proses Belajar",
        aboutLearningDesc: "Saya masih terus belajar dan meningkatkan kemampuan saya. Saya ingin memahami lebih banyak tentang VFX, game development, 3D modeling, dan Web Development.",
        backHome: "← Kembali ke Beranda",

        favLabel: "✦ MAKANAN FAVORIT",
        favTitle: "Pizza!",
        favDesc: "Makanan favorit saya adalah pizza. Paling enak dimakan sambil membuat VFX atau bermain Roblox 😄",
        favHint: "👆 Coba klik pizzanya!",
        pizzaTitle: "Klik aku!",
        pizzaToast: "🍕 Hujan pizza!",

        footer: "Dibuat oleh Leon © 2026",

        copied: "✅ Tersalin:",
        clipboardError: "⚠️ Clipboard tidak tersedia",

        greetMorning: "Selamat pagi! ☀️",
        greetMidday: "Selamat siang! 🌤️",
        greetAfternoon: "Selamat sore! 🌇",
        greetNight: "Selamat malam! 🌙",
        welcomeBack: "Selamat datang kembali 👋",
        firstVisit: "Terima kasih sudah berkunjung 👋",

        themeLight: "☀️ Mode terang",
        themeDark: "🌙 Mode gelap",
        accentChanged: "🎨 Warna tema:",
        colors: { blue: "Biru", purple: "Ungu", green: "Hijau", pink: "Merah Muda", orange: "Oranye" },

        langLabel: "Pilih bahasa",
        titleTheme: "Ganti mode (T)",
        titleAccent: "Ganti warna (C)",
        titleHelp: "Pintasan keyboard (?)",
        titleTop: "Kembali ke atas",

        helpTitle: "⌨️ Pintasan Keyboard",
        helpTheme: "Ganti mode terang / gelap",
        helpAccent: "Ganti warna tema",
        helpLang: "Ganti bahasa",
        helpHelp: "Buka / tutup panel ini",
        helpSecret: "Rahasia… coba ketik <b>vfx</b> 👀",
        helpClose: "Tutup",

        powerUp: "⚡ POWER UP! Kamu menemukan rahasia!"
    },


    /* ==================================================
       ENGLISH
    ================================================== */

    en: {
        headerDesc: "• VFX Artist, Roblox Developer & Beginner Web Developer",
        home: "Home",
        about: "About Me",

        welcome: "✦ WELCOME TO MY PORTFOLIO",
        heroName: "I am <span>Leon</span>",
        roles: ["VFX Artist", "Roblox Developer", "3D Modeler", "Beginner Web Developer"],
        heroDesc: "I create visual effects, Roblox games, 3D assets, and simple websites. I'm still learning Web Development and keep trying to build all kinds of creative projects.",
        viewSkills: "See My Skills →",
        aboutButton: "About Me",

        workTitle: "✦ What I Do",
        workDesc: "Some fields I enjoy and am currently learning.",
        vfxTitle: "VFX Artist",
        vfxDesc: "Creating particles, energy effects, trails, and all kinds of visual effects for Roblox projects.",
        robloxTitle: "Roblox Developer",
        robloxDesc: "Creating games, systems, gameplay, mechanics, and interactive experiences on Roblox.",
        blenderTitle: "3D Modeling",
        blenderDesc: "Creating simple 3D models and various assets using Blender.",
        webTitle: "Web Development",
        webDesc: "I'm learning Web Development and still a beginner. I build simple websites using HTML, CSS, and JavaScript.",
        copyPrefix: "Copy:",
        previewButton: "🖼️ Preview",
        previewClose: "Close",

        learningTitle: "✦ Always Learning & Growing",
        learningDesc: "I'm still learning about VFX, Roblox Studio, Blender, and Web Development. I want to keep improving my skills and make better and better work.",
        learnMore: "Get to Know Me →",

        aboutLabel: "✦ ABOUT ME",
        aboutTitle: "Hi, I'm <span>Leon</span>!",
        aboutIntro: "I'm a VFX Artist and Roblox Developer who is also learning Web Development.",
        aboutRobloxTitle: "Roblox Studio",
        aboutRobloxDesc: "I enjoy making games, systems, gameplay, and all kinds of mechanics using Roblox Studio and Lua.",
        aboutVfxTitle: "VFX",
        aboutVfxDesc: "I'm also into making visual effects like particles, energy effects, trails, and more.",
        aboutBlenderTitle: "Blender",
        aboutBlenderDesc: "I use Blender to learn how to make 3D models and simple assets.",
        aboutWebTitle: "Web Development",
        aboutWebDesc: "I'm a beginner in Web Development, learning HTML, CSS, and JavaScript to build websites.",
        aboutLearningTitle: "✦ Still Learning",
        aboutLearningDesc: "I keep learning and improving my skills. I want to understand more about VFX, game development, 3D modeling, and Web Development.",
        backHome: "← Back to Home",

        favLabel: "✦ FAVORITE FOOD",
        favTitle: "Pizza!",
        favDesc: "My favorite food is pizza. It tastes best while making VFX or playing Roblox 😄",
        favHint: "👆 Try clicking the pizza!",
        pizzaTitle: "Click me!",
        pizzaToast: "🍕 It's raining pizza!",

        footer: "Made by Leon © 2026",

        copied: "✅ Copied:",
        clipboardError: "⚠️ Clipboard unavailable",

        greetMorning: "Good morning! ☀️",
        greetMidday: "Good day! 🌤️",
        greetAfternoon: "Good afternoon! 🌇",
        greetNight: "Good evening! 🌙",
        welcomeBack: "Welcome back 👋",
        firstVisit: "Thanks for visiting 👋",

        themeLight: "☀️ Light mode",
        themeDark: "🌙 Dark mode",
        accentChanged: "🎨 Theme color:",
        colors: { blue: "Blue", purple: "Purple", green: "Green", pink: "Pink", orange: "Orange" },

        langLabel: "Choose language",
        titleTheme: "Switch mode (T)",
        titleAccent: "Change color (C)",
        titleHelp: "Keyboard shortcuts (?)",
        titleTop: "Back to top",

        helpTitle: "⌨️ Keyboard Shortcuts",
        helpTheme: "Switch light / dark mode",
        helpAccent: "Change theme color",
        helpLang: "Change language",
        helpHelp: "Open / close this panel",
        helpSecret: "Secret… try typing <b>vfx</b> 👀",
        helpClose: "Close",

        powerUp: "⚡ POWER UP! You found the secret!"
    },


    /* ==================================================
       MANDARIN
    ================================================== */

    zh: {
        headerDesc: "• VFX 艺术家、Roblox 开发者 & Web 开发初学者",
        home: "首页",
        about: "关于我",

        welcome: "✦ 欢迎来到我的作品集",
        heroName: "我是 <span>Leon</span>",
        roles: ["VFX 艺术家", "Roblox 开发者", "3D 建模师", "Web 开发初学者"],
        heroDesc: "我制作视觉特效、Roblox 游戏、3D 资产和简单的网站。我还在学习 Web 开发，并不断尝试制作各种创意项目。",
        viewSkills: "查看我的技能 →",
        aboutButton: "关于我",

        workTitle: "✦ 我的工作",
        workDesc: "一些我喜欢并正在学习的领域。",
        vfxTitle: "VFX 艺术家",
        vfxDesc: "为 Roblox 项目制作粒子、能量效果、拖尾以及各种视觉特效。",
        robloxTitle: "Roblox 开发者",
        robloxDesc: "在 Roblox 中制作游戏、系统、玩法、游戏机制和互动体验。",
        blenderTitle: "3D 建模",
        blenderDesc: "使用 Blender 制作简单的 3D 模型和各种资产。",
        webTitle: "Web 开发",
        webDesc: "我正在学习 Web 开发，还是初学者。我使用 HTML、CSS 和 JavaScript 制作简单的网站。",
        copyPrefix: "复制：",
        previewButton: "🖼️ 预览",
        previewClose: "关闭",

        learningTitle: "✦ 不断学习与成长",
        learningDesc: "我仍在不断学习 VFX、Roblox Studio、Blender 和 Web 开发。我希望不断提升自己的能力，创作出更好的作品。",
        learnMore: "进一步了解我 →",

        aboutLabel: "✦ 关于我",
        aboutTitle: "你好，我是 <span>Leon</span>！",
        aboutIntro: "我是一名 VFX 艺术家和 Roblox 开发者，同时也在学习 Web 开发。",
        aboutRobloxTitle: "Roblox Studio",
        aboutRobloxDesc: "我喜欢使用 Roblox Studio 和 Lua 制作游戏、系统、玩法和各种机制。",
        aboutVfxTitle: "VFX",
        aboutVfxDesc: "我也对制作视觉特效很感兴趣，例如粒子、能量效果、拖尾等各种效果。",
        aboutBlenderTitle: "Blender",
        aboutBlenderDesc: "我使用 Blender 学习制作 3D 模型和简单的资产。",
        aboutWebTitle: "Web 开发",
        aboutWebDesc: "我在 Web 开发方面还是初学者，正在学习 HTML、CSS 和 JavaScript 来制作网站。",
        aboutLearningTitle: "✦ 仍在学习中",
        aboutLearningDesc: "我仍在不断学习和提升自己的能力。我想更多地了解 VFX、游戏开发、3D 建模和 Web 开发。",
        backHome: "← 返回首页",

        favLabel: "✦ 最喜欢的食物",
        favTitle: "披萨！",
        favDesc: "我最喜欢的食物是披萨。一边制作 VFX 或玩 Roblox 一边吃最棒了 😄",
        favHint: "👆 试着点击披萨！",
        pizzaTitle: "点我！",
        pizzaToast: "🍕 下披萨雨啦！",

        footer: "由 Leon 制作 © 2026",

        copied: "✅ 已复制：",
        clipboardError: "⚠️ 剪贴板不可用",

        greetMorning: "早上好！☀️",
        greetMidday: "中午好！🌤️",
        greetAfternoon: "下午好！🌇",
        greetNight: "晚上好！🌙",
        welcomeBack: "欢迎回来 👋",
        firstVisit: "感谢你的来访 👋",

        themeLight: "☀️ 浅色模式",
        themeDark: "🌙 深色模式",
        accentChanged: "🎨 主题颜色：",
        colors: { blue: "蓝色", purple: "紫色", green: "绿色", pink: "粉色", orange: "橙色" },

        langLabel: "选择语言",
        titleTheme: "切换模式 (T)",
        titleAccent: "切换颜色 (C)",
        titleHelp: "键盘快捷键 (?)",
        titleTop: "返回顶部",

        helpTitle: "⌨️ 键盘快捷键",
        helpTheme: "切换浅色 / 深色模式",
        helpAccent: "切换主题颜色",
        helpLang: "切换语言",
        helpHelp: "打开 / 关闭此面板",
        helpSecret: "秘密……试着输入 <b>vfx</b> 👀",
        helpClose: "关闭",

        powerUp: "⚡ 能量爆发！你发现了秘密！"
    }
};


/* Urutan bahasa (untuk tombol L) */

const languageOrder = ["id", "en", "zh"];

let currentLanguage = store.get("language", "id");

if (!translations[currentLanguage]) {
    currentLanguage = "id";
}


/* Ambil teks dari bahasa yang sedang aktif */

function t(key) {
    return translations[currentLanguage][key];
}


/* ==================================================
   TOAST NOTIFICATION
   Pesan kecil yang muncul di bawah layar.
================================================== */

const toastContainer = document.createElement("div");

toastContainer.id = "toastContainer";
toastContainer.setAttribute("aria-live", "polite");

document.body.appendChild(toastContainer);


function showToast(message) {

    /* Maksimal 3 toast sekaligus */
    while (toastContainer.children.length >= 3) {
        toastContainer.firstChild.remove();
    }

    const toast = document.createElement("div");

    toast.className = "toast";
    toast.innerHTML = message;

    toastContainer.appendChild(toast);

    setTimeout(function () {

        toast.classList.add("leaving");

        setTimeout(function () {
            toast.remove();
        }, 300);

    }, 2600);
}


/* ==================================================
   CHANGE LANGUAGE
================================================== */

function changeLanguage(language) {

    if (!translations[language]) {
        language = "id";
    }

    currentLanguage = language;


    /* Ganti semua teks yang mempunyai data-id */

    document.querySelectorAll("[data-id]").forEach(function (element) {

        const text = translations[language][element.getAttribute("data-id")];

        if (typeof text === "string") {
            element.innerHTML = text;
        }
    });


    /* Ganti tooltip (title) dan aria-label */

    document.querySelectorAll("[data-title-id]").forEach(function (element) {

        const text = translations[language][element.getAttribute("data-title-id")];

        if (text) {
            element.title = text;
            element.setAttribute("aria-label", text);
        }
    });


    /* Tombol copy: "Salin: Roblox Studio" */

    document.querySelectorAll("[data-copy]").forEach(function (button) {

        if (!button.classList.contains("is-copied")) {
            button.textContent = t("copyPrefix") + " " + button.dataset.copy;
        }
    });


    /* Tooltip titik warna */

    document.querySelectorAll(".accent-dot").forEach(function (dot) {

        const name = t("colors")[dot.dataset.accent];

        dot.title = name;
        dot.setAttribute("aria-label", name);
    });


    /* Mulai ulang efek mengetik dengan bahasa baru */

    startTypewriter(t("roles"));


    /* Perbarui panel bantuan */

    buildHelpPanel();


    /* Tombol tutup pop-up preview mengikuti bahasa */

    const previewCloseButton = document.getElementById("previewClose");

    if (previewCloseButton) {
        previewCloseButton.setAttribute("aria-label", t("previewClose"));
        previewCloseButton.title = t("previewClose");
    }


    store.set("language", language);

    document.documentElement.lang = language === "zh" ? "zh-CN" : language;


    if (languageSelect) {
        languageSelect.value = language;
    }
}


/* ==================================================
   TYPEWRITER
   Mengetik peran Leon satu per satu.
================================================== */

let typeToken = 0;

function startTypewriter(roles) {

    const typedText = document.getElementById("typedText");
    const heading = document.getElementById("typewriter");

    if (!typedText || !heading) {
        return;
    }

    /* Untuk pembaca layar: baca semua peran sekaligus */
    heading.setAttribute("aria-label", roles.join(", "));

    /* Token baru membatalkan animasi lama */
    const token = ++typeToken;

    if (reduceMotion) {
        typedText.textContent = roles.join(" • ");
        return;
    }

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function step() {

        if (token !== typeToken) {
            return;
        }

        const word = roles[roleIndex];

        if (!deleting) {

            charIndex++;
            typedText.textContent = word.slice(0, charIndex);

            if (charIndex === word.length) {
                deleting = true;
                setTimeout(step, 1700);
                return;
            }

            setTimeout(step, 75);

        } else {

            charIndex--;
            typedText.textContent = word.slice(0, charIndex);

            if (charIndex === 0) {
                deleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
                setTimeout(step, 350);
                return;
            }

            setTimeout(step, 35);
        }
    }

    typedText.textContent = "";

    step();
}


/* ==================================================
   HELP PANEL (PINTASAN KEYBOARD)
================================================== */

const helpOverlay = document.createElement("div");

helpOverlay.id = "helpOverlay";
helpOverlay.setAttribute("role", "dialog");
helpOverlay.setAttribute("aria-modal", "true");

document.body.appendChild(helpOverlay);


function buildHelpPanel() {

    helpOverlay.innerHTML = `
        <div class="help-panel">
            <h2>${t("helpTitle")}</h2>
            <ul>
                <li><kbd>T</kbd> ${t("helpTheme")}</li>
                <li><kbd>C</kbd> ${t("helpAccent")}</li>
                <li><kbd>L</kbd> ${t("helpLang")}</li>
                <li><kbd>?</kbd> ${t("helpHelp")}</li>
                <li><kbd>🤫</kbd> ${t("helpSecret")}</li>
            </ul>
            <button class="main-button" id="helpClose">${t("helpClose")}</button>
        </div>
    `;

    helpOverlay.querySelector("#helpClose").addEventListener("click", closeHelp);
}


let lastFocus = null;

function openHelp() {
    lastFocus = document.activeElement;
    helpOverlay.classList.add("open");
    helpOverlay.querySelector("#helpClose").focus();
}

function closeHelp() {
    helpOverlay.classList.remove("open");
    if (lastFocus) {
        lastFocus.focus();
    }
}

function toggleHelp() {
    if (helpOverlay.classList.contains("open")) {
        closeHelp();
    } else {
        openHelp();
    }
}


/* Klik di luar panel = tutup */

helpOverlay.addEventListener("click", function (event) {
    if (event.target === helpOverlay) {
        closeHelp();
    }
});


const helpToggle = document.getElementById("helpToggle");

if (helpToggle) {
    helpToggle.addEventListener("click", toggleHelp);
}


/* ==================================================
   LANGUAGE SELECTOR
================================================== */

const languageSelect = document.getElementById("languageSelect");

if (languageSelect) {

    languageSelect.addEventListener("change", function () {
        changeLanguage(this.value);
    });
}


function nextLanguage() {

    const index = languageOrder.indexOf(currentLanguage);

    changeLanguage(languageOrder[(index + 1) % languageOrder.length]);
}


/* ==================================================
   THEME SWITCH (LIGHT / DARK)
   Saklar geser dengan matahari & bulan.
================================================== */

const themeSwitch = document.getElementById("themeSwitch");


function applyTheme(theme) {

    const dark = theme === "dark";

    document.body.classList.toggle("dark", dark);

    if (themeSwitch) {
        themeSwitch.setAttribute("aria-checked", dark ? "true" : "false");
    }

    store.set("theme", theme);
}


/*
   Tema awal:
   1. Pilihan yang tersimpan
   2. Kalau belum ada, ikuti pengaturan perangkat
*/

const savedTheme = store.get(
    "theme",
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
);

applyTheme(savedTheme);


function toggleTheme() {

    const dark = !document.body.classList.contains("dark");

    applyTheme(dark ? "dark" : "light");

    showToast(dark ? t("themeDark") : t("themeLight"));

}


if (themeSwitch) {
    themeSwitch.addEventListener("click", toggleTheme);
}


/* ==================================================
   ACCENT COLOR (WARNA TEMA)
================================================== */

const accentHues = {
    blue: 200,
    purple: 265,
    green: 150,
    pink: 330,
    orange: 25
};

const accentOrder = Object.keys(accentHues);

let currentAccent = store.get("accent", "blue");

if (!accentHues[currentAccent]) {
    currentAccent = "blue";
}


const accentButton = document.getElementById("accentButton");
const accentMenu = document.getElementById("accentMenu");


function applyAccent(name, announce) {

    currentAccent = name;

    document.documentElement.style.setProperty("--hue", accentHues[name]);

    document.querySelectorAll(".accent-dot").forEach(function (dot) {
        dot.classList.toggle("active", dot.dataset.accent === name);
    });

    store.set("accent", name);

    if (announce) {
        showToast(t("accentChanged") + " " + t("colors")[name]);
    }
}


applyAccent(currentAccent, false);


function nextAccent() {

    const index = accentOrder.indexOf(currentAccent);

    applyAccent(accentOrder[(index + 1) % accentOrder.length], true);
}


function setAccentMenu(open) {

    if (!accentMenu || !accentButton) {
        return;
    }

    accentMenu.classList.toggle("open", open);
    accentButton.setAttribute("aria-expanded", open ? "true" : "false");
}


if (accentButton && accentMenu) {

    accentButton.addEventListener("click", function (event) {
        event.stopPropagation();
        setAccentMenu(!accentMenu.classList.contains("open"));
    });


    accentMenu.querySelectorAll(".accent-dot").forEach(function (dot) {

        dot.addEventListener("click", function (event) {
            event.stopPropagation();
            applyAccent(dot.dataset.accent, true);
            setAccentMenu(false);
        });
    });


    /* Klik di tempat lain = tutup menu */

    document.addEventListener("click", function () {
        setAccentMenu(false);
    });
}


/* ==================================================
   SCROLL PROGRESS BAR
================================================== */

const scrollProgress = document.createElement("div");

scrollProgress.id = "scrollProgress";

document.body.appendChild(scrollProgress);


function updateScrollProgress() {

    const max = document.documentElement.scrollHeight - window.innerHeight;
    const progress = max > 0 ? window.scrollY / max : 0;

    scrollProgress.style.transform = "scaleX(" + progress + ")";
}


/* ==================================================
   AURORA BACKGROUND
   Cahaya warna-warni lembut yang bergerak
   pelan di belakang website.
================================================== */

const aurora = document.createElement("div");

aurora.className = "aurora";
aurora.setAttribute("aria-hidden", "true");
aurora.innerHTML =
    '<span class="blob b1"></span>' +
    '<span class="blob b2"></span>' +
    '<span class="blob b3"></span>';

document.body.prepend(aurora);


/* ==================================================
   BINTANG MELAYANG
   Bintang ✦ kecil yang naik pelan di hero.
================================================== */

document.querySelectorAll(".hero, .about-page").forEach(function (box) {

    const layer = document.createElement("div");

    layer.className = "float-layer";
    layer.setAttribute("aria-hidden", "true");

    for (let i = 0; i < 14; i++) {

        const star = document.createElement("span");

        star.className = "float-star";
        star.textContent = Math.random() < 0.5 ? "✦" : "•";

        /* Posisi, ukuran, dan kecepatan acak */
        star.style.left = (Math.random() * 100).toFixed(1) + "%";
        star.style.fontSize = (8 + Math.random() * 14).toFixed(0) + "px";
        star.style.animationDuration = (7 + Math.random() * 8).toFixed(1) + "s";
        star.style.animationDelay = (-Math.random() * 15).toFixed(1) + "s";

        layer.appendChild(star);
    }

    box.prepend(layer);
});


/* ==================================================
   HUJAN PIZZA 🍕
================================================== */

const pizzaButton = document.getElementById("pizzaButton");

if (pizzaButton) {

    pizzaButton.addEventListener("click", function () {

        /* Pizza berputar */
        pizzaButton.classList.remove("spin");
        void pizzaButton.offsetWidth;   /* restart animasi */
        pizzaButton.classList.add("spin");

        showToast(t("pizzaToast"));

        if (reduceMotion) {
            return;
        }

        /* 18 potong pizza jatuh dari atas layar */

        for (let i = 0; i < 18; i++) {

            const slice = document.createElement("span");

            slice.className = "pizza-drop";
            slice.textContent = "🍕";
            slice.setAttribute("aria-hidden", "true");

            slice.style.left = (Math.random() * 100).toFixed(1) + "vw";
            slice.style.fontSize = (22 + Math.random() * 22).toFixed(0) + "px";
            slice.style.animationDuration = (1.8 + Math.random() * 1.6).toFixed(2) + "s";
            slice.style.animationDelay = (Math.random() * 0.6).toFixed(2) + "s";
            slice.style.setProperty("--spin", (Math.random() * 720 - 360).toFixed(0) + "deg");

            document.body.appendChild(slice);

            slice.addEventListener("animationend", function () {
                slice.remove();
            });
        }
    });
}


/* ==================================================
   3D TILT CARDS
   Kartu miring mengikuti posisi mouse.
================================================== */

if (finePointer && !reduceMotion) {

    document.querySelectorAll(".info-box, .about-card").forEach(function (card) {

        card.addEventListener("mousemove", function (event) {

            const box = card.getBoundingClientRect();

            const x = (event.clientX - box.left) / box.width;
            const y = (event.clientY - box.top) / box.height;

            const rotateY = (x - 0.5) * 12;
            const rotateX = (0.5 - y) * 12;

            card.style.transform =
                `perspective(700px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-7px)`;

            /* Posisi kilau cahaya */
            card.style.setProperty("--mx", (x * 100).toFixed(1) + "%");
            card.style.setProperty("--my", (y * 100).toFixed(1) + "%");
        });


        card.addEventListener("mouseleave", function () {
            card.style.transform = "";
        });
    });
}


/* ==================================================
   SCROLL REVEAL
================================================== */

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                revealObserver.unobserve(entry.target);
            }
        });

    }, { threshold: 0.15 });


    revealElements.forEach(function (element) {
        revealObserver.observe(element);
    });

} else {

    revealElements.forEach(function (element) {
        element.classList.add("visible");
    });
}


/* ==================================================
   COPY FUNCTION
================================================== */

async function copyText(text, button) {

    try {

        if (navigator.clipboard && window.isSecureContext) {

            await navigator.clipboard.writeText(text);

        } else {

            /* Cara lama untuk browser tanpa Clipboard API */

            const textarea = document.createElement("textarea");

            textarea.value = text;
            textarea.style.position = "fixed";
            textarea.style.opacity = "0";

            document.body.appendChild(textarea);

            textarea.select();

            const ok = document.execCommand("copy");

            textarea.remove();

            if (!ok) {
                throw new Error("execCommand failed");
            }
        }


        showToast(t("copied") + " <b>" + text + "</b>");



        /* Tanda centang sementara */

        button.classList.add("is-copied");
        button.textContent = "✅ " + text;

        setTimeout(function () {
            button.classList.remove("is-copied");
            button.textContent = t("copyPrefix") + " " + button.dataset.copy;
        }, 2000);

    } catch (error) {

        console.error("Copy error:", error);

        showToast(t("clipboardError"));
    }
}


/* Semua tombol yang punya data-copy */

document.querySelectorAll("[data-copy]").forEach(function (button) {

    button.addEventListener("click", function () {
        copyText(button.dataset.copy, button);
    });
});


/* ==================================================
   PREVIEW IMAGE POP-UP 🖼️ (BARU)
   Klik tombol Preview = gambar muncul di tengah layar.
   Gambar ada di: images/vfx-preview.png
================================================== */

const previewModal = document.getElementById("previewModal");
const previewOpen = document.getElementById("previewOpen");
const previewClose = document.getElementById("previewClose");


function setPreview(open) {

    if (!previewModal) {
        return;
    }

    previewModal.classList.toggle("open", open);

    if (open && previewClose) {
        previewClose.focus();
    } else if (!open && previewOpen) {
        previewOpen.focus();
    }
}


/* Klik tombol Preview = buka */

if (previewOpen) {
    previewOpen.addEventListener("click", function () {
        setPreview(true);
    });
}


/* Klik tombol ✕ = tutup */

if (previewClose) {
    previewClose.addEventListener("click", function () {
        setPreview(false);
    });
}


/* Klik di luar gambar = tutup */

if (previewModal) {
    previewModal.addEventListener("click", function (event) {
        if (event.target === previewModal) {
            setPreview(false);
        }
    });
}


/* Tekan Esc = tutup */

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && previewModal && previewModal.classList.contains("open")) {
        setPreview(false);
    }
});


/* ==================================================
   BACK TO TOP
================================================== */

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    backToTop.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: reduceMotion ? "auto" : "smooth"
        });
    });
}


/* Satu event scroll untuk progress bar + tombol ke atas */

window.addEventListener("scroll", function () {

    updateScrollProgress();

    if (backToTop) {
        backToTop.classList.toggle("show", window.scrollY > 400);
    }

}, { passive: true });


/* ==================================================
   SMOOTH ANCHOR SCROLL
================================================== */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: reduceMotion ? "auto" : "smooth",
                block: "start"
            });
        }
    });
});


/* ==================================================
   EASTER EGG: POWER UP ⚡
   Ketik "vfx" di mana saja.
================================================== */

function powerUp() {

    showToast(t("powerUp"));

    if (reduceMotion) {
        return;
    }

    document.body.classList.add("power-up");

    setTimeout(function () {
        document.body.classList.remove("power-up");
    }, 3500);
}


/* ==================================================
   KEYBOARD SHORTCUTS
================================================== */

let secretBuffer = "";

document.addEventListener("keydown", function (event) {

    /* Jangan ganggu kalau sedang menekan Ctrl / Cmd / Alt */
    if (event.ctrlKey || event.metaKey || event.altKey) {
        return;
    }

    /* Jangan ganggu kalau sedang mengetik di input */
    const tag = event.target.tagName;

    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || event.target.isContentEditable) {
        return;
    }


    const key = event.key.toLowerCase();


    /* Kode rahasia */

    if (key.length === 1) {

        secretBuffer = (secretBuffer + key).slice(-3);

        if (secretBuffer === "vfx") {
            secretBuffer = "";
            powerUp();
            return;
        }
    }


    if (key === "escape") {
        closeHelp();
        setAccentMenu(false);
        return;
    }


    /* Saat panel bantuan atau preview terbuka, hanya ? yang aktif */

    const previewOpened = previewModal && previewModal.classList.contains("open");

    if (previewOpened) {
        return;
    }

    if (helpOverlay.classList.contains("open") && key !== "?") {
        return;
    }


    switch (key) {

        case "t":
            toggleTheme();
            break;

        case "c":
            nextAccent();
            break;

        case "l":
            nextLanguage();

            if (languageSelect) {
                showToast("🌐 " + languageSelect.options[languageSelect.selectedIndex].text);
            }
            break;

        case "?":
        case "h":
            toggleHelp();
            break;
    }
});


/* ==================================================
   START
================================================== */

changeLanguage(currentLanguage);

updateScrollProgress();


/* Sapaan sesuai jam (sekali per kunjungan) */

(function greet() {

    let greeted = false;

    try {
        greeted = sessionStorage.getItem("greeted") === "yes";
        sessionStorage.setItem("greeted", "yes");
    } catch (error) {
        /* Abaikan */
    }

    if (greeted) {
        return;
    }

    const hour = new Date().getHours();

    let greeting;

    if (hour >= 4 && hour < 11) {
        greeting = t("greetMorning");
    } else if (hour >= 11 && hour < 15) {
        greeting = t("greetMidday");
    } else if (hour >= 15 && hour < 18) {
        greeting = t("greetAfternoon");
    } else {
        greeting = t("greetNight");
    }

    const visited = store.get("visited", "no") === "yes";

    store.set("visited", "yes");

    setTimeout(function () {
        showToast(greeting + " " + (visited ? t("welcomeBack") : t("firstVisit")));
    }, 700);

})();


/* ==================================================
   CONSOLE
================================================== */

console.log("✦ Leon Portfolio berhasil dimuat!");
console.log("VFX Artist & Roblox Developer");
console.log("Psst… coba ketik 'vfx' di halaman 👀");
