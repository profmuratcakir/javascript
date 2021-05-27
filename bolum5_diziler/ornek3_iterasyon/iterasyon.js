const koordinatlar = [120, 100, -100, 220, 330];
let negatif = 0;
let pozitif = 0;

// for (let i = 0; i < koordinatlar.length; i++) {
//   koordinatlar[i] < 0 ? negatif++ : pozitif++;
// }

// FOR IN DONGUSU
for (let i in koordinatlar) {
  koordinatlar[i] < 0 ? negatif++ : pozitif++;
}

console.log(
  `Negatif Koordinat Sayısı: ${negatif} Pozitif Koordinat sayisi ${pozitif}`
);
