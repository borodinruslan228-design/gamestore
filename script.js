const products = [
  {
    id: "elden-ring",
    name: "Elden Ring: Shadow of the Erdtree",
    category: "games",
    categoryName: "Игры",
    price: 4990,
    oldPrice: 5990,
    rating: "4.9",
    reviews: 284,
    badge: "ХИТ",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Игровой мир на экране монитора",
    popularity: 98
  },
  {
    id: "cyberpunk-2077",
    name: "Cyberpunk 2077: Ultimate Edition",
    category: "games",
    categoryName: "Игры",
    price: 3790,
    oldPrice: null,
    rating: "4.8",
    reviews: 196,
    badge: "ВЫБОР ИГРОКОВ",
    image: "https://images.unsplash.com/photo-1603481546238-487240415921?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Неоновый игровой сетап",
    popularity: 91
  },
  {
    id: "steelkeys-pro",
    name: "SteelKeys Pro TKL — механика",
    category: "keyboards",
    categoryName: "Клавиатуры",
    price: 12490,
    oldPrice: 14990,
    rating: "4.9",
    reviews: 128,
    badge: "−17%",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Механическая игровая клавиатура",
    popularity: 94
  },
  {
    id: "hyperstrike-60",
    name: "HyperStrike 60 — RGB Edition",
    category: "keyboards",
    categoryName: "Клавиатуры",
    price: 8990,
    oldPrice: null,
    rating: "4.7",
    reviews: 87,
    badge: "",
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Компактная игровая клавиатура",
    popularity: 79
  },
  {
    id: "phantom-x",
    name: "Phantom X Wireless 26K",
    category: "mice",
    categoryName: "Мыши",
    price: 7490,
    oldPrice: null,
    rating: "4.8",
    reviews: 203,
    badge: "БЕСПРОВОДНАЯ",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Точная игровая компьютерная мышь",
    popularity: 96
  },
  {
    id: "swiftcore-mini",
    name: "SwiftCore Mini — 58 г",
    category: "mice",
    categoryName: "Мыши",
    price: 5290,
    oldPrice: 6490,
    rating: "4.6",
    reviews: 76,
    badge: "−18%",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Лёгкая игровая мышь",
    popularity: 75
  },
  {
    id: "void-pro",
    name: "Void Pro Surround 7.1",
    category: "headsets",
    categoryName: "Наушники",
    price: 10990,
    oldPrice: 12990,
    rating: "4.9",
    reviews: 164,
    badge: "ХИТ",
    image: "https://images.unsplash.com/photo-1599669454699-248893623440?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Игровая гарнитура с микрофоном",
    popularity: 92
  },
  {
    id: "arctis-neo",
    name: "Arctis Neo Wireless",
    category: "headsets",
    categoryName: "Наушники",
    price: 14990,
    oldPrice: null,
    rating: "4.8",
    reviews: 93,
    badge: "НОВИНКА",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Премиальная игровая гарнитура",
    popularity: 83
  },
  {
    id: "nova-controller",
    name: "Nova Controller Wireless",
    category: "controllers",
    categoryName: "Геймпады",
    price: 6990,
    oldPrice: null,
    rating: "4.7",
    reviews: 112,
    badge: "",
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Беспроводной контроллер для игр",
    popularity: 84
  },
  {
    id: "elite-pad",
    name: "Elite Pad Carbon Edition",
    category: "controllers",
    categoryName: "Геймпады",
    price: 9990,
    oldPrice: 11490,
    rating: "4.9",
    reviews: 68,
    badge: "−13%",
    image: "https://images.unsplash.com/photo-1592840496694-26d035b52b48?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Эргономичный геймпад",
    popularity: 77
  },
  {
    id: "racing-legends",
    name: "Racing Legends: Complete",
    category: "games",
    categoryName: "Игры",
    price: 3290,
    oldPrice: null,
    rating: "4.6",
    reviews: 59,
    badge: "",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Захватывающий игровой уровень",
    popularity: 69
  },
  {
    id: "nova-tkl",
    name: "Nova TKL Wireless — Hot Swap",
    category: "keyboards",
    categoryName: "Клавиатуры",
    price: 15990,
    oldPrice: null,
    rating: "4.9",
    reviews: 47,
    badge: "НОВИНКА",
    image: "https://images.unsplash.com/photo-1595044426077-d36d9236d54a?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Беспроводная механическая клавиатура",
    popularity: 88
  }
];

