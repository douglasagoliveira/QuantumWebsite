// Aplica overrides de semantic/component/dark tokens fiéis ao site oficial Quantum
const fs = require('fs');
const p = 'assets/design-tokens.json';
const t = JSON.parse(fs.readFileSync(p, 'utf8'));
const c = (v) => ({ $value: v, $type: 'color' });
const d = (v) => ({ $value: v, $type: 'dimension' });

Object.assign(t.semantic.color, {
  background: c('{primitive.color.white}'),
  foreground: c('#46536B'),
  muted: c('#F4F9F8'),
  'muted-foreground': c('#46536B'),
  border: c('#E7EFFC'),
  ring: c('#00B3A7'),
});

Object.assign(t.component.button, {
  bg: c('{semantic.color.accent}'),
  fg: c('{primitive.color.white}'),
  'hover-bg': c('{semantic.color.accent-hover}'),
  radius: d('{primitive.radius.full}'),
});
t.component.card.radius = d('15px');

t.dark.semantic.color = {
  background: c('#0D3E69'),
  foreground: c('#FFFFFF'),
  secondary: c('#2C426A'),
  muted: c('#2C426A'),
  'muted-foreground': c('#E7EFFC'),
  border: c('#2C426A'),
};

fs.writeFileSync(p, JSON.stringify(t, null, 2));
console.log('overrides applied to ' + p);
