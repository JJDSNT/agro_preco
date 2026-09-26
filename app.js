const data = {
  bahia: {
    name: 'Oeste da Bahia', state: 'BA',
    products: {
      soja: { price: 128.40, unit: 'por saca de 60 kg', series: [122.5, 124.1, 121.8, 126.2, 125.6, 128.4] },
      milho: { price: 61.80, unit: 'por saca de 60 kg', series: [58.9, 60.2, 59.5, 60.1, 62.4, 61.8] },
      algodao: { price: 174.20, unit: 'por arroba de 15 kg', series: [169.3, 171.5, 170.2, 173.8, 172.7, 174.2] }
    }
  },
  sorriso: {
    name: 'Sorriso', state: 'MT',
    products: {
      soja: { price: 119.70, unit: 'por saca de 60 kg', series: [116.4, 115.9, 118.2, 117.3, 120.5, 119.7] },
      milho: { price: 54.30, unit: 'por saca de 60 kg', series: [51.8, 52.5, 53.9, 52.8, 54.9, 54.3] },
      algodao: { price: 168.50, unit: 'por arroba de 15 kg', series: [164.2, 163.5, 166.7, 165.8, 167.4, 168.5] }
    }
  },
  rioverde: {
    name: 'Rio Verde', state: 'GO',
    products: {
      soja: { price: 125.10, unit: 'por saca de 60 kg', series: [121.6, 123.4, 122.9, 124.5, 123.8, 125.1] },
      milho: { price: 59.60, unit: 'por saca de 60 kg', series: [56.7, 57.2, 58.8, 58.1, 60.3, 59.6] },
      algodao: { price: 171.90, unit: 'por arroba de 15 kg', series: [167.8, 168.4, 170.5, 169.1, 171.2, 171.9] }
    }
  }
};

let selectedPolo = 'bahia';
let selectedProduct = 'soja';
const currency = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
const productNames = { soja: 'soja', milho: 'milho', algodao: 'algodão' };

function renderChart(series, unit, polo) {
  const min = Math.min(...series) - 1.8;
  const max = Math.max(...series) + 1.8;
  const points = series.map((value, index) => ({ x: 10 + index * 100, y: 130 - ((value - min) / (max - min)) * 105 }));
  const line = points.map((point, index) => `${index ? 'L' : 'M'} ${point.x} ${point.y}`).join(' ');
  document.getElementById('chart-line').setAttribute('d', line);
  document.getElementById('chart-area').setAttribute('d', `${line} L 510 150 L 10 150 Z`);
  document.getElementById('chart-last-dot').setAttribute('cx', points.at(-1).x);
  document.getElementById('chart-last-dot').setAttribute('cy', points.at(-1).y);
  document.querySelector('.chart').setAttribute('aria-label', `Evolução fictícia de ${productNames[selectedProduct]} em ${polo}: de ${currency.format(series[0])} a ${currency.format(series.at(-1))} ${unit}, de março a agosto de 2025.`);
}

function render() {
  const polo = data[selectedPolo];
  const item = polo.products[selectedProduct];
  const change = ((item.price / item.series[0] - 1) * 100).toFixed(1).replace('.', ',');
  document.getElementById('polo-heading').innerHTML = `${polo.name} <span>· ${polo.state}</span>`;
  document.getElementById('price-value').textContent = currency.format(item.price);
  document.getElementById('price-unit').textContent = item.unit;
  document.getElementById('price-date').textContent = 'Data simulada: 12 de agosto de 2025';
  document.getElementById('chart-change').textContent = `${Number.parseFloat(change.replace(',', '.')) >= 0 ? '+' : ''}${change}% no período`;
  document.querySelectorAll('[data-polo]').forEach(button => {
    const active = button.dataset.polo === selectedPolo;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  document.querySelectorAll('[data-product]').forEach(button => {
    const active = button.dataset.product === selectedProduct;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  renderChart(item.series, item.unit, polo.name);
}

document.querySelectorAll('[data-polo]').forEach(button => button.addEventListener('click', () => { selectedPolo = button.dataset.polo; render(); }));
document.querySelectorAll('[data-product]').forEach(button => button.addEventListener('click', () => { selectedProduct = button.dataset.product; render(); }));
render();