const STORAGE_KEYS = {
  cart: "gamestore-cart",
  favorites: "gamestore-favorites"
};
const categoryNames = {
  all: "Все товары",
  games: "Игры",
  keyboards: "Клавиатуры",
  mice: "Мыши",
  headsets: "Наушники",
  controllers: "Геймпады"
};

function readStorage(key, fallback) {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : fallback;
  } catch {
    return fallback;
  }
}

function readCart() {
  const stored = readStorage(STORAGE_KEYS.cart, []);
  if (!Array.isArray(stored)) return [];
  return stored.filter((item) =>
    item &&
    products.some((product) => product.id === item.id) &&
    Number.isInteger(item.quantity) &&
    item.quantity > 0
  );
}

function readFavorites() {
  const stored = readStorage(STORAGE_KEYS.favorites, []);
  if (!Array.isArray(stored)) return [];
  return stored.filter((id) => products.some((product) => product.id === id));
}

let cart = readCart();
let favorites = readFavorites();
let activeCategory = "all";
let favoritesOnly = false;
let searchQuery = "";
let toastTimer;

const productGrid = document.querySelector("#product-grid");
const emptyState = document.querySelector("#empty-state");
const cartDrawer = document.querySelector("#cart-drawer");
const overlay = document.querySelector("#overlay");
const cartItems = document.querySelector("#cart-items");
const cartEmpty = document.querySelector("#cart-empty");
const cartFooter = document.querySelector("#cart-footer");
const searchInput = document.querySelector("#search-input");
const searchBox = document.querySelector(".search-box");
const sortSelect = document.querySelector("#sort-select");

function formatPrice(price) {
  return `${new Intl.NumberFormat("ru-RU").format(price)} ₽`;
}

function saveStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    showToast("Не удалось сохранить данные. Проверьте настройки браузера.");
  }
}

function getVisibleProducts() {
  let visible = products.filter((product) => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const matchesFavorite = !favoritesOnly || favorites.includes(product.id);
    const normalizedQuery = searchQuery.trim().toLocaleLowerCase("ru");
    const matchesSearch = !normalizedQuery ||
      `${product.name} ${product.categoryName}`.toLocaleLowerCase("ru").includes(normalizedQuery);
    return matchesCategory && matchesFavorite && matchesSearch;
  });

  if (sortSelect.value === "price-asc") {
    visible = [...visible].sort((a, b) => a.price - b.price);
  } else if (sortSelect.value === "price-desc") {
    visible = [...visible].sort((a, b) => b.price - a.price);
  } else {
    visible = [...visible].sort((a, b) => b.popularity - a.popularity);
  }
  return visible;
}

