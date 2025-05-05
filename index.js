document.addEventListener('DOMContentLoaded', function () {
  const createBlock = document.querySelector('.create');

  function handleScroll() {
    const rect = createBlock.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

    if (isVisible) {
      createBlock.classList.add('animate-on-scroll');
      window.removeEventListener('scroll', handleScroll);
    }
  }

  // Запускаем проверку при загрузке и скролле
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Проверяем сразу при загрузке
});

const navList = document.getElementById('navList');

navList.addEventListener('click', function () {
  this.classList.toggle('nav__listOpen');

  // Для анимации закрытия в обратном порядке
  if (!this.classList.contains('nav__listOpen')) {
    const contacts = this.querySelectorAll('.nav__list-contacts');
    contacts.forEach((contact, index) => {
      contact.style.transitionDelay = `${(contacts.length - 1 - index) * 0.1}s`;
    });
  } else {
    // Сбрасываем задержки при открытии
    const contacts = this.querySelectorAll('.nav__list-contacts');
    contacts.forEach((contact, index) => {
      contact.style.transitionDelay = `${index * 0.1}s`;
    });
  }
});
