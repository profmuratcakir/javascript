const maaslar = [4000, 5000, 3500, 4200, 2850, 5000, 7500];

// yeni bir liste(ul) olustur.
const liste = document.createElement("ul");
liste.className = "liste";
document.querySelector(".liste-div").appendChild(liste);

// listeye (ul) yeni bir liste elemani (li) ekleme
const listeyeEkle = function (satir) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(satir));
  liste.appendChild(li);
};

// Maaslar dizisindeki elemanlari listeyeEkle() fonks. yardimiyla listeye ekleme
const diziyiListeyeEkle = function () {
  for (let i in maaslar) {
    listeyeEkle(maaslar[i]);
  }
};

// Maaslar dizisindeki maas bilgilerini ve toplam maas bilgisini HTML'deki aciklama (h1) elemanina yazdir.
const aciklamaGuncelle = function (dizi) {
  const aciklama = document.querySelector(".aciklama");
  const yeniMaaslar = dizi.join(" ");
  aciklama.innerHTML = `Maaşlar: ${yeniMaaslar} <br> 
  Toplam Maaş: ${dizi.reduce((x, y) => x + y, 0)}`;
};

// Program baslangicinda maaslar dizisini liste olarak yazdir.
diziyiListeyeEkle();
// Aciklama (h1) elemaninin bilgilerini güncelle.
aciklamaGuncelle(maaslar);

// Ekle butonuna tıklandiginda diziye ve listeye yeni veriyi ekle.
document.querySelector(".ekle").onclick = function () {
  const satir = document.querySelector(".input-liste");
  if (!satir.value) {
    alert("Lutfen veri girisi yapiniz.");
  } else {
    //input'tan gelen veriyi diziye kaydet
    maaslar.push(Number(satir.value));
    //input'tan gelen veriyi listeye yazdir
    listeyeEkle(satir.value);
    //işlemler bittikten sonra input'da kalan veriyi sil.
    satir.value = "";
    aciklamaGuncelle(maaslar);
  }
};

//Sil butonuna tiklandiginda listedeki ve dizideki son elamani sil.
document.querySelector(".sil").onclick = function () {
  if (maaslar.length == 0) {
    alert("Silinecek oge kalmadi.");
  } else {
    maaslar.pop();
    const liste = document.querySelector(".liste");
    liste.removeChild(liste.lastElementChild);
    aciklamaGuncelle(maaslar);
  }
};
// Ara butonuna tiklandiginda girilen degerden daha küçük olan maaşlari listele ve bilgileri aciklama olarak göster.
document.querySelector(".ara").onclick = function () {
  const satir = document.querySelector(".input-liste");
  if (!satir.value) {
    alert("Aranacak maaş limiti giriniz.");
  } else {
    const flitreli = maaslar.filter((m) => m <= satir.value);
    if (flitreli.length == 0) {
      alert("Aradaginiz kriterlerde maas bulunamadi.");
    } else {
      aciklamaGuncelle(flitreli);
    }
  }
  satir.value = "";
};

// input elemaninda klavyeden bir tusa basildiginda islem yap
document.querySelector(".input-liste").onkeydown = function (e) {
  console.log(e);
  // Enter tusuna basildi ise ekle metodunu cagir.
  if (e.key === "Enter") {
    // alternatif olarak e.keyCode === 13 kullanilabilir.
    document.querySelector(".ekle").onclick();
  }
  // Del tusuna basildi ise sil metodunu cagir.
  if (e.key === "Delete") {
    // alternatif olarak e.keyCode === 46 kullanilabilir.
    document.querySelector(".sil").onclick();
  }
};
