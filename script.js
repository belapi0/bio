document.addEventListener('DOMContentLoaded', function () {
  // Ganti dengan foto hobi Anda sendiri
  const hobiList = [
    { nama: "membaca novel dan komik", gambar: "default-hobi.jpg" },
    { nama: "Bermain game", gambar: "foto.jpg" },
    { nama: "Ngoding", gambar: "hobi-koding.jpg" },
    { nama: "Jalan-jalan", gambar: "hobi-jalan.jpg" },
    { nama: "Nonton Anime", gambar: "hobi-film.jpg" }
  ];

  const container = document.getElementById("daftar-hobi");
  if (!container) return;

  hobiList.forEach(item => {
    const div = document.createElement("div");
    div.className = "hobi-item";
    div.innerHTML = `
      <img src="${item.gambar}" alt="${item.nama}" 
           onerror="this.onerror=null;this.src='default-hobi.jpg';"/.
      <span>${item.nama}</span>
    `;
    container.appendChild(div);
  });
   // Fungsi untuk menu navigasi mobile
  const toggleButton = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });

  // Sembunyikan menu saat link diklik
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });
});