const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');

menuToggle?.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav?.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

document.querySelectorAll('[data-service]').forEach((link) => {
  link.addEventListener('click', () => {
    const select = document.querySelector('select[name="service"]');
    if (select) select.value = link.dataset.service;
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelector('#inquiry-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const message = [
    'مرحباً أستاذ أديب، أرغب بالاستفسار عن خدماتك. أرسل تفاصيل الطلب التالية:',
    '',
    `الاسم: ${form.get('name')}`,
    `رقم التواصل: ${form.get('phone')}`,
    `الخدمة المطلوبة: ${form.get('service')}`,
    `موقع العمل: ${form.get('location')}`,
    `تفاصيل الطلب: ${form.get('details')}`
  ].join('\n');
  const status = document.querySelector('#form-status');
  status.textContent = 'تم تجهيز الرسالة. راجع البيانات ثم أرسلها في واتساب.';
  window.open(`https://wa.me/25377534826?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
});
