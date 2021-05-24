// Ac butonuna her tiklandiginda calisir.
document.querySelector(".on").onclick = function () {
  document.querySelector(".resim").src = "./img/lamba_on.gif";
};

document.querySelector(".off").onclick = function () {
  document.querySelector(".resim").src = "./img/lamba_off.gif";
};
