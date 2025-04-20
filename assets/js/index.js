import { notifications } from "./data/notifications.js";
import { createNotification } from "./components/notifications.js";
import {cards} from "./data/card.js";
import { createCard } from "./components/card.js";
import { createChartCard } from "./components/chartCard.js";
const openBtn = document.getElementById('openNotifications');
const closeBtn = document.getElementById('closePanel');
const panel = document.getElementById('notificationsPanel');
const list = document.querySelector('.notifications-list');
const container = document.querySelector("#cardsContainer");
const chart1 = document.getElementById('chart1');
const chart2 = document.getElementById('chart2');


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

//جدول
const pieChart = createChartCard({
  title: 'تقسیم‌بندی کاربران',
  type: 'pie',
  data: {
    labels: ['کاربر فعال', 'کاربر غیرفعال'],
    datasets: [{
      data: [60, 40],
      backgroundColor: ['#36A2EB', '#FF6384'],
    }]
  },
  options: {
    responsive: true
  }
});
const barChart = createChartCard({
  title: 'آمار فروش',
  type: 'bar',
  data: {
    labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر'],
    datasets: [{
      label: 'فروش (میلیون تومان)',
      data: [12, 19, 3, 5],
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    }
  }
});

chart1.appendChild(barChart);
chart2.appendChild(pieChart);