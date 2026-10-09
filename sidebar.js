
(function () {

  "use strict";

  /* MPGB HARDWARE PORTAL - DYNAMIC SIDEBAR */

  var CONFIG = {
    brand: {
      short: "MP",
      title: "MPGB",
      subtitle: "Hardware Portal"
    },

    menu: [
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
        id: "bulk-entry-scan",
        title: "Bulk Entry + Scan",
        icon: "▤",
        url: "bulk-entry-scan.html"
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
        id: "branch-summary",
        title: "Branch Summary",
        icon: "▥",
        url: "branch-summary.html"
      },
      {
        id: "hardware-summary",
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
    ]
  };

  /* CURRENT PAGE */
  var currentPage = window.location.pathname
    .split("/")
    .pop()
    .toLowerCase();

  if (!currentPage) {
    currentPage = "index.html";
  }

  /* REMOVE OLD SIDEBAR */
  var oldSidebar = document.querySelector(".sidebar");
  if (oldSidebar) {
    oldSidebar.remove();
  }

  /* CREATE SIDEBAR */
  var sidebar = document.createElement("aside");
  sidebar.className = "mpgb-sidebar";

  sidebar.innerHTML = `
    <div class="mpgb-brand" id="mpgbBrand"
         title="Click to collapse sidebar">

      <div class="mpgb-logo">${CONFIG.brand.short}</div>

      <div class="mpgb-brand-text">
        <div class="mpgb-brand-title">${CONFIG.brand.title}</div>
        <div class="mpgb-brand-subtitle">${CONFIG.brand.subtitle}</div>
      </div>

      <div class="mpgb-collapse-icon">‹</div>
    </div>

    <nav class="mpgb-menu">
      ${CONFIG.menu.map(function (item) {
        var active = currentPage === item.url.toLowerCase()
          ? "active"
          : "";

        return `
          <a href="${item.url}"
             class="mpgb-menu-item ${active}"
             data-page="${item.url}"
             title="${item.title}">

            <span class="mpgb-menu-icon">${item.icon}</span>
            <span class="mpgb-menu-text">${item.title}</span>
            <span class="mpgb-active-arrow">›</span>
          </a>
        `;
      }).join("")}
    </nav>
  `;

  document.body.insertBefore(sidebar, document.body.firstChild);

  /* SIDEBAR CSS */
  var style = document.createElement("style");
  style.id = "mpgb-sidebar-style";

  style.textContent = `
    .mpgb-sidebar,
    .mpgb-sidebar * {
      box-sizing: border-box;
    }

    .mpgb-sidebar {
      position: fixed;
      left: 0;
      top: 0;
      width: 260px;
      height: 100vh;
      background: linear-gradient(180deg, #005b2a 0%, #006633 48%, #004c25 100%);
      color: #ffffff;
      z-index: 99999;
      display: flex;
      flex-direction: column;
      box-shadow: 5px 0 25px rgba(0,0,0,.12);
      transition: width .28s ease, transform .28s ease;
      overflow: hidden;
      font-family: Arial, Helvetica, sans-serif;
    }

    .mpgb-brand {
      height: 82px;
      min-height: 82px;
      display: flex;
      align-items: center;
      padding: 14px 16px;
      border-bottom: 1px solid rgba(255,255,255,.13);
      cursor: pointer;
      user-select: none;
      position: relative;
    }

    .mpgb-logo {
      width: 48px;
      height: 48px;
      min-width: 48px;
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #ffffff;
      color: #006633;
      font-size: 17px;
      font-weight: 800;
      letter-spacing: .5px;
      box-shadow: 0 5px 15px rgba(0,0,0,.18);
      transition: transform .25s ease;
    }

    .mpgb-brand:hover .mpgb-logo {
      transform: rotate(-4deg) scale(1.04);
    }

    .mpgb-brand-text {
      margin-left: 13px;
      white-space: nowrap;
      overflow: hidden;
      transition: opacity .2s ease, width .25s ease;
    }

    .mpgb-brand-title {
      font-size: 19px;
      font-weight: 800;
      letter-spacing: .5px;
    }

    .mpgb-brand-subtitle {
      font-size: 11px;
      opacity: .72;
      margin-top: 4px;
    }

    .mpgb-collapse-icon {
      margin-left: auto;
      width: 26px;
      height: 26px;
      border-radius: 7px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      background: rgba(255,255,255,.10);
      opacity: .7;
      transition: transform .25s ease, opacity .2s ease;
    }

    .mpgb-brand:hover .mpgb-collapse-icon {
      opacity: 1;
    }

    .mpgb-menu {
      padding: 18px 12px;
      display: flex;
      flex-direction: column;
      gap: 6px;
      overflow-y: auto;
      overflow-x: hidden;
      flex: 1;
    }

    .mpgb-menu::-webkit-scrollbar {
      width: 4px;
    }

    .mpgb-menu::-webkit-scrollbar-thumb {
      background: rgba(255,255,255,.20);
      border-radius: 10px;
    }

    .mpgb-menu-item {
      position: relative;
      height: 50px;
      min-height: 50px;
      display: flex;
      align-items: center;
      padding: 0 12px;
      border-radius: 12px;
      color: rgba(255,255,255,.82);
      text-decoration: none;
      transition: background .2s ease, color .2s ease,
                  transform .2s ease, box-shadow .2s ease;
    }

    .mpgb-menu-item:hover {
      color: #ffffff;
      background: rgba(255,255,255,.10);
      transform: translateX(3px);
    }

    .mpgb-menu-icon {
      width: 34px;
      height: 34px;
      min-width: 34px;
      border-radius: 9px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      background: rgba(255,255,255,.07);
      transition: background .2s ease, transform .2s ease;
    }

    .mpgb-menu-item:hover .mpgb-menu-icon {
      background: rgba(255,255,255,.15);
      transform: scale(1.05);
    }

    .mpgb-menu-text {
      margin-left: 11px;
      font-size: 13.5px;
      font-weight: 500;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      transition: opacity .2s ease;
    }

    .mpgb-menu-item.active {
      color: #006633;
      background: #ffffff;
      font-weight: 700;
      box-shadow: 0 5px 15px rgba(0,0,0,.13);
    }

    .mpgb-menu-item.active .mpgb-menu-icon {
      color: #006633;
      background: #e6f4ec;
    }

    .mpgb-menu-item.active::before {
      content: "";
      position: absolute;
      left: 0;
      top: 8px;
      bottom: 8px;
      width: 4px;
      border-radius: 0 5px 5px 0;
      background: #00a651;
    }

    .mpgb-active-arrow {
      margin-left: auto;
      font-size: 19px;
      opacity: 0;
      transform: translateX(-5px);
      transition: opacity .2s ease, transform .2s ease;
    }

    .mpgb-menu-item.active .mpgb-active-arrow {
      opacity: 1;
      transform: translateX(0);
    }

    /* COLLAPSED SIDEBAR */
    .mpgb-sidebar.collapsed {
      width: 78px;
    }

    .mpgb-sidebar.collapsed .mpgb-brand {
      justify-content: center;
      padding: 14px 10px;
    }

    .mpgb-sidebar.collapsed .mpgb-brand-text {
      width: 0;
      opacity: 0;
      margin: 0;
    }

    .mpgb-sidebar.collapsed .mpgb-collapse-icon {
      display: none;
    }

    .mpgb-sidebar.collapsed .mpgb-menu {
      padding: 18px 10px;
    }

    .mpgb-sidebar.collapsed .mpgb-menu-item {
      justify-content: center;
      padding: 0;
    }

    .mpgb-sidebar.collapsed .mpgb-menu-text {
      width: 0;
      opacity: 0;
      margin: 0;
    }

    .mpgb-sidebar.collapsed .mpgb-active-arrow {
      display: none;
    }

    .mpgb-sidebar.collapsed .mpgb-menu-item:hover {
      transform: translateX(0);
    }

    .mpgb-sidebar.collapsed .mpgb-menu-item::after {
      content: attr(title);
      position: absolute;
      left: 67px;
      top: 50%;
      transform: translateY(-50%) translateX(-5px);
      background: #1f2937;
      color: #ffffff;
      padding: 7px 10px;
      border-radius: 7px;
      font-size: 12px;
      white-space: nowrap;
      opacity: 0;
      pointer-events: none;
      transition: opacity .15s ease, transform .15s ease;
      box-shadow: 0 5px 15px rgba(0,0,0,.18);
    }

    .mpgb-sidebar.collapsed .mpgb-menu-item:hover::after {
      opacity: 1;
      transform: translateY(-50%) translateX(0);
    }

    /* MAIN CONTENT */
    body {
      --mpgb-sidebar-width: 260px;
    }

    .main {
      margin-left: var(--mpgb-sidebar-width);
      transition: margin-left .28s ease;
    }

    body.mpgb-sidebar-collapsed {
      --mpgb-sidebar-width: 78px;
    }

    /* MOBILE */
    @media (max-width: 900px) {
      .mpgb-sidebar {
        width: 72px;
      }

      .mpgb-brand {
        justify-content: center;
        padding: 14px 8px;
      }

      .mpgb-brand-text {
        width: 0;
        opacity: 0;
        margin: 0;
      }

      .mpgb-collapse-icon {
        display: none;
      }

      .mpgb-menu {
        padding: 18px 8px;
      }

      .mpgb-menu-item {
        justify-content: center;
        padding: 0;
      }

      .mpgb-menu-text {
        width: 0;
        opacity: 0;
        margin: 0;
      }

      .mpgb-active-arrow {
        display: none;
      }

      .main {
        margin-left: 72px !important;
      }
    }

    @media (max-width: 480px) {
      .mpgb-sidebar {
        width: 64px;
      }

      .mpgb-logo {
        width: 42px;
        height: 42px;
        min-width: 42px;
        font-size: 15px;
      }

      .mpgb-menu {
        padding: 15px 6px;
      }

      .mpgb-menu-item {
        height: 46px;
        min-height: 46px;
      }

      .mpgb-menu-icon {
        width: 32px;
        height: 32px;
        min-width: 32px;
      }

      .main {
        margin-left: 64px !important;
      }
    }
  `;

  document.head.appendChild(style);

  /* COLLAPSE / EXPAND */
  var brand = document.getElementById("mpgbBrand");

  brand.addEventListener("click", function () {
    if (window.innerWidth <= 900) {
      return;
    }

    var isCollapsed = sidebar.classList.toggle("collapsed");

    document.body.classList.toggle(
      "mpgb-sidebar-collapsed",
      isCollapsed
    );

    try {
      localStorage.setItem(
        "mpgbSidebarCollapsed",
        isCollapsed ? "1" : "0"
      );
    } catch (e) {}
  });

  /* RESTORE COLLAPSED STATE */
  try {
    if (
      localStorage.getItem("mpgbSidebarCollapsed") === "1" &&
      window.innerWidth > 900
    ) {
      sidebar.classList.add("collapsed");
      document.body.classList.add("mpgb-sidebar-collapsed");
    }
  } catch (e) {}

  /* PAGE TRANSITION */
  var links = sidebar.querySelectorAll(".mpgb-menu-item");

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      link.classList.add("loading");
    });
  });

  /* WINDOW RESIZE */
  window.addEventListener("resize", function () {
    if (window.innerWidth <= 900) {
      sidebar.classList.remove("collapsed");
      document.body.classList.remove("mpgb-sidebar-collapsed");
    }
  });

})();
