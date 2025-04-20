export function createCard({ title, value, icon ,color}) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="cards-body">
        <div class="cards-title">
          <p>${title}</p>
          <span>${value}</span>
        </div>
        <i class="material-icons cards-icon">${icon}</i>
      </div>
    `;
    return card;
  }