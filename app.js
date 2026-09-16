const root = document.documentElement;
document.querySelectorAll('.palette-controls button').forEach(button => {
  button.addEventListener('click', () => {
    root.dataset.palette = button.dataset.palette;
    document.querySelectorAll('.palette-controls button').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    document.querySelector('meta[name="theme-color"]').content = getComputedStyle(root).getPropertyValue('--brand').trim();
  });
});
const sailStates = [
  ['translate(0px, 0px) scaleY(1)', 'Sails tucked in. A protective outer layer while you’re away.'],
  ['translate(0px, -27px) scaleY(.48)', 'Welcome home. Light comes in; the sails begin to open.'],
  ['translate(0px, -65px) scaleY(.18)', 'Sails extended. Shade for slow afternoons.']
];
function setSails(index) {
  document.querySelectorAll('.sail-panel').forEach(p => p.style.transform = sailStates[index][0]);
  document.querySelector('#sail-caption').textContent = sailStates[index][1];
  document.querySelectorAll('[data-sail]').forEach(b => b.setAttribute('aria-pressed', String(+b.dataset.sail === index)));
  window.dispatchEvent(new CustomEvent('sailchange', {detail:index}));
}
document.querySelectorAll('[data-sail]').forEach(b => b.addEventListener('click', () => setSails(+b.dataset.sail)));
setSails(2);
document.querySelectorAll('[data-module]').forEach(button => button.addEventListener('click', () => {
  const enabled = button.dataset.module !== 'none';
  document.querySelector('#growth-stage').classList.toggle('has-module', enabled);
  document.querySelector('.extra-module').setAttribute('aria-hidden', String(!enabled));
  document.querySelector('#module-label').textContent = enabled ? button.dataset.module : 'Studio';
  document.querySelectorAll('[data-module]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
}));
import('./house.js').catch(() => {
  document.querySelector('#model-fallback').hidden = false;
  document.querySelector('#model-fallback p').textContent = 'The interactive model could not load. The sections below explain the home’s systems and design principles.';
  document.querySelector('#house-canvas').hidden = true;
  document.querySelectorAll('.model-tools button, .system-tabs button, #assembly').forEach(b => b.disabled = true);
});
