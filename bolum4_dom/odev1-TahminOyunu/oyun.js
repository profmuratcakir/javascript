// Bilgisayar 1-20 arasında bir sayı tutuyor.
let rasgeleSayı = Math.floor(Math.random() * 20 + 1);
let skor = 10;
let enYüksekSkor = 0;

// Her kontrol et butonuna tıklandığında çalışan fonks.
document.querySelector(".kontrol").addEventListener("click", () => {
  const tahmin = Number(document.querySelector(".tahmin").value);
  let mesaj = document.querySelector(".mesaj");

  // Tahmin girilmediyse bilgi ver
  if (!tahmin) {
    mesaj.textContent = "Lütfen Bir Tahmin Giriniz";

    // Tahmin doğru ise
  } else if (tahmin == rasgeleSayı && skor > 1) {
    mesaj.textContent = " 🎉 Tebrikler Bildiniz";
    document.querySelector(".sayı").textContent = rasgeleSayı;
    document.querySelector("body").style.backgroundColor = "green";

    // En yüksek skoru güncelle
    if (skor > enYüksekSkor) {
      enYüksekSkor = skor;
      document.querySelector(".en-skor").textContent = skor;
    }

    // Tahmin yanlış ise
  } else {
    // Skor değerini bir eksilt ve 0' a ulaşmış mı diye kontrol et.
    if (skor > 1) {
      skor--;

      // Girilen tahmin ile tutulan sayıya göre Oyuncuyu yönlendir.
      tahmin < rasgeleSayı
        ? (mesaj.textContent = "📈 Arttır.")
        : (mesaj.textContent = "📉 Azalt.");
      document.querySelector(".skor").textContent = skor;

      // Skor değeri 0' ulaşmış ise oyunu bitir.
    } else {
      mesaj.textContent = "Oyunu Kaybettiniz 😔";
      document.querySelector(".skor").textContent = 0;
    }
  }
});

// Tekrar Butonuna tıklandığında ayarlar başlangıç değerlerine kuruluyor
document.querySelector(".tekrar").addEventListener("click", () => {
  skor = 10;
  rasgeleSayı = Math.floor(Math.random() * 20 + 1);
  document.querySelector(".mesaj").textContent = "Tahmine Başlanıyor";
  document.querySelector(".tahmin").value = " ";
  document.querySelector(".sayı").textContent = "?";
  document.querySelector(".skor").textContent = skor;
  document.querySelector("body").style.backgroundColor = "#2d3436";
});