function renderProducts() {
  const visible = getVisibleProducts();
  productGrid.innerHTML = visible.map((product, index) => {
    const isFavorite = favorites.includes(product.id);
    const badgeClass = product.badge === "ХИТ" || product.badge === "−17%" || product.badge === "−18%" || product.badge === "−13%"
      ? "product-badge"
      : "product-badge badge-dark";
    return `
      <article class="product-card" style="animation-delay:${Math.min(index * 35, 210)}ms">
        <div class="product-image-wrap">
          <img class="product-image" src="${product.image}" alt="${product.imageAlt}" loading="lazy" />
          ${product.badge ? `<span class="${badgeClass}">${product.badge}</span>` : ""}
          <button class="favorite-toggle${isFavorite ? " is-favorite" : ""}" type="button" data-favorite="${product.id}" aria-label="${isFavorite ? "Убрать из избранного" : "Добавить в избранное"}: ${product.name}" aria-pressed="${isFavorite}">
            <svg viewBox="0 0 24 24" fill="${isFavorite ? "currentColor" : "none"}" aria-hidden="true"><path d="M20.8 8.8c0 4.1-8.8 10-8.8 10s-8.8-5.9-8.8-10A4.8 4.8 0 0 1 12 6.7a4.8 4.8 0 0 1 8.8 2.1Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>
          </button>
        </div>
        <div class="product-info">
          <span class="product-category">${product.categoryName}</span>
          <h3 class="product-title">${product.name}</h3>
          <div class="product-meta">
            <span class="product-rating">★ ${product.rating}<span>(${product.reviews})</span></span>
            <span class="product-stock">В наличии</span>
          </div>
          <div class="product-bottom">
            <span class="product-price">${formatPrice(product.price)}${product.oldPrice ? `<span class="product-old-price">${formatPrice(product.oldPrice)}</span>` : ""}</span>
            <button class="add-to-cart" type="button" data-add="${product.id}" aria-label="Добавить в корзину: ${product.name}">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
              В корзину
            </button>
          </div>
        </div>
      </article>`;
  }).join("");

  const noResults = visible.length === 0;
  emptyState.hidden = !noResults;
  productGrid.hidden = noResults;
  document.querySelector("#results-label").textContent = `${favoritesOnly ? "Избранное" : categoryNames[activeCategory]} · ${visible.length} ${productWord(visible.length)}`;
  document.querySelector(".clear-favorites-button").hidden = !favoritesOnly;
  document.querySelector(".filter-total").textContent = products.length;
}

function transitionProducts() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion || typeof document.startViewTransition !== "function") {
    renderProducts();
    return;
  }

  const transition = document.startViewTransition(() => {
    productGrid.classList.add("is-transitioning");
    renderProducts();
  });
  transition.finished.then(
    () => productGrid.classList.remove("is-transitioning"),
    () => productGrid.classList.remove("is-transitioning")
  );
}

function productWord(count) {
  const lastTwo = count % 100;
  if (lastTwo >= 11 && lastTwo <= 14) return "товаров";
  if (count % 10 === 1) return "товар";
  if (count % 10 >= 2 && count % 10 <= 4) return "товара";
  return "товаров";
}

function updateHeaderCounts() {
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  document.querySelector(".cart-count").textContent = count;
  document.querySelector(".favorite-count").textContent = favorites.length;
  document.querySelector(".drawer-count").textContent = count;
  document.querySelector(".cart-trigger").setAttribute("aria-label", `Открыть корзину, товаров: ${count}`);
  document.querySelector(".favorite-header-button").setAttribute("aria-label", `Показать избранное, товаров: ${favorites.length}`);
}

function renderCart() {
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => {
    const product = products.find((entry) => entry.id === item.id);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);

  cartItems.innerHTML = cart.map((item) => {
    const product = products.find((entry) => entry.id === item.id);
    return `
      <div class="cart-item">
        <img src="${product.image}" alt="${product.imageAlt}" />
        <div class="cart-item-info">
          <span class="cart-item-category">${product.categoryName}</span>
          <span class="cart-item-name">${product.name}</span>
          <div class="quantity-control" aria-label="Количество товара ${product.name}">
            <button type="button" data-quantity="${product.id}" data-change="-1" aria-label="Уменьшить количество">−</button>
            <span>${item.quantity}</span>
            <button type="button" data-quantity="${product.id}" data-change="1" aria-label="Увеличить количество">+</button>
          </div>
        </div>
        <div class="cart-item-end">
          <strong class="cart-item-price">${formatPrice(product.price * item.quantity)}</strong>
          <button class="remove-item" type="button" data-remove="${product.id}" aria-label="Удалить ${product.name} из корзины">Удалить</button>
        </div>
      </div>`;
  }).join("");

  cartEmpty.classList.toggle("visible", totalQuantity === 0);
  cartFooter.hidden = totalQuantity === 0;
  document.querySelector("#cart-total").textContent = formatPrice(totalPrice);
  updateHeaderCounts();
}

