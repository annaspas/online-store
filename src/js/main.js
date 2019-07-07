function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function toggleDropdown() {
    let btn = document.getElementsByClassName('header_dropdown-main')[0];

    if (btn.style.visibility === "" || btn.style.visibility === "hidden") {
        btn.style.visibility = "visible";
    } else {
        btn.style.visibility = "hidden";
    }
}