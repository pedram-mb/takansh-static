export function createChartCard({ title, type, data, options }) {
    const wrapper = document.createElement('div');
    wrapper.className = 'chart';
  
    const canvas = document.createElement('canvas');
    const chartId = 'chart-' + Math.random().toString(36).substr(2, 9);
    canvas.id = chartId;
  
    wrapper.innerHTML = `
      <div class="chart-body">
        <div class="chart-title">${title}</div>
      </div>
    `;
    wrapper.querySelector('.chart-body').appendChild(canvas);
  
    setTimeout(() => {
      const ctx = document.getElementById(chartId).getContext('2d');
      new Chart(ctx, {
        type,
        data,
        options
      });
    }, 0);
  
    return wrapper;
  }