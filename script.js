const panel = document.querySelector('#search-panel');
const trigger = document.querySelector('.search-trigger');
const closeButton = document.querySelector('.search-close');
const input = document.querySelector('#work-search');
const cards = [...document.querySelectorAll('.work-card')];
const noResults = document.querySelector('#no-results');

function updateSearch() {
  const query = input.value.trim().toLocaleLowerCase('zh-CN');
  let count = 0;
  for (const card of cards) {
    const matches = card.dataset.title.toLocaleLowerCase('zh-CN').includes(query);
    card.hidden = !matches;
    if (matches) count++;
  }
  noResults.hidden = count !== 0;
}

function openSearch() {
  panel.hidden = false;
  trigger.setAttribute('aria-expanded', 'true');
  document.body.classList.add('search-open');
  input.focus();
}

function closeSearch() {
  panel.hidden = true;
  trigger.setAttribute('aria-expanded', 'false');
  document.body.classList.remove('search-open');
  trigger.focus();
  if (input.value) {
    document.querySelector('#work').scrollIntoView({ behavior: 'smooth' });
  }
}

trigger.addEventListener('click', openSearch);
closeButton.addEventListener('click', closeSearch);
input.addEventListener('input', updateSearch);
panel.addEventListener('click', (event) => {
  if (event.target === panel) closeSearch();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !panel.hidden) closeSearch();
});

