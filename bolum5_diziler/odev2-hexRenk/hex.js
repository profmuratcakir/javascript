//==========================================================================
//             HEXADECIMAL (16'LIK) SAYI SISTEMINI KULLANARAK
//                 ARKAPLAN RENGINI DEGISTIREN UYGULAMA
//==========================================================================
// Dijital ortamda renkler RGB (Red, Green ,Blue) birleşiminden meydana
// gelebilmektedir. Bir renk, aslında 8-bitlik (Onluk tabanda : 0-255)
// bir deger almaktadir. Örneğin RGB(212,134,145) üç rengin birleşimi
// (3 x 8-bit = 24-bit) ile bir başka renk (pembenin bir tonu) oluşur.
// Bu renkler onluk taban yerine 16'lık sayi tabaninda da gosterilebilmektedir.
// 16'lık tabanda her bir basamak 0-9,A,B,C,D,E,F şeklinde bir deger alir.
// Yani bir basamak 4-bit uzunlugundadir. Dolasiyila HEX formatta bir renk
// 4-bit x 6 basamak = 24-bit olarak gosterilebilir. Ornegin #AB0123, 16'lık
// tabanda bir renk (kirmizinin bir tonu) demektir.

// Butona her tıklandiginda arkaplan rengini degistirecek fonksiyon
document.querySelector(".btn").onclick = function () {
  let hexRenk = []; // 6 basamakli hex renkleri saklayacak boş dizi

  // hexadecimal (16'lık) sayilari saklayan dizi.
  const hexSayilar = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  // 16'lik tabanda bir renk 6 basamagin birlesiminden olusur.
  // Bu sebeple 6 kere rasgele sayi olusturup diziden bir
  // basamak degeri cekmek ve bu basamaklari birlestirip
  // 6 haneli bir renk elde etmek gerekir.
  for (let i = 0; i < 6; i++) {
    hexRenk =
      hexRenk + hexSayilar[Math.floor(Math.random() * hexSayilar.length)];
  }

  // Elde edilen 6 haneli renk degerini arkaplan rengine atayalim.
  document.querySelector("body").style.backgroundColor = hexRenk;
  // 6 haneli hex rengi span içerisine yazdiralim ve yazinin
  // rengini bu renk olarak degistirelim
  document.querySelector(".renk").innerHTML = `#${hexRenk}`;
  document.querySelector("h1").style.color = hexRenk;
};
