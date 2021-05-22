// Butona her tiklandiginda calisir.
function hesapla() {
  // ! Class'lara erişim için .class_adı
  // ! id'li bir HTML elemanına erisim için ise #id
  const r = document.getElementById("r").value;
  const h = document.querySelector(".h").value;
  const sonuc = (Math.PI * r * r * h).toFixed(2);
  document.querySelector(".hacim").innerHTML = sonuc;
}

// Butonun stillendirmesi icin
const buton = document.querySelector(".btn");
buton.style.color = "red";
buton.style.backgroundColor = "black";
buton.style.width = "100px";
