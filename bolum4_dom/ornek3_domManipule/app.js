// Ac butonuna her tiklandiginda lamba_on resmini goster.
document.querySelector(".on").onclick = function () {
  document.querySelector(".resim").src = "./img/lamba_on.gif";
};
// Kapa butonuna her tiklandiginda lamba_off resmini goster.
document.querySelector(".off").onclick = function () {
  document.querySelector(".resim").src = "./img/lamba_off.gif";
};

// resmin uzerine mouse her geldiginde lamba_on resmini goster.
document.querySelector(".resim").addEventListener("mouseover", () => {
  document.querySelector(".resim").src = "./img/lamba_on.gif";
});
// resmin uzerinden mouse her ayrıldiginda lamba_off resmini goster.
document.querySelector(".resim").addEventListener("mouseout", function () {
  document.querySelector(".resim").src = "img/lamba_off.gif";
});

// Klavyeden her bir tusa basildiginda bu fonksiyon tetiklenecek.
document.querySelector(".textbox").onkeyup = function () {
  const checkbox = document.querySelector(".checkbox");
  const textbox = document.querySelector(".textbox");

  if (checkbox.checked == true) {
    textbox.value = textbox.value.toUpperCase();
  } else {
    textbox.value = textbox.value.toLowerCase();
  }
};
// HTML'de input-div'in altına yeni bir H1 elemanı olusturalım.
const sonDiv = document.querySelector(".input-div");
const h1 = document.createElement("h1");
const yazi = document.createTextNode("Programla Dilleri");
h1.appendChild(yazi);
sonDiv.after(h1); //input-div'in sonrasina h1'i ekliyoruz.
h1.className = "yeni-h1"; // olustrdugumuz h1 elemanına bir class adı atadık.

// Ekle butonuna  her tıklandiginda
document.querySelector(".ekle").onclick = function () {
  // ekleme yapılacak listeyi al
  const liste = document.querySelector(".liste");
  //input elemanina girilen yeni satirin degerini al
  const satir = document.querySelector(".dil");
  // yeni girilen satiri saklamak icin bir li olusturduk.
  const yeniLi = document.createElement("li");
  // yeni li icin textnode olusturduk
  const textNode = document.createTextNode(satir.value);
  //olusturdugumuz texnode'u yeni li'ye bagladik.
  yeniLi.appendChild(textNode);
  // yeni eklenen satiri var olan listeye (ul) baglayalim.
  liste.appendChild(yeniLi);
  //input içinde kalan veriyi sil
  satir.value = "";
};

// Sil butonuna  her tıklandiginda
document.querySelector(".sil").onclick = function () {
  const liste = document.querySelector(".liste");
  // liste.removeChild(liste.firstElementChild);  // ilk elemani sil
  liste.removeChild(liste.lastElementChild); // son elemani sil
};

// Klavyeden bir tusa basildiginda calis
document.querySelector(".dil").onkeydown = function (event) {
  // Eger basilan tus Enter tusu ise
  if (event.keyCode === 13) {
    // Ekle butonunun tiklama fonksiyonunu cagir.
    document.querySelector(".ekle").click();
  }
  // del tuşuna basılırsa
  if (event.keyCode === 46) {
    // Sil butonunun tiklama fonksiyonunu cagir.
    document.querySelector(".sil").click();
  }
};
