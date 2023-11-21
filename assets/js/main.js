function myFunction() {
    let icon = document.getElementById("main-nav");
    if (icon.className === "nav") {
        icon.className += " responsive";
    } else {
        icon.className = "nav";
    }
}