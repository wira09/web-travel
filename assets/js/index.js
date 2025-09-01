// tombol bar untuk responsif
const tombol = document.querySelector(".tombol");
const menu = document.querySelector(".menu");

tombol.addEventListener("click", () => {
  menu.classList.toggle("aktif");
});

// Menutup menu saat mengklik link
const navLinks = document.querySelectorAll(".menu a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("aktif");
  });
});

// Form submission
const contactForm = document.querySelector(".contact-form form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Mengambil nilai dari form
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector("textarea").value;

    // Validasi sederhana
    if (name && email && message) {
      // Di sini biasanya akan ada pengiriman data ke server
      // Untuk demo, kita tampilkan alert
      alert(
        `Terima kasih ${name}! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.`
      );
      contactForm.reset();
    } else {
      alert("Silakan isi semua field dengan lengkap.");
    }
  });
}

// ekesekusi animasi pada AOS
document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS with settings that prevent layout shifts
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
    offset: 100,
    delay: 100,
    anchorPlacement: "top-bottom",
  });

  // Fix for content jumping when animations are disabled
  setTimeout(function () {
    const aosElements = document.querySelectorAll("[data-aos]");
    aosElements.forEach(function (el) {
      el.classList.add("aos-init");
    });
  }, 100);
});
