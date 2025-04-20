export function createNotification({ title, message }) {
    const li = document.createElement('li');
    li.className = `notification`;
    li.innerHTML = `
      <span>${title}</span>
      <p>${message}</p>
    `;
    return li;
  }
  