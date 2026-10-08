/* =========================================================
   MPGB HARDWARE PORTAL - DYNAMIC SIDEBAR
   Clean Version
   ========================================================= */

(function () {

    "use strict";


    /* ================= MENU ================= */

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

        var old =
            document.querySelector(
                ".mpgb-sidebar"
            );

        if (old) {
            old.remove();
        }


        var sidebar =
            document.createElement(
                "aside"
            );


        sidebar.className =
            "mpgb-sidebar";


        sidebar.innerHTML = `

            <!-- BRAND -->

            <div class="sidebar-brand">

                <div class="brand-logo">
                    MP
                </div>

                <div class="brand-name">

                    <strong>
                        MPGB
                    </strong>

                    <small>
                        Hardware Management
                    </small>

                </div>

            </div>


            <!-- MENU TITLE -->

            <div class="menu-title">
                MAIN MENU
            </div>


            <!-- MENU -->

            <nav
                class="mpgb-menu"
                id="mpgbMenu">

            </nav>


            <!-- BOTTOM -->

            <div class="sidebar-footer">

                <div class="portal-status">

                    <span class="status-dot"></span>

                    <span>
                        MPGB Portal
                    </span>

                </div>

            </div>

        `;


        document.body.prepend(
            sidebar
        );


        createMenu();

        addStyles();

        setupSidebar();

    }


    /* ================= CREATE MENU ================= */

    function createMenu() {

        var menu =
            document.getElementById(
                "mpgbMenu"
            );


        if (!menu) {
            return;
        }


        var currentPage =
            getCurrentPage();


        MENU.forEach(
            function (item) {

                var link =
                    document.createElement(
                        "a"
                    );


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
                    currentPage ===
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


                menu.appendChild(
                    link
                );

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


    /* ================= SIDEBAR SETUP ================= */

    function setupSidebar() {

        /*
         * Restore collapsed state
         */

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

        }


        /*
         * Double click / mobile
         */

        var sidebar =
            document.querySelector(
                ".mpgb-sidebar"
            );


        if (!sidebar) {
            return;
        }


        /*
         * Desktop toggle
         * Click brand logo
         */

        var logo =
            sidebar.querySelector(
                ".brand-logo"
            );


        if (logo) {

            logo.addEventListener(
                "click",
                function () {

                    if (
                        window.innerWidth <= 800
                    ) {

                        return;

                    }


                    document.body.classList.toggle(
                        "sidebar-collapsed"
                    );


                    var collapsed =
                        document.body.classList.contains(
                            "sidebar-collapsed"
                        );


                    localStorage.setItem(
                        "mpgb_sidebar_collapsed",
                        collapsed
                    );

                }
            );

        }

    }


    /* =====================================================
       CSS
       ===================================================== */

    function addStyles() {

        if (
            document.getElementById(
                "mpgbSidebarCSS"
            )
        ) {

            return;

        }


        var style =
            document.createElement(
                "style"
            );


        style.id =
            "mpgbSidebarCSS";


        style.innerHTML = `


        /* ==========================================
           SIDEBAR
        ========================================== */

        .mpgb-sidebar {

            position:fixed;

            left:0;
            top:0;

            width:255px;
            height:100vh;

            background:
                linear-gradient(
                    180deg,
                    #004d00 0%,
                    #006400 50%,
                    #005500 100%
                );

            color:#fff;

            padding:20px 13px;

            z-index:9999;

            display:flex;

            flex-direction:column;

            box-shadow:
                4px 0 22px
                rgba(0,0,0,.14);

            transition:
                width .3s ease;

        }


        /* ==========================================
           BRAND
        ========================================== */

        .sidebar-brand {

            display:flex;

            align-items:center;

            gap:11px;

            padding:
                3px 7px 20px;

        }


        .brand-logo {

            width:45px;
            height:45px;

            flex-shrink:0;

            border-radius:13px;

            background:
                linear-gradient(
                    135deg,
                    #fff,
                    #dff6e6
                );

            color:#006400;

            display:flex;

            align-items:center;

            justify-content:center;

            font-size:15px;

            font-weight:900;

            cursor:pointer;

            box-shadow:
                0 6px 15px
                rgba(0,0,0,.15);

            transition:.25s;

        }


        .brand-logo:hover {

            transform:
                scale(1.06)
                rotate(-2deg);

        }


        .brand-name strong {

            display:block;

            font-size:19px;

            letter-spacing:.5px;

        }


        .brand-name small {

            display:block;

            font-size:9px;

            color:
                rgba(255,255,255,.65);

            margin-top:3px;

        }


        /* ==========================================
           MENU TITLE
        ========================================== */

        .menu-title {

            padding:
                4px 13px 9px;

            font-size:9px;

            letter-spacing:1.6px;

            color:
                rgba(255,255,255,.48);

        }


        /* ==========================================
           MENU
        ========================================== */

        .mpgb-menu {

            display:flex;

            flex-direction:column;

            gap:4px;

            overflow-y:auto;

            padding:
                0 2px;

        }


        .mpgb-menu::-webkit-scrollbar {

            width:3px;

        }


        .mpgb-menu::-webkit-scrollbar-thumb {

            background:
                rgba(255,255,255,.2);

            border-radius:10px;

        }


        .mpgb-menu-item {

            position:relative;

            display:flex;

            align-items:center;

            gap:12px;

            min-height:47px;

            padding:
                8px 11px;

            border-radius:11px;

            color:
                rgba(255,255,255,.80);

            text-decoration:none;

            font-size:13px;

            transition:
                all .2s ease;

        }


        .mpgb-menu-item:hover {

            color:#fff;

            background:
                rgba(255,255,255,.10);

            transform:
                translateX(3px);

        }


        /* ==========================================
           ACTIVE
        ========================================== */

        .mpgb-menu-item.active {

            color:#fff;

            background:
                linear-gradient(
                    90deg,
                    #008c45,
                    #007c3d
                );

            box-shadow:
                0 5px 15px
                rgba(0,0,0,.13);

        }


        .mpgb-menu-item.active::before {

            content:"";

            position:absolute;

            left:0;

            top:8px;

            bottom:8px;

            width:4px;

            border-radius:
                0 5px 5px 0;

            background:#fff;

        }


        /* ==========================================
           ICON
        ========================================== */

        .menu-icon {

            width:34px;
            height:34px;

            flex-shrink:0;

            border-radius:9px;

            display:flex;

            align-items:center;

            justify-content:center;

            background:
                rgba(255,255,255,.08);

            font-size:17px;

            transition:.2s;

        }


        .mpgb-menu-item:hover
        .menu-icon {

            background:
                rgba(255,255,255,.14);

        }


        .mpgb-menu-item.active
        .menu-icon {

            background:
                rgba(255,255,255,.18);

        }


        /* ==========================================
           LABEL
        ========================================== */

        .menu-label {

            flex:1;

            white-space:nowrap;

            overflow:hidden;

            text-overflow:ellipsis;

        }


        /* ==========================================
           ARROW
        ========================================== */

        .menu-arrow {

            font-size:20px;

            opacity:.3;

            transition:.2s;

        }


        .mpgb-menu-item:hover
        .menu-arrow {

            opacity:.9;

            transform:
                translateX(2px);

        }


        /* ==========================================
           FOOTER
        ========================================== */

        .sidebar-footer {

            margin-top:auto;

            padding-top:14px;

        }


        .portal-status {

            display:flex;

            align-items:center;

            gap:9px;

            padding:
                11px 12px;

            border-radius:10px;

            background:
                rgba(255,255,255,.07);

            border:
                1px solid
                rgba(255,255,255,.06);

            font-size:10px;

            color:
                rgba(255,255,255,.75);

        }


        .status-dot {

            width:7px;
            height:7px;

            border-radius:50%;

            background:#48e879;

            box-shadow:
                0 0 8px
                rgba(72,232,121,.8);

        }


        /* ==========================================
           MAIN CONTENT
        ========================================== */

        .main {

            margin-left:255px;

            transition:
                margin-left .3s ease;

        }


        body.sidebar-collapsed
        .main {

            margin-left:78px;

        }


        /* ==========================================
           COLLAPSED
        ========================================== */

        body.sidebar-collapsed
        .mpgb-sidebar {

            width:78px;

        }


        body.sidebar-collapsed
        .brand-name,

        body.sidebar-collapsed
        .menu-title,

        body.sidebar-collapsed
        .menu-label,

        body.sidebar-collapsed
        .menu-arrow,

        body.sidebar-collapsed
        .portal-status span:not(.status-dot) {

            display:none;

        }


        body.sidebar-collapsed
        .sidebar-brand {

            justify-content:center;

        }


        body.sidebar-collapsed
        .mpgb-menu-item {

            justify-content:center;

            padding:
                7px;

        }


        body.sidebar-collapsed
        .menu-icon {

            width:40px;
            height:40px;

        }


        body.sidebar-collapsed
        .portal-status {

            justify-content:center;

            padding:12px 5px;

        }


        /* ==========================================
           MOBILE
        ========================================== */

        @media(max-width:800px){

            .mpgb-sidebar {

                width:72px;

                padding:
                    15px 8px;

            }


            .brand-name,
            .menu-title,
            .menu-label,
            .menu-arrow,
            .portal-status span:not(.status-dot) {

                display:none;

            }


            .sidebar-brand {

                justify-content:center;

                padding:
                    3px 0 20px;

            }


            .mpgb-menu-item {

                justify-content:center;

                padding:7px;

            }


            .menu-icon {

                width:42px;
                height:42px;

            }


            .portal-status {

                justify-content:center;

            }


            .main {

                margin-left:72px;

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
