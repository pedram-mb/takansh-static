import { categories, questions } from '../../js/data/cardsForum.js';

let currentCategory = 1;

export function renderCategories(container) {
  container.innerHTML = '';
  categories.forEach(cat => {
    const btn = document.createElement('button');
    // btn.innerHTML = `
    //   <div class="cards  class="flex items-center justify-between gap-4 p-4 rounded-xl shadow-sm transition cursor-pointer bg-white hover:bg-gray-50">
    //     <div class="flex flex-col text-right cards-content">
    //       <p class="cards-caption text-xs text-gray-400">${cat.caption}</p>
    //       <span class="text-sm font-bold text-gray-700 ${cat.id === currentCategory ? 'text-orange-600 font-bold' : 'text-gray-600'}">${cat.title}</span>
    //       </div>
    //       <div class="flex flex-col items-center gap-1 justify-end text-sm">
    //       </div>
    //       <div id="cards-icon" class="w-12 h-12 flex items-center justify-center rounded-full ${cat.id === currentCategory ? 'bg-orange-200 text-orange-600' : 'bg-gray-100'} text-2xl">
    //       <i id="w-12 h-12 flex items-center justify-center rounded-full bg-orange-100 text-orange-500 text-2xl shrink-0" class="material-icons">${cat.icon}</i>
    //       </div>
    //     </div>
    // `;
    btn.className = 'flex-1 py-2 transition';
    btn.onclick = () => {
      currentCategory = cat.id;
      renderCategories(container);
      renderQuestions(document.getElementById('questions'));
    };
    container.appendChild(btn);
  });
}

export function renderQuestions(container) {
  container.innerHTML = '';
  const list = questions[currentCategory] || [];

  list.forEach(q => {
    const card = document.createElement('div');
    card.className="ca-pragh"
    const title = document.createElement('div');
    title.textContent = q.title;
    title.className = "ca-pragh"
    const text = document.createElement('div');
    text.textContent = q.short;
    text.className = "ca-paragh"
    const toggleBtn = document.createElement('button');
    toggleBtn.className = "tog-card-btn"
    toggleBtn.textContent = '+';
    toggleBtn.onclick = () => {
      const isShort = text.textContent === q.short;
      text.textContent = isShort ? q.full : q.short;
      toggleBtn.textContent = isShort ? '−' : '+';
    };

    card.appendChild(title);
    card.appendChild(text);
    card.appendChild(toggleBtn);
    container.appendChild(card);
  });
}