function refresh() {
  renderProducts();
  renderCart();
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 2400);
}

function playAnimation(element, className) {
  if (!element) return;
  element.classList.remove(className);
  void element.offsetWidth;
  element.classList.add(className);
  window.setTimeout(() => element.classList.remove(className), 450);
}

function setCategory(category) {
  activeCategory = category;
  favoritesOnly = false;
  document.querySelectorAll(".filter-chip").forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.filter === category);
  });
  document.querySelectorAll(".category-card").forEach((card) => {
    card.classList.toggle("selected", card.dataset.category === category);
  });
  transitionProducts();
  document.querySelector("#catalog").scrollIntoView({ behavior: "smooth", block: "start" });
}

function toggleFavorite(id) {
  const isFavorite = favorites.includes(id);
  if (favorites.includes(id)) {
    favorites = favorites.filter((favoriteId) => favoriteId !== id);
    showToast("Товар удалён из избранного");
  } else {
    favorites = [...favorites, id];
    showToast("Товар добавлен в избранное");
  }
  saveStorage(STORAGE_KEYS.favorites, favorites);

  if (favoritesOnly) {
    transitionProducts();
  } else {
    const button = productGrid.querySelector(`[data-favorite="${id}"]`);
    if (button) {
      button.classList.toggle("is-favorite", !isFavorite);
      button.setAttribute("aria-pressed", String(!isFavorite));
      button.setAttribute("aria-label", `${!isFavorite ? "Убрать из избранного" : "Добавить в избранное"}: ${products.find((product) => product.id === id).name}`);
      button.querySelector("svg").setAttribute("fill", !isFavorite ? "currentColor" : "none");
      playAnimation(button, "is-toggling");
    }
    updateHeaderCounts();
  }
  playAnimation(document.querySelector(".favorite-count"), "is-updating");
}

function addToCart(id) {
  const existing = cart.find((item) => item.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id, quantity: 1 });
  }
  saveStorage(STORAGE_KEYS.cart, cart);
  renderCart();
  playAnimation(document.querySelector(".cart-count"), "is-updating");
  playAnimation(productGrid.querySelector(`[data-add="${id}"]`), "is-added");
  const product = products.find((item) => item.id === id);
  showToast(`${product.name} добавлен в корзину`);
}

function changeQuantity(id, amount) {
  const item = cart.find((entry) => entry.id === id);
  if (!item) return;
  item.quantity += amount;
  if (item.quantity <= 0) cart = cart.filter((entry) => entry.id !== id);
  saveStorage(STORAGE_KEYS.cart, cart);
  renderCart();
}

function openCart() {
  overlay.hidden = false;
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("drawer-open");
  requestAnimationFrame(() => overlay.classList.add("visible"));
  document.querySelector(".close-cart").focus();
}

function closeCart() {
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
  overlay.classList.remove("visible");
  document.body.classList.remove("drawer-open");
  window.setTimeout(() => {
    if (!cartDrawer.classList.contains("open")) overlay.hidden = true;
  }, 250);
}

function showFavorites() {
  favoritesOnly = !favoritesOnly;
  activeCategory = "all";
  document.querySelectorAll(".filter-chip").forEach((chip) => chip.classList.toggle("active", chip.dataset.filter === "all"));
  document.querySelectorAll(".category-card").forEach((card) => card.classList.remove("selected"));
  transitionProducts();
  document.querySelector("#catalog").scrollIntoView({ behavior: "smooth", block: "start" });
  if (favoritesOnly && favorites.length === 0) showToast("В избранном пока ничего нет");
}

