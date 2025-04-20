import { notifications } from "./data/notifications.js";
import { createNotification } from "./components/notifications.js";
import {cards} from "./data/card.js";
import { createCard } from "./components/card.js";
const openBtn = document.getElementById('openNotifications');
const closeBtn = document.getElementById('closePanel');
const panel = document.getElementById('notificationsPanel');
const list = document.querySelector('.notifications-list');
const container = document.querySelector("#cardsContainer");

document.getElementById("toggleSidebar").addEventListener("click", function () {
    document.getElementById("sidebar").classList.toggle("collapsed");
  });
  
  const submenuToggles = document.querySelectorAll(".menu-item.has-submenu .menu-header");
  submenuToggles.forEach(toggle => {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      const parent = this.parentElement;
      parent.classList.toggle("open");
    });
  });

openBtn.addEventListener('click', () => {
  panel.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  panel.classList.remove('active');
});

notifications.forEach(item => {
    const notification = createNotification(item);
    list.appendChild(notification);
});

cards.forEach(cardData => {
    const card = createCard(cardData);
    container.appendChild(card);
});