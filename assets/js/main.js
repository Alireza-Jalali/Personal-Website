function Menu() {
    let icon = document.getElementById("main-nav");
    if (icon.className === "nav") {
        icon.className += " responsive";
    } else {
        icon.className = "nav";
    }
}

function darkMode() {
    let button = document.getElementById("darkmode");
    if (button.className === "") {
        button.className += "darkmode";
    } else {
        button.className = "";
    }
}