document.querySelector("#catalog").addEventListener("click", (event) => {
  const favoriteButton = event.target.closest("[data-favorite]");
  const addButton = event.target.closest("[data-add]");
  if (favoriteButton) toggleFavorite(favoriteButton.dataset.favorite);
  if (addButton) addToCart(addButton.dataset.add);
});

cartItems.addEventListener("click", (event) => {
  const quantityButton = event.target.closest("[data-quantity]");
  const removeButton = event.target.closest("[data-remove]");
  if (quantityButton) changeQuantity(quantityButton.dataset.quantity, Number(quantityButton.dataset.change));
  if (removeButton) {
    cart = cart.filter((item) => item.id !== removeButton.dataset.remove);
    saveStorage(STORAGE_KEYS.cart, cart);
    renderCart();
  }
});

document.querySelectorAll(".filter-chip").forEach((chip) => {
  chip.addEventListener("click", () => setCategory(chip.dataset.filter));
});
document.querySelectorAll(".category-card").forEach((card) => {
  card.addEventListener("click", () => setCategory(card.dataset.category));
});
searchInput.addEventListener("input", () => {
  searchQuery = searchInput.value;
  transitionProducts();
});
sortSelect.addEventListener("change", transitionProducts);
document.querySelector(".cart-trigger").addEventListener("click", openCart);
document.querySelector(".close-cart").addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);
document.querySelector(".continue-shopping").addEventListener("click", () => {
  closeCart();
  document.querySelector("#catalog").scrollIntoView({ behavior: "smooth" });
});
document.querySelector(".checkout-button").addEventListener("click", () => {
  showToast("Это демо-магазин — оплата и оформление заказа не подключены.");
});
document.querySelector(".favorite-header-button").addEventListener("click", showFavorites);
document.querySelector(".clear-favorites-button").addEventListener("click", showFavorites);
document.querySelector(".reset-filters").addEventListener("click", () => {
  searchInput.value = "";
  searchQuery = "";
  activeCategory = "all";
  favoritesOnly = false;
  document.querySelectorAll(".filter-chip").forEach((chip) => chip.classList.toggle("active", chip.dataset.filter === "all"));
  document.querySelectorAll(".category-card").forEach((card) => card.classList.remove("selected"));
  transitionProducts();
});

document.querySelector(".mobile-menu-toggle").addEventListener("click", (event) => {
  const menu = document.querySelector(".main-nav");
  const isOpen = menu.classList.toggle("open");
  event.currentTarget.setAttribute("aria-expanded", String(isOpen));
});
document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".main-nav").classList.remove("open");
    document.querySelector(".mobile-menu-toggle").setAttribute("aria-expanded", "false");
  });
});
searchBox.addEventListener("click", () => {
  if (window.matchMedia("(max-width: 760px)").matches) {
    searchBox.classList.add("search-open");
    searchInput.focus();
  }
});
searchInput.addEventListener("blur", () => {
  if (!searchInput.value) searchBox.classList.remove("search-open");
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCart();
    document.querySelector(".main-nav").classList.remove("open");
    document.querySelector(".mobile-menu-toggle").setAttribute("aria-expanded", "false");
  }
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    if (window.matchMedia("(max-width: 760px)").matches) searchBox.classList.add("search-open");
    searchInput.focus();
  }
});

refresh();

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.querySelectorAll(".category-grid, .catalog-heading, .promo-strip").forEach((element) => {
    element.classList.add("is-visible");
  });
} else if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });

  document.querySelectorAll(".category-grid, .catalog-heading, .promo-strip").forEach((element) => {
    element.classList.add("reveal-on-scroll");
    revealObserver.observe(element);
  });
} else {
  document.querySelectorAll(".category-grid, .catalog-heading, .promo-strip").forEach((element) => {
    element.classList.add("is-visible");
  });
}