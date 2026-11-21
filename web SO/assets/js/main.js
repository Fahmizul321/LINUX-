document.addEventListener("DOMContentLoaded", () => {
  // 1. Navigasi Responsif (Mobile Menu)
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // 2. Filter Kategori Aplikasi Edukasi
  const tabButtons = document.querySelectorAll(".tab-btn");
  const appItems = document.querySelectorAll("#appsGrid .app-item");

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const category = btn.dataset.filter;

      tabButtons.forEach((item) => item.classList.remove("active"));
      btn.classList.add("active");

      appItems.forEach((card) => {
        const match = category === "all" || card.dataset.cat === category;
        card.classList.toggle("hidden", !match);
      });
    });
  });

  // 3. Tombol Salin Checksum SHA-256
  const copyShaBtn = document.getElementById("copyShaBtn");
  const shaInput = document.getElementById("shaInput");

  if (copyShaBtn && shaInput) {
    copyShaBtn.addEventListener("click", async () => {
      const text = shaInput.value.trim();

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(text);
        } else {
          shaInput.select();
          document.execCommand("copy");
        }

        const prevText = copyShaBtn.textContent;
        copyShaBtn.textContent = "Tersalin!";
        setTimeout(() => {
          copyShaBtn.textContent = prevText;
        }, 1800);
      } catch (err) {
        copyShaBtn.textContent = "Gagal";
      }
    });
  }

  // 4. Penanda Navigasi Aktif saat Scroll
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  if ("IntersectionObserver" in window && sections.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const currentId = entry.target.getAttribute("id");
            navLinks.forEach((link) => {
              link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);
            });
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    sections.forEach((sec) => observer.observe(sec));
  }
});