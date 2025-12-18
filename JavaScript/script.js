document.addEventListener("DOMContentLoaded", () => {
    const bouton = document.querySelector(".changementducssmn");
    const cssNuit = document.getElementById("mn");

    bouton.addEventListener("click", () => {
        cssNuit.disabled = !cssNuit.disabled;
    });
});