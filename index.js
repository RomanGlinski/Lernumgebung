function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var content = document.getElementById("content");
    if (sidebar.style.display === "none") {
        sidebar.style.display = "block";
        content.style.marginLeft = "350px";
    } else {
        sidebar.style.display = "none";
        content.style.marginLeft = "50px";
    }
}
document.getElementById("myVideo").playbackRate=0.25;
