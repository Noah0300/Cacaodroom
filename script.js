const toggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('.main-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    const expanded = nav.classList.contains('open');
    toggle.setAttribute('aria-expanded', String(expanded));
  });
}

const productCards = [...document.querySelectorAll('[data-product]')];
const filterControls = document.querySelectorAll('[data-filter]');
const productCount = document.querySelector('#product-count');

function updateProductCount() {
  if (!productCount) return;
  const visible = productCards.filter((card) => card.style.display !== 'none').length;
  productCount.textContent = `${visible} product(en) zichtbaar`;
}

if (productCards.length && filterControls.length) {
  filterControls.forEach((filter) => {
    filter.addEventListener('change', () => {
      const taste = document.querySelector('[data-filter="taste"]')?.value || 'all';
      const type = document.querySelector('[data-filter="type"]')?.value || 'all';
      const pack = document.querySelector('[data-filter="pack"]')?.value || 'all';

      productCards.forEach((card) => {
        const matchesTaste = taste === 'all' || card.dataset.taste === taste;
        const matchesType = type === 'all' || card.dataset.type === type;
        const matchesPack = pack === 'all' || card.dataset.pack === pack;
        card.style.display = matchesTaste && matchesType && matchesPack ? 'block' : 'none';
      });

      updateProductCount();
    });
  });

  updateProductCount();
}

function attachFormHandler(formSelector, messageSelector, messageText) {
  const form = document.querySelector(formSelector);
  const message = document.querySelector(messageSelector);
  if (!form || !message) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    message.dataset.empty = 'false';
    message.textContent = messageText;
    form.reset();
  });
}

attachFormHandler(
  '#checkout-form',
  '#checkout-message',
  'Dank je! Je bestelling is geplaatst. Je ontvangt direct een bevestiging per e-mail.'
);

attachFormHandler(
  '#reserve-form',
  '#reserve-message',
  'Reservering ontvangen! We nemen binnen 24 uur contact met je op.'
);

attachFormHandler(
  '#contact-form',
  '#contact-message',
  'Bedankt voor je bericht. We reageren zo snel mogelijk.'
);

const yearNode = document.querySelector('[data-year]');
if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}
