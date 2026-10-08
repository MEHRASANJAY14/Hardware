document.addEventListener("DOMContentLoaded", function () {

    document.querySelector(".sidebar-container").innerHTML = `
        <aside class="sidebar">

            <div class="logo">
                MPGB
                <small>Hardware Management</small>
            </div>

            <nav class="menu">

                <a href="index.html">⌂ <span>Dashboard</span></a>

                <a href="add-hardware.html">＋ <span>Add Hardware</span></a>

                <a href="records.html">▣ <span>Hardware Records</span></a>

                <a href="edit-hardware.html">✎ <span>Edit / Update</span></a>

                <a href="branch-summary.html">▥ <span>Branch Summary</span></a>

                <a href="hardware-summary.html">◈ <span>Hardware Summary</span></a>

                <a href="reports.html">▤ <span>Reports</span></a>

            </nav>

        </aside>
    `;

    /* Active page */
    var page = location.pathname.split("/").pop();

    if (!page) page = "index.html";

    document.querySelectorAll(".menu a").forEach(function(a){

        if(a.getAttribute("href") === page){
            a.classList.add("active");
        }

    });

});
