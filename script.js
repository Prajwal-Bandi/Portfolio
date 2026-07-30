const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");
const sections = document.querySelectorAll("main section[id]");
const revealItems = document.querySelectorAll(".reveal");
const countUpItems = document.querySelectorAll(".count-up");
const yearNode = document.getElementById("year");
const themeToggle = document.querySelector(".theme-toggle");
const themeToggleIcon = document.querySelector(".theme-toggle-icon");
const backToTopLink = document.querySelector(".back-to-top");
const storageKey = "portfolio-theme";

const applyTheme = (theme) => {
  const isLight = theme === "light";
  document.body.classList.toggle("light-theme", isLight);

  if (themeToggleIcon) {
    themeToggleIcon.textContent = isLight ? "🌙" : "☀";
  }

  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", String(isLight));
  }
};

const savedTheme = window.localStorage.getItem(storageKey);
applyTheme(savedTheme === "light" ? "light" : "dark");

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = document.body.classList.contains("light-theme") ? "dark" : "light";
    applyTheme(nextTheme);
    window.localStorage.setItem(storageKey, nextTheme);
  });
}

if (backToTopLink) {
  backToTopLink.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const currentId = entry.target.getAttribute("id");

      navLinks.forEach((link) => {
        const isMatch = link.getAttribute("href") === `#${currentId}`;
        link.classList.toggle("active", isMatch);
      });
    });
  },
  {
    threshold: 0.45,
    rootMargin: "-10% 0px -35% 0px",
  }
);

sections.forEach((section) => sectionObserver.observe(section));

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.16,
    rootMargin: "0px 0px -40px 0px",
  }
);

revealItems.forEach((item) => revealObserver.observe(item));

const animateCountUp = (node) => {
  const target = Number(node.dataset.count);
  const suffix = node.dataset.suffix ?? "";

  if (!Number.isFinite(target)) {
    return;
  }

  const durationMs = 1200;
  const startTime = performance.now();

  const tick = (timestamp) => {
    const progress = Math.min((timestamp - startTime) / durationMs, 1);
    const value = Math.floor(progress * target);
    node.textContent = `${value}${suffix}`;

    if (progress < 1) {
      window.requestAnimationFrame(tick);
    }
  };

  window.requestAnimationFrame(tick);
};

const countObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      animateCountUp(entry.target);
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.6,
  }
);

countUpItems.forEach((item) => countObserver.observe(item));
