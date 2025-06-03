export const toast = {
    success: (msg) => {
      const el = document.createElement('div');
      el.style = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 12px;
        border-radius: 4px;
        z-index: 9999;
      `;
      el.textContent = msg;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 3000);
    }
  };