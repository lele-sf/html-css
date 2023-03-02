function clickMenu() {
    var listaLinks = document.getElementById("listaLinks");
    if (listaLinks.style.display === "block") {
        listaLinks.style.display = "none";
    } else {
        listaLinks.style.display = "block";
    }
}

function mudouTamanho() {
    var listaLinks = document.getElementById("listaLinks");
    if (window.innerWidth > 768) {
        listaLinks.style.display = "block";
    } else {
        listaLinks.style.display = "none";
    }
}