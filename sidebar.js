/* =========================================================
   MPGB HARDWARE PORTAL - DYNAMIC SIDEBAR
   ========================================================= */

(function () {

    "use strict";

    /* ================= CONFIG ================= */

    var MENU = [

        {
            id: "dashboard",
            title: "Dashboard",
            icon: "⌂",
            url: "index.html"
        },

        {
            id: "add",
            title: "Add Hardware",
            icon: "＋",
            url: "add-hardware.html"
        },

        {
            id: "records",
            title: "Hardware Records",
            icon: "▣",
            url: "records.html"
        },

        {
            id: "edit",
            title: "Edit / Update",
            icon: "✎",
            url: "edit-hardware.html"
        },

        {
            id: "branch",
            title: "Branch Summary",
            icon: "▥",
            url: "branch-summary.html"
        },

        {
            id: "hardware",
            title: "Hardware Summary",
            icon: "◈",
            url: "hardware-summary.html"
        },

        {
            id: "reports",
            title: "Reports",
            icon: "▤",
            url: "reports.html"
        }

    ];


    /* ================= CREATE SIDEBAR ================= */

    function createSidebar() {

        var oldSidebar =
            document.querySelector(".mpgb-sidebar");

        if (oldSidebar) {
            oldSidebar.remove();
        }


        var sidebar =
            document.createElement("aside");

        sidebar.className =
            "mpgb-sidebar";


        sidebar.innerHTML = `

            <div class="sidebar-top">

                <div class="brand">

                    <div class="brand-logo">
                        <span>MP</span>
                    </div>

                    <div class="brand-text">

                        <strong>MPGB</strong>

                        <small>
                            Hardware Management
                        </small>

                    </div>

                </div>


                <button
                    class="sidebar-toggle"
                    id="sidebarToggle"
                    title="Collapse Sidebar">

                    <span>‹</span>

                </button>

            </div>


            <div class="sidebar-clock">

                <div
                    class="clock-time"
                    id="mpgbClock">

                    --:--:--

                </div>

                <div
                    class="clock-date"
                    id="mpgbDate">

                    Loading...

                </div>

            </div>


            <div class="menu-title">
                MAIN MENU
            </div>


            <nav
                class="mpgb-menu"
                id="mpgbMenu">

            </nav>


            <div class="sidebar-bottom">

                <div class="system-status">

                    <span class="status-dot"></span>

                    <span>
                        System Online
                    </span>

                </div>


                <div class="developer">

                    <div class="developer-icon">
                        S
                    </div>

                    <div class="developer-text">

                        <strong>
                            MPGB IT Department
                        </strong>

                        <small>
                            Hardware Portal
                        </small>

                    </div>

                </div>

            </div>

        `;


        document.body.prepend(sidebar);


        createMenu();

        addStyles();

        setupSidebar();

        updateClock();

        setInterval(
            updateClock,
            1000
        );

    }


    /* ================= CREATE MENU ================= */

    function createMenu() {

        var menu =
            document.getElementById(
                "mpgbMenu"
            );


        if (!menu) return;


        var current =
            getCurrentPage();


        MENU.forEach(
            function (item) {

                var link =
                    document.createElement("a");


                link.href =
                    item.url;


                link.className =
                    "mpgb-menu-item";


                link.setAttribute(
                    "data-page",
                    item.id
                );


                link.setAttribute(
                    "title",
                    item.title
                );


                if (
                    current ===
                    item.url.toLowerCase()
                ) {

                    link.classList.add(
                        "active"
                    );

                }


                link.innerHTML = `

                    <span class="menu-icon">
                        ${item.icon}
                    </span>

                    <span class="menu-label">
                        ${item.title}
                    </span>

                    <span class="menu-arrow">
                        ›
                    </span>

                `;


                menu.appendChild(link);

            }
        );

    }


    /* ================= CURRENT PAGE ================= */

    function getCurrentPage() {

        var page =
            window.location.pathname
                .split("/")
                .pop()
                .toLowerCase();


        if (!page) {
            page = "index.html";
        }


        return page;

    }


    /* ================= CLOCK ================= */

    function updateClock() {

        var now =
            new Date();


        var time =
            now.toLocaleTimeString(
                "en-IN",
                {
                    hour12: true,
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit"
                }
            );


        var date =
            now.toLocaleDateString(
                "en-IN",
                {
                    weekday: "short",
                    day: "2-digit",
                    month: "short",
                    year: "numeric"
                }
            );


        var clock =
            document.getElementById(
                "mpgbClock"
            );


        var dateBox =
            document.getElementById(
                "mpgbDate"
            );


        if (clock) {
            clock.innerText =
                time;
        }


        if (dateBox) {
            dateBox.innerText =
                date;
        }

    }


    /* ================= SIDEBAR SETUP ================= */

    function setupSidebar() {

        var sidebar =
            document.querySelector(
                ".mpgb-sidebar"
            );


        var toggle =
            document.getElementById(
                "sidebarToggle"
            );


        if (!sidebar || !toggle)
            return;


        /* Desktop collapse */

        toggle.addEventListener(
            "click",
            function () {

                document.body
                    .classList.toggle(
                        "sidebar-collapsed"
                    );


                var collapsed =
                    document.body
                        .classList.contains(
                            "sidebar-collapsed"
                        );


                localStorage.setItem(
                    "mpgb_sidebar_collapsed",
                    collapsed
                );


                toggle.innerHTML =
                    collapsed
                        ? "<span>›</span>"
                        : "<span>‹</span>";

            }
        );


        /* Restore state */

        var saved =
            localStorage.getItem(
                "mpgb_sidebar_collapsed"
            );


        if (
            saved === "true" &&
            window.innerWidth > 800
        ) {

            document.body.classList.add(
                "sidebar-collapsed"
            );

            toggle.innerHTML =
                "<span>›</span>";

        }


        /* Mobile */

        document.addEventListener(
            "click",
            function (event) {

                if (
                    window.innerWidth <= 800 &&
                    sidebar.classList.contains(
                        "mobile-open"
                    )
                ) {

                    if (
                        !sidebar.contains(
                            event.target
                        )
                    ) {

                        sidebar.classList.remove(
                            "mobile-open"
                        );

                    }

                }

            }
        );

    }


    /* ================= CSS ================= */

    function addStyles() {

        if (
            document.getElementById(
                "mpgbSidebarCSS"
            )
        ) {
            return;
        }


        var style =
            document.createElement("style");


        style.id =
            "mpgbSidebarCSS";


        style.innerHTML = `

        /* =====================================
           SIDEBAR
        ===================================== */

        .mpgb-sidebar {

            position: fixed;

            left: 0;
            top: 0;

            width: 255px;
            height: 100vh;

            background:
                linear-gradient(
                    180deg,
                    #004d00 0%,
                    #006400 45%,
                    #004d00 100%
                );

            color: #fff;

            z-index: 9999;

            padding: 18px 13px;

            display: flex;

            flex-direction: column;

            box-shadow:
                4px 0 20px
                rgba(0,0,0,.15);

            transition:
                width .3s ease,
                transform .3s ease;

        }


        /* =====================================
           TOP
        ===================================== */

        .sidebar-top {

            display: flex;

            align-items: center;

            justify-content: space-between;

            margin-bottom: 15px;

        }


        .brand {

            display: flex;

            align-items: center;

            gap: 10px;

        }


        .brand-logo {

            width: 43px;
            height: 43px;

            border-radius: 12px;

            background:
                linear-gradient(
                    135deg,
                    #ffffff,
                    #d9f5df
                );

            color: #006400;

            display: flex;

            align-items: center;
            justify-content: center;

            font-weight: 800;

            font-size: 15px;

            box-shadow:
                0 5px 15px
                rgba(0,0,0,.15);

        }


        .brand-text strong {

            display: block;

            font-size: 18px;

            letter-spacing: .5px;

        }


        .brand-text small {

            display: block;

            font-size: 9px;

            opacity: .75;

            margin-top: 2px;

        }


        /* =====================================
           TOGGLE
        ===================================== */

        .sidebar-toggle {

            width: 30px;
            height: 30px;

            border: 0;

            border-radius: 8px;

            background:
                rgba(255,255,255,.12);

            color: #fff;

            cursor: pointer;

            font-size: 23px;

            display: flex;

            align-items: center;
            justify-content: center;

            transition: .2s;

        }


        .sidebar-toggle:hover {

            background:
                rgba(255,255,255,.22);

            transform:
                scale(1.05);

        }


        /* =====================================
           CLOCK
        ===================================== */

        .sidebar-clock {

            background:
                rgba(255,255,255,.09);

            border:
                1px solid
                rgba(255,255,255,.08);

            border-radius: 12px;

            padding: 12px;

            margin-bottom: 18px;

            text-align: center;

        }


        .clock-time {

            font-size: 20px;

            font-weight: 700;

            letter-spacing: 1px;

        }


        .clock-date {

            font-size: 10px;

            opacity: .72;

            margin-top: 4px;

        }


        /* =====================================
           MENU TITLE
        ===================================== */

        .menu-title {

            font-size: 9px;

            letter-spacing: 1.5px;

            opacity: .55;

            padding:
                0 12px 8px;

        }


        /* =====================================
           MENU
        ===================================== */

        .mpgb-menu {

            display: flex;

            flex-direction: column;

            gap: 5px;

            overflow-y: auto;

            padding-right: 2px;

        }


        .mpgb-menu::-webkit-scrollbar {

            width: 3px;

        }


        .mpgb-menu::-webkit-scrollbar-thumb {

            background:
                rgba(255,255,255,.25);

            border-radius: 5px;

        }


        .mpgb-menu-item {

            position: relative;

            display: flex;

            align-items: center;

            gap: 12px;

            min-height: 46px;

            padding:
                10px 11px;

            border-radius: 11px;

            color: rgba(255,255,255,.82);

            text-decoration: none;

            font-size: 13px;

            transition:
                all .2s ease;

        }


        .mpgb-menu-item:hover {

            color: #fff;

            background:
                rgba(255,255,255,.10);

            transform:
                translateX(3px);

        }


        .mpgb-menu-item.active {

            color: #fff;

            background:
                linear-gradient(
                    90deg,
                    #008c45,
                    #007738
                );

            box-shadow:
                0 5px 15px
                rgba(0,0,0,.14);

        }


        .mpgb-menu-item.active::before {

            content: "";

            position: absolute;

            left: 0;
            top: 8px;
            bottom: 8px;

            width: 4px;

            border-radius:
                0 5px 5px 0;

            background: #fff;

        }


        .menu-icon {

            width: 32px;
            height: 32px;

            border-radius: 9px;

            background:
                rgba(255,255,255,.08);

            display: flex;

            align-items: center;
            justify-content: center;

            font-size: 17px;

            flex-shrink: 0;

        }


        .mpgb-menu-item.active
        .menu-icon {

            background:
                rgba(255,255,255,.18);

        }


        .menu-label {

            flex: 1;

            white-space: nowrap;

            overflow: hidden;

            text-overflow: ellipsis;

        }


        .menu-arrow {

            font-size: 20px;

            opacity: .35;

            transition: .2s;

        }


        .mpgb-menu-item:hover
        .menu-arrow {

            opacity: .9;

            transform:
                translateX(2px);

        }


        /* =====================================
           BOTTOM
        ===================================== */

        .sidebar-bottom {

            margin-top: auto;

            padding-top: 15px;

        }


        .system-status {

            display: flex;

            align-items: center;

            gap: 8px;

            padding:
                9px 11px;

            border-radius: 9px;

            background:
                rgba(255,255,255,.07);

            font-size: 10px;

            margin-bottom: 10px;

        }


        .status-dot {

            width: 7px;
            height: 7px;

            border-radius: 50%;

            background: #45e878;

            box-shadow:
                0 0 8px
                #45e878;

        }


        .developer {

            display: flex;

            align-items: center;

            gap: 9px;

            padding:
                10px;

            border-top:
                1px solid
                rgba(255,255,255,.1);

        }


        .developer-icon {

            width: 31px;
            height: 31px;

            border-radius: 50%;

            background:
                #ffffff;

            color: #006400;

            display: flex;

            align-items: center;
            justify-content: center;

            font-weight: bold;

        }


        .developer-text strong {

            display: block;

            font-size: 9px;

        }


        .developer-text small {

            display: block;

            font-size: 8px;

            opacity: .55;

            margin-top: 2px;

        }


        /* =====================================
           COLLAPSED
        ===================================== */

        body.sidebar-collapsed
        .mpgb-sidebar {

            width: 78px;

        }


        body.sidebar-collapsed
        .brand-text,

        body.sidebar-collapsed
        .clock-time,

        body.sidebar-collapsed
        .clock-date,

        body.sidebar-collapsed
        .menu-title,

        body.sidebar-collapsed
        .menu-label,

        body.sidebar-collapsed
        .menu-arrow,

        body.sidebar-collapsed
        .system-status span:not(.status-dot),

        body.sidebar-collapsed
        .developer-text {

            display: none;

        }


        body.sidebar-collapsed
        .brand {

            justify-content: center;

        }


        body.sidebar-collapsed
        .sidebar-top {

            justify-content: center;

            position: relative;

        }


        body.sidebar-collapsed
        .sidebar-toggle {

            position: absolute;

            right: -7px;

            top: 50px;

        }


        body.sidebar-collapsed
        .sidebar-clock {

            padding: 10px 5px;

        }


        body.sidebar-collapsed
        .mpgb-menu-item {

            justify-content: center;

            padding: 8px;

        }


        body.sidebar-collapsed
        .menu-icon {

            width: 40px;
            height: 40px;

        }


        body.sidebar-collapsed
        .developer {

            justify-content: center;

        }


        body.sidebar-collapsed
        .developer-icon {

            width: 36px;
            height: 36px;

        }


        /* =====================================
           MAIN CONTENT
        ===================================== */

        .main {

            margin-left: 255px;

            transition:
                margin-left .3s ease;

        }


        body.sidebar-collapsed
        .main {

            margin-left: 78px;

        }


        /* =====================================
           MOBILE
        ===================================== */

        @media(max-width:800px){

            .mpgb-sidebar {

                width: 75px;

                padding:
                    15px 8px;

            }


            .brand-text,
            .sidebar-clock,
            .menu-title,
            .menu-label,
            .menu-arrow,
            .system-status span:not(.status-dot),
            .developer-text {

                display: none;

            }


            .brand {

                justify-content: center;

            }


            .sidebar-toggle {

                display: none;

            }


            .mpgb-menu-item {

                justify-content: center;

                padding: 8px;

            }


            .menu-icon {

                width: 42px;
                height: 42px;

            }


            .main {

                margin-left: 75px;

            }


        }

        `;


        document.head.appendChild(
            style
        );

    }


    /* ================= INIT ================= */

    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            createSidebar
        );

    }
    else {

        createSidebar();

    }


})();